import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  images: string[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}

const ImageLightbox = ({ images, index, setIndex, onClose }: Props) => {
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
      >
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Project image ${index + 1}`}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-white"
          aria-label="Cerrar imagen"
        >
          <X />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="cursor-pointer absolute left-4 text-white text-4xl"
          aria-hidden
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="cursor-pointer absolute right-4 text-white text-4xl"
          aria-hidden
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
