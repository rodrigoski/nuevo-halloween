// components/VideoPlayer.tsx
export const VideoPlayer = ({ src, poster, alt }: { src: string; poster?: string; alt: string }) => (
  <div className="relative aspect-video">
    <video
      controls
      className="w-full h-full object-cover rounded-lg"
      poster={poster}
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
    </video>
  </div>
);