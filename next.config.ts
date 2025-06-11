import type { NextConfig } from "next";

// Check for GitHub Pages deployment
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/robotics_startup',
  assetPrefix: '/robotics_startup',
  distDir: 'out',
};

export default nextConfig;
