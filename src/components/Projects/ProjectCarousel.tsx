import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Props {
  images: string[];
}

const ProjectCarousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl"
      tabIndex={0}
      aria-label="Project images carousel"
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          className="h-60 sm:h-90 w-full object-cover"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: "easeInOut",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
          }}
        />
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`
        h-2.5 w-2.5 rounded-full
        transition
        ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"}
      `}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2
    h-9 w-9 items-center justify-center rounded-full
    bg-black/40 text-white hover:bg-black/60"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2
    h-9 w-9 items-center justify-center rounded-full
    bg-black/40 text-white hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
};

export default ProjectCarousel;
