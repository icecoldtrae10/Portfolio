import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF/WebP output for any real photographs or screenshots you add later.
    formats: ["image/avif", "image/webp"],
    // Allows SVG logos/screenshots to pass through the optimizer safely.
    // The CSP sandbox below is the configuration recommended by Next.js.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
