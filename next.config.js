/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'svoi.city',
      },
      {
        protocol: 'https',
        hostname: 'www.gorod.dp.ua',
      },
      {
        protocol: 'https',
        hostname: 'htmlacademy.org',
      },
      {
        protocol: 'https',
        hostname: 'd92mrp7hetgfk.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '4.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'news.liga.net',
      },
      {
        protocol: 'https',
        hostname: 's.dou.ua',
      },
    ],
  },
};

module.exports = nextConfig;
