import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: '"api.microlink.io"' },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
