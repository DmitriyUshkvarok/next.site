/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    serverActions: true,
  },
  output: 'standalone',
  images: {
    domains: [
      'svoi.city',
      'www.gorod.dp.ua',
      'htmlacademy.org',
      'd92mrp7hetgfk.cloudfront.net',
      '4.bp.blogspot.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'encrypted-tbn0.gstatic.com',
      'news.liga.net',
      's.dou.ua',
    ],
  },
};

module.exports = nextConfig;
