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
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="
          group inline-flex items-center gap-2
          px-4 py-2 rounded-lg
          text-sm font-medium
          bg-linear-to-r
          border toggle-button theme-transition
          transition-all duration-300
          focus:outline-none focus-visible:ring-2 cursor-pointer
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
          <div className="p-5 rounded-xl bg-linear-to-br border expandable-content-box theme-transition space-y-4">
            {sections.map((section, index) => {
              switch (section.type) {
                case "title":
                  return (
                    <h4
                      key={index}
                      className="text-sm font-semibold expandable-section-title theme-transition flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full expandable-section-dot theme-transition" />
                      {section.content}
                    </h4>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-sm leading-relaxed expandable-paragraph theme-transition pl-3"
                    >
                      {section.content}
                    </p>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-1.5 text-sm expandable-list theme-transition"
                    >
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="pl-1 expandable-list-item theme-transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
            <div className="h-px w-12 bg-linear-to-r expandable-divider theme-transition mt-2" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExpandableDescription;
