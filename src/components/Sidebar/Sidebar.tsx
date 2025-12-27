import SidebarItem from "./SidebarItem";
import { menuItems } from "../../data/menu";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Sidebar = () => {
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
        <h1 className="text-xl font-bold">Esteban</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Frontend Developer
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>

      {/* Footer sidebar */}
      <div className="absolute bottom-6 left-4">
        <DarkModeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
