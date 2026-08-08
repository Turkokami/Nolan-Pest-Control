import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";

/** Thin top bar — persistent click-to-call (audit §3: keep click-to-call everywhere). */
export function UtilityBar() {
  return (
    <div className="bg-brand-800 text-brand-50">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm sm:px-6">
        <span className="font-medium">{business.tagline}</span>
        <a href={formatPhoneHref()} className="font-semibold hover:underline">
          Call {business.phone}
        </a>
      </div>
    </div>
  );
}
