import type { MetadataRoute } from "next";
import { routedServices } from "@/data/services";
import { counties } from "@/data/geo";
import { countyUrl, townUrl, priorityTownSlugs } from "@/data/geo-content";
import { pestSlugs } from "@/data/pests";
import { postSlugs } from "@/data/blog";
import { neighborhoodSlugs } from "@/data/neighborhood-content";
import { guideSlugs } from "@/data/guides";
import { moneyPages } from "@/data/money-pages";
import { siteUrl } from "@/lib/seo";

/**
 * Sitemap — auto-includes every live route. Grows automatically as service/geo data expands.
 * Deferred (Wayne) pages excluded by design.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/services",
    "/residential",
    "/commercial",
    "/about",
    "/team",
    "/contact",
    "/service-areas",
    "/pest-library",
    "/blog",
    "/guides",
    "/our-guarantee",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const servicePaths = routedServices.map((s) => `/services/${s.slug}`);
  const countyPaths = counties.map((c) => countyUrl(c.slug));
  const townPaths = priorityTownSlugs.map((t) => townUrl(t));
  const pestPaths = pestSlugs.map((s) => `/pest-library/${s}`);
  const blogPaths = postSlugs.map((s) => `/blog/${s}`);
  const neighborhoodPaths = neighborhoodSlugs.map((s) => `/neighborhoods/${s}`);
  const guidePaths = guideSlugs.map((s) => `/guides/${s}`);
  const moneyPaths = moneyPages.map((m) => `/services/${m.serviceSlug}/${m.townSlug}`);

  const all = [
    ...staticPaths,
    ...servicePaths,
    ...countyPaths,
    ...townPaths,
    ...pestPaths,
    ...blogPaths,
    ...neighborhoodPaths,
    ...guidePaths,
    ...moneyPaths,
  ];

  return all.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
