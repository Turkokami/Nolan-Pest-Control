import type { Metadata } from "next";
import Link from "next/link";
import { coreServices } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { GeoLinkModule } from "@/components/sections/GeoLinkModule";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Residential Pest Control in Ithaca & Central NY",
  description:
    `Home pest control for Central New York: ants, rodents, bed bugs, roaches, spiders, stinging insects and more. Family owned, guaranteed. Call ${business.phone}.`,
  path: "/residential",
});

export default function ResidentialPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Residential", path: "/residential" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/residential",
          name: "Residential Pest Control",
          description: `Home pest control services from ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Residential Pest Control</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            Your home is where pest problems feel most personal — and where a family-owned local
            company makes the biggest difference. We protect Central New York homes against the pests
            our climate and older housing stock invite, from the mice that push indoors every fall to
            the carpenter ants that follow moisture into aging sills.
          </p>
          <p className="mt-4 text-brand-900/80">
            Whether you need a one-time treatment or year-round protection, every service is backed by
            our guarantee and performed by people who live here and treat your home like a neighbor&apos;s.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-bold text-brand-900">Home services we offer</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
            >
              <h3 className="font-semibold text-brand-800 group-hover:text-brand-600">{s.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-brand-900/70">{s.answer}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-900/70">
          We also offer specialized home services — carpenter ants, cluster flies, overwintering pests,
          bat &amp; wildlife exclusion, rodent sealing, and more. See the{" "}
          <Link href="/services" className="font-semibold text-brand-600 underline">full 22-service lineup →</Link>
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <ExpertBlock />
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <h2 className="text-xl font-bold text-brand-900">Prefer year-round protection?</h2>
            <p className="mt-2 text-brand-900/75">
              Our general preventative plan bundles the common household pests into one seasonal
              program — usually for less per visit than reacting to each problem as it happens, with
              free re-service between visits.
            </p>
            <Link href="/services/general-pest" className="mt-3 inline-block font-semibold text-brand-600">
              See the preventative plan →
            </Link>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <GeoLinkModule serviceName="Residential pest control" />
      </Section>
    </>
  );
}
