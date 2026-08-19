import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";
import { Button } from "@/components/ui/Button";

/**
 * Ithaca-anchored hero (audit §8.1). Real brand: dark, full-bleed truck photo + gold accents.
 * The quote form lives in the dedicated #quote section on the homepage (best conversion asset, retained).
 */
export function Hero() {
  return (
    <section
      className="relative flex min-h-[620px] items-end bg-cover"
      style={{ backgroundImage: "url('/hero-truck.jpg')", backgroundPosition: "center 40%" }}
    >
      {/* Lighter gradient so the truck's "Nolan Pest Control" wrap stays visible while the headline
          keeps enough dark backing on the left to read. Crop (center 40% + taller band) keeps both
          the owner's face and the door lettering in frame across desktop widths. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/50 to-ink-900/20" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold-400">
          Ithaca &amp; Central New York
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] text-cream-50 drop-shadow sm:text-5xl">
          Protect Your Central NY Home from Pests
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream-100/90">
          {business.name} offers effective, safe, and reliable solutions for all your pest
          control needs. Family owned, locally operated, and guaranteed.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/#quote">Get a Free Estimate</Button>
          <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-cream-100">
          {["Guaranteed Results", "Family Owned", "NYSDEC Registered", "Safe for Family & Pets"].map((v) => (
            <li key={v} className="flex items-center gap-1.5">
              <span aria-hidden className="text-gold-400">✓</span> {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
