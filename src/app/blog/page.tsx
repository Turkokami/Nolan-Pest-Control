import type { Metadata } from "next";
import Link from "next/link";
import { postsNewestFirst, getTopicLabel } from "@/data/blog";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { formatISODate } from "@/lib/date";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = pageMetadata({
  title: "Pest Control Blog — Tips for Central New York Homes",
  description:
    `Seasonal pest tips, exclusion guides, wildlife advice, and Finger Lakes–specific pest control from ${business.name}.`,
  path: "/blog",
});

export default function BlogIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];
  const [featured, ...rest] = postsNewestFirst;

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/blog",
          name: "Blog",
          description: `Pest control tips and guides from ${business.name}.`,
          breadcrumbs: crumbs,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <div className="max-w-prose">
          <h1 className="text-4xl font-extrabold text-brand-900">Pest Control Blog</h1>
          <p className="mt-4 text-lg text-brand-900/80">
            Practical, Central-New-York-specific advice on keeping pests out of your home and
            business — seasonal guides, exclusion tips, wildlife know-how, and the local issues that
            actually matter in the Finger Lakes.
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-10 block rounded-2xl border border-brand-100 bg-brand-50 p-8 transition hover:border-brand-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {getTopicLabel(featured.topic)} · {formatISODate(featured.date)}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900 group-hover:text-brand-600">
              {featured.title}
            </h2>
            <p className="mt-2 max-w-prose text-brand-900/75">{featured.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-600">Read more →</span>
          </Link>
        )}

        {/* Rest */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {getTopicLabel(p.topic)}
              </p>
              <h3 className="mt-1 font-bold text-brand-800 group-hover:text-brand-600">{p.title}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-brand-900/70">{p.excerpt}</p>
              <span className="mt-3 text-xs text-brand-900/50">
                {formatISODate(p.date)} · {p.readMins} min read
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
