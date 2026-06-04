"use client";

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-bg-primary pointer-events-none">
      {/* Brand Overlays to seamlessly blend the video into the brutalist aesthetic */}
      <div className="absolute inset-0 bg-bg-primary/60 z-10"></div>
      <div className="absolute inset-0 bg-costa-green/20 z-10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-20"></div>
      
      {/* Abstract Tech Network Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute min-w-full min-h-full object-cover opacity-40 grayscale mix-blend-luminosity"
        src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-lines-loop-27329-large.mp4"
      />
    </div>
  );
}
