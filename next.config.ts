import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rakurosu",
        destination: "https://rakurosu.trinityarc.jp/lp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
