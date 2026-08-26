import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/data/business";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ServiceAreaModule } from "@/components/sections/ServiceAreaModule";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: `${business.name} | Pest Control in Ithaca & Central NY`,
  description:
    `Family-owned pest control in Ithaca & Central New York. Guaranteed, family-safe treatment for ants, rodents, bed bugs, roaches, spiders & stinging insects. Free estimates — call ${business.phone}.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />

      {/* Family band — real people, real trucks (audit §11 photography) */}
      <Section className="bg-ink-800">
        <div className="grid overflow-hidden rounded-2xl border border-ink-line bg-ink-700 lg:grid-cols-2">
          <img
            src="/family.jpg"
            alt={`The ${business.name} family and service truck`}
            className="h-full min-h-[300px] w-full object-cover"
          />
          <div className="p-8 lg:p-10">
            <span className="inline-block rounded-full border border-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-400">
              Locally family owned
            </span>
            <h2 className="mt-4 text-3xl font-bold text-cream-50">Real people. Real trucks. Real results.</h2>
            <p className="mt-3 text-cream-200/85">
              {business.brandLine} We&apos;re not a franchise or a call center — when you call
              {" "}{business.name}, you reach the family that actually does the work and stands behind
              it. Based right here in {business.hubCity}, we treat every home like a neighbor&apos;s,
              because usually it is.
            </p>
          </div>
        </div>
      </Section>

      <ServiceGrid />
      <ServiceAreaModule />
      <GoogleReviews />

      {/* Full quote form anchor for the sticky CTA + footer links */}
      <Section id="quote" className="bg-ink-900">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-cream-50">Get Your Free Estimate</h2>
            <p className="mt-3 text-cream-200/80">
              Tell us what&apos;s bugging you and we&apos;ll get back to you quickly with a plan and
              honest pricing. No obligation, ever.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-600 bg-cream-50 p-6 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
