/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { dev }) {
    // 🚫 Production build me MSW ko completely ignore karo
    if (!dev) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@/lib/msw/browser": false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
