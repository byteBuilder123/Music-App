import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
    // domains: ['images.unsplash.com'] // Allow domains for remote images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
