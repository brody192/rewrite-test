import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/hello",
          destination: process.env.REWRITE_DESTINATION!,
        },
      ],
    };
  },
};

export default nextConfig;
