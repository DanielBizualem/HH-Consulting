import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Replace with your host's domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
