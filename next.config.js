/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable type checking during production build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable eslint during production build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
