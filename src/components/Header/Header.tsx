import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { Menu } from "lucide-react";
import { useSidebar } from "../../context/ui";

export const Header = () => {
  const { toggle } = useSidebar();

  return (
    <div className="fixed top-4 right-6 z-30 flex items-center gap-3">
      {/* Botón menú solo en mobile */}
      <button
        onClick={toggle}
        className="
          md:hidden
          rounded
          p-2
          header-toggle
          theme-transition
        "
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <LanguageToggle />
      <DarkModeToggle />
    </div>
  );
};
