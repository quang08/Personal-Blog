/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig
