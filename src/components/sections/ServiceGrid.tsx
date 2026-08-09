import Link from "next/link";
import { coreServices } from "@/data/services";
import { Section } from "@/components/ui/Section";

/** Core-8 service grid on the homepage; full 22 live on the /services index. Dark brand. */
export function ServiceGrid() {
  return (
    <Section id="services" className="bg-ink-900">
      <div className="max-w-prose">
        <h2 className="text-3xl font-bold text-cream-50">Our Pest Control Services</h2>
        <p className="mt-2 text-cream-200/85">
          The core services Central New York homes need most — plus specialized help with carpenter
          ants, cluster flies, bats, wildlife, and more across our{" "}
          <Link href="/services" className="font-semibold text-gold-400 underline">full 22-service lineup</Link>.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreServices.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border border-ink-line bg-ink-700 p-5 transition hover:border-gold-600"
          >
            <h3 className="font-semibold text-cream-100 group-hover:text-gold-400">{s.name}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-cream-200/75">{s.answer}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-gold-400">Learn more →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
