import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const Header = () => {
  return (
    <div className="fixed top-4 right-6 z-30 flex items-center gap-3">
      <LanguageToggle />
      <DarkModeToggle />
    </div>
  );
};

export default Header;
