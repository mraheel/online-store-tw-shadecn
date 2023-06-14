/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io'
            }
        ],
      },
      async rewrites() {
        return [
          {
            source: '/data/:path*',
            destination: 'https://online-store-blue-seven.vercel.app/:path*',
          },
        ]
      },
}

module.exports = nextConfig
