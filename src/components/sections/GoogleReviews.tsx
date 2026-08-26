import { business } from "@/data/business";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Replaces ReviewsComingSoon, which invited customers to "Be Our First Review" and was factually
 * wrong once the profile reached 10 reviews.
 *
 * STILL NO Review or AggregateRating schema — see the note on business.reviews. The rating and
 * count are rendered as plain text for human readers. Google hosts the reviews and we link to
 * them; marking them up here as our own aggregate rating would violate Google's self-serving
 * review policy, which is the same class of risk the fabricated testimonials (Defect #1) carried.
 *
 * Quotes are real, from the public profile, attributed by first name and last initial. They are
 * deliberately few — the live profile is the source of truth, and a wall of copied review text on
 * our own page would only go stale.
 */

const quotes: { text: string; name: string }[] = [
  {
    text:
      "Matt was able to get rid of Carpenter Bees from our log home. Other companies were not able to keep them away. The stink bugs are gone and have not returned also. I am very happy with the Spring Application we received.",
    name: "Jeanette T.",
  },
  {
    text:
      "Matt is friendly, responsive, and does a good job. I needed help with a nest under my siding and he was able to come out just a few days after contact and take care of the problem. Would recommend and use again!",
    name: "Abby T.",
  },
  {
    text:
      "Very professional, detailed, covered all areas of concern. They were able to get me on the schedule quickly.",
    name: "Rebecca P.",
  },
];

export function GoogleReviews() {
  const { googleRating, googleCount } = business.reviews;
  const gbp = business.social.gbp;

  return (
    <Section className="bg-ink-900">
      <div className="rounded-2xl border border-gold-600 bg-ink-700 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cream-50">What our customers say</h2>
          <p className="mt-3 text-cream-200/85">
            <span className="text-xl font-bold text-gold-300">
              {googleRating.toFixed(1)} out of 5
            </span>{" "}
            from {googleCount} Google reviews.
          </p>
          <p className="mx-auto mt-2 max-w-prose text-sm text-cream-300">
            Every one of them is a real, verified Google review from an actual customer. We
            don&apos;t publish anything we can&apos;t point you to.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col rounded-xl border border-gold-600/40 bg-ink-900/40 p-5"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-cream-200/90">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-300">
                {q.name} <span className="font-normal text-cream-300/70">· via Google</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {gbp && <Button href={gbp}>Read All {googleCount} Reviews</Button>}
          <Button href="/#quote" variant="secondary">
            Book Your Service
          </Button>
        </div>
      </div>
    </Section>
  );
}
