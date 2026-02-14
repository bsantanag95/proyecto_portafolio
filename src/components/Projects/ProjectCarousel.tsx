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

  // Preload next image
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
        border border-zinc-200/50 bg-zinc-100
        shadow-sm
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500/50
        dark:border-zinc-700/50 dark:bg-zinc-800
        dark:focus-visible:ring-blue-400/50
      "
    >
      {/* Imagen principal con animación */}
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
            ease: [0.25, 0.1, 0.25, 1], // easeInOut personalizado
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
        />
      </AnimatePresence>

      {/* Overlay inferior con gradiente para mejorar legibilidad de los indicadores */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/40 via-black/20 to-transparent pointer-events-none" />

      {/* Botón de expandir (lightbox) */}
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer absolute top-3 right-3 p-2 rounded-lg bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 transition-colors duration-200 z-10"
        aria-label={
          language === "es" ? "Ver imagen en grande" : "View image in lightbox"
        }
      >
        <Maximize2 size={16} />
      </button>

      {/* Contador de imágenes */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-xs font-medium text-white/90 z-10">
        {index + 1} / {images.length}
      </div>

      {/* Flechas de navegación - siempre visibles en todos los tamaños */}
      <button
        onClick={prev}
        className="
          absolute left-3 top-1/2 -translate-y-1/2 z-10
          flex h-9 w-9 items-center justify-center
          rounded-full bg-black/40 backdrop-blur-sm
          text-white/90 transition-all duration-200
          hover:bg-black/60 hover:scale-110
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-white/80
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
          rounded-full bg-black/40 backdrop-blur-sm
          text-white/90 transition-all duration-200
          hover:bg-black/60 hover:scale-110
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-white/80
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
        "
        aria-label={language === "es" ? "Imagen siguiente" : "Next image"}
        disabled={index === images.length - 1 && images.length === 1}
      >
        <ChevronRight size={18} />
      </button>

      {/* Indicadores (dots) con estilo moderno */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className="group relative"
          >
            <div
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  i === index
                    ? "w-6 bg-white shadow-lg shadow-white/50"
                    : "w-2.5 bg-white/60 hover:bg-white/80 hover:w-3"
                }
              `}
            />
            {i === index && (
              <span className="absolute -inset-1 rounded-full bg-white/30 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
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
