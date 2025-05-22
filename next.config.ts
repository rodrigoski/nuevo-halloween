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
    unoptimized: true, // Necesario con output: 'export'
  },
  experimental: {
    // Eliminar serverActions
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
