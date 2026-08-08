/**
 * siteSchema.ts — the 7-node @graph (audit §9), assembled from the locked data modules.
 * Rooted at {url}#localbusiness. NAP flows from business.ts via lib/nap.
 *
 * IMPORTANT (Defect #1): NO Review / AggregateRating node is emitted. It stays absent until
 * real reviews exist. Do not add it here from testimonials.
 */
import { business } from "@/data/business";
import { counties } from "@/data/geo";
import { schemaPostalAddress } from "@/lib/nap";
import { siteUrl } from "@/lib/seo";

const ORG_ID = `${siteUrl}/#organization`;
const LB_ID = `${siteUrl}/#localbusiness`;
const SITE_ID = `${siteUrl}/#website`;

function sameAs(): string[] {
  const urls: string[] = [
    business.social.facebook,
    business.social.instagram,
    business.social.gbp,
  ];
  return urls.filter((u) => u.length > 0);
}

/** Explicit Place list for areaServed (counties). Towns added in Phase 2. */
function areaServed() {
  const geoCircle = {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    geoRadius: business.serviceRadiusMiles * 1609, // miles → meters
  };
  const places = counties.map((c) => ({
    "@type": "AdministrativeArea",
    name: `${c.name}, NY`,
  }));
  return [geoCircle, ...places];
}

function openingHours() {
  return business.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }));
}

/** Site-wide @graph: Organization + LocalBusiness/PestControlService + WebSite (+ optional Person). */
export function siteGraph() {
  const address = schemaPostalAddress();

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: sameAs(),
  };

  const localBusiness: Record<string, unknown> = {
    "@type": ["LocalBusiness", "PestControlService"],
    "@id": LB_ID,
    name: business.name,
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: business.priceRange,
    parentOrganization: { "@id": ORG_ID },
    areaServed: areaServed(),
    openingHoursSpecification: openingHours(),
    ...(address ? { address } : {}),
  };

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteUrl,
    name: business.name,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const graph: Record<string, unknown>[] = [organization, localBusiness, website];

  // Person node only when the owner is named (Defect #9).
  if (business.owner.name) {
    graph.push({
      "@type": "Person",
      "@id": `${siteUrl}/#owner`,
      name: business.owner.name,
      jobTitle: business.owner.role,
      worksFor: { "@id": ORG_ID },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Per-page WebPage + BreadcrumbList (audit §9 nodes 4 & 7). */
export function pageGraph(opts: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  const url = `${siteUrl}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": SITE_ID },
        about: { "@id": LB_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: opts.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${siteUrl}${b.path}`,
        })),
      },
    ],
  };
}

/** Service node (audit §9 node 5) — linked to provider + areaServed. */
export function serviceGraph(opts: {
  path: string;
  name: string;
  description: string;
}) {
  const url = `${siteUrl}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@id": LB_ID },
    areaServed: areaServed(),
    url,
  };
}

/** FAQPage node (audit §9 node 6) — only when a page actually has FAQs. */
export function faqGraph(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
