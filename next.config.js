/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
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
    domains: [
      'images.unsplash.com', 
      'localhost', 
      'static.ghost.org',
      'digitalpress.fra1.cdn.digitaloceanspaces.com'
    ],
  },
}

module.exports = nextConfig
