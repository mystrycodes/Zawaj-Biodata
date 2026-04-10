"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryCarouselProps = {
  images: string[];
};

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <div className="carousel-shell">
      <div className="carousel-image-wrap">
        <Image
          src={images[activeIndex]}
          alt={`Gallery slide ${activeIndex + 1}`}
          fill
          sizes="(max-width: 960px) 100vw, 60vw"
          className="carousel-image"
          priority={activeIndex === 0}
        />
      </div>
      <button className="carousel-btn prev" onClick={showPrev} aria-label="Previous image">
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={showNext} aria-label="Next image">
        &#10095;
      </button>
      <div className="carousel-dots" aria-label="Gallery navigation">
        {images.map((img, idx) => (
          <button
            key={`${img}-${idx}`}
            className={idx === activeIndex ? "dot active" : "dot"}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
