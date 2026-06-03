import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL("http://image.tmdb.org/t/p/**")],
  },
};

export default nextConfig;
