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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`
      cursor-pointer
      relative flex items-center
      h-9 w-16
      rounded-full
      transition-all duration-300
      ${
        isDark
          ? "bg-zinc-800 border border-zinc-600"
          : "bg-zinc-200 border border-zinc-300"
      }
      shadow-inner
    `}
    >
      {/* Knob */}
      <span
        className={`
        absolute left-0.75 top-0.75
        h-7 w-7
        rounded-full
        transition-all duration-300
        shadow-md
        ${
          isDark
            ? "translate-x-7 bg-linear-to-b from-zinc-600 to-zinc-800"
            : "bg-linear-to-b from-yellow-300 to-orange-500"
        }
      `}
      />

      {/* Icons */}
      <img
        src={Sun}
        alt="Light mode"
        className={`absolute left-1 h-4 w-4 transition-opacity duration-300
        ${isDark ? "opacity-40" : "opacity-100"}`}
      />

      <img
        src={Moon}
        alt="Dark mode"
        className={`absolute right-1 h-4 w-4 transition-opacity duration-300
        ${isDark ? "opacity-100" : "opacity-40"}`}
      />
    </button>
  );
};

export default DarkModeToggle;
