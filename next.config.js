/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
  },
  experimental: {
    cssChunking: 'strict',
  },
}

module.exports = nextConfig
