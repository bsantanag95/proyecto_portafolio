import { useState } from "react";
import { Mail, Check } from "lucide-react";
import GitHubIcon from "../../components/icons/GitHubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

const EMAIL = "besantanag95@gmail.com";

const Contact = () => {
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
      aria-labelledby="contact-title"
      className="scroll-mt-24 py-24 px-4 flex justify-center"
    >
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
            aria-label="Copiar correo electrónico"
            className="
              cursor-pointer
              inline-flex items-center justify-center gap-2
              rounded-lg px-5 py-3
              text-sm font-medium
              bg-zinc-900 text-white
              hover:bg-zinc-800
              dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
              transition
            "
          >
            {copied ? (
              <>
                <Check size={16} aria-hidden="true" />
                Copiado
              </>
            ) : (
              <>
                <Mail size={16} aria-hidden="true" />
                Copiar email
              </>
            )}
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
    </section>
  );
};

export default Contact;
