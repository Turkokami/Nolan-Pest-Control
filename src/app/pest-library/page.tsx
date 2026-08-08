import type { Metadata } from "next";
import Link from "next/link";
import { pestClusters, pestsInCluster, pestCount } from "@/data/pests";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Pest Library — Central New York Pest Guide",
  description:
    `Identification, habits, and treatment for ${pestCount}+ pests found in Central New York and the Finger Lakes — rodents, ants, roaches, stinging insects, ticks, wildlife and more. From ${business.name}.`,
  path: "/pest-library",
});

export default function PestLibraryPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pest Library", path: "/pest-library" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/pest-library",
          name: "Pest Library",
          description: `A guide to ${pestCount}+ pests found in Central New York.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Central New York Pest Library</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            A field guide to the {pestCount}+ pests that actually turn up in Central New York and the
            Finger Lakes — how to identify each one, what it does, when it&apos;s active here, and how
            it&apos;s treated. Not sure what you&apos;re dealing with? Start with the category, then
            find your pest.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {pestClusters.map((cluster) => {
            const list = pestsInCluster(cluster.key);
            if (!list.length) return null;
            return (
              <div key={cluster.key} id={cluster.key}>
                <h2 className="text-2xl font-bold text-brand-900">{cluster.label}</h2>
                <p className="mt-1 text-sm text-brand-900/70">{cluster.blurb}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/pest-library/${p.slug}`}
                      className="group rounded-xl border border-brand-100 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm"
                    >
                      <h3 className="font-semibold text-brand-800 group-hover:text-brand-600">{p.commonName}</h3>
                      <p className="mt-1 text-xs italic text-brand-900/50">{p.scientificName}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-brand-900/70">{p.identification}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
