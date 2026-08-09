import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { serviceContentPhase2 } from "@/data/service-content-phase2";
import { getTown, getCounty } from "@/data/geo";
import { countyUrl, townUrl } from "@/data/geo-content";
import { getMoneyPage, moneyPageParams } from "@/data/money-pages";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph, serviceGraph, faqGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return moneyPageParams;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; town: string }>;
}): Promise<Metadata> {
  const { service, town } = await params;
  const s = getService(service);
  const t = getTown(town);
  if (!s || !t) return {};
  return pageMetadata({
    title: `${s.name} in ${t.name}, NY`,
    description: `${s.shortName} treatment in ${t.name}, New York from ${business.name} — family owned, guaranteed. Call ${business.phone} for a free estimate.`,
    path: `/services/${s.slug}/${t.slug}`,
  });
}

export default async function MoneyPage({
  params,
}: {
  params: Promise<{ service: string; town: string }>;
}) {
  const { service, town } = await params;
  const s = getService(service);
  const t = getTown(town);
  const c = t ? getCounty(t.county) : undefined;
  const money = getMoneyPage(service, town);
  if (!s || !t || !c || !money) notFound();

  const content = serviceContent[s.slug] ?? serviceContentPhase2[s.slug];
  const faqs = content?.faqs ?? s.faqs;
  const path = `/services/${s.slug}/${t.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.shortName, path: `/services/${s.slug}` },
    { name: t.name, path },
  ];
  const faq = faqGraph(faqs);
  const title = `${s.name} in ${t.name}, NY`;

  return (
    <>
      <JsonLd data={pageGraph({ path, name: title, description: money.intro[0], breadcrumbs: crumbs })} />
      <JsonLd data={serviceGraph({ path, name: title, description: money.intro[0] })} />
      {faq && <JsonLd data={faq} />}
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            <Link href={townUrl(t.slug)} className="hover:underline">{t.name}</Link>
            {" · "}
            <Link href={`/services/${s.slug}`} className="hover:underline">{s.shortName}</Link>
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-brand-900">{title}</h1>
          {money.intro.map((p, i) => (
            <p key={i} className="mt-4 text-lg text-brand-900/80">{p}</p>
          ))}
          <p className="mt-4 text-brand-900/80">{s.answer}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-prose">
          <h2 className="text-2xl font-bold text-brand-900">
            {s.shortName} in {t.name}: what we do
          </h2>
          <ul className="mt-4 space-y-2">
            {money.whyHere.map((p) => (
              <li key={p} className="flex gap-2 text-brand-900/80">
                <span aria-hidden className="mt-1 text-brand-500">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brand-900/70">
            Serving {t.name} and all of{" "}
            <Link href={countyUrl(c.slug)} className="font-semibold text-brand-600 underline">{c.name}</Link>.
            See the full{" "}
            <Link href={`/services/${s.slug}`} className="font-semibold text-brand-600 underline">{s.name}</Link>{" "}
            service for how it works.
          </p>
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-brand-50 py-12">
          <h2 className="text-2xl font-bold text-brand-900">{s.shortName} FAQs</h2>
          <div className="mt-6 max-w-3xl"><FaqAccordion faqs={faqs} /></div>
        </Section>
      )}

      <Section className="py-12">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-brand-800 p-8 text-brand-50 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold">{s.shortName} help in {t.name}?</p>
            <p className="text-brand-100/80">Free estimates. Family owned. Guaranteed work.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
