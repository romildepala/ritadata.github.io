/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://ritapersonaldata.com/',
    unoptimized: true,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
