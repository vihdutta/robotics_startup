import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/robotics-startup' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/robotics-startup/' : '',
};

export default nextConfig;
