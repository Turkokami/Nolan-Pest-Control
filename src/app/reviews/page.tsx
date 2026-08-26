import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    `${business.name} is building its reputation one honest job at a time across Central New York. Read and leave real, verified reviews. Call ${business.phone}.`,
  path: "/reviews",
});

/**
 * Reviews page (audit Defect #1 / Phase 5). IMPORTANT: NO Review or AggregateRating schema, and no
 * testimonials we can't verify. When a Google Business Profile URL is set in business.social.gbp,
 * this page links to it for real reviews. Until then it invites customers to be the first.
 */
export default function ReviewsPage() {
  const path = "/reviews";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path },
  ];
  const gbp = business.social.gbp;

  return (
    <>
      <JsonLd data={pageGraph({ path, name: "Reviews", description: `Reviews of ${business.name}.`, breadcrumbs: crumbs })} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="mx-auto max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Reviews</h1>
          <p className="mt-4 text-lg text-brand-900/85">
            {business.name} is rated{" "}
            <strong>{business.reviews.googleRating.toFixed(1)} out of 5</strong> from{" "}
            <strong>{business.reviews.googleCount} Google reviews</strong>. Every one is a real,
            verified review from an actual customer — no stock quotes, no invented five-stars. The
            profile itself is the source of truth, so read them there rather than taking our word
            for it.
          </p>

          {gbp ? (
            <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
              <h2 className="text-xl font-bold text-brand-900">Read &amp; leave a review on Google</h2>
              <p className="mt-2 text-brand-900/80">
                The best place to see what neighbors say — and to share your own experience — is our
                Google Business Profile.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={gbp}>See Our Google Reviews</Button>
                <Button href="/#quote" variant="secondary">Book Your Service</Button>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-gold-400 bg-gold-50/40 p-6">
              <h2 className="text-xl font-bold text-brand-900">Be our first review</h2>
              <p className="mt-2 text-brand-900/80">
                Had a great experience with us? Your honest review helps neighbors across Central
                New York find reliable, local pest control — and it means a lot to a family business
                like ours. Ask us for the review link after your service, or reach out any time.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/#quote">Book Your Service</Button>
                <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl bg-brand-50 p-6">
            <h2 className="text-lg font-bold text-brand-900">Why we don&apos;t show fake testimonials</h2>
            <p className="mt-2 text-brand-900/80">
              Plenty of pest control sites fill their pages with glowing quotes no one can verify.
              We won&apos;t do that — it&apos;s not honest, and it&apos;s not who we are. When we
              earn your trust, we&apos;d be grateful if you shared it publicly; until we&apos;ve
              earned yours, we&apos;d rather show you our work than someone else&apos;s words. See{" "}
              <Link href="/our-guarantee" className="font-semibold text-brand-600 underline">our guarantee</Link>{" "}
              for what we stand behind.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
