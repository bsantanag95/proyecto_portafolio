import { Mail } from "lucide-react";
import { LinkedinIcon, GitHubIcon } from "../icons";
import { useLanguage } from "../../hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      role="contentinfo"
      className="
        border-t border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-zinc-900
        theme-transition
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          px-6 py-10
          flex flex-col gap-6
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* Identity */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-medium footer-title theme-transition">
            Esteban Santana
          </p>

          <p className="text-sm footer-subtitle theme-transition">
            {t.footer.text}
          </p>
        </div>

        {/* Links */}
        <div
          className="
            flex items-center justify-center gap-4
            footer-links
          "
        >
          <a
            href="mailto:besantanag95@gmail.com"
            aria-label="Enviar correo"
            className="footer-link theme-transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="footer-link theme-transition"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="footer-link theme-transition"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="
          border-t footer-bottom
          py-4 text-center text-xs
          theme-transition
        "
      >
        © {new Date().getFullYear()} Esteban Santana. {t.footer.subtitle}.
      </div>
    </footer>
  );
};

export default Footer;
