import Link from "next/link";
import { coreServices } from "@/data/services";
import { Section } from "@/components/ui/Section";

/** Core-8 service grid on the homepage; full 22 live on the /services index. */
export function ServiceGrid() {
  return (
    <Section id="services">
      <div className="max-w-prose">
        <h2 className="text-3xl font-bold text-brand-900">Our Pest Control Services</h2>
        <p className="mt-2 text-brand-900/70">
          The core services Central New York homes need most — plus specialized help with carpenter
          ants, cluster flies, bats, wildlife, and more across our{" "}
          <Link href="/services" className="font-semibold text-brand-600 underline">full 22-service lineup</Link>.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreServices.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
          >
            <h3 className="font-semibold text-brand-800 group-hover:text-brand-600">{s.name}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-brand-900/70">{s.answer}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-600">Learn more →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
