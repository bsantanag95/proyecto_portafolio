import { projectTechStack } from "../../config/projectTechStack";

interface Props {
  tech: string;
  className?: string;
}

const StackBadge = ({ tech }: Props) => {
  const config = projectTechStack[tech];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <li
      className={`
        group flex items-center gap-1.5
        rounded-md border
        px-2.5 py-1.5 text-xs

        shadow-sm shadow-zinc-900/5
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
        cursor-default

        ${config.base}
        ${config.hover}
      `}
    >
      <Icon
        className={`
          ${config.iconColor}
          transition-transform duration-300
          group-hover:rotate-2 group-hover:scale-110
        `}
      />
      {config.label}
    </li>
  );
};

export default StackBadge;
