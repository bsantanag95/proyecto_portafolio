// components/ui/DemoButton.tsx
import { ExternalLinkIcon } from "lucide-react";

interface DemoButtonProps {
  href?: string;
  label: string;
}

const DemoButton = ({ href, label }: DemoButtonProps) => {
  if (!href) return null;

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
        border border-zinc-300 dark:border-zinc-700
        bg-transparent
        text-zinc-900 dark:text-white
        theme-transition
        hover:-translate-y-0.5
        hover:bg-zinc-900/5 dark:hover:bg-white/5
        hover:shadow-md
      "
    >
      <ExternalLinkIcon
        size={16}
        className="relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
      />
      <span className="relative">{label}</span>
    </a>
  );
};

export default DemoButton;
