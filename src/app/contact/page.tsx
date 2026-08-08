import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref, formatPhoneDisplay, formatAddressLine } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Contact Nolan Pest Control",
  description: `Contact ${business.name} in Ithaca, NY. Call ${business.phone} or request a free estimate online.`,
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/contact",
          name: "Contact",
          description: `Contact ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <h1 className="text-4xl font-extrabold text-brand-900">Contact Us</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-brand-900/80">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Phone</p>
              <a href={formatPhoneHref()} className="text-2xl font-bold text-brand-800 hover:underline">
                {formatPhoneDisplay()}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Email</p>
              <a href={`mailto:${business.email}`} className="hover:underline">{business.email}</a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Service area</p>
              <p>{formatAddressLine()}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Hours</p>
              <p>{business.hours[0]?.label}</p>
              <p>{business.hoursNote}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
