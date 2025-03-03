/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true, // Required for static export
  },
  
  // Configuration varies based on environment
  ...(process.env.NODE_ENV === 'development' 
    ? {
        // Development settings - no basePath/assetPrefix for local testing
      }
    : {
        // Production settings
        output: 'export', // Static export for GitHub Pages
        // Use GITHUB_REPOSITORY environment variable in GitHub Actions, or default to '/BLT'
        basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '/BLT',
        // Add trailing slash to assetPrefix
        get assetPrefix() { return this.basePath + '/'; },
      }
  ),
};

module.exports = nextConfig; 