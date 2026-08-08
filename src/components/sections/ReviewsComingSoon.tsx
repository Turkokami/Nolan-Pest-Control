import { business } from "@/data/business";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Replaces the three fabricated testimonials (audit Defect #1 — FTC risk).
 * NO Review/AggregateRating schema is emitted anywhere until real reviews exist.
 * When real Google reviews come in, swap this for a genuine GBP pull-through (Phase 5).
 */
export function ReviewsComingSoon() {
  return (
    <Section>
      <div className="rounded-2xl border border-brand-100 bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-900">Be Our First Review</h2>
        <p className="mx-auto mt-3 max-w-prose text-brand-900/70">
          {business.name} is a growing family business. We&apos;re building our reputation one
          honest job at a time — and we&apos;d be grateful for yours. Had a great experience?
          Your review helps neighbors across Central New York find reliable, local pest control.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/#quote">Book Your Service</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
        <p className="mt-4 text-xs text-brand-900/50">
          Real reviews only. We never publish testimonials we can&apos;t verify.
        </p>
      </div>
    </Section>
  );
}
