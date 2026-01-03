import { useEffect, useRef } from "react";
import { useSidebar } from "../../context/ui";
import SidebarItem from "./SidebarItem";
import { menuItems } from "../../data/menu";
import { useLanguage } from "../../hooks/useLanguage";

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useLanguage();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;

    const focusableElements = sidebarRef.current.querySelectorAll<HTMLElement>(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    first?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="
      fixed inset-0 z-10
      bg-zinc-50 dark:bg-zinc-900
      backdrop-blur-sm
      transition-opacity
      duration-300
      md:hidden
    "
        />
      )}

      <aside
        className={`
    fixed left-0 top-0 z-20
    h-screen w-64
    bg-white dark:bg-zinc-900
    border-r border-zinc-200 dark:border-zinc-800
    shadow-sm dark:shadow-none
    px-4 py-6

    transition-[background-color,border-color,box-shadow,transform]
    duration-300 ease-in-out

    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
      >
        {/* Header */}
        <div className="mb-10 space-y-1">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {t.sidebar.title}
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t.sidebar.subtitle}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 mt-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              path={item.path}
              label={t.sidebar[item.key]}
              onClick={close}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
