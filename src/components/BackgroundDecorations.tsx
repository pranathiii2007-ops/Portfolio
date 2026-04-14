import decoClouds from "@/assets/deco-clouds.png";
import decoFlowers from "@/assets/deco-flowers.png";
import decoMoon from "@/assets/deco-moon.png";
import decoTea from "@/assets/deco-tea.png";

interface DecoImageProps {
  src: string;
  alt: string;
  className: string;
}

function DecoImage({ src, alt, className }: DecoImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={120}
      height={120}
      className={`pointer-events-none select-none opacity-40 dark:opacity-20 ${className}`}
    />
  );
}

export function BackgroundDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top right clouds */}
      <DecoImage
        src={decoClouds}
        alt=""
        className="absolute -top-4 right-10 w-36 md:w-48 animate-float-slow"
      />
      {/* Left side flowers - about section area */}
      <DecoImage
        src={decoFlowers}
        alt=""
        className="absolute top-[60%] -left-8 w-28 md:w-36 animate-sway"
      />
      {/* Moon - right side mid */}
      <DecoImage
        src={decoMoon}
        alt=""
        className="absolute top-[35%] right-4 w-20 md:w-28 animate-float"
      />
      {/* Tea cup bottom left */}
      <DecoImage
        src={decoTea}
        alt=""
        className="absolute bottom-[15%] left-6 w-24 md:w-32 animate-bounce-gentle"
      />
      {/* Another clouds bottom right */}
      <DecoImage
        src={decoClouds}
        alt=""
        className="absolute bottom-[5%] right-20 w-32 md:w-40 animate-float-delayed opacity-25 dark:opacity-10"
      />
      {/* Flowers top left */}
      <DecoImage
        src={decoFlowers}
        alt=""
        className="absolute top-[15%] left-[5%] w-20 md:w-24 animate-sway opacity-30 dark:opacity-15"
        
      />
    </div>
  );
}
