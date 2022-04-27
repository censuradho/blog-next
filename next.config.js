/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost', 'static.ghost.org'],
  },
}

module.exports = nextConfig
