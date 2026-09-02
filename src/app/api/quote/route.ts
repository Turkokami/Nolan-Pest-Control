import { NextResponse } from "next/server";
import { business } from "@/data/business";
import { getService } from "@/data/services";

/**
 * POST /api/quote — delivers a quote-form submission to the lead inbox.
 *
 * Replaces the placeholder handler in QuoteForm, which called preventDefault(), showed
 * "Thanks — we'll be in touch soon", and sent the lead precisely nowhere. Every submission since
 * the site went live was discarded while the customer was told it had gone through. The single
 * most important property of this route is therefore that it NEVER reports success it did not
 * achieve: if delivery fails, or if no delivery method is configured at all, it returns an error
 * and the form shows the phone number instead of a thank-you.
 *
 * Delivery, in order of preference:
 *   1. RESEND_API_KEY  — email to business.leadInbox via the Resend HTTP API (no npm dependency;
 *                        plain fetch). Reply-To is set to the customer so a reply reaches them.
 *   2. QUOTE_FORM_WEBHOOK_URL — POSTs the lead as JSON. Useful for a CRM or Zapier/Make hook.
 * If both are set, both run and the request succeeds if either does.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX = { name: 100, email: 200, phone: 40, address: 200, city: 100, zip: 20, service: 100 };

type Lead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  city: string;
  zip: string;
  smsConsent: boolean;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Best-effort flood control. Serverless instances are not shared, so this stops naive repeat
// submissions from one warm instance rather than a distributed flood — worth having, not a
// substitute for a real WAF rule if abuse ever becomes a problem.
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 500) {
    for (const [k, v] of recent) if (v.every((t) => now - t > WINDOW_MS)) recent.delete(k);
  }
  return hits.length > MAX_PER_WINDOW;
}

/** Until the sending domain is verified in Resend, onboarding@resend.dev is the only usable
 *  from-address. Once nolanpestcontrol.com is verified, set QUOTE_FORM_FROM to something like
 *  "Nolan Pest Control Website <leads@nolanpestcontrol.com>" for better deliverability. */
function resendFrom(): string {
  return process.env.QUOTE_FORM_FROM || "Nolan Pest Control Website <onboarding@resend.dev>";
}

async function resendSend(payload: Record<string, unknown>): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not set");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
}

async function sendViaResend(lead: Lead, serviceLabel: string): Promise<void> {
  const from = resendFrom();

  const name = `${lead.firstName} ${lead.lastName}`.trim();
  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Service", serviceLabel],
    ["Address", [lead.address, lead.city, lead.zip].filter(Boolean).join(", ")],
    ["SMS consent", lead.smsConsent ? "Yes" : "No"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v || "—"}`).join("\n");
  const html = `<h2 style="margin:0 0 12px">New estimate request</h2>
<table style="border-collapse:collapse;font:15px/1.5 system-ui,sans-serif">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:4px 14px 4px 0;color:#666;vertical-align:top">${escapeHtml(k)}</td>` +
      `<td style="padding:4px 0"><strong>${escapeHtml(v || "—")}</strong></td></tr>`,
  )
  .join("\n")}
</table>
<p style="font:13px system-ui,sans-serif;color:#666;margin-top:16px">
Sent from the ${escapeHtml(business.name)} website. Reply to this email to answer ${escapeHtml(
    name || "the customer",
  )} directly.</p>`;

  await resendSend({
    from,
    to: [business.leadInbox],
    subject: `New estimate request — ${name || "website"}${serviceLabel ? ` (${serviceLabel})` : ""}`,
    text,
    html,
    reply_to: lead.email || undefined,
  });
}

/**
 * Short new-lead alert to the owner's cell. Requested on the questionnaire.
 *
 * BEST EFFORT BY DESIGN. This runs after delivery and its outcome never affects the HTTP response:
 * if the email or webhook succeeded, the lead is safely captured, and failing the request over an
 * undelivered text would tell the customer their request failed when it did not. Failures are
 * logged for the operator instead.
 *
 * Two transports, so this can work with or without a Twilio account:
 *   TWILIO_ACCOUNT_SID + TWILIO_AUTH_TOKEN + TWILIO_FROM_NUMBER — a real SMS.
 *   ALERT_SMS_EMAIL — the alert emailed to a carrier SMS gateway address (e.g.
 *                     6072696218@vtext.com). Free and needs no second account, but gateways are
 *                     carrier-specific and some carriers have deprecated them. Fine as a stopgap.
 */
function alertText(lead: Lead, serviceLabel: string): string {
  const name = `${lead.firstName} ${lead.lastName}`.trim();
  const where = [lead.city, lead.zip].filter(Boolean).join(" ");
  // ASCII separator on purpose. A middot or en dash is outside GSM-7, which forces the whole
  // message into UCS-2 and cuts the single-segment limit from 160 characters to 70 — billing two
  // segments for a short alert. Plain hyphen keeps it to one.
  const parts = [name || "(no name)", lead.phone, serviceLabel || "(no service)", where]
    .filter(Boolean)
    .join(" - ");
  // Kept short on purpose: one segment where possible, readable at a glance on a lock screen.
  // The full detail is in the email.
  return `New lead: ${parts}`.slice(0, 300);
}

async function sendSmsViaTwilio(bodyText: string): Promise<void> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) throw new Error("Twilio env vars not set");

  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ To: business.alertSms, From: from, Body: bodyText }),
  });
  if (!res.ok) {
    throw new Error(`Twilio responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
}

async function sendSmsViaGateway(bodyText: string): Promise<void> {
  const to = process.env.ALERT_SMS_EMAIL;
  if (!to) throw new Error("ALERT_SMS_EMAIL not set");
  // Carrier gateways strip most formatting; keep it to a bare line of text and no subject.
  await resendSend({ from: resendFrom(), to: [to], subject: "", text: bodyText });
}

async function sendSmsAlert(lead: Lead, serviceLabel: string): Promise<void> {
  const bodyText = alertText(lead, serviceLabel);
  const transports: Promise<void>[] = [];
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM_NUMBER) {
    transports.push(sendSmsViaTwilio(bodyText));
  } else if (process.env.ALERT_SMS_EMAIL) {
    transports.push(sendSmsViaGateway(bodyText));
  }
  if (transports.length === 0) return; // alerts simply not configured — not an error

  const results = await Promise.allSettled(transports);
  for (const r of results) {
    if (r.status === "rejected") console.error("[quote] sms alert failed:", r.reason);
  }
}

async function sendViaWebhook(lead: Lead, serviceLabel: string): Promise<void> {
  const url = process.env.QUOTE_FORM_WEBHOOK_URL;
  if (!url) throw new Error("QUOTE_FORM_WEBHOOK_URL not set");
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, serviceLabel, source: "website", receivedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please call us instead." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field. Answer 200 so bots see success and stop.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const lead: Lead = {
    firstName: clean(body.firstName, MAX.name),
    lastName: clean(body.lastName, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    service: clean(body.service, MAX.service),
    address: clean(body.address, MAX.address),
    city: clean(body.city, MAX.city),
    zip: clean(body.zip, MAX.zip),
    smsConsent: body.smsConsent === true,
  };

  if (!lead.firstName || !lead.lastName) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  }

  const serviceLabel =
    lead.service === "other" ? "Other / not sure" : getService(lead.service)?.name ?? lead.service;

  const attempts: Promise<void>[] = [];
  if (process.env.RESEND_API_KEY) attempts.push(sendViaResend(lead, serviceLabel));
  if (process.env.QUOTE_FORM_WEBHOOK_URL) attempts.push(sendViaWebhook(lead, serviceLabel));

  if (attempts.length === 0) {
    // Nothing configured. Say so loudly rather than pretending — this is the exact failure the
    // route exists to prevent.
    console.error("[quote] No delivery method configured. Set RESEND_API_KEY or QUOTE_FORM_WEBHOOK_URL.");
    return NextResponse.json(
      { ok: false, error: "Our form is temporarily unavailable. Please call us." },
      { status: 503 },
    );
  }

  const results = await Promise.allSettled(attempts);
  const delivered = results.some((r) => r.status === "fulfilled");

  for (const r of results) {
    if (r.status === "rejected") console.error("[quote] delivery failed:", r.reason);
  }

  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: "We could not send your request. Please call us." },
      { status: 502 },
    );
  }

  // The lead is captured at this point. The alert is a convenience on top of that, so it is
  // awaited (serverless will not reliably finish detached work) but never allowed to change the
  // outcome the customer sees.
  await sendSmsAlert(lead, serviceLabel);

  return NextResponse.json({ ok: true });
}
