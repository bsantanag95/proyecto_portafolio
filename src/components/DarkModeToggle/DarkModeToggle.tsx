import { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

type Theme = "light" | "dark";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className="ml-2 -mt-5">
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={`relative flex h-7.5 w-16.25 items-center rounded-full
    transition-all duration-300
    ${
      isDark
        ? "bg-zinc-800 border border-zinc-600"
        : "bg-zinc-200 border border-zinc-300"
    }
    shadow-inner`}
      >
        {/* Knob */}
        <span
          className={`absolute left-0.75 top-0.75 h-6.25 w-6.25 rounded-full transition-all duration-300
            shadow-md
            ${
              isDark
                ? "translate-x-8.5 bg-linear-to-b from-zinc-600 to-zinc-800"
                : "bg-linear-to-b from-yellow-300 to-orange-500"
            }`}
        />

        {/* Icons */}
        <img
          src={Sun}
          alt="Light mode"
          className={`absolute left-1 h-5 w-5 transition-opacity duration-300
            ${isDark ? "opacity-40" : "opacity-100"}`}
        />

        <img
          src={Moon}
          alt="Dark mode"
          className={`absolute right-1 h-5 w-5 transition-opacity duration-300
            ${isDark ? "opacity-100" : "opacity-40"}`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
