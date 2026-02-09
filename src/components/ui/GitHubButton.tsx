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
group mt-8 inline-flex self-center items-center gap-2
    rounded-lg
    px-6 py-3 sm:px-5 sm:py-2.5
    text-sm font-medium

    bg-zinc-900 text-white
    shadow-md shadow-zinc-900/15

    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-zinc-800
    hover:shadow-lg hover:shadow-zinc-900/25

    active:translate-y-0

    dark:bg-zinc-100 dark:text-zinc-900
    dark:hover:bg-zinc-200
    dark:hover:shadow-zinc-100/20

    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-zinc-400
      "
    >
      <GitHubIcon
        size={16}
        className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
      />
      {label}
    </a>
  );
};

export default GitHubButton;
