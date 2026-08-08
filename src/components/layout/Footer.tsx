import Link from "next/link";
import { business } from "@/data/business";
import { coreServices } from "@/data/services";
import { counties } from "@/data/geo";
import { countyUrl } from "@/data/geo-content";
import { formatPhoneHref, formatPhoneDisplay, formatAddressLine } from "@/lib/nap";

export function Footer() {
  const year = 2026; // static; bump per build. (Date.now() unavailable at author time.)
  return (
    <footer className="mt-8 border-t border-brand-100 bg-brand-900 text-brand-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{business.name}</p>
          <p className="mt-2 text-sm text-brand-100/80">{business.brandLine}</p>
          {/* NAP block — single formatter (lib/nap) */}
          <address className="mt-4 not-italic text-sm text-brand-100/90">
            <a href={formatPhoneHref()} className="block font-semibold hover:underline">
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
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Services</p>
          <ul className="mt-3 space-y-1 text-sm text-brand-100/90">
            {coreServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:underline">{s.shortName}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold underline">All 22 services →</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Service Areas</p>
          <ul className="mt-3 space-y-1 text-sm text-brand-100/90">
            {counties.map((c) => (
              <li key={c.slug}>
                <Link href={countyUrl(c.slug)} className="hover:underline">{c.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-2 inline-block text-sm font-semibold underline">
            All areas →
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Company</p>
          <ul className="mt-3 space-y-1 text-sm text-brand-100/90">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/team" className="hover:underline">Our Team</Link></li>
            <li><Link href="/residential" className="hover:underline">Residential</Link></li>
            <li><Link href="/commercial" className="hover:underline">Commercial</Link></li>
            <li><Link href="/pest-library" className="hover:underline">Pest Library</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/guides" className="hover:underline">Pest Guides</Link></li>
            <li><Link href="/our-guarantee" className="hover:underline">Our Guarantee</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-brand-100/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Family owned & operated · Serving Central New York</p>
        </div>
      </div>
    </footer>
  );
}
