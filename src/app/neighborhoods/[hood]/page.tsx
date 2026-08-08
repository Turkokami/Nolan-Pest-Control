import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ithacaNeighborhoods } from "@/data/geo";
import { getNeighborhoodContent, neighborhoodSlugs } from "@/data/neighborhood-content";
import { countyUrl, townUrl } from "@/data/geo-content";
import { getService } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return neighborhoodSlugs.map((hood) => ({ hood }));
}

export const dynamicParams = false;

const getHood = (slug: string) => ithacaNeighborhoods.find((n) => n.slug === slug);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hood: string }>;
}): Promise<Metadata> {
  const { hood } = await params;
  const n = getHood(hood);
  if (!n) return {};
  return pageMetadata({
    title: `Pest Control in ${n.name}, Ithaca NY`,
    description: `Local, family-owned pest control for ${n.name} in Ithaca, NY. Discreet, guaranteed treatment built for the neighborhood. Call ${business.phone}.`,
    path: `/neighborhoods/${n.slug}`,
  });
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ hood: string }>;
}) {
  const { hood } = await params;
  const n = getHood(hood);
  const content = getNeighborhoodContent(hood);
  if (!n || !content) notFound();

  const path = `/neighborhoods/${n.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Ithaca", path: townUrl("ithaca") },
    { name: n.name, path },
  ];
  const faq = faqGraph(content.faqs);
  const related = content.relatedServices.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${n.name}, Ithaca, NY`,
    url: `${siteUrl}${path}`,
    containedInPlace: { "@type": "Place", name: "Ithaca, NY" },
  };

  return (
    <>
      <JsonLd data={pageGraph({ path, name: `Pest Control in ${n.name}, Ithaca`, description: content.intro[0], breadcrumbs: crumbs })} />
      <JsonLd data={placeSchema} />
      {faq && <JsonLd data={faq} />}
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            <Link href={townUrl("ithaca")} className="hover:underline">Ithaca, NY</Link>
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-brand-900">Pest Control in {n.name}</h1>
          {content.intro.map((p, i) => (
            <p key={i} className="mt-4 text-lg text-brand-900/80">{p}</p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-prose">
          <h2 className="text-2xl font-bold text-brand-900">Pest control built for {n.name}</h2>
          {content.local.map((p, i) => (
            <p key={i} className="mt-4 text-brand-900/80">{p}</p>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Most-requested services here
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm">
                <h3 className="font-semibold text-brand-800 group-hover:text-brand-600">{s.name}</h3>
                <span className="mt-2 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {content.faqs.length > 0 && (
        <Section className="bg-brand-50 py-12">
          <h2 className="text-2xl font-bold text-brand-900">{n.name} pest control — FAQs</h2>
          <div className="mt-6 max-w-3xl"><FaqAccordion faqs={content.faqs} /></div>
        </Section>
      )}

      <Section className="py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">More Ithaca neighborhoods</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={townUrl("ithaca")} className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100">Ithaca overview →</Link>
          {ithacaNeighborhoods
            .filter((o) => o.slug !== n.slug && neighborhoodSlugs.includes(o.slug))
            .slice(0, 8)
            .map((o) => (
              <Link key={o.slug} href={`/neighborhoods/${o.slug}`} className="rounded-lg border border-brand-100 px-3 py-2 text-sm text-brand-800 hover:border-brand-300">
                {o.name}
              </Link>
            ))}
        </div>
        <Link href={countyUrl("tompkins")} className="mt-4 inline-block text-sm font-semibold text-brand-600">
          All of Tompkins County →
        </Link>
      </Section>
    </>
  );
}
