import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories, servicesByCategory } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GeoLinkModule } from "@/components/sections/GeoLinkModule";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "All Pest Control Services in Central NY",
  description:
    `The full lineup of pest, rodent, and wildlife services from ${business.name} across Ithaca and Central New York — from bed bugs and carpenter ants to bat exclusion and WDI inspections. Call ${business.phone}.`,
  path: "/services",
});

export default function ServicesIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/services",
          name: "Pest Control Services",
          description: `All services offered by ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Our Services</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            From the everyday household pests to the specialized problems that define Central New York
            — carpenter ants, cluster flies, bats, and wildlife — we cover it all, with honest pricing
            and a real guarantee behind every job.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {serviceCategories.map((cat) => {
            const list = servicesByCategory(cat.key);
            if (!list.length) return null;
            return (
              <div key={cat.key}>
                <h2 className="text-2xl font-bold text-brand-900">{cat.label}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((s) => (
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
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <GeoLinkModule serviceName="Pest control" />
      </Section>
    </>
  );
}
