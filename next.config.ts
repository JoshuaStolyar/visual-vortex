import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The partner portal: /p (and any /p/… link) loads a small page that forwards to wherever the portal is running.
  async rewrites() {
    return [
      { source: '/p', destination: '/p.html' },
      { source: '/p/:path*', destination: '/p.html' },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;
