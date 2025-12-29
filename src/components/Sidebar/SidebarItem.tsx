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
        block rounded px-3 py-2 transition
        ${
          isActive
            ? "bg-zinc-300 dark:bg-zinc-800 font-medium"
            : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }
        `
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
