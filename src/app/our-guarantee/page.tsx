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
  description: `${business.name} guarantees its work for ${business.credentials.retreatmentDays} days. If a pest we treated for returns in that window, we re-treat at no additional charge.`,
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
            We guarantee our work for {business.credentials.retreatmentDays} days. If a pest we
            treated for comes back in that window, we come back too — no vague promises and no fine
            print to read first.
          </p>

          <h2 className="pt-4 text-xl font-bold text-brand-900">What&apos;s covered</h2>
          <p>
            If a pest we treated for comes back within{" "}
            <strong>{business.credentials.retreatmentDays} days</strong>, we return and re-treat the
            affected area at no additional charge. That window applies to seasonal pests and to
            roaches, fleas and bed bugs alike — one number, so there is nothing to work out later.
          </p>

          <h2 className="pt-4 text-xl font-bold text-brand-900">Service periods</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              One-time treatments: {business.credentials.retreatmentDays}-day re-treatment
              guarantee from the date of service.
            </li>
            <li>
              Roaches, fleas and bed bugs: the same {business.credentials.retreatmentDays}-day
              re-treatment guarantee.
            </li>
            <li>Recurring preventative plans: covered for the duration of the active plan.</li>
          </ul>

          <h2 className="pt-4 text-xl font-bold text-brand-900">Exclusion and sealing work</h2>
          <p>
            {/* The owner has confirmed the 90-day re-treatment window but not a workmanship term for
                sealing work, so this page does not state one. Do not add a duration here until he
                confirms it — an unqualified or invented warranty term is exactly what Defect #17
                exists to prevent. */}
            Exclusion and sealing jobs are quoted individually, and the workmanship terms for the
            areas we seal are set out in your written estimate before any work begins.
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
