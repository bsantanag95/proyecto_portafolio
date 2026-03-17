import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { LinkedinIcon, GitHubIcon, WhatsAppIcon } from "../../components/icons";

const EMAIL = "besantanag95@gmail.com";
const WHATSAPP_NUMBER = "56968340737";

const Contact = () => {
  const { t, language } = useLanguage();
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
      aria-label={t.contact.title}
      className="scroll-mt-24 py-24 px-4 flex justify-center"
    >
      <div className="w-full max-w-2xl rounded-2xl border contact-card theme-transition p-8 shadow-sm">
        <h2
          id="contact-title"
          className="text-2xl font-semibold contact-card-title theme-transition"
        >
          {t.home.contact.title}
        </h2>

        <p className="mt-3 contact-card-description theme-transition">
          {t.home.contact.description}
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
    contact-primary-button
    transition
    theme-transition
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
            href="https://linkedin.com/in/besantanag95"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              rounded-lg px-5 py-3
              text-sm font-medium
              border contact-secondary-button
              transition
              theme-transition
            "
          >
            <LinkedinIcon size={16} aria-hidden="true" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bsantanag95"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              rounded-lg px-5 py-3
              text-sm font-medium
              border contact-secondary-button
              transition
              theme-transition
            "
          >
            <GitHubIcon size={16} aria-hidden="true" />
            GitHub
          </a>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "es"
                ? "Contactar por WhatsApp"
                : "Contact via WhatsApp"
            }
            className="
    inline-flex items-center justify-center gap-1.5
    rounded-lg px-4 py-3
    text-xs font-medium
    border contact-whatsapp-button
    transition
    theme-transition
  "
          >
            <WhatsAppIcon size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
