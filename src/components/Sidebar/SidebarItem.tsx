import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  path: string;
}

const SidebarItem = ({ label, path }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block rounded-lg px-4 py-2 transition-colors
         ${
           isActive
             ? "bg-zinc-300 dark:bg-zinc-700 font-medium"
             : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
         }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
