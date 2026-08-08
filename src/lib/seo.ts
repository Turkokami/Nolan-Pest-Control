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
  const fullTitle =
    path === "/" ? `${title}` : `${title} | ${business.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
