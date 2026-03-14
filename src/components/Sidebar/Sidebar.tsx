import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../../context/ui";
import SidebarItem from "./SidebarItem";
import { useLanguage } from "../../hooks/useLanguage";
import { scrollToSection } from "../../utils/scrollToSection";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import {
  Briefcase,
  GraduationCap,
  Home,
  IdCard,
  Layers,
  Mail,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type SidebarContext = "home" | "about" | "projects" | "contact";

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useLanguage();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const location = useLocation();
  const pathname = location.pathname;
  const prevPathRef = useRef(location.pathname);

  const sidebarContext: SidebarContext =
    pathname === "/"
      ? "home"
      : pathname.startsWith("/about")
        ? "about"
        : pathname.startsWith("/projects")
          ? "projects"
          : pathname.startsWith("/contact")
            ? "contact"
            : "home";

  useEffect(() => {
    if (!isDesktop && prevPathRef.current !== location.pathname) {
      close();
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname, isDesktop, close]);

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
      'a, button, [tabindex]:not([tabindex="-1"])',
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

  const { activeId, setAndLockActiveId } = useScrollSpy(
    sidebarContext === "about"
      ? [
          "summary-spy",
          "education-spy",
          "experience-spy",
          "highlights-spy",
          "tech-spy",
        ]
      : sidebarContext === "home"
        ? ["contact-spy"]
        : [],
    {
      enabled: sidebarContext === "home" || sidebarContext === "about",
      rootMargin: isDesktop ? "-5% 0px -75% 0px" : "-5% 0px -80% 0px",
      threshold: 0.5,
    },
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && !isDesktop && (
        <div
          aria-hidden="true"
          onClick={close}
          className="fixed inset-0 z-10 sidebar-overlay theme-transition backdrop-blur-sm md:hidden"
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
          flex flex-col
          backdrop-blur-sm
          bg-linear-to-b
          sidebar-surface
          border-r
          sidebar-border
          theme-transition
          px-5 py-8
          ease-in-out
          ${isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"}
          md:translate-x-0 md:shadow-lg
        `}
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-xl font-bold sidebar-title theme-transition">
            {t.sidebar.title}
          </h1>

          <p className="text-sm sidebar-subtitle theme-transition">
            {t.sidebar.subtitle}
          </p>

          <div className="mt-4 h-px w-12 bg-linear-to-r sidebar-divider theme-transition" />
        </div>

        {/* Navegación */}
        <nav className="flex-1 space-y-1 overflow-y-visible md:overflow-y-auto">
          <SidebarItem
            label={t.sidebar.home}
            path="/"
            onClick={close}
            icon={<Home size={18} />}
          />

          <SidebarItem
            label={t.sidebar.about}
            path="/about"
            onClick={close}
            icon={<IdCard size={18} />}
          />

          {sidebarContext === "about" && (
            <div className="space-y-1 ml-4 pl-3 border-l sidebar-nested theme-transition">
              <SidebarItem
                label={t.about.summaryTitle}
                action={() => {
                  setAndLockActiveId("summary");
                  scrollToSection("summary");
                  close();
                }}
                active={activeId === "summary-spy"}
                icon={<User size={16} />}
                nested
              />

              <SidebarItem
                label={t.about.education.title}
                action={() => {
                  setAndLockActiveId("education");
                  scrollToSection("education");
                  close();
                }}
                active={activeId === "education-spy"}
                icon={<GraduationCap size={16} />}
                nested
              />

              <SidebarItem
                label={t.about.experienceTitle}
                action={() => {
                  setAndLockActiveId("experience");
                  scrollToSection("experience");
                  close();
                }}
                active={activeId === "experience-spy"}
                icon={<Briefcase size={16} />}
                nested
              />

              <SidebarItem
                label={t.about.highlightsTitle}
                action={() => {
                  setAndLockActiveId("highlights");
                  scrollToSection("highlights");
                  close();
                }}
                active={activeId === "highlights-spy"}
                icon={<Star size={16} />}
                nested
              />

              <SidebarItem
                label={t.about.techStack}
                action={() => {
                  setAndLockActiveId("tech");
                  scrollToSection("tech");
                  close();
                }}
                active={activeId === "tech-spy"}
                icon={<Layers size={16} />}
                nested
              />
            </div>
          )}

          <SidebarItem
            label={t.sidebar.projects}
            path="/projects"
            active={sidebarContext === "projects"}
            icon={<Sparkles size={18} />}
          />

          <SidebarItem
            label={t.sidebar.contact}
            path="/contact"
            active={sidebarContext === "contact"}
            icon={<Mail size={18} />}
          />
        </nav>

        {/* Footer */}
        <div className="bottom-6 left-5 right-5">
          <div className="h-px w-full bg-linear-to-r sidebar-footer-divider theme-transition mb-4" />

          <p className="text-xs sidebar-footer-text theme-transition text-center">
            {t.sidebar.portfolio} v1.0
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
