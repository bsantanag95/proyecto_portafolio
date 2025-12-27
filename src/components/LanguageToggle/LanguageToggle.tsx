import { useLanguage } from "../../hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>{language === "es" ? "ES" : "EN"}</button>
  );
};

export default LanguageToggle;
