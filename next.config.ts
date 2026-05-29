import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.148'],
  output: 'export',
  trailingSlash: true,      // recommended for static hosting
  images: {
    unoptimized: true,      // next/image needs this for static export
  },
};

export default nextConfig;
