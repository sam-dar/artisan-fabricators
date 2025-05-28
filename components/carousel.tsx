"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[current];

  return (
    <div className="relative w-full h-full">
      {/* Image */}
      <Image
  src={currentImage}
  alt={`Corian work ${current + 1}`}
  fill
  className="object-cover transition-opacity duration-700 ease-in-out"
  quality={100}
  priority
/>

      {/* Optional: dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}
    </div>
  );
};
