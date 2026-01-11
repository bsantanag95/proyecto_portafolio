import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="
        border-t border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-zinc-900
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
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Esteban Santana
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Frontend Developer · React & TypeScript
          </p>
        </div>

        {/* Links */}
        <div
          className="
            flex items-center justify-center gap-4
            text-zinc-600 dark:text-zinc-400
          "
        >
          <a
            href="mailto:besantanag95@gmail.com"
            aria-label="Enviar correo"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="
          border-t border-zinc-200 dark:border-zinc-800
          py-4 text-center text-xs
          text-zinc-500 dark:text-zinc-500
        "
      >
        © {new Date().getFullYear()} Esteban Santana. Built with React &
        TypeScript.
      </div>
    </footer>
  );
};

export default Footer;
