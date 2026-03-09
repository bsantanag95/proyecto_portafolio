import { NavLink } from "react-router-dom";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { ChevronRight, Dot } from "lucide-react";

interface Props {
  label: string;
  path?: string;
  action?: () => void;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
  nested?: boolean;
}

const SidebarItem = ({
  label,
  path,
  action,
  onClick,
  active,
  icon,
  nested = false,
}: Props) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = `
    relative
    flex w-full items-center gap-3
    rounded-lg px-3 py-2.5
    text-sm font-medium
    cursor-pointer
    transition-all duration-300
    focus:outline-none
    focus-visible:ring-2
    sidebar-item
    ${nested ? "text-sm" : "text-base"}
  `;

  const activeClasses = "sidebar-item-active";
  const inactiveClasses = "sidebar-item-inactive";

  const pillTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 400,
        damping: 30,
      };

  const content = (
    <>
      {/* Indicador activo - barra lateral */}
      {active && (
        <motion.div
          layoutId="sidebar-active-indicator"
          transition={pillTransition}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-linear-to-b sidebar-item-indicator"
        />
      )}

      {/* Fondo activo */}
      {active && (
        <motion.div
          layoutId="sidebar-active-bg"
          transition={pillTransition}
          className="absolute inset-0 rounded-lg bg-linear-to-r sidebar-item-active-bg"
        />
      )}

      {/* Contenido */}
      <motion.span
        className="relative z-10 flex items-center justify-between w-full"
        whileHover={shouldReduceMotion ? {} : { x: 2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className="flex items-center gap-3">
          {/* Icono */}
          <motion.span
            key={active ? "active" : "inactive"}
            initial={{ scale: active ? 0.95 : 1 }}
            animate={{ scale: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 500, damping: 30 }
            }
            className={
              active ? "sidebar-item-icon-active" : "sidebar-item-icon"
            }
          >
            {icon}
          </motion.span>

          {label}
        </span>

        {/* Punto indicador para hover */}
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: active ? 1 : 0, x: active ? 0 : -5 }}
          className="sidebar-item-dot"
        >
          <Dot size={14} />
        </motion.span>
      </motion.span>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-lg bg-linear-to-r sidebar-item-glow opacity-0 hover:opacity-5 transition-opacity duration-300" />
    </>
  );

  /*  ScrollSpy / acciones */
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

  /* Rutas */
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
              layoutId="sidebar-active-indicator"
              transition={pillTransition}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-linear-to-b sidebar-item-indicator"
            />
          )}

          {isActive && (
            <motion.div
              layoutId="sidebar-active-bg"
              transition={pillTransition}
              className="absolute inset-0 rounded-lg bg-linear-to-r sidebar-item-active-bg"
            />
          )}

          <motion.span
            className="relative z-10 flex items-center justify-between w-full"
            whileHover={shouldReduceMotion ? {} : { x: 2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="flex items-center gap-3">
              <motion.span
                key={isActive ? "active" : "inactive"}
                initial={{ scale: isActive ? 0.95 : 1 }}
                animate={{ scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 500, damping: 30 }
                }
                className={
                  isActive ? "sidebar-item-icon-active" : "sidebar-item-icon"
                }
              >
                {icon}
              </motion.span>

              {label}
            </span>

            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -5 }}
              className="sidebar-item-dot"
            >
              <ChevronRight size={14} />
            </motion.span>
          </motion.span>

          <div className="absolute inset-0 rounded-lg bg-linear-to-r sidebar-item-glow opacity-0 hover:opacity-5 transition-opacity duration-300" />
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
