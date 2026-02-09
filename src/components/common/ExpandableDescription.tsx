import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

interface ExpandableDescriptionProps {
  title?: string;
  content: string;
}

const ExpandableDescription = ({
  title,
  content,
}: ExpandableDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="
          inline-flex items-center gap-1
          text-sm font-medium
          text-zinc-700 dark:text-zinc-300
          hover:text-zinc-900 dark:hover:text-zinc-100
          transition cursor-pointer
        "
      >
        {isOpen
          ? language === "es"
            ? "Ver menos"
            : "Show less"
          : language === "es"
            ? "Ver más"
            : "Show more"}
        <ChevronDown
          className={`
            h-4 w-4 transition-transform
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            {title && (
              <h4 className="mt-2 font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                {title}
              </h4>
            )}

            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableDescription;
