/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Generates static HTML/CSS/JS files
  basePath: '/blt_sharepoint', // Change this to your repo name
  assetPrefix: '/blt_sharepoint/', // Change this to your repo name
};

module.exports = nextConfig; 