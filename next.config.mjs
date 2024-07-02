/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
