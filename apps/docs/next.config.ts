import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["matcha-ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
