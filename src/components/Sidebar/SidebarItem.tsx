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
    transition-colors
    cursor-pointer
  `;

  const activeClasses = "text-zinc-900 dark:text-zinc-100";

  const inactiveClasses =
    "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800";

  const content = (
    <>
      {active && (
        <motion.div
          layoutId="sidebar-active-pill"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
          className="
            absolute inset-0
            rounded-lg
            bg-zinc-200 dark:bg-zinc-800
            z-0
          "
        />
      )}

      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {label}
      </span>
    </>
  );

  /* 🔹 ScrollSpy / acción */
  if (action) {
    return (
      <button
        aria-current={active ? "true" : undefined}
        onClick={() => {
          action();
          onClick?.();
        }}
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      >
        {content}
      </button>
    );
  }

  /* 🔹 Rutas */
  return (
    <NavLink to={path!} onClick={onClick}>
      {({ isActive }) => (
        <span
          aria-current={isActive ? "page" : undefined}
          className={`${baseClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="sidebar-active-pill"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className="
                absolute inset-0
                rounded-lg
                bg-zinc-200 dark:bg-zinc-800
                z-0
              "
            />
          )}

          <motion.span className="relative z-10 flex items-center gap-3">
            {icon}
            {label}
          </motion.span>
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
