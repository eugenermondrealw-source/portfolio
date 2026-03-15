import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined, // Static export only for GitHub Pages
  basePath: isGithubPages ? "/portfolio" : "",   // Subpath only for GitHub Pages
  assetPrefix: isGithubPages ? "/portfolio/" : "", // Asset prefix only for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {},
};

export default nextConfig;
