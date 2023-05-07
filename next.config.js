/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    // Twitter Profile Picture
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  output: 'export',
  distDir: 'dist'
};

module.exports = nextConfig;
