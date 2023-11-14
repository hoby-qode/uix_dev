/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: "0.gravatar.com"
      },
      {
        protocol: 'http',
        hostname: "1.gravatar.com"
      }
    ],
  },
}

module.exports = nextConfig
