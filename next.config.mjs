/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Lint is run separately, not as a deploy gate. Style rules (e.g. next/no-html-link-for-pages)
  // shouldn't block production builds. TypeScript errors still fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // /financing retired 2026-08-25 — the owner confirmed he does not offer
      // financing or payment plans. The page was live, so send it to pricing
      // rather than 404 anyone who has the link.
      { source: "/financing", destination: "/pest-control-cost-ithaca-ny", permanent: true },

      // ---------------------------------------------------------------------
      // Cutover from the previous nolanpestcontrol.com site (Netlify).
      //
      // That site was exactly nine URLs: the homepage plus eight flat service
      // pages. This build serves the same services under /services/<slug>, and
      // all eight slugs happen to match ours exactly, so every indexed URL has
      // a real one-to-one destination — nothing needs to land on a generic hub.
      //
      // Without these, every one of those pages 404s the moment DNS moves, and
      // whatever ranking and links they hold is thrown away. Verified live and
      // returning 200 on 2026-08-26 before this map was written.
      // ---------------------------------------------------------------------
      { source: "/general-pest", destination: "/services/general-pest", permanent: true },
      { source: "/roach-control", destination: "/services/roach-control", permanent: true },
      { source: "/rodent-control", destination: "/services/rodent-control", permanent: true },
      { source: "/ant-control", destination: "/services/ant-control", permanent: true },
      { source: "/spider-control", destination: "/services/spider-control", permanent: true },
      { source: "/stinging-insects", destination: "/services/stinging-insects", permanent: true },
      { source: "/mosquito-tick", destination: "/services/mosquito-tick", permanent: true },
      { source: "/bed-bug", destination: "/services/bed-bug", permanent: true },

      // ---------------------------------------------------------------------
      // Second pass, 2026-10-02. The first GSC export surfaced legacy URLs the
      // homepage crawl never exposed — they were reachable on the old site but
      // not linked from its front page, so the pre-cutover crawl missed them.
      // All four were still drawing impressions and dead-ending in a 404.
      // ---------------------------------------------------------------------
      { source: "/locations", destination: "/service-areas", permanent: true },

      // Wayne County town page from the old site. That county is deliberately
      // out of scope in this build (owner confirmed Ithaca-area positioning),
      // so there is no equivalent page — send it to the service-area hub rather
      // than inventing a destination.
      { source: "/locations/:town", destination: "/service-areas", permanent: true },

      // Old blog post about ants in Newark NY (Wayne County). Nearest genuine
      // match is the ant service page.
      {
        source: "/blog/ants-in-your-newark-home-nolan-pest-control-has-your-solution",
        destination: "/services/ant-control",
        permanent: true,
      },

      // Earlier slug for the renters-rights guide. We publish the same guide at
      // a different path.
      {
        source: "/guides/landlord-wont-pest-problem-new-york-renters-rights",
        destination: "/guides/landlord-wont-deal-with-pests-ny-renters-rights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
