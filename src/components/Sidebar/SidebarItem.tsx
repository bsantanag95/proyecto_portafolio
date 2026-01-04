import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  path?: string;
  onClick?: () => void;
  action?: () => void;
}

const SidebarItem = ({ label, path, onClick, action }: Props) => {
  if (action) {
    return (
      <button
        onClick={() => {
          action();
          onClick?.();
        }}
        className="
          w-full text-left
          rounded-lg px-3 py-2
          text-sm font-medium
          text-zinc-700 dark:text-zinc-300
          hover:bg-zinc-200 dark:hover:bg-zinc-800
          transition
        "
      >
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
        block rounded-lg px-3 py-2 text-sm font-medium transition
        ${
          isActive
            ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }
      `
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
