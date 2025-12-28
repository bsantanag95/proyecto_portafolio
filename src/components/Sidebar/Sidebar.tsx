import SidebarItem from "./SidebarItem";
import { menuItems } from "../../data/menu";
import { useLanguage } from "../../hooks/useLanguage";

const Sidebar = () => {
  const { t } = useLanguage();

  return (
    <aside
      className="
        fixed left-0 top-0 z-20
        h-screen w-64
        border-r border-zinc-200 dark:border-zinc-800
        bg-zinc-100 dark:bg-zinc-900
        px-4 py-6
      "
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
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
