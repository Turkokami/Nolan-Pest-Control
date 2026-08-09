import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { faqGroups, allFaqs } from "@/data/faq-hub";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph, speakableGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: `Answers about pricing, safety, guarantees, service areas, and common Central New York pests from ${business.name}. Call ${business.phone} for a free estimate.`,
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];
  const faq = faqGraph(allFaqs);

  return (
    <>
      <JsonLd data={pageGraph({ path: "/faq", name: "Frequently Asked Questions", description: `Common questions answered by ${business.name}.`, breadcrumbs: crumbs })} />
      {faq && <JsonLd data={faq} />}
      <JsonLd data={speakableGraph({ path: "/faq", cssSelectors: ["[data-speakable]", ".faq-speakable"] })} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Frequently Asked Questions</h1>
          <p data-speakable className="mt-4 text-lg text-brand-900/85">
            Straight answers about how we work — pricing, safety, our guarantee, the areas we serve,
            and the pests we see most across Central New York. Don&apos;t see your question? Call{" "}
            <a href={formatPhoneHref()} className="font-semibold text-brand-600 underline">{business.phone}</a>{" "}
            and ask a real person.
          </p>

          {/* Jump nav */}
          <nav aria-label="FAQ topics" className="mt-6 flex flex-wrap gap-2">
            {faqGroups.map((g) => (
              <a
                key={g.title}
                href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100 hover:ring-brand-300"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose space-y-10">
          {faqGroups.map((g) => (
            <div
              key={g.title}
              className="faq-speakable scroll-mt-24"
              id={g.title.toLowerCase().replace(/[^a-z]+/g, "-")}
            >
              <h2 className="text-2xl font-bold text-brand-900">{g.title}</h2>
              <p className="mt-2 text-brand-900/70">{g.intro}</p>
              <div className="mt-4">
                <FaqAccordion faqs={g.faqs} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose rounded-2xl bg-brand-800 p-8 text-brand-50">
          <p className="text-xl font-bold">Still have a question?</p>
          <p className="mt-2 text-brand-100/80">
            We&apos;re happy to talk it through — no pressure, no call center. You can also explore our{" "}
            <Link href="/guides" className="font-semibold text-gold-300 underline">pest guides</Link>{" "}
            and{" "}
            <Link href="/pest-library" className="font-semibold text-gold-300 underline">pest library</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
