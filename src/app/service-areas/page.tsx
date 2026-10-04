import type { Metadata } from "next";
import Link from "next/link";
import { counties, ithacaNeighborhoods } from "@/data/geo";
import { countyUrl, townUrl, priorityTownSlugs } from "@/data/geo-content";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas — Central New York & the Finger Lakes",
  description:
    `${business.name} serves Tompkins, Schuyler, Chemung, Cortland and Tioga counties from ${business.hubCity}. See the towns we cover.`,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/service-areas",
          name: "Service Areas",
          description: `Counties and towns served by ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Where We Serve</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            {business.name} works across {business.stats.countiesServed} counties of Central New York,
            the Finger Lakes and the Lake Ontario fruit belt, within about a{" "}
            {business.serviceRadiusMiles}-mile radius. Every county and town below has its own page,
            written for that place rather than filled in from a template — what the housing is built
            like there, what shows up and when, and what actually resolves it.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {counties.map((c) => (
            <div key={c.slug} className="rounded-2xl border border-brand-100 bg-white p-6">
              <h2 className="text-xl font-bold text-brand-900">
                <Link href={countyUrl(c.slug)} className="hover:text-brand-600 hover:underline">
                  {c.name}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-brand-900/70">County seat: {c.seat}</p>
              <p className="mt-3 text-sm text-brand-900/75">{c.pestPressure}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.towns.map((t) =>
                  priorityTownSlugs.includes(t.slug) ? (
                    <li key={t.slug}>
                      <Link
                        href={townUrl(t.slug)}
                        className="inline-block rounded-full bg-brand-600 px-3 py-1 text-sm font-medium text-white hover:bg-brand-700"
                      >
                        {t.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={t.slug} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800 ring-1 ring-inset ring-brand-100">
                      {t.name}
                    </li>
                  )
                )}
              </ul>
              <Link href={countyUrl(c.slug)} className="mt-4 inline-block text-sm font-semibold text-brand-600">
                {c.name} pest control →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <h2 className="text-xl font-bold text-brand-900">Ithaca neighborhoods</h2>
          <p className="mt-2 text-sm text-brand-900/75">
            We know Ithaca block by block — from Collegetown student rentals to Cayuga Heights.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {ithacaNeighborhoods.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/neighborhoods/${n.slug}`}
                  className="inline-block rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100 hover:ring-brand-300"
                >
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
