import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ExpertBlock } from "@/components/sections/ExpertBlock";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: `Meet the family behind ${business.name} — licensed, local, and serving Central New York.`,
  path: "/team",
});

/**
 * Team page — E-E-A-T layer (audit Defect #9). Renders real owner/team + credentials once
 * supplied in business.ts. Until then it presents the trust panel and invites the client inputs.
 */
export default function TeamPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/team" },
  ];
  const hasOwner = Boolean(business.owner.name);

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/team",
          name: "Our Team",
          description: `The team behind ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Meet the Family Behind {business.name}</h1>
          <p className="mt-4 text-lg text-brand-900/80">{business.brandLine}</p>
          <p className="mt-4 text-brand-900/80">
            We&apos;re not a franchise or a call center. We&apos;re a local, family-owned pest control
            company based in {business.hubCity}, and when you call, you reach the people who actually
            do the work and stand behind it.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          {hasOwner ? (
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <h2 className="text-xl font-bold text-brand-900">{business.owner.name}</h2>
              <p className="text-sm font-semibold text-brand-600">{business.owner.role}</p>
              {business.owner.bio && <p className="mt-3 text-brand-900/80">{business.owner.bio}</p>}
            </div>
          ) : (
            <ExpertBlock />
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#quote">Get a Free Estimate</Button>
          <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
        </div>
      </Section>
    </>
  );
}
