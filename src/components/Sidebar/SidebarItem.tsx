import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  path?: string;
  action?: () => void;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
}

const SidebarItem = ({ label, path, action, onClick, active, icon }: Props) => {
  if (action) {
    return (
      <button
        onClick={() => {
          action();
          onClick?.();
        }}
        className={`
          flex w-full items-center gap-3
          rounded-lg px-3 py-2 text-sm font-medium
          transition
          ${
            active
              ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          }
        `}
      >
        {icon}
        {label}
      </button>
    );
  }

  return (
    <NavLink
      to={path!}
      onClick={onClick}
      className={({ isActive }) =>
        `
        flex items-center gap-3
        rounded-lg px-3 py-2 text-sm font-medium transition
        ${
          isActive
            ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }
      `
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default SidebarItem;
