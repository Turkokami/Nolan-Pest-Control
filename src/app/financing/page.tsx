import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph, speakableGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Payment & Financing Options",
  description:
    `Flexible payment options for pest control in Central New York — so cost doesn't stop you from protecting your home. Talk options with ${business.name}. Call ${business.phone}.`,
  path: "/financing",
});

/**
 * Financing/payment page (audit Phase 5). Kept honest: describes flexibility and how to spread
 * larger jobs; does not name a specific lender until one is set up. Owner can add a partner later.
 */
export default function FinancingPage() {
  const path = "/financing";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Payment & Financing", path },
  ];

  const answerLead =
    "We keep pricing honest and flexible so cost doesn't stand between you and a pest-free home. We accept standard payment methods, structure recurring plans into smaller scheduled payments instead of one large bill, and for bigger exclusion, wildlife, or whole-home jobs we'll work with you on a plan that fits your budget. Call us and we'll talk through the options.";

  const options = [
    { h: "Spread across a plan", b: "A recurring quarterly plan turns year-round protection into smaller, predictable payments rather than one large upfront cost — and it prevents problems instead of just reacting to them." },
    { h: "Staged larger jobs", b: "For extensive exclusion, wildlife, or whole-home work, we can often phase the work and the payments so you can protect the most urgent areas first without waiting until the whole job is affordable at once." },
    { h: "Straightforward payment methods", b: "We accept common payment methods and give you a clear, itemized total before we begin — no hidden fees, no surprise charges after the fact." },
    { h: "Honest prioritization", b: "If budget is tight, we'll tell you which treatments actually matter most for your situation and which can wait, so your money goes to what protects your home and family first." },
  ];

  const faqs = [
    { q: "Do you offer financing for large jobs?", a: "For larger exclusion, wildlife, and whole-home jobs we'll work with you on a payment approach that fits — including phasing the work and payments. Call us and we'll find something that makes sense for your budget." },
    { q: "Can I pay for protection monthly or quarterly instead of all at once?", a: "Yes — recurring plans are built to spread the cost of year-round protection into smaller scheduled payments rather than a single large bill." },
    { q: "What payment methods do you accept?", a: "We accept standard payment methods and provide a clear, itemized total before any work begins. If you have a specific need, just ask." },
    { q: "Will you help me prioritize if I can't do everything now?", a: "Absolutely. We'll tell you honestly what matters most for your specific pest problem and property, so you can address the urgent risks first and plan the rest." },
  ];

  const faq = faqGraph(faqs);

  return (
    <>
      <JsonLd data={pageGraph({ path, name: "Payment & Financing", description: answerLead, breadcrumbs: crumbs })} />
      {faq && <JsonLd data={faq} />}
      <JsonLd data={speakableGraph({ path, cssSelectors: ["[data-speakable]", ".faq-speakable"] })} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Payment &amp; Financing Options</h1>

          <div data-speakable className="mt-6 rounded-2xl border-l-4 border-gold-500 bg-brand-50 p-5">
            <p className="text-lg text-brand-900/85">{answerLead}</p>
          </div>

          <p className="mt-6 text-brand-900/80">
            A pest problem is stressful enough without worrying that fixing it will break the bank.
            As a local, family-owned business, we understand that — and we&apos;d rather help you
            protect your home than have cost be the reason a real problem goes untreated and gets
            worse.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {options.map((o) => (
              <div key={o.h} className="rounded-2xl border border-brand-100 bg-white p-5">
                <h2 className="font-semibold text-brand-800">{o.h}</h2>
                <p className="mt-2 text-sm text-brand-900/75">{o.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-brand-800 p-8 text-brand-50">
            <p className="text-xl font-bold">Let&apos;s find a plan that works.</p>
            <p className="mt-2 text-brand-100/80">
              Tell us about your situation and your budget, and we&apos;ll put together honest
              pricing and payment options — no pressure. See our{" "}
              <Link href="/pest-control-cost-ithaca-ny" className="font-semibold text-gold-300 underline">cost guide</Link>{" "}
              for how pricing works.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/#quote">Get a Free Estimate</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose faq-speakable">
          <h2 className="text-2xl font-bold text-brand-900">Payment &amp; financing — frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </Section>
    </>
  );
}
