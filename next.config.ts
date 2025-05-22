/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',   
  images: {
    unoptimized: true, // Desactiva optimización de imágenes
  },
  // Habilita si usas videos
  experimental: {
    // Cambiado de booleano a objeto como requiere Next.js 15.3.2
    serverActions: {
      allowedOrigins: ["*"],
      bodySizeLimit: '2mb'
    },
    optimizePackageImports: ['lucide-react']
  }
};

// Cambiado a export default para archivos .ts
export default nextConfig;
