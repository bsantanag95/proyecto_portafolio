import { useEffect, useRef } from "react";
import { useSidebar } from "../../context/ui";
import SidebarItem from "./SidebarItem";
import { useLanguage } from "../../hooks/useLanguage";
import { scrollToSection } from "../../utils/scrollToSection";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Home, Layers, Sparkles, Star, User } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useLanguage();
  const sidebarRef = useRef<HTMLDivElement>(null);

  /* ESC */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  /* Focus trap */
  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;

    const focusables = sidebarRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const activeSection = useScrollSpy(["tech", "highlights", "summary"]);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={close}
          className="
      fixed inset-0 z-10
      bg-zinc-100/80 dark:bg-zinc-900/80
      backdrop-blur-sm
      md:hidden
    "
        />
      )}

      <aside
        ref={sidebarRef}
        role="navigation"
        aria-label={t.sidebar.ariaLabel}
        aria-hidden={!isDesktop && !isOpen}
        inert={!isDesktop && !isOpen}
        className={`
    fixed left-0 top-0 z-20
    h-screen w-64
    bg-white dark:bg-zinc-900
    border-r border-zinc-200 dark:border-zinc-800
    px-4 py-6
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
      >
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {t.sidebar.title}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t.sidebar.subtitle}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {/* Inicio */}
          <SidebarItem
            label={t.sidebar.home}
            path="/"
            onClick={close}
            icon={<Home size={16} aria-hidden="true" />}
          />

          {/* Secciones Home */}
          <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-700 pl-3">
            <SidebarItem
              label={t.home.techStack}
              action={() => scrollToSection("tech")}
              onClick={close}
              active={activeSection === "tech"}
              icon={<Layers size={16} aria-hidden="true" />}
            />
            <SidebarItem
              label={t.home.summaryTitle}
              action={() => scrollToSection("summary")}
              onClick={close}
              active={activeSection === "summary"}
              icon={<User size={16} aria-hidden="true" />}
            />
            <SidebarItem
              label={t.home.highlightsTitle}
              action={() => scrollToSection("highlights")}
              onClick={close}
              active={activeSection === "highlights"}
              icon={<Star size={16} aria-hidden="true" />}
            />
          </div>

          {/* Proyectos */}
          <SidebarItem
            label={t.sidebar.projects}
            path="/projects"
            onClick={close}
            icon={<Sparkles size={16} aria-hidden="true" />}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
