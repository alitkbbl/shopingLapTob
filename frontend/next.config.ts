// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.technolife.com', 'www.technolife.ir'],
  },
};

export default nextConfig;
