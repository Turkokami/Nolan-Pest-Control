import Link from "next/link";
import { business } from "@/data/business";
import { coreServices } from "@/data/services";
import { formatPhoneHref } from "@/lib/nap";
import { Button } from "@/components/ui/Button";

/** Header with hub-and-spoke nav. Mobile menu uses <details> — no client JS. */
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-line bg-ink-900/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* Real Nolan brand logo (gold death's-head moth) */}
          <img src="/logo.png" alt={business.name} className="h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm font-medium text-cream-100 lg:flex">
          <div className="group relative">
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <div className="invisible absolute left-0 top-full z-40 w-64 rounded-xl border border-ink-line bg-ink-800 p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {coreServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block rounded-lg px-3 py-2 text-cream-100 hover:bg-ink-700 hover:text-gold-400"
                >
                  {s.name}
                </Link>
              ))}
              <Link href="/services" className="mt-1 block rounded-lg bg-ink-700 px-3 py-2 font-semibold text-gold-400 hover:bg-ink-600">
                All 22 services →
              </Link>
            </div>
          </div>
          <Link href="/residential" className="hover:text-gold-400">Residential</Link>
          <Link href="/commercial" className="hover:text-gold-400">Commercial</Link>
          <Link href="/service-areas" className="hover:text-gold-400">Areas</Link>
          <Link href="/pest-library" className="hover:text-gold-400">Pest Library</Link>
          <Link href="/blog" className="hover:text-gold-400">Blog</Link>
          <Link href="/about" className="hover:text-gold-400">About</Link>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={formatPhoneHref()} className="text-sm font-semibold text-gold-300">
            {business.phone}
          </a>
          <Button href="/#quote">Free Estimate</Button>
        </div>

        {/* Mobile menu */}
        <details className="lg:hidden">
          <summary className="cursor-pointer rounded-lg p-2 text-cream-100 marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <span aria-hidden className="text-2xl leading-none">≡</span>
          </summary>
          <div className="absolute inset-x-0 top-full border-b border-ink-line bg-ink-900 p-4 shadow-lg">
            <div className="grid gap-1 text-sm font-medium text-cream-100">
              <Link href="/services" className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-gold-500">All Services →</Link>
              {coreServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">
                  {s.name}
                </Link>
              ))}
              <div className="my-2 h-px bg-ink-line" />
              <Link href="/residential" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Residential</Link>
              <Link href="/commercial" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Commercial</Link>
              <Link href="/service-areas" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Service Areas</Link>
              <Link href="/pest-library" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Pest Library</Link>
              <Link href="/blog" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Blog</Link>
              <Link href="/about" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">About</Link>
              <Link href="/team" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Our Team</Link>
              <Link href="/contact" className="rounded-lg px-3 py-2 hover:bg-ink-700 hover:text-gold-400">Contact</Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
