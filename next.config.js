/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

  reactStrictMode: true,
  eslint: {
    dirs: [
      'stories',
      'src/__test__',
      'src/common',
      'src/helpers',
      'src/modules',
      'src/pages',
      'src/styles',
      'src/templates',
    ],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
    // unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/builder',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
