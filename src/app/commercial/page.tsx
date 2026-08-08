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

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pest Control in Central NY",
  description:
    `Commercial pest control for Central New York businesses: rentals & property management, restaurants, hospitality, wineries, and student housing. Discreet, documented, reliable. Call ${business.phone}.`,
  path: "/commercial",
});

// Industries framed now; each becomes its own vertical page in Phase 5 (audit §8.8).
const industries = [
  { name: "Rentals & property management", angle: "Recurring protection between tenants, documented service, and fast response to unit complaints. New York landlords carry habitability responsibility for infestations — we help you meet it." },
  { name: "Student housing", angle: "Off-campus rentals around Cornell and Ithaca College see heavy move-in/move-out turnover. We handle bed bugs, roaches, and mice with discreet, coordinated treatment across units." },
  { name: "Restaurants & food service", angle: "Health-inspection readiness and discreet, documented pest management for kitchens, dining rooms, and storage — the difference between passing and closing." },
  { name: "Wineries, breweries & hospitality", angle: "Seneca and Cayuga wine-trail tasting rooms, hotels, B&Bs, and short-term rentals are inspection- and bed-bug-exposed. We protect the guest experience and your reviews." },
  { name: "Offices & retail", angle: "Clean, low-disruption service on a schedule that fits your hours, with reporting you can hand to ownership or corporate." },
  { name: "Property portfolios", angle: "Multi-property contracts with per-door pricing and consolidated reporting for owners and managers." },
];

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
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-brand-100 bg-white p-6">
              <h3 className="font-semibold text-brand-800">{ind.name}</h3>
              <p className="mt-2 text-sm text-brand-900/75">{ind.angle}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-900/70">
          Detailed, compliance-specific pages for each industry — including NYS Sanitary Code Part 14
          for food service and Real Property Law §235-b for rentals — are in development. Need one now?{" "}
          <Link href="/contact" className="font-semibold text-brand-600 underline">Contact us</Link>.
        </p>
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
