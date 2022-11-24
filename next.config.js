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
      "caron.vn",
      "vamas.com.vn"
    ],
  },
};
