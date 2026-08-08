import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { existingServices, getService } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { serviceContentPhase2 } from "@/data/service-content-phase2";
import { pestsForService } from "@/data/pests";
import { moneyPagesForService } from "@/data/money-pages";
import { getTown } from "@/data/geo";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { GeoLinkModule } from "@/components/sections/GeoLinkModule";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, serviceGraph, faqGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return existingServices.map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return pageMetadata({
    title: `${s.name} in Ithaca & Central NY`,
    description: `${s.answer} Family owned, guaranteed. Call ${business.phone} for a free estimate.`,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = getService(service);
  if (!s || s.status !== "existing") notFound();

  const content = serviceContent[s.slug] ?? serviceContentPhase2[s.slug];
  const path = `/services/${s.slug}`;

  // Related services: same category first, then fill, capped so the page stays tidy.
  const siblings = [
    ...existingServices.filter((o) => o.slug !== s.slug && o.category === s.category),
    ...existingServices.filter((o) => o.slug !== s.slug && o.category !== s.category),
  ].slice(0, 8);
  const libraryPests = pestsForService(s.slug);
  const townPages = moneyPagesForService(s.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: s.shortName, path },
  ];
  // Prefer the full 8-question set from content; fall back to metadata faqs.
  const faqs = content?.faqs ?? s.faqs;
  const faq = faqGraph(faqs);

  return (
    <>
      <JsonLd data={pageGraph({ path, name: s.name, description: s.answer, breadcrumbs: crumbs })} />
      <JsonLd data={serviceGraph({ path, name: s.name, description: s.answer })} />
      {faq && <JsonLd data={faq} />}

      <Breadcrumbs items={crumbs} />

      {/* AEO direct-answer lead */}
      <Section className="pt-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-brand-900">{s.name}</h1>
            <p className="mt-4 text-lg text-brand-900/80">{s.answer}</p>

            {content?.intro.map((p, i) => (
              <p key={i} className="mt-4 text-brand-900/80">{p}</p>
            ))}

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/#quote">Get a Free Estimate</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>

          {/* Sidebar: pests + expert */}
          <aside className="space-y-4">
            {s.pestsTreated.length > 0 && (
              <div className="rounded-2xl border border-brand-100 bg-white p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                  Pests we treat
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.pestsTreated.map((p) => (
                    <li key={p} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800 ring-1 ring-inset ring-brand-100">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ExpertBlock compact />
          </aside>
        </div>
      </Section>

      {content && (
        <>
          {/* Deep dive — service-specific authority content */}
          <Section className="pt-0">
            <div className="max-w-prose">
              <h2 className="text-2xl font-bold text-brand-900">{content.deepDive.title}</h2>
              {content.deepDive.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-brand-900/80">{p}</p>
              ))}
            </div>
          </Section>

          {/* Signs */}
          <Section className="bg-brand-50 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-900">{content.signsTitle}</h2>
                <ul className="mt-4 space-y-2">
                  {content.signs.map((sign) => (
                    <li key={sign} className="flex gap-2 text-brand-900/80">
                      <span aria-hidden className="mt-1 text-brand-500">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-brand-900">How we treat it</h2>
                <ol className="mt-4 space-y-4">
                  {content.process.map((step, i) => (
                    <li key={step.step} className="flex gap-3">
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-brand-800">{step.step}</p>
                        <p className="text-sm text-brand-900/75">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Section>

          {/* What to expect + seasonality */}
          <Section className="py-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-brand-100 bg-white p-6">
                <h2 className="text-xl font-bold text-brand-900">What to expect</h2>
                <ul className="mt-4 space-y-2">
                  {content.whatToExpect.map((w) => (
                    <li key={w} className="flex gap-2 text-brand-900/80">
                      <span aria-hidden className="mt-1 text-brand-500">✓</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-white p-6">
                <h2 className="text-xl font-bold text-brand-900">Seasonality in Central NY</h2>
                <ul className="mt-4 space-y-2">
                  {content.seasonality.map((season) => (
                    <li key={season} className="text-sm text-brand-900/80">{season}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Pricing + prevention */}
          <Section className="bg-brand-50 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-900">What it costs</h2>
                {content.pricing.map((p, i) => (
                  <p key={i} className="mt-3 text-brand-900/80">{p}</p>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-900">How to prevent it</h2>
                <ul className="mt-4 space-y-2">
                  {content.prevention.map((p) => (
                    <li key={p} className="flex gap-2 text-brand-900/80">
                      <span aria-hidden className="mt-1 text-brand-500">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <Section className="py-12">
          <h2 className="text-2xl font-bold text-brand-900">Frequently asked questions</h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </Section>
      )}

      {/* Guarantee */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-brand-100 bg-white p-6">
          <h2 className="text-xl font-bold text-brand-900">Our guarantee</h2>
          <p className="mt-2 max-w-prose text-brand-900/75">{s.warrantyNote}</p>
          <Link href="/our-guarantee" className="mt-3 inline-block font-semibold text-brand-600">
            Read our guarantee terms →
          </Link>
        </div>
      </Section>

      {/* Pest Library cross-links */}
      {libraryPests.length > 0 && (
        <Section className="pt-0">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            In the Pest Library
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {libraryPests.map((p) => (
              <Link
                key={p.slug}
                href={`/pest-library/${p.slug}`}
                className="rounded-lg border border-brand-100 px-3 py-2 text-sm text-brand-800 hover:border-brand-300"
              >
                {p.commonName}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Service × town money-page links */}
      {townPages.length > 0 && (
        <Section className="pt-0">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {s.shortName} by town
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {townPages.map((m) => {
              const t = getTown(m.townSlug);
              if (!t) return null;
              return (
                <Link
                  key={m.townSlug}
                  href={`/services/${s.slug}/${m.townSlug}`}
                  className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100"
                >
                  {s.shortName} in {t.name}
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      {/* Geo-link module — internal linking into the county tier */}
      <Section className="pt-0">
        <GeoLinkModule serviceName={s.name} />
      </Section>

      {/* CTA bar */}
      <Section className="pt-0">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-brand-800 p-8 text-brand-50 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold">Ready to solve it for good?</p>
            <p className="text-brand-100/80">Free estimates. Family owned. Guaranteed work.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      {/* Sibling services */}
      <Section className="pt-0">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Other services
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {siblings.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="rounded-lg border border-brand-100 px-3 py-2 text-sm text-brand-800 hover:border-brand-300"
            >
              {o.shortName}
            </Link>
          ))}
          <Link
            href="/services"
            className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100"
          >
            All services →
          </Link>
        </div>
      </Section>
    </>
  );
}
