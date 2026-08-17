/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.sketch.com',
      },
    ],
  },

  // Compression
  compress: true,

  // React strict mode
  reactStrictMode: true,

  // SWC minification (faster than Terser)
  swcMinify: true,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects (useful for SEO)
  async redirects() {
    return [
      {
        source: '/journal/:slug',
        destination: '/journal/:slug',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
