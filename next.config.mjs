import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(process.cwd(), "src"),
      "@shared": path.resolve(process.cwd(), "..", "shared"),
    };
    return config;
  },
};

export default nextConfig;
