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
    ];
  },
};

export default nextConfig;
