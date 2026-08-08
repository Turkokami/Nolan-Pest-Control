import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pests, getPest, pestsInCluster, pestClusters } from "@/data/pests";
import { getService } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return pests.map((p) => ({ species: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ species: string }>;
}): Promise<Metadata> {
  const { species } = await params;
  const p = getPest(species);
  if (!p) return {};
  return pageMetadata({
    title: `${p.commonName} — Identification & Control in Central NY`,
    description: `${p.identification} ${p.seasonalityCNY} Treatment from ${business.name} — call ${business.phone}.`,
    path: `/pest-library/${p.slug}`,
  });
}

const sections: { key: keyof PestFields; label: string }[] = [
  { key: "identification", label: "Identification" },
  { key: "lifecycle", label: "Lifecycle & behavior" },
  { key: "seasonalityCNY", label: "When it's active in Central NY" },
  { key: "riskDamage", label: "Risk & damage" },
  { key: "diyLimits", label: "Why DIY falls short" },
  { key: "proTreatment", label: "How we treat it" },
];
type PestFields = {
  identification: string;
  lifecycle: string;
  seasonalityCNY: string;
  riskDamage: string;
  diyLimits: string;
  proTreatment: string;
};

export default async function SpeciesPage({
  params,
}: {
  params: Promise<{ species: string }>;
}) {
  const { species } = await params;
  const p = getPest(species);
  if (!p) notFound();

  const service = getService(p.parentServiceSlug);
  const cluster = pestClusters.find((c) => c.key === p.cluster);
  const related = pestsInCluster(p.cluster).filter((o) => o.slug !== p.slug).slice(0, 6);
  const path = `/pest-library/${p.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pest Library", path: "/pest-library" },
    { name: p.commonName, path },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${p.commonName} — Identification & Control in Central New York`,
    about: p.commonName,
    articleSection: cluster?.label,
    url: `${siteUrl}${path}`,
    publisher: { "@id": `${siteUrl}/#organization` },
    description: p.identification,
  };

  return (
    <>
      <JsonLd
        data={pageGraph({ path, name: p.commonName, description: p.identification, breadcrumbs: crumbs })}
      />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          {cluster && (
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              <Link href={`/pest-library#${cluster.key}`} className="hover:underline">{cluster.label}</Link>
            </p>
          )}
          <h1 className="mt-2 text-4xl font-extrabold text-brand-900">{p.commonName}</h1>
          <p className="mt-1 italic text-brand-900/50">{p.scientificName}</p>

          <dl className="mt-8 space-y-6">
            {sections.map((s) => (
              <div key={s.key}>
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">{s.label}</dt>
                <dd className="mt-1 text-brand-900/80">{p[s.key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Parent service CTA */}
      {service && (
        <Section className="pt-0">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-brand-800 p-8 text-brand-50 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-bold">Dealing with {p.commonName.toLowerCase()}?</p>
              <p className="text-brand-100/80">
                Our {service.name.toLowerCase()} handles it — guaranteed, family-owned, and local.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`/services/${service.slug}`}>See {service.shortName} service</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
        </Section>
      )}

      {/* Related in cluster */}
      {related.length > 0 && (
        <Section className="pt-0">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            More {cluster?.label.toLowerCase()}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((o) => (
              <Link
                key={o.slug}
                href={`/pest-library/${o.slug}`}
                className="rounded-lg border border-brand-100 px-3 py-2 text-sm text-brand-800 hover:border-brand-300"
              >
                {o.commonName}
              </Link>
            ))}
            <Link
              href="/pest-library"
              className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100"
            >
              Full Pest Library →
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}
