import { business } from "@/data/business";

/**
 * Named-expert E-E-A-T block (audit §5.3 Defect #9, Phase 1).
 * Written once, deployed across service/about/team pages. Renders real owner + NYSDEC
 * credentials when present in business.ts; degrades to a "licensed & local" trust panel until then.
 */
export function ExpertBlock({ compact = false }: { compact?: boolean }) {
  const hasOwner = Boolean(business.owner.name);
  const hasReg = Boolean(business.credentials.nysdecBusinessReg);

  return (
    <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Licensed &amp; local
      </p>
      {hasOwner ? (
        <p className="mt-2 text-brand-900/85">
          <strong className="text-brand-900">{business.owner.name}</strong> — {business.owner.role}
          {business.owner.bio ? `. ${business.owner.bio}` : "."}
        </p>
      ) : (
        <p className="mt-2 text-brand-900/85">
          Every treatment is performed by {business.name} — a family-owned company based in{" "}
          {business.hubCity}, serving our own neighbors across Central New York.
        </p>
      )}

      {!compact && (
        <ul className="mt-4 grid gap-1 text-sm text-brand-900/80 sm:grid-cols-2">
          {hasReg ? (
            <li>
              NYSDEC Pesticide Business Registration:{" "}
              <strong>{business.credentials.nysdecBusinessReg}</strong>
            </li>
          ) : (
            <li className="text-brand-900/60">NYSDEC-registered pest control business</li>
          )}
          {business.credentials.applicatorCert ? (
            <li>
              Certified Applicator ID: <strong>{business.credentials.applicatorCert}</strong>
            </li>
          ) : (
            <li className="text-brand-900/60">NYS-certified pesticide applicator</li>
          )}
          {business.credentials.insured && <li>Fully insured</li>}
          <li>Family owned &amp; operated</li>
        </ul>
      )}
    </div>
  );
}
