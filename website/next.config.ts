import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,   // ← This skips Sharp during build
  },
};


export default nextConfig;
