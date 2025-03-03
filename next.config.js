/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true, // Required for static export
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined, // Only use export for production
  basePath: process.env.NODE_ENV === 'production' ? '/blt_sharepoint' : '', // Only use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blt_sharepoint/' : '', // Only use assetPrefix in production
};

module.exports = nextConfig; 