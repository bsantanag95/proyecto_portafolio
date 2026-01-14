import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";
import GitHubIcon from "../../components/icons/GitHubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

const EMAIL = "besantanag95@gmail.com";

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
    }
  };

  return (
    <section
      id="contact"
      aria-label={t.home.contact}
      className="scroll-mt-24 py-24 px-4 flex justify-center"
    >
      <AnimatedSection delay={0.1}>
        <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 shadow-sm">
          <h2
            id="contact-title"
            className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
          >
            ¿Hablamos?
          </h2>

          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Estoy abierto a nuevas oportunidades, colaboraciones o simplemente
            conversar sobre desarrollo frontend y producto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/*  Copy email */}
            <button
              type="button"
              onClick={handleCopy}
              aria-live="polite"
              aria-label={`Copiar correo electrónico ${EMAIL}`}
              className="cursor-pointer
    inline-flex items-center justify-center gap-2
    rounded-lg px-5 py-3
    text-sm font-medium
    bg-zinc-900 text-white
    hover:bg-zinc-800
    dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
    transition
  "
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check size={16} aria-hidden="true" />
                    {t.home.copied}
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex items-center gap-2"
                  >
                    <Mail size={16} aria-hidden="true" />
                    {t.home.copyEmail}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center gap-2
              rounded-lg px-5 py-3
              text-sm font-medium
              border border-zinc-300 dark:border-zinc-700
              text-zinc-700 dark:text-zinc-300
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              transition
            "
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center gap-2
              rounded-lg px-5 py-3
              text-sm font-medium
              border border-zinc-300 dark:border-zinc-700
              text-zinc-700 dark:text-zinc-300
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              transition
            "
            >
              <GitHubIcon size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
