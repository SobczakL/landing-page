/** @type {import('next').NextConfig} */
const nextConfig = {}

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Other Next.js configurations...

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }
    
    return config;
  },
};

module.exports = nextConfig
