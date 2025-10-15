/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@lemonai/const', '@lemonai/types', '@lemonai/utils'],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
