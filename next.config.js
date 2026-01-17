const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { dev }) {
    // 🚫 Ignore MSW in production
    if (!dev) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@/lib/msw/browser": false,
      };
    }
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
