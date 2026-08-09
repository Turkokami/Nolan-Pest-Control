import Link from "next/link";
import { counties } from "@/data/geo";
import { countyUrl } from "@/data/geo-content";
import { business } from "@/data/business";
import { Section } from "@/components/ui/Section";

/**
 * Service-area module — CORRECTED (audit Defect #2/#4). Dark brand.
 * Accurate county grouping (Elmira under Chemung, NOT Wayne; Binghamton removed).
 */
export function ServiceAreaModule() {
  return (
    <Section id="areas" className="bg-ink-800">
      <div className="max-w-prose">
        <h2 className="text-3xl font-bold text-cream-50">Where We Serve</h2>
        <p className="mt-2 text-cream-200/85">
          Based in {business.hubCity}, we serve homes across a {business.serviceRadiusMiles}-mile
          radius of Central New York and the Finger Lakes.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {counties.map((c) => (
          <Link
            key={c.slug}
            href={countyUrl(c.slug)}
            className="rounded-xl border border-ink-line bg-ink-700 p-5 transition hover:border-gold-600"
          >
            <h3 className="font-semibold text-gold-400">{c.name}</h3>
            <p className="mt-1 text-sm text-cream-200/75">
              {c.towns.map((t) => t.name).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
      <Link href="/service-areas" className="mt-6 inline-block font-semibold text-gold-400">
        See all service areas →
      </Link>
    </Section>
  );
}
