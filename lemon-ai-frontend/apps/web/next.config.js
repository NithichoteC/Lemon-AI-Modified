/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@lemonai/const',
    '@lemonai/types',
    '@lemonai/utils',
    '@lobehub/ui',
    '@lobehub/icons',
    'antd',
    'antd-style',
    'react-layout-kit',
  ],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
