/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''
const assetPrefix = process.env.ASSET_PREFIX || basePath

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  output: 'export',
  basePath,
  assetPrefix
}
