import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["better-sqlite3"],
  reactCompiler: true,
};

export default nextConfig;
