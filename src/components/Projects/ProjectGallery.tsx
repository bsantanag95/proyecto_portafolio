import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface Props {
  images: string[];
}

const ProjectGallery = ({ images }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.15,
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeInOut",
      }}
      className="
    grid gap-4
    grid-cols-1
    sm:grid-cols-2
  "
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project screenshot ${index + 1}`}
          className="rounded-xl border border-zinc-200 dark:border-zinc-800"
        />
      ))}
    </motion.div>
  );
};

export default ProjectGallery;
