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
    ];
  },
};

export default nextConfig;
