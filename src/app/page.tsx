import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/data/business";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ServiceAreaModule } from "@/components/sections/ServiceAreaModule";
import { ReviewsComingSoon } from "@/components/sections/ReviewsComingSoon";
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

      {/* About block — warm brand voice retained (audit §3) */}
      <Section>
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-3xl font-bold text-brand-900">A Local Family You Can Trust</h2>
          <p className="mt-4 text-lg text-brand-900/80">
            {business.brandLine} We&apos;re based right here in {business.hubCity}, and we treat
            every home like it&apos;s our neighbor&apos;s — because usually, it is.
          </p>
        </div>
      </Section>

      <ServiceGrid />
      <ServiceAreaModule />
      <ReviewsComingSoon />

      {/* Full quote form anchor for the sticky CTA + footer links */}
      <Section id="quote" className="bg-brand-50">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-brand-900">Get Your Free Estimate</h2>
            <p className="mt-3 text-brand-900/70">
              Tell us what&apos;s bugging you and we&apos;ll get back to you quickly with a plan and
              honest pricing. No obligation, ever.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
