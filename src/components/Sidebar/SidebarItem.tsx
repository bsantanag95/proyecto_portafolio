import { NavLink } from "react-router-dom";
import { motion, useReducedMotion, type Transition } from "framer-motion";

interface Props {
  label: string;
  path?: string;
  action?: () => void;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
}

const SidebarItem = ({ label, path, action, onClick, active, icon }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = `
    relative
    flex w-full items-center gap-3
    rounded-lg px-3 py-2
    text-sm font-medium
    cursor-pointer
    transition-colors
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600
  `;

  const activeClasses = "text-zinc-900 dark:text-zinc-100";
  const inactiveClasses =
    "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800";

  const pillTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 380,
        damping: 30,
      };

  const content = (
    <>
      {/* 🔹 Active pill */}
      {active && (
        <motion.div
          layoutId="sidebar-active-pill"
          transition={pillTransition}
          className="
            absolute inset-0
            rounded-lg
            bg-zinc-200 dark:bg-zinc-800
            z-0
          "
        />
      )}

      {/* 🔹 Content */}
      <motion.span
        className="relative z-10 flex items-center gap-3"
        whileHover={shouldReduceMotion ? {} : { x: 2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Icon */}
        <motion.span
          key={active ? "active" : "inactive"}
          initial={{ scale: active ? 0.95 : 1 }}
          animate={{ scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 500, damping: 30 }
          }
        >
          {icon}
        </motion.span>

        {label}
      </motion.span>
    </>
  );

  /* 🔹 ScrollSpy / acciones */
  if (action) {
    return (
      <button
        type="button"
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
              transition={pillTransition}
              className="
                absolute inset-0
                rounded-lg
                bg-zinc-200 dark:bg-zinc-800
                z-0
              "
            />
          )}

          <motion.span
            className="relative z-10 flex items-center gap-3"
            whileHover={shouldReduceMotion ? {} : { x: 2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.span
              key={isActive ? "active" : "inactive"}
              initial={{ scale: isActive ? 0.95 : 1 }}
              animate={{ scale: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 500, damping: 30 }
              }
            >
              {icon}
            </motion.span>

            {label}
          </motion.span>
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
