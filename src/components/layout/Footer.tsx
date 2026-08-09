import Link from "next/link";
import { business } from "@/data/business";
import { coreServices } from "@/data/services";
import { counties } from "@/data/geo";
import { countyUrl } from "@/data/geo-content";
import { formatPhoneHref, formatPhoneDisplay, formatAddressLine } from "@/lib/nap";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-8 border-t border-ink-line bg-black text-cream-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <img src="/logo.png" alt={business.name} className="h-14 w-auto" />
          <p className="mt-3 text-sm text-cream-200/85">{business.brandLine}</p>
          <address className="mt-4 not-italic text-sm text-cream-100/90">
            <a href={formatPhoneHref()} className="block font-semibold text-gold-300 hover:underline">
              {formatPhoneDisplay()}
            </a>
            <a href={`mailto:${business.email}`} className="block hover:underline">
              {business.email}
            </a>
            <span className="mt-1 block">{formatAddressLine()}</span>
            <span className="mt-1 block">{business.hours[0]?.label}</span>
            <span className="block">{business.hoursNote}</span>
          </address>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">Services</p>
          <ul className="mt-3 space-y-1 text-sm text-cream-200/90">
            {coreServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold-300">{s.shortName}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-gold-400 hover:underline">All 22 services →</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">Service Areas</p>
          <ul className="mt-3 space-y-1 text-sm text-cream-200/90">
            {counties.map((c) => (
              <li key={c.slug}>
                <Link href={countyUrl(c.slug)} className="hover:text-gold-300">{c.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-2 inline-block text-sm font-semibold text-gold-400 underline">
            All areas →
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">Company</p>
          <ul className="mt-3 space-y-1 text-sm text-cream-200/90">
            <li><Link href="/about" className="hover:text-gold-300">About</Link></li>
            <li><Link href="/team" className="hover:text-gold-300">Our Team</Link></li>
            <li><Link href="/residential" className="hover:text-gold-300">Residential</Link></li>
            <li><Link href="/commercial" className="hover:text-gold-300">Commercial</Link></li>
            <li><Link href="/pest-library" className="hover:text-gold-300">Pest Library</Link></li>
            <li><Link href="/blog" className="hover:text-gold-300">Blog</Link></li>
            <li><Link href="/guides" className="hover:text-gold-300">Pest Guides</Link></li>
            <li><Link href="/faq" className="hover:text-gold-300">FAQ</Link></li>
            <li><Link href="/pest-control-cost-ithaca-ny" className="hover:text-gold-300">Pricing</Link></li>
            <li><Link href="/financing" className="hover:text-gold-300">Financing</Link></li>
            <li><Link href="/reviews" className="hover:text-gold-300">Reviews</Link></li>
            <li><Link href="/careers" className="hover:text-gold-300">Careers</Link></li>
            <li><Link href="/our-guarantee" className="hover:text-gold-300">Our Guarantee</Link></li>
            <li><Link href="/contact" className="hover:text-gold-300">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Residential &amp; Commercial · Locally Family Owned &amp; Operated</p>
        </div>
      </div>
    </footer>
  );
}
