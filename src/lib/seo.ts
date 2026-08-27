import type { Metadata } from "next";
import { business } from "@/data/business";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || business.url;

interface PageSeo {
  title: string;
  description: string;
  path?: string; // e.g. "/rodent-control"
}

/** Build page metadata consistently. Phone in description per audit §3 (working today, keep it). */
export function pageMetadata({ title, description, path = "/" }: PageSeo): Metadata {
  const url = `${siteUrl}${path}`;
  // The root layout sets a Next.js title template (`%s | ${business.name}`), which brands every
  // child title automatically. Appending the brand here as well produced titles carrying it twice
  // — three times on pages whose own title already named the business. Pass the bare title and let
  // the template do it. openGraph.title is NOT run through the template, so it keeps the branded
  // form explicitly.
  const brandedTitle =
    path === "/" ? `${title}` : `${title} | ${business.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
