const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["default", "jp", "vi"],
    defaultLocale: "default",
  },
  images: {
    domains: [
      "pbs.twimg.com",
      "i.imgur.com",
      "rabiloo.com",
      "images.alphacoders.com",
      "images2.alphacoders.com",
      "images3.alphacoders.com",
      "images4.alphacoders.com",
      "images7.alphacoders.com",
      "images8.alphacoders.com",
      "static.wixstatic.com",
    ],
  },
};
