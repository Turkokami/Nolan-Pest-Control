import Link from "next/link";
import { business } from "@/data/business";
import { formatPhoneHref } from "@/lib/nap";

/** Sticky mobile call/quote bar — mobile-majority pest audience (audit §3). */
export function StickyCallCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-line bg-ink-900/95 p-3 shadow-lg backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={formatPhoneHref()}
          className="flex-1 rounded-lg bg-gradient-to-b from-gold-300 to-gold-600 px-4 py-3 text-center text-sm font-extrabold text-ink-900"
        >
          Call {business.phone}
        </a>
        <Link
          href="/#quote"
          className="flex-1 rounded-lg px-4 py-3 text-center text-sm font-semibold text-gold-400 ring-2 ring-inset ring-gold-500"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
