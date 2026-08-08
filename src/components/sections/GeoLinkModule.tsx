import Link from "next/link";
import { counties } from "@/data/geo";
import { business } from "@/data/business";

/**
 * Geo-link module (audit §8.3 "geo-link module"). Internally links every service page into
 * the county/geo tier so the hub-and-spoke hierarchy is real for crawlers and users.
 * In Phase 2, county names become links to their county hub pages; today they anchor the
 * Service Areas page and name the towns so the local intent is on-page.
 */
export function GeoLinkModule({ serviceName }: { serviceName: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6">
      <h2 className="text-xl font-bold text-brand-900">
        {serviceName} across Central New York
      </h2>
      <p className="mt-2 text-brand-900/75">
        Based in {business.hubCity}, we provide {serviceName.toLowerCase()} throughout the Finger
        Lakes and Central New York — five counties and the towns within them:
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {counties.map((c) => (
          <div key={c.slug} className="rounded-xl bg-brand-50 p-4">
            <p className="font-semibold text-brand-800">{c.name}</p>
            <p className="mt-1 text-sm text-brand-900/70">
              {c.towns.map((t) => t.name).join(" · ")}
            </p>
          </div>
        ))}
      </div>
      <Link href="/service-areas" className="mt-4 inline-block font-semibold text-brand-600">
        See all service areas →
      </Link>
    </div>
  );
}
