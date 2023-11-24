/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: [
      '@react-email/components',
      '@react-email/render',
      '@react-email/tailwind'
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'uixdev.s193304.mos2.atester.fr',
      },
      {
        protocol: 'http',
        hostname: "*.gravatar.com"
      }
    ],
  },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/wp-json/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
  }
}

module.exports = nextConfig
