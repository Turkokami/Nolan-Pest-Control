"use client";

import { useState } from "react";
import { existingServices } from "@/data/services";
import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";

/**
 * Quote form — RETAINED from the current site (audit §2.4/§3: best conversion asset).
 * Same field set: name, email, phone, service dropdown (pre-populated), address/city/zip, SMS consent.
 *
 * Wired to POST /api/quote, which delivers to business.leadInbox.
 *
 * This previously called preventDefault() and showed the thank-you state unconditionally, sending
 * the lead nowhere. The rule that replaces it: success is shown ONLY on a 2xx from the API. Any
 * failure — network, validation, or an unconfigured mailer — shows an error with the phone number,
 * and leaves the entered values in place so nobody has to retype anything.
 */

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      address: String(data.get("address") ?? ""),
      city: String(data.get("city") ?? ""),
      zip: String(data.get("zip") ?? ""),
      smsConsent: consent,
      company: String(data.get("company") ?? ""), // honeypot
    };

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong sending your request.");
        setStatus("error");
        return;
      }

      form.reset();
      setConsent(false);
      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please check your connection or call us.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center" role="status">
        <p className="text-lg font-bold text-brand-800">Thanks — we&apos;ll be in touch soon.</p>
        <p className="mt-2 text-sm text-brand-900/70">
          Need help now? Call us at{" "}
          <a href={formatPhoneHref()} className="font-semibold text-brand-700 underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3" id="quote-form" noValidate={false}>
      <p className="text-lg font-bold text-brand-800">Request a Free Estimate</p>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800"
        >
          <p className="font-semibold">{error}</p>
          <p className="mt-1">
            Please call{" "}
            <a href={formatPhoneHref()} className="font-bold underline">
              {business.phone}
            </a>{" "}
            — your details are still here if you want to try again.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Field name="firstName" label="First name" autoComplete="given-name" required />
        <Field name="lastName" label="Last name" autoComplete="family-name" required />
      </div>
      <Field name="email" label="Email" type="email" autoComplete="email" required />
      <Field name="phone" label="Phone" type="tel" autoComplete="tel" required />
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-brand-800">Service needed</span>
        <select
          name="service"
          required
          defaultValue=""
          className="rounded-lg border border-brand-200 px-3 py-2 text-brand-900"
        >
          <option value="" disabled>Choose a service…</option>
          {existingServices.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="other">Other / not sure</option>
        </select>
      </label>
      {!compact && <Field name="address" label="Address" autoComplete="street-address" />}
      <div className="grid grid-cols-2 gap-3">
        <Field name="city" label="City" autoComplete="address-level2" />
        <Field name="zip" label="Zip" autoComplete="postal-code" inputMode="numeric" />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. Not display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-2 text-xs text-brand-900/70">
        <input
          type="checkbox"
          name="smsConsent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          I agree to receive SMS text messages from {business.name} about my request. Message and
          data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 rounded-lg bg-gradient-to-b from-gold-300 to-gold-600 px-5 py-3 text-sm font-extrabold text-ink-900 transition hover:from-gold-400 hover:to-gold-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get My Free Estimate"}
      </button>
      <p className="text-center text-xs text-brand-900/60">
        Prefer to talk? Call{" "}
        <a href={formatPhoneHref()} className="font-semibold underline">{business.phone}</a>
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  ...rest
}: {
  name: string;
  label: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-brand-800">{label}</span>
      <input
        name={name}
        type={type}
        className="rounded-lg border border-brand-200 px-3 py-2 text-brand-900 focus:border-brand-500 focus:outline-none"
        {...rest}
      />
    </label>
  );
}
