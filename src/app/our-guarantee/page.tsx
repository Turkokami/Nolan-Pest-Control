import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Our Guarantee",
  description: `${business.name}'s defined-term service guarantee. If covered pests return during the service period, we re-treat at no additional charge.`,
  path: "/our-guarantee",
});

/**
 * Defined-term warranty (audit Defect #17): specific term, scope, and exclusions.
 * NEVER "lifetime" or unqualified. Client/counsel should confirm exact periods before launch.
 */
export default function GuaranteePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Guarantee", path: "/our-guarantee" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/our-guarantee",
          name: "Our Guarantee",
          description: `${business.name} service guarantee terms.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <div className="max-w-prose space-y-4 text-brand-900/80">
          <h1 className="text-4xl font-extrabold text-brand-900">Our Guarantee</h1>
          <p className="text-lg">
            We stand behind our work with a clear, defined-term service guarantee — no vague
            promises, no fine-print surprises.
          </p>

          <h2 className="pt-4 text-xl font-bold text-brand-900">What&apos;s covered</h2>
          <p>
            If a pest covered by your service plan returns during your active service period, we
            will re-treat the affected area at no additional charge. For exclusion work (such as
            rodent and bat sealing), we provide a defined multi-year workmanship guarantee on the
            areas we seal or repair.
          </p>

          <h2 className="pt-4 text-xl font-bold text-brand-900">Service periods</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Recurring preventative plans: covered for the duration of the active plan.</li>
            <li>One-time treatments: re-treatment guarantee for the stated service window.</li>
            <li>Exclusion &amp; sealing: defined multi-year workmanship guarantee on sealed areas.</li>
          </ul>
          <p className="text-sm text-brand-900/60">
            {/* PENDING: confirm exact term lengths (e.g. 30/60/90 days, 1–3 years) with the owner before launch. */}
            Exact term lengths are confirmed on your service agreement.
          </p>

          <h2 className="pt-4 text-xl font-bold text-brand-900">Exclusions</h2>
          <p>
            The guarantee does not cover new infestations from untreated pest types, damage caused
            by conditions outside our treatment (such as ongoing moisture, structural gaps we did
            not seal, or third-party alterations), or properties where recommended preparation or
            follow-up steps were not completed. It is not a &ldquo;lifetime&rdquo; guarantee.
          </p>

          <div className="pt-4">
            <Button href="/#quote">Get a Free Estimate</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
