/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'serverless',
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
