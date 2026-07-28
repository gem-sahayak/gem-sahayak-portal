import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/knowledge",
        permanent: true,
      },
      {
        source: "/tools/profile-readiness-checker",
        destination: "/tools",
        permanent: true,
      },
      {
        source: "/tools/gst-pan-validator",
        destination: "/tools",
        permanent: true,
      },
      {
        source: "/posts/gem-catalog-rejected-reasons",
        destination: "/knowledge/catalog-management/gem-catalog-rejected-reasons",
        permanent: true,
      },
      {
        source: "/posts/fees-explained",
        destination: "/knowledge/gem-registration/fees-explained",
        permanent: true,
      },
      {
        source: "/posts/:slug*",
        destination: "/knowledge",
        permanent: true,
      },
      {
        source: "/knowledge/gem-account-management",
        destination: "/knowledge/gem-registration",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
