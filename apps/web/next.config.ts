import type { NextConfig } from "next";

const API_URL = process.env.API_URL;
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
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
    ]
  },
};

export default nextConfig;
