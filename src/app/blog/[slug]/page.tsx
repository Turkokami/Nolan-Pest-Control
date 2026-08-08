import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPost, getTopicLabel, postsNewestFirst } from "@/data/blog";
import { getService } from "@/data/services";
import { business } from "@/data/business";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { formatISODate } from "@/lib/date";
import { formatPhoneHref } from "@/lib/nap";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const related = (post.relatedServices ?? [])
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const more = postsNewestFirst.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: getTopicLabel(post.topic),
    url: `${siteUrl}${path}`,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  return (
    <>
      <JsonLd data={pageGraph({ path, name: post.title, description: post.excerpt, breadcrumbs: crumbs })} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={crumbs} />

      <Section className="pt-6">
        <article className="mx-auto max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {getTopicLabel(post.topic)}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-brand-900">{post.title}</h1>
          <p className="mt-3 text-sm text-brand-900/50">
            {formatISODate(post.date)} · {post.readMins} min read
          </p>

          <div className="mt-8 space-y-6">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-bold text-brand-900">{section.heading}</h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="mt-3 text-brand-900/80">{para}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Related services */}
          {related.length > 0 && (
            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Related services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100 hover:ring-brand-300"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#quote">Get a Free Estimate</Button>
            <Button href={formatPhoneHref()} variant="secondary">Call {business.phone}</Button>
          </div>
        </article>
      </Section>

      {/* More posts */}
      <Section className="pt-0">
        <div className="mx-auto max-w-prose">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">More from the blog</h2>
          <ul className="mt-4 space-y-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="font-semibold text-brand-800 hover:text-brand-600 hover:underline">
                  {p.title}
                </Link>
                <span className="block text-xs text-brand-900/50">{formatISODate(p.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
