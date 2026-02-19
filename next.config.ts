import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export
  basePath: '/portfolio', // Replace with your actual repo name
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {},
};

export default nextConfig;
