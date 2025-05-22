/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Agrega dominios si usas imágenes externas
  },
  // Habilita si usas videos
  experimental: {
    serverActions: true,
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = nextConfig;