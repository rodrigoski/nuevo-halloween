import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// 1. Define tipos
type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
};

// 2. Datos de ejemplo
const galleryItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: "/tainy.jpg", 
    alt: "Foto de la fiesta",
    width: 800,
    height: 600
  },
  {
    id: 2,
    type: 'video',
    src: "/WhatsApp Video 2025-05-20 at 12.39.24 PM (1).mp4", 
    alt: "Video de la fiesta",
    poster: "/jalowin.jpg" 
  }
];

// 3. Componente para renderizar cada elemento
const MediaCard = ({ item }: { item: MediaItem }) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800">
      {item.type === 'image' ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          quality={80}
        />
      ) : (
        <>
          {/* Thumbnail (obligatorio para videos) */}
          {item.poster && (
            <Image
              src={item.poster}
              alt={item.alt}
              fill
              className="object-cover"
            />
          )}
          {/* Reproductor de video */}
          <video
            controls
            className="absolute inset-0 h-full w-full object-cover"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
};

// 4. Página principal
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">Galería</h1>
          <Link href="/">
            <Button variant="outline" className="border-orange-500 text-orange-400">
              ← Volver
            </Button>
          </Link>
        </div>

        {/* 5. Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* 6. Mensaje si no hay contenido */}
        {galleryItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No hay elementos en la galería</p>
            <p className="text-sm text-gray-600 mt-2">
              Verifica que los archivos estén en la carpeta pública
            </p>
          </div>
        )}
      </div>
    </div>
  );
}