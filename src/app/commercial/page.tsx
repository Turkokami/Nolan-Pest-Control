import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";
import { verticals } from "@/data/verticals";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pest Control in Central NY",
  description:
    `Commercial pest control for Central New York businesses: rentals & property management, restaurants, hospitality, wineries, and student housing. Discreet, documented, reliable. Call ${business.phone}.`,
  path: "/commercial",
});

// Standalone, compliance-specific vertical pages (audit §8.8). Sourced from verticals.ts so the
// hub and the deep pages never drift. The compliance hub is surfaced separately below.
const sectorCards = verticals
  .filter((v) => v.slug !== "ny-pest-control-compliance")
  .map((v) => ({ slug: v.slug, name: v.shortName, angle: v.answerLead }));
const complianceHub = verticals.find((v) => v.slug === "ny-pest-control-compliance");

export default function CommercialPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Commercial", path: "/commercial" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/commercial",
          name: "Commercial Pest Control",
          description: `Commercial pest control services from ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Commercial Pest Control</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            For a business, pests aren&apos;t just a nuisance — they&apos;re a threat to inspections,
            reviews, and revenue. A single pest complaint can cost a restaurant its rating, a landlord
            a tenant, or a hotel a guest for good. We help Central New York businesses stay protected,
            compliant, and open, with discreet, documented service scheduled around your operations.
          </p>
          <p className="mt-4 text-brand-900/80">
            As a local, family-owned company, we answer the phone, show up when we say we will, and
            give you a real person who knows your property — not a national call center.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Request a Commercial Quote</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-bold text-brand-900">Industries we serve</h2>
        <p className="mt-2 text-brand-900/75">
          Each sector has its own dedicated page with the compliance detail that setting requires —
          from NYS Sanitary Code Part 14 for food service to Real Property Law §235-b habitability
          for rentals. Pick yours below.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sectorCards.map((ind) => (
            <Link
              key={ind.slug}
              href={`/commercial/${ind.slug}`}
              className="group rounded-2xl border border-brand-100 bg-white p-6 transition hover:border-gold-400 hover:shadow-sm"
            >
              <h3 className="flex items-center justify-between gap-3 font-semibold text-brand-800">
                {ind.name}
                <span aria-hidden className="text-gold-600 transition group-hover:translate-x-0.5">→</span>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-brand-900/75">{ind.angle}</p>
            </Link>
          ))}
        </div>

        {complianceHub && (
          <Link
            href={`/commercial/${complianceHub.slug}`}
            className="mt-4 block rounded-2xl border border-gold-300 bg-gold-50/40 p-6 transition hover:border-gold-500"
          >
            <h3 className="flex items-center justify-between gap-3 font-bold text-brand-900">
              New York pest control compliance — the master overview
              <span aria-hidden className="text-gold-600">→</span>
            </h3>
            <p className="mt-2 text-sm text-brand-900/75">{complianceHub.answerLead}</p>
          </Link>
        )}
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <ExpertBlock />
          <div className="rounded-2xl bg-brand-800 p-8 text-brand-50">
            <p className="text-xl font-bold">Let&apos;s protect your business.</p>
            <p className="mt-2 text-brand-100/80">
              Tell us about your property and we&apos;ll put together a service plan and honest pricing
              — no long-term traps, no surprise fees.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Request a Quote</Button>
              <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
