import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/knowledge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
