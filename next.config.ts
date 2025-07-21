import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "<http://cdn.sanity.io|cdn.sanity.io>" }],
  },
};

export default nextConfig;
