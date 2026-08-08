/** Native <details> accordion — no client JS required. Pairs with FAQPage schema. */
export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <div className="divide-y divide-brand-100 rounded-xl border border-brand-100 bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none font-semibold text-brand-800 marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {f.q}
              <span aria-hidden className="text-brand-500 transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-brand-900/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
