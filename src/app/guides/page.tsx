import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Pest Problem Guides — Central New York",
  description:
    `Straight answers to common pest questions in Central New York — scratching in the walls, a bat in the house, bed bugs in a rental, and more. From ${business.name}.`,
  path: "/guides",
});

export default function GuidesIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/guides",
          name: "Pest Problem Guides",
          description: `Answers to common pest questions in Central New York.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Pest Problem Guides</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            Not sure what you&apos;re dealing with? These are straight, practical answers to the
            questions Central New York homeowners and renters actually ask — the noises, the signs,
            and what to do right now.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
            >
              <h2 className="font-bold text-brand-800 group-hover:text-brand-600">{g.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-brand-900/70">{g.answerLead}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600">Read the answer →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
