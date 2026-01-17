const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { dev }) {
    // MSW ignore in production
    if (!dev) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@/lib/msw/browser": false,
      };
    }

    // Path alias fix for Vercel
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_BASE}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;