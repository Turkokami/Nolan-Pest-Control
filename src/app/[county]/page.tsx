import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { counties, getCounty } from "@/data/geo";
import {
  getCountyContent,
  countyUrl,
  countySlugFromParam,
  townUrl,
  priorityTownSlugs,
} from "@/data/geo-content";
import { coreServices } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph } from "@/components/schema/siteSchema";

/**
 * County hub — audit slug pattern /pest-control-<county>-county-ny.
 * Root-level dynamic segment scoped by generateStaticParams + dynamicParams=false, so only the
 * five known county slugs build and everything else 404s (static routes still take precedence).
 */
export function generateStaticParams() {
  return counties.map((c) => ({ county: `pest-control-${c.slug}-county-ny` }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const { county } = await params;
  const c = getCounty(countySlugFromParam(county));
  if (!c) return {};
  return pageMetadata({
    title: `Pest Control in ${c.name}, NY`,
    description: `Family-owned pest control across ${c.name}, New York — ${c.towns
      .slice(0, 4)
      .map((t) => t.name)
      .join(", ")} and more. Guaranteed, local, and thorough. Call ${business.phone}.`,
    path: countyUrl(c.slug),
  });
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const { county } = await params;
  const slug = countySlugFromParam(county);
  const c = getCounty(slug);
  const content = getCountyContent(slug);
  if (!c || !content) notFound();

  const path = countyUrl(c.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: c.name, path },
  ];
  const faq = faqGraph(content.faqs);

  // AdministrativeArea Place node tied to the LocalBusiness.
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: `${c.name}, NY`,
    url: `${siteUrl}${path}`,
    containedInPlace: { "@type": "State", name: "New York" },
  };

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          name: `Pest Control in ${c.name}`,
          description: content.intro[0],
          breadcrumbs: crumbs,
        })}
      />
      <JsonLd data={placeSchema} />
      {faq && <JsonLd data={faq} />}

      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-brand-900">
              Pest Control in {c.name}, NY
            </h1>
            {content.intro.map((p, i) => (
              <p key={i} className="mt-4 text-lg text-brand-900/80 first:mt-6">{p}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/#quote">Get a Free Estimate</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
          <aside>
            <ExpertBlock compact />
          </aside>
        </div>
      </Section>

      {/* Pest pressure + housing */}
      <Section className="bg-brand-50 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">Pest pressure in {c.seat} &amp; {c.name}</h2>
            {content.pressure.map((p, i) => (
              <p key={i} className="mt-3 text-brand-900/80">{p}</p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-900">Local housing &amp; seasonality</h2>
            {content.housing.map((p, i) => (
              <p key={i} className="mt-3 text-brand-900/80">{p}</p>
            ))}
            <p className="mt-3 text-brand-900/80">{content.seasonal}</p>
          </div>
        </div>
      </Section>

      {/* Towns covered */}
      <Section className="py-12">
        <h2 className="text-2xl font-bold text-brand-900">Towns we serve in {c.name}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.towns.map((t) => {
            const hasPage = priorityTownSlugs.includes(t.slug);
            return hasPage ? (
              <Link
                key={t.slug}
                href={townUrl(t.slug)}
                className="rounded-lg border border-brand-100 bg-white px-3 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
              >
                {t.name}
              </Link>
            ) : (
              <span
                key={t.slug}
                className="rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800 ring-1 ring-inset ring-brand-100"
              >
                {t.name}
              </span>
            );
          })}
        </div>
      </Section>

      {/* Services */}
      <Section className="pt-0">
        <h2 className="text-2xl font-bold text-brand-900">Our services in {c.name}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
            >
              <h3 className="font-semibold text-brand-800 group-hover:text-brand-600">{s.shortName}</h3>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
            </Link>
          ))}
        </div>
        <Link href="/services" className="mt-4 inline-block font-semibold text-brand-600">
          See all 22 services →
        </Link>
      </Section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <Section className="bg-brand-50 py-12">
          <h2 className="text-2xl font-bold text-brand-900">
            {c.name} pest control — FAQs
          </h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion faqs={content.faqs} />
          </div>
        </Section>
      )}

      {/* Other counties */}
      <Section className="py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">Other counties we serve</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {counties
            .filter((o) => o.slug !== c.slug)
            .map((o) => (
              <Link
                key={o.slug}
                href={countyUrl(o.slug)}
                className="rounded-lg border border-brand-100 px-3 py-2 text-sm text-brand-800 hover:border-brand-300"
              >
                {o.name}
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
