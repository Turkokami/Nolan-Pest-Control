import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { verticals, getVertical } from "@/data/verticals";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  pageGraph,
  serviceGraph,
  faqGraph,
  speakableGraph,
} from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) return {};
  return pageMetadata({
    title: v.metaTitle,
    description: v.metaDescription,
    path: `/commercial/${v.slug}`,
  });
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const v = getVertical(vertical);
  if (!v) notFound();

  const path = `/commercial/${v.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Commercial", path: "/commercial" },
    { name: v.shortName, path },
  ];

  const faq = faqGraph(v.faqs);
  const others = verticals.filter((o) => o.slug !== v.slug);

  return (
    <>
      <JsonLd data={pageGraph({ path, name: v.name, description: v.answerLead, breadcrumbs: crumbs })} />
      <JsonLd data={serviceGraph({ path, name: v.name, description: v.answerLead })} />
      {faq && <JsonLd data={faq} />}
      <JsonLd
        data={speakableGraph({
          path,
          cssSelectors: ["[data-speakable]", ".faq-speakable"],
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold-600">
            Commercial Pest Control
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-brand-900">{v.name}</h1>

          {/* AEO / speakable direct answer */}
          <div
            data-speakable
            className="mt-6 rounded-2xl border-l-4 border-gold-500 bg-brand-50 p-5"
          >
            <p className="text-lg text-brand-900/85">{v.answerLead}</p>
          </div>

          <div className="mt-8 space-y-4">
            {v.intro.map((para, i) => (
              <p key={i} className="text-brand-900/80">{para}</p>
            ))}
          </div>

          {/* Why it matters */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-brand-900">{v.whyItMatters.title}</h2>
            <div className="mt-3 space-y-4">
              {v.whyItMatters.body.map((para, i) => (
                <p key={i} className="text-brand-900/80">{para}</p>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-brand-900">{v.compliance.title}</h2>
            <div className="mt-3 space-y-4">
              {v.compliance.body.map((para, i) => (
                <p key={i} className="text-brand-900/80">{para}</p>
              ))}
            </div>
          </div>

          {/* Our approach */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-brand-900">How we handle it</h2>
            <ul className="mt-4 space-y-3">
              {v.ourApproach.map((item, i) => (
                <li key={i} className="flex gap-3 text-brand-900/80">
                  <span aria-hidden className="mt-1 text-gold-600">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's covered + pests, two-up */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h2 className="text-lg font-bold text-brand-900">What&apos;s covered</h2>
              <ul className="mt-3 space-y-2 text-sm text-brand-900/80">
                {v.whatsCovered.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-gold-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <h2 className="text-lg font-bold text-brand-900">Pests we target here</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {v.pests.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium capitalize text-brand-700 ring-1 ring-inset ring-brand-100"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-brand-900">Pricing</h2>
            <div className="mt-3 space-y-4">
              {v.pricingModel.map((para, i) => (
                <p key={i} className="text-brand-900/80">{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </article>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <div className="mx-auto max-w-prose faq-speakable">
          <h2 className="text-2xl font-bold text-brand-900">
            {v.shortName} pest control — frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={v.faqs} />
          </div>
        </div>
      </Section>

      {/* Cross-links + trust */}
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <ExpertBlock />
          <div className="rounded-2xl bg-brand-800 p-8 text-brand-50">
            <p className="text-xl font-bold">Let&apos;s protect your {v.shortName.toLowerCase()}.</p>
            <p className="mt-2 text-brand-100/80">
              Tell us about your property and we&apos;ll put together a service plan and honest
              pricing — no long-term traps, no surprise fees.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Request a Quote</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Other commercial sectors we serve
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/commercial/${o.slug}`}
                  className="font-semibold text-brand-800 hover:text-brand-600 hover:underline"
                >
                  {o.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
