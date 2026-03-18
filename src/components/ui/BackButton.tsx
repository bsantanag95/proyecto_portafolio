import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

const BackButton = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const location = useLocation();

  const handleBack = () => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (location.pathname === "/" && location.key === "default") {
    return null;
  }

  return (
    <button
      onClick={handleBack}
      aria-label={language === "en" ? "Go back" : "Volver"}
      title={language === "en" ? "Go back" : "Volver"}
      className="
    md:hidden
    fixed top-4 left-4 z-50
    flex items-center justify-center
    w-10 h-10
    rounded-full
    bg-white/60 dark:bg-zinc-800/60
    backdrop-blur
    shadow-md hover:shadow-lg
    hover:bg-white dark:hover:bg-zinc-700
    active:scale-95
    transition
    focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600
  "
    >
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
};

export default BackButton;
