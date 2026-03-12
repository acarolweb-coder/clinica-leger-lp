import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.robertochacur.com" },
      { protocol: "https", hostname: "s2-oglobo.glbimg.com" },
      { protocol: "https", hostname: "i.s3.glbimg.com" },
      { protocol: "https", hostname: "midias.correio24horas.com.br" },
      { protocol: "https", hostname: "jeffersondealmeida.com.br" },
    ],
  },
};

export default nextConfig;
