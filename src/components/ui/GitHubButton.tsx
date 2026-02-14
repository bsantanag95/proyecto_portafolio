import { GitHubIcon } from "../icons";

interface GitHubButtonProps {
  href?: string;
  label: string;
}

const GitHubButton = ({ href, label }: GitHubButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group relative inline-flex items-center justify-center gap-2
        overflow-hidden rounded-lg px-6 py-3 sm:px-5 sm:py-2.5
        text-sm font-medium
        transition-all duration-300 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50

        /* Gradiente en lugar de color sólido */
        bg-linear-to-r from-zinc-900 to-zinc-800
        text-white
        shadow-md shadow-zinc-900/20

        hover:-translate-y-0.5
        hover:shadow-lg hover:shadow-zinc-900/30

        dark:from-white dark:to-zinc-100
        dark:text-zinc-900
        dark:shadow-zinc-200/20
        dark:hover:shadow-zinc-200/30
      "
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-linear-to-r from-white/0 via-white/20 to-white/0 dark:from-zinc-900/0 dark:via-zinc-900/10 dark:to-zinc-900/0" />

      {/* Icono con animación */}
      <GitHubIcon
        size={16}
        className="relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
      />

      {/* Texto */}
      <span className="relative">{label}</span>
    </a>
  );
};

export default GitHubButton;
