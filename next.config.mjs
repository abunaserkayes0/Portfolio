/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "static.expo.dev" },
      { protocol: "https", hostname: "hono.dev" },
      { protocol: "https", hostname: "www.cursor.com" },
    ],
  },
};

export default nextConfig;
