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
    // Phase 0: none. Existing service URLs are clean and preserved (audit §3).
    return [];
  },
};

export default nextConfig;
