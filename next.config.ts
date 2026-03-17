import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@aztec/bb.js"],
  outputFileTracingIncludes: {
    '/api/faucet': ["./node_modules/@aztec/bb.js/dest/node/**/*", "./node_modules/@aztec/bb.js/dest/node-cjs/**/*"],
  },
};

export default nextConfig;
