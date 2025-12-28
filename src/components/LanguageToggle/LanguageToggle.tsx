import { useLanguage } from "../../hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center justify-center
        h-9 w-9
        rounded-full
        bg-zinc-200 text-zinc-900
        dark:bg-zinc-800 dark:text-zinc-100
        text-xs font-semibold
        transition-colors
      "
    >
      {language === "es" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageToggle;
