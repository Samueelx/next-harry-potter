/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
            },
        ],
        minimumCacheTTL: 15000000,
    },
}

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
