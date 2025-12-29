import { useSidebar } from "../../context/ui";
import SidebarItem from "./SidebarItem";
import { menuItems } from "../../data/menu";
import { useLanguage } from "../../hooks/useLanguage";

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useLanguage();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-10 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-20
          h-screen w-64
          bg-zinc-100 dark:bg-zinc-900
          border-r border-zinc-200 dark:border-zinc-800
          px-4 py-6
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold">{t.sidebar.title}</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t.sidebar.subtitle}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
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
