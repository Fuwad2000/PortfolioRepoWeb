import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      title={`Switch to ${next} mode`}
      type="button"
      className="inline-flex items-center justify-center rounded-full p-2 ring-1 ring-white/10 hover:scale-105 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
