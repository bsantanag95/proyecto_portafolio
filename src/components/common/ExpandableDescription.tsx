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
    <div className="space-y-4">
      {/* Botón mejorado con estilo más moderno */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="
          group inline-flex items-center gap-2
          px-4 py-2 rounded-lg
          text-sm font-medium
          bg-linear-to-r from-zinc-100/80 to-zinc-50/80
          border border-zinc-200/50
          text-zinc-700 dark:text-zinc-300
          hover:border-blue-300/50 hover:from-blue-50/80 hover:to-white/80
          dark:from-zinc-800/50 dark:to-zinc-800/30
          dark:border-zinc-700/50
          dark:hover:border-blue-500/30 dark:hover:from-blue-900/20 dark:hover:to-zinc-800/30
          transition-all duration-300
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer
        "
      >
        <span>
          {isOpen
            ? language === "es"
              ? "Ver menos"
              : "Show less"
            : language === "es"
              ? "Ver más"
              : "Show more"}
        </span>

        <ChevronDown
          size={16}
          className={`
            transition-all duration-500 ease-out
            ${isOpen ? "rotate-180" : ""}
            group-hover:translate-y-0.5
          `}
        />
      </button>

      <AnimatePresence initial={false}>
        <motion.div
          animate={isOpen ? "open" : "collapsed"}
          variants={{
            open: {
              height: "auto",
              opacity: 1,
            },
            collapsed: {
              height: 0,
              opacity: 0,
            },
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.28,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="overflow-hidden"
        >
          {/* Contenido con tarjeta sutil y bordes redondeados */}
          <div className="p-5 rounded-xl bg-linear-to-br from-white/50 to-white/30 border border-zinc-200/50 dark:from-zinc-900/30 dark:to-zinc-800/20 dark:border-zinc-700/50 space-y-4">
            {sections.map((section, index) => {
              switch (section.type) {
                case "title":
                  return (
                    <h4
                      key={index}
                      className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {section.content}
                    </h4>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 pl-3"
                    >
                      {section.content}
                    </p>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      {section.items.map((item, i) => (
                        <li key={i} className="pl-1 marker:text-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}

            {/* Línea decorativa inferior */}
            <div className="h-px w-12 bg-linear-to-r from-blue-500/50 to-transparent mt-2" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExpandableDescription;
