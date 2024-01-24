/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'v1.tailwindcss.com'],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    
    return config;
  },
}

module.exports = nextConfig
