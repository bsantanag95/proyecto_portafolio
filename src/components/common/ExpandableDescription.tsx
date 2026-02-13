import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import type { ContentSection } from "../../types/content";

interface ExpandableDescriptionProps {
  title?: string;
  sections: ContentSection[];
}

const ExpandableDescription = ({ sections }: ExpandableDescriptionProps) => {
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
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden space-y-4"
          >
            {sections.map((section, index) => {
              switch (section.type) {
                case "title":
                  return (
                    <h4
                      key={index}
                      className="text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                    >
                      {section.content}
                    </h4>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      {section.content}
                    </p>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-5 space-y-1 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableDescription;
