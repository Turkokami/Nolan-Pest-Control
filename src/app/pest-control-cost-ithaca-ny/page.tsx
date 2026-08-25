import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph, speakableGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "How Much Does Pest Control Cost in Ithaca, NY?",
  description:
    `What pest control costs in Ithaca and Central New York — the factors that set the price, one-time vs. recurring plans, and how to get honest pricing. Free estimates from ${business.name}. Call ${business.phone}.`,
  path: "/pest-control-cost-ithaca-ny",
});

/**
 * Cost/pricing money page (audit Phase 5). Ranges here are GENERAL guidance for the region, framed
 * as typical and clearly not a quote — replace/confirm with the owner's real price bands when
 * available. No fabricated precision; every path leads to a free estimate.
 */
export default function CostPage() {
  const path = "/pest-control-cost-ithaca-ny";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pest Control Cost in Ithaca", path },
  ];

  const answerLead =
    "Most residential pest control in the Ithaca area is priced either as a one-time treatment or as an ongoing plan. One-time treatments for a specific pest commonly run in the low-to-mid hundreds of dollars, while recurring quarterly plans spread protection across the year at a lower per-visit cost. Bigger jobs — bed bugs, wildlife removal, and exclusion/sealing — are quoted individually because they depend on the size of the problem. The only way to know your exact price is a free estimate.";

  const drivers = [
    { h: "The pest", b: "A wasp nest, a mouse problem, and a bed bug infestation are three very different jobs. Some pests are resolved in a single visit; others (German cockroaches, bed bugs) require a planned series of treatments, which affects total cost." },
    { h: "Property size & construction", b: "Square footage, number of floors, foundation type, and how many entry points a home has all change the labor and materials involved. Older Ithaca-area homes with fieldstone foundations and many gaps take more work to seal than newer builds." },
    { h: "How established the problem is", b: "A new sighting caught early is cheaper to resolve than a colony that's been building for months. Waiting almost always costs more, because populations grow and spread to new areas." },
    { h: "One-time vs. recurring", b: "A single treatment has a higher per-visit price; a recurring plan costs less per visit and prevents seasonal invaders from coming back. For most households wanting year-round peace of mind, recurring is the better value." },
    { h: "Exclusion & repairs", b: "Sealing the gaps mice, bats, and squirrels use — and repairing chew or entry damage — adds materials and skilled labor, but it's what turns a temporary fix into a permanent one." },
    { h: "Access & severity", b: "Hard-to-reach nests, attic and crawlspace work, and severe infestations that need extra visits or specialized equipment all factor in. We tell you what's involved before we start." },
  ];

  const structures = [
    { h: "One-time treatment", b: "Best for a specific, contained problem — a single wasp nest, a seasonal ant flare-up, a spider issue before an event. You pay once for the visit and the covered re-treatment window." },
    { h: "Recurring quarterly plan", b: "Our most popular option for homeowners. Scheduled visits through the year keep ants, wasps, mice, spiders, and overwintering pests from establishing — at a lower cost per visit, with your guarantee active the whole time." },
    { h: "Specialized job pricing", b: "Bed bug programs, wildlife removal, and rodent exclusion are quoted per job after a quick assessment, because the price honestly depends on the size and layout of the problem." },
    { h: "Commercial & rental pricing", b: "Businesses and rental owners are priced by property, unit count, and the compliance framework involved, usually on a recurring or per-building basis. See our commercial pages." },
  ];

  const faqs = [
    { q: "How much does pest control cost in Ithaca?", a: answerLead },
    { q: "Is it cheaper to sign up for a plan or pay per visit?", a: "A recurring plan almost always costs less per visit than repeated one-off calls, and it prevents problems rather than just reacting to them. If you only have one specific, contained issue, a one-time treatment can be the right call. We'll tell you honestly which fits." },
    { q: "Why can't you give me an exact price over the phone?", a: "For many common pests we actually can quote right on the phone. For wildlife, exclusion, bed bugs, and commercial work, a quick look lets us price the real scope so the number we give you is the number you pay — no lowball-then-upsell." },
    { q: "Do you charge for estimates?", a: "No. Estimates are free, and there's no obligation. We'd rather earn your trust with honest pricing than pressure you into anything." },
    { q: "Does a bigger or older home cost more?", a: "Generally yes — more square footage, more floors, and more entry points mean more labor and materials, and older homes often need more sealing work. We price the home in front of us, not a generic average." },
    { q: "How do you take payment?", a: "Credit card and check. Estimates are free, and we quote the job before we start it, so the number you agree to is the number you pay unless the scope genuinely changes — in which case you hear about it first." },
  ];

  const faq = faqGraph(faqs);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does Pest Control Cost in Ithaca, NY?",
    description: answerLead,
    url: `${siteUrl}${path}`,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={pageGraph({ path, name: "Pest Control Cost in Ithaca, NY", description: answerLead, breadcrumbs: crumbs })} />
      <JsonLd data={articleSchema} />
      {faq && <JsonLd data={faq} />}
      <JsonLd data={speakableGraph({ path, cssSelectors: ["[data-speakable]", ".faq-speakable"] })} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold leading-tight text-brand-900">
            How Much Does Pest Control Cost in Ithaca, NY?
          </h1>

          <div data-speakable className="mt-6 rounded-2xl border-l-4 border-gold-500 bg-brand-50 p-5">
            <p className="text-lg text-brand-900/85">{answerLead}</p>
          </div>

          <p className="mt-6 text-sm text-brand-900/60">
            The figures below are general ranges for our region to help you plan — they are not a
            quote. Your price depends on your specific situation, and estimates are always free.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-900">What affects the price</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {drivers.map((d) => (
              <div key={d.h} className="rounded-2xl border border-brand-100 bg-white p-5">
                <h3 className="font-semibold text-brand-800">{d.h}</h3>
                <p className="mt-2 text-sm text-brand-900/75">{d.b}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-brand-900">How our pricing is structured</h2>
          <div className="mt-4 space-y-4">
            {structures.map((s) => (
              <div key={s.h} className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
                <h3 className="font-semibold text-brand-900">{s.h}</h3>
                <p className="mt-2 text-brand-900/80">{s.b}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-brand-900">Why cheapest isn&apos;t always cheapest</h2>
          <p className="mt-3 text-brand-900/80">
            The lowest bid often means a single spray that knocks pests back for a few weeks without
            addressing where they&apos;re coming from — so the problem returns and you pay again. Real
            value in pest control comes from inspection, exclusion, and a guarantee that brings us
            back if covered pests return. We&apos;d rather solve it once than sell you the same visit
            twice.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-900">Get an honest number</h2>
          <p className="mt-3 text-brand-900/80">
            Tell us what you&apos;re seeing and a bit about your property, and we&apos;ll give you
            clear pricing before any work begins — no hidden fees, no long-term traps. We serve
            Ithaca and all of Tompkins, Schuyler, Chemung, Cortland, and Tioga counties.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose faq-speakable">
          <h2 className="text-2xl font-bold text-brand-900">Pest control cost — frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion faqs={faqs} />
          </div>
          <p className="mt-6 text-sm text-brand-900/70">
            Related:{" "}
            <Link href="/our-guarantee" className="font-semibold text-brand-600 underline">our guarantee</Link>,{" "}
            <Link href="/services" className="font-semibold text-brand-600 underline">all services</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
