// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export'
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "cdn.jsdelivr.net",
    ],
  },
};

module.exports = nextConfig;
