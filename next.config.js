/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  distDir: 'dist',
  env: {
    MJ_APIKEY_PUBLIC: process.env.MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE: process.env.MJ_APIKEY_PRIVATE
  }
};

module.exports = nextConfig;
