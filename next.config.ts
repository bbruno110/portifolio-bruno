import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Permite testar pelo celular usando o IP deste computador na rede local.
  allowedDevOrigins: ["192.168.1.90"],
};

export default nextConfig;
