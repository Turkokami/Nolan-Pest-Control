import type { Metadata } from "next";
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
  title: "Careers",
  description:
    `Join ${business.name}, a growing family-owned pest control company serving Ithaca and Central New York. We train the right people. Call ${business.phone} or reach out to apply.`,
  path: "/careers",
});

/**
 * Careers page (audit Phase 5). No fabricated job listings — an evergreen "always looking for good
 * people" page that invites applications. Owner can add specific openings later.
 */
export default function CareersPage() {
  const path = "/careers";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path },
  ];

  const answerLead =
    `${business.name} is a growing, family-owned pest control company serving Ithaca and Central New York, and we're always glad to hear from dependable people who take pride in doing a job right. We value honesty, reliability, and treating customers' homes the way we'd treat our own — and we'll train the right person, including toward New York pesticide applicator certification.`;

  const whatWeValue = [
    { h: "Reliability", b: "Showing up when we say we will and following through. Our customers trust us because we keep our word — and that starts with our team." },
    { h: "Honesty", b: "We don't upsell people on things they don't need. We tell customers the truth, and we expect the same integrity on the job and with each other." },
    { h: "Care for the work", b: "Pest control done well protects people's homes, health, and peace of mind. We take that seriously and want people who do too." },
    { h: "Willingness to learn", b: "You don't have to arrive an expert. If you're dependable and willing to learn, we'll train you — including toward NYSDEC applicator certification." },
  ];

  const faqs = [
    { q: "Are you hiring right now?", a: `We're a growing family business and we're always interested in meeting reliable, hard-working people, even between formal openings. Reach out — call ${business.phone} or contact us — and tell us about yourself.` },
    { q: "Do I need pest control experience?", a: "Experience is welcome but not required for every role. We'll train the right person who's dependable, willing to learn, and good with customers — including toward New York pesticide applicator certification." },
    { q: "Do I need a certification or license?", a: "Applying pesticides commercially in New York requires certification (or working as a trained technician under a certified applicator). If you're not certified yet, we can help you work toward it." },
    { q: "What kind of person does well here?", a: "Someone honest, reliable, and genuinely willing to help people — who takes pride in solving a problem the right way and treating a customer's home with respect." },
    { q: "How do I apply?", a: `The easiest way is to call ${business.phone} or use our contact page to introduce yourself. Tell us a bit about your background and what you're looking for, and we'll take it from there.` },
  ];

  const faq = faqGraph(faqs);

  return (
    <>
      <JsonLd data={pageGraph({ path, name: "Careers", description: answerLead, breadcrumbs: crumbs })} />
      {faq && <JsonLd data={faq} />}
      <JsonLd data={speakableGraph({ path, cssSelectors: ["[data-speakable]", ".faq-speakable"] })} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Careers at {business.name}</h1>

          <div data-speakable className="mt-6 rounded-2xl border-l-4 border-gold-500 bg-brand-50 p-5">
            <p className="text-lg text-brand-900/85">{answerLead}</p>
          </div>

          <p className="mt-6 text-brand-900/80">
            We&apos;re not a franchise or a call center — we&apos;re a local family that shows up,
            does honest work, and stands behind it. When we bring someone onto the team, we&apos;re
            looking for people who share that standard. If that sounds like you, we&apos;d like to
            hear from you, even if we don&apos;t have a formal opening posted today.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-900">What we look for</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {whatWeValue.map((v) => (
              <div key={v.h} className="rounded-2xl border border-brand-100 bg-white p-5">
                <h3 className="font-semibold text-brand-800">{v.h}</h3>
                <p className="mt-2 text-sm text-brand-900/75">{v.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-brand-800 p-8 text-brand-50">
            <p className="text-xl font-bold">Interested? Introduce yourself.</p>
            <p className="mt-2 text-brand-100/80">
              Call us or reach out through our contact page and tell us about yourself. We read
              every message.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Contact Us</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose faq-speakable">
          <h2 className="text-2xl font-bold text-brand-900">Careers — frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </Section>
    </>
  );
}
