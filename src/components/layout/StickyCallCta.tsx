import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";

/** Sticky mobile call/quote bar — mobile-majority pest audience (audit §3). */
export function StickyCallCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={formatPhoneHref()}
          className="flex-1 rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call {business.phone}
        </a>
        <a
          href="/#quote"
          className="flex-1 rounded-lg bg-brand-50 px-4 py-3 text-center text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
