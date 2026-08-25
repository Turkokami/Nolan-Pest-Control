import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "About Nolan Pest Control",
  description: `${business.name} is a family-owned pest control company serving Ithaca and Central New York.`,
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const hasOwner = Boolean(business.owner.name);
  // Render whichever credentials we actually have. Gating the applicator cert behind the
  // business registration hid a real, supplied credential behind a missing one.
  const hasCreds = Boolean(
    business.credentials.nysdecBusinessReg || business.credentials.applicatorCert,
  );

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/about",
          name: "About",
          description: `About ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">About {business.name}</h1>
          <img
            src="/family.jpg"
            alt={`The ${business.name} family with the service truck`}
            className="mt-6 w-full rounded-2xl border border-brand-100 object-cover"
          />
          <p className="mt-6 text-lg text-brand-900/80">{business.brandLine}</p>
          <p className="mt-4 text-brand-900/75">
            We&apos;re a family-owned pest control company based in {business.hubCity}, serving homes
            across Tompkins, Schuyler, Chemung, Cortland and Tioga counties. We believe in honest
            pricing, doing the job right the first time, and treating your home the way we&apos;d
            treat our own.
          </p>

          {/* E-E-A-T block — renders real credentials when supplied (Defect #9). */}
          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h2 className="text-xl font-bold text-brand-900">Licensed &amp; local</h2>
            {hasOwner ? (
              <p className="mt-2 text-brand-900/80">
                <strong>{business.owner.name}</strong> — {business.owner.role}. {business.owner.bio}
              </p>
            ) : (
              <p className="mt-2 text-sm text-brand-900/60">
                {/* PENDING: owner name, bio, and photo. See docs/03-PHASE-0-CHECKLIST.md. */}
                Owner bio and photo coming soon.
              </p>
            )}
            <ul className="mt-4 space-y-1 text-sm text-brand-900/80">
              {hasCreds ? (
                <>
                  {business.credentials.nysdecBusinessReg && (
                    <li>NYSDEC Pesticide Business Registration: <strong>{business.credentials.nysdecBusinessReg}</strong></li>
                  )}
                  {business.credentials.applicatorCert && (
                    <li>
                      Certified Applicator: <strong>{business.owner.name}</strong>, ID{" "}
                      <strong>{business.credentials.applicatorCert}</strong>
                    </li>
                  )}
                </>
              ) : (
                <li className="text-brand-900/60">
                  {/* PENDING: publish NYSDEC business registration + applicator certification. */}
                  NYSDEC registration &amp; certification details coming soon.
                </li>
              )}
              {business.credentials.insured && <li>Fully insured</li>}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
