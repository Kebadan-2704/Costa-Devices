import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  // @ts-ignore
  allowedDevOrigins: ['10.42.255.12'],
};

export default nextConfig;
