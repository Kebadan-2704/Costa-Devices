import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },

  // Performance: tree-shake heavy icon libraries
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  allowedDevOrigins: ["10.42.255.12"],
  devIndicators: false,

  // Security headers (OWASP-compliant)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://logo.clearbit.com https://images.unsplash.com https://unpkg.com http://unpkg.com https://flagcdn.com; connect-src 'self' ws: wss: https://raw.githack.com https://raw.githubusercontent.com https://api.web3forms.com; worker-src 'self' blob:; frame-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
