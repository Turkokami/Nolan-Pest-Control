import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTown, getCounty, ithacaNeighborhoods } from "@/data/geo";
import {
  getTownContent,
  priorityTownSlugs,
  countyUrl,
  townUrl,
} from "@/data/geo-content";
import { neighborhoodSlugs } from "@/data/neighborhood-content";
import { getTownDeep } from "@/data/town-content-deep";
import { coreServices } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph } from "@/components/schema/siteSchema";

// Only the 12 priority towns that have unique local content are built (audit §8.4).
export function generateStaticParams() {
  return priorityTownSlugs.map((town) => ({ town }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const t = getTown(town);
  const c = t ? getCounty(t.county) : undefined;
  if (!t || !c) return {};
  return pageMetadata({
    title: `Pest Control in ${t.name}, NY`,
    description: `Local, family-owned pest control in ${t.name}, ${c.name}. Guaranteed treatment for the pests that matter here. Free estimates — call ${business.phone}.`,
    path: townUrl(t.slug),
  });
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const t = getTown(town);
  const content = getTownContent(town);
  const c = t ? getCounty(t.county) : undefined;
  if (!t || !content || !c) notFound();

  const deep = getTownDeep(town); // depth layer (priority towns)
  const path = townUrl(t.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: c.name, path: countyUrl(c.slug) },
    { name: t.name, path },
  ];
  const faqs = [...content.faqs, ...(deep?.faqs ?? [])];
  const faq = faqGraph(faqs);

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${t.name}, NY`,
    url: `${siteUrl}${path}`,
    containedInPlace: { "@type": "AdministrativeArea", name: `${c.name}, NY` },
  };

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          name: `Pest Control in ${t.name}, NY`,
          description: content.intro[0],
          breadcrumbs: crumbs,
        })}
      />
      <JsonLd data={placeSchema} />
      {faq && <JsonLd data={faq} />}

      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            <Link href={countyUrl(c.slug)} className="hover:underline">{c.name}</Link>
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-brand-900">
            Pest Control in {t.name}, NY
          </h1>
          {content.intro.map((p, i) => (
            <p key={i} className="mt-4 text-lg text-brand-900/80">{p}</p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      {/* Local specifics */}
      <Section className="pt-0">
        <div className="max-w-prose">
          <h2 className="text-2xl font-bold text-brand-900">Pest control built for {t.name}</h2>
          {content.local.map((p, i) => (
            <p key={i} className="mt-4 text-brand-900/80">{p}</p>
          ))}
        </div>
      </Section>

      {/* Depth layer (priority towns): structure -> calendar -> approach.
          Additive — renders only when a deep entry exists for this town. */}
      {deep && (
        <>
          <Section className="pt-0">
            <div className="max-w-prose">
              <h2 className="text-2xl font-bold text-brand-900">{deep.structure.title}</h2>
              {deep.structure.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-brand-900/80">{p}</p>
              ))}
            </div>
          </Section>

          <Section className="bg-brand-50 py-12">
            <div className="max-w-prose">
              <h2 className="text-2xl font-bold text-brand-900">{deep.calendar.title}</h2>
              {deep.calendar.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-brand-900/80">{p}</p>
              ))}
            </div>
          </Section>

          <Section className="pt-12">
            <div className="max-w-prose">
              <h2 className="text-2xl font-bold text-brand-900">{deep.approach.title}</h2>
              {deep.approach.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-brand-900/80">{p}</p>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* Known pests */}
      {t.knownPests.length > 0 && (
        <Section className="pt-0">
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Common pests in {t.name}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.knownPests.map((p) => (
                <li key={p} className="rounded-full bg-white px-3 py-1 text-sm text-brand-800 ring-1 ring-inset ring-brand-100">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Ithaca neighborhoods */}
      {t.slug === "ithaca" && (
        <Section className="pt-0">
          <h2 className="text-2xl font-bold text-brand-900">Ithaca neighborhoods we serve</h2>
          <p className="mt-2 text-sm text-brand-900/70">
            We know Ithaca block by block — from Collegetown student rentals to Cayuga Heights.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ithacaNeighborhoods
              .filter((n) => neighborhoodSlugs.includes(n.slug))
              .map((n) => (
                <Link
                  key={n.slug}
                  href={`/neighborhoods/${n.slug}`}
                  className="rounded-lg border border-brand-100 bg-white px-3 py-2 text-sm font-medium text-brand-700 hover:border-brand-300"
                >
                  {n.name}
                </Link>
              ))}
          </div>
        </Section>
      )}

      {/* Services */}
      <Section className="pt-0">
        <h2 className="text-2xl font-bold text-brand-900">Our services in {t.name}</h2>
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
      {faqs.length > 0 && (
        <Section className="bg-brand-50 py-12">
          <h2 className="text-2xl font-bold text-brand-900">{t.name} pest control — FAQs</h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </Section>
      )}

      {/* Nearby towns in county */}
      <Section className="py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          More in {c.name}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={countyUrl(c.slug)}
            className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100"
          >
            {c.name} overview →
          </Link>
          {c.towns
            .filter((o) => o.slug !== t.slug && priorityTownSlugs.includes(o.slug))
            .map((o) => (
              <Link
                key={o.slug}
                href={townUrl(o.slug)}
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
