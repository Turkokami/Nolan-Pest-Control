import { Section } from "@/components/ui/Section";

const props = [
  { icon: "🛡️", title: "Guaranteed Results", body: "Defined-term service guarantee — if covered pests come back, so do we." },
  { icon: "🏡", title: "Family Owned & Operated", body: "A local family business serving Ithaca and Central New York." },
  { icon: "💲", title: "Prices You Can Afford", body: "Honest, upfront pricing with no surprise fees." },
  { icon: "🐾", title: "Safe for Family & Pets", body: "Products and methods rated for use in occupied homes." },
];

export function ValueProps() {
  return (
    <Section className="bg-ink-900 py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((p) => (
          <div key={p.title} className="rounded-xl border border-ink-line bg-ink-700 p-5">
            <div className="text-2xl" aria-hidden>{p.icon}</div>
            <h3 className="mt-2 font-semibold text-gold-400">{p.title}</h3>
            <p className="mt-1 text-sm text-cream-200/85">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
