import Link from "next/link";
import { counties } from "@/data/geo";
import { business } from "@/data/business";
import { Section } from "@/components/ui/Section";

/**
 * Service-area module — CORRECTED (audit Defect #2/#4).
 * Accurate county grouping (Elmira under Chemung, NOT Wayne; Binghamton removed).
 * Town names shown are real places; they become linked pages in Phase 2.
 */
export function ServiceAreaModule() {
  return (
    <Section id="areas" className="bg-brand-50">
      <div className="max-w-prose">
        <h2 className="text-3xl font-bold text-brand-900">Where We Serve</h2>
        <p className="mt-2 text-brand-900/70">
          Based in {business.hubCity}, we serve homes across a {business.serviceRadiusMiles}-mile
          radius of Central New York and the Finger Lakes.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {counties.map((c) => (
          <div key={c.slug} className="rounded-xl border border-brand-100 bg-white p-5">
            <h3 className="font-semibold text-brand-800">{c.name}</h3>
            <p className="mt-1 text-sm text-brand-900/70">
              {c.towns.map((t) => t.name).join(" · ")}
            </p>
          </div>
        ))}
      </div>
      <Link href="/service-areas" className="mt-6 inline-block font-semibold text-brand-600">
        See all service areas →
      </Link>
    </Section>
  );
}
