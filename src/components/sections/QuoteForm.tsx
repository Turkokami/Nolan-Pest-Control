"use client";

import { useState } from "react";
import { existingServices } from "@/data/services";
import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";

/**
 * Quote form — RETAINED from the current site (audit §2.4/§3: best conversion asset).
 * Same field set: name, email, phone, service dropdown (pre-populated), address/city/zip, SMS consent.
 * Phase 0 posts to a placeholder handler and shows the success state with a call fallback.
 * Phase 1: wire `action` to Resend/Formspree/CRM webhook (see .env.example).
 */
export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(Phase 1): POST to QUOTE_FORM_WEBHOOK_URL. For now, optimistic success state.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center">
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
    <form onSubmit={handleSubmit} className="grid gap-3" id="quote-form">
      <p className="text-lg font-bold text-brand-800">Request a Free Estimate</p>
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
        className="mt-1 rounded-lg bg-gradient-to-b from-gold-300 to-gold-600 px-5 py-3 text-sm font-extrabold text-ink-900 transition hover:from-gold-400 hover:to-gold-700"
      >
        Get My Free Estimate
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
