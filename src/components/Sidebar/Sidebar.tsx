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

type SidebarContext = "home" | "about" | "projects";

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

  const activeSection = useScrollSpy(
    sidebarContext === "home"
      ? ["contact-spy"]
      : sidebarContext === "about"
      ? [
          "summary-spy",
          "education-spy",
          "experience-spy",
          "highlights-spy",
          "tech-spy",
        ]
      : [],
    {
      enabled: sidebarContext !== "projects",
      rootMargin: isDesktop ? "-30% 0px -60% 0px" : "-20% 0px -50% 0px",
      threshold: isDesktop ? 0.2 : 0.1,
    }
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && !isDesktop && (
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
          {sidebarContext === "home" && (
            <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-700 pl-3">
              <SidebarItem
                label={t.home.contact}
                action={() => {
                  scrollToSection("contact");
                  close();
                }}
                active={activeSection === "contact-spy"}
                icon={<Mail size={16} aria-hidden="true" />}
              />
            </div>
          )}

          {/* About */}
          <SidebarItem
            label={t.sidebar.about}
            path="/about"
            onClick={close}
            icon={<IdCard size={16} aria-hidden="true" />}
          />

          {/* Secciones About */}
          {sidebarContext === "about" && (
            <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-700 pl-3">
              <SidebarItem
                label={t.about.summaryTitle}
                action={() => {
                  scrollToSection("summary");
                  close();
                }}
                active={activeSection === "summary-spy"}
                icon={<User size={16} />}
              />

              <SidebarItem
                label={t.about.education.title}
                action={() => {
                  scrollToSection("education");
                  close();
                }}
                active={activeSection === "education-spy"}
                icon={<GraduationCap size={16} />}
              />

              <SidebarItem
                label={t.about.experienceTitle}
                action={() => {
                  scrollToSection("experience");
                  close();
                }}
                active={activeSection === "experience-spy"}
                icon={<Briefcase size={16} />}
              />

              <SidebarItem
                label={t.about.highlightsTitle}
                action={() => {
                  scrollToSection("highlights");
                  close();
                }}
                active={activeSection === "highlights-spy"}
                icon={<Star size={16} />}
              />

              <SidebarItem
                label={t.about.techStack}
                action={() => {
                  scrollToSection("tech");
                  close();
                }}
                active={activeSection === "tech-spy"}
                icon={<Layers size={16} />}
              />
            </div>
          )}

          {/* Proyectos */}
          <SidebarItem
            label={t.sidebar.projects}
            path="/projects"
            active={sidebarContext === "projects"}
            icon={<Sparkles size={16} />}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
