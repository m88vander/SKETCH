/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    strictNullChecks: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
