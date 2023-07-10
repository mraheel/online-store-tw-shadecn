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
          },{
            source: '/data/:path*',
            destination: 'https://v7oyyrqz.api.sanity.io/v2023-05-31/:path*'
          }
        ]
      },
      
}

module.exports = nextConfig
