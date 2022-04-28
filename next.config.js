/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/page/1',
        destination: '/',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost', 'static.ghost.org'],
  },
}

module.exports = nextConfig
