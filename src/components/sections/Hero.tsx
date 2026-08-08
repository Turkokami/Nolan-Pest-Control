import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";
import { Button } from "@/components/ui/Button";

/** Ithaca-anchored hero (audit §8.1: hub = Ithaca/Tompkins). Keeps the current warm headline voice. */
export function Hero() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Ithaca &amp; Central New York
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
            Protect Your Central NY Home from Pests
          </h1>
          <p className="mt-4 max-w-prose text-lg text-brand-900/80">
            {business.name} offers effective, safe, and reliable solutions for all your pest
            control needs. Family owned, locally operated, and guaranteed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">
              Call {business.phone}
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-brand-800">
            {business.voice.map((v) => (
              <li key={v} className="flex items-center gap-1">
                <span aria-hidden className="text-brand-500">✓</span> {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
          <QuoteFormAnchor />
        </div>
      </div>
    </div>
  );
}

// The form itself is a client component; hero renders it inside the card.
import { QuoteForm } from "@/components/sections/QuoteForm";
function QuoteFormAnchor() {
  return <QuoteForm compact />;
}
