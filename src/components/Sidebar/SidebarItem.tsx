import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  label: string;
  onClick?: () => void;
}

const SidebarItem = ({ path, label, onClick }: Props) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `
  block rounded-md px-4 py-2.5
  text-sm font-medium
  transition-colors duration-200

  ${
    isActive
      ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
  }
  `
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
