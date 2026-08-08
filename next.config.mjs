/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Phase 0: none. Existing service URLs are clean and preserved (audit §3).
    return [];
  },
};

export default nextConfig;
