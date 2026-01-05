import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  label: string;
  path?: string;
  action?: () => void;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
}

const SidebarItem = ({ label, path, action, onClick, active, icon }: Props) => {
  const baseClasses = `
    relative
    flex w-full items-center gap-3
    rounded-lg px-3 py-2 text-sm font-medium
    transition
  `;

  const activeClasses =
    "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100";

  const inactiveClasses =
    "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800";

  if (action) {
    return (
      <button
        onClick={() => {
          action();
          onClick?.();
        }}
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      >
        {/* 🔹 Indicador */}
        {active && (
          <motion.div
            layout
            className="
              absolute left-0 top-1/2
              h-6 w-1
              -translate-y-1/2
              bg-zinc-900 dark:bg-zinc-100
              rounded-full
            "
          />
        )}

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
        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
    >
      {({ isActive }) => (
        <>
          {/* 🔹 Indicador */}
          {isActive && (
            <motion.div
              layout
              className="
                absolute left-0 top-1/2
                h-6 w-1
                -translate-y-1/2
                bg-zinc-900 dark:bg-zinc-100
                rounded-full
              "
            />
          )}

          {icon}
          {label}
        </>
      )}
    </NavLink>
  );
};

export default SidebarItem;
