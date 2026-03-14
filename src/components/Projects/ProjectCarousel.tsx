import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  images: string[];
  onImageLoad?: () => void;
}

const ProjectCarousel = ({ images, onImageLoad }: Props) => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    const el = containerRef.current;
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [index, images]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-label={
        language === "es"
          ? "Carrusel de imágenes del proyecto"
          : "Project image carousel"
      }
      className="
        relative h-56 sm:h-80 md:h-96 w-full
        overflow-hidden rounded-2xl
        border carousel-surface theme-transition
        shadow-sm
        focus:outline-none focus-visible:ring-2
      "
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          aria-live="polite"
          onLoad={onImageLoad}
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
        />
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t carousel-bottom-overlay pointer-events-none" />

      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer absolute top-3 right-3 p-2 rounded-lg backdrop-blur-sm carousel-float-control theme-transition z-10"
        aria-label={
          language === "es" ? "Ver imagen en grande" : "View image in lightbox"
        }
      >
        <Maximize2 size={16} />
      </button>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg carousel-counter theme-transition backdrop-blur-sm text-xs font-medium z-10">
        {index + 1} / {images.length}
      </div>

      <button
        onClick={prev}
        className="
          absolute left-3 top-1/2 -translate-y-1/2 z-10
          flex h-9 w-9 items-center justify-center
          rounded-full carousel-arrow theme-transition backdrop-blur-sm
          transition-all duration-200
          hover:scale-110
          focus:outline-none focus-visible:ring-2
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
        "
        aria-label={language === "es" ? "Imagen anterior" : "Previous image"}
        disabled={index === 0 && images.length === 1}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="
          absolute right-3 top-1/2 -translate-y-1/2 z-10
          flex h-9 w-9 items-center justify-center
          rounded-full carousel-arrow theme-transition backdrop-blur-sm
          transition-all duration-200
          hover:scale-110
          focus:outline-none focus-visible:ring-2
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
        "
        aria-label={language === "es" ? "Imagen siguiente" : "Next image"}
        disabled={index === images.length - 1 && images.length === 1}
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className="group"
          >
            <div
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  i === index
                    ? "w-6 carousel-dot-active theme-transition shadow-lg"
                    : "w-2.5 carousel-dot theme-transition hover:w-3"
                }
              `}
            />
            {i === index && (
              <span className="absolute -inset-1 rounded-full carousel-dot-pulse theme-transition animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {isOpen && (
        <ImageLightbox
          images={images}
          index={index}
          setIndex={setIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectCarousel;
