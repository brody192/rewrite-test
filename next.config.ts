import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/about",
          destination: "/secret",
        },
      ],
    };
  },
};

export default nextConfig;
