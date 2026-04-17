import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" output is for Docker/Render, Netlify uses its own plugin
  // output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
