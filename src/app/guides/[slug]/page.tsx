import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuide } from "@/data/guides";
import { getService } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, faqGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMetadata({
    title: g.title,
    description: g.answerLead.slice(0, 155),
    path: `/guides/${g.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const path = `/guides/${g.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: g.title, path },
  ];
  const related = g.relatedServices.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  // FAQ schema from the guide's core question + direct answer.
  const faq = faqGraph([{ q: g.question, a: g.answerLead }]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.answerLead,
    url: `${siteUrl}${path}`,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={pageGraph({ path, name: g.title, description: g.answerLead, breadcrumbs: crumbs })} />
      <JsonLd data={articleSchema} />
      {faq && <JsonLd data={faq} />}
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold leading-tight text-brand-900">{g.title}</h1>

          {/* AEO direct answer */}
          <div className="mt-6 rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-5">
            <p className="text-lg text-brand-900/85">{g.answerLead}</p>
          </div>

          <div className="mt-8 space-y-6">
            {g.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2 className="text-2xl font-bold text-brand-900">{section.heading}</h2>}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="mt-3 text-brand-900/80">{para}</p>
                ))}
              </div>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">This is what we do</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100 hover:ring-brand-300"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-prose">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">More guides</h2>
          <ul className="mt-4 space-y-2">
            {guides.filter((o) => o.slug !== g.slug).slice(0, 5).map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}`} className="font-semibold text-brand-800 hover:text-brand-600 hover:underline">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
