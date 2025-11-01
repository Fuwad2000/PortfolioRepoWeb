import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { colors, getThemeColors, cssVariables } from "~/color";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeColors: typeof colors.light | typeof colors.dark;
  cssVars: Record<string, string>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("dashboard-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dashboard-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeColors = getThemeColors(isDarkMode);
  const cssVars = isDarkMode ? cssVariables.dark : cssVariables.light;

  const value: ThemeContextType = {
    isDarkMode,
    toggleTheme,
    themeColors,
    cssVars,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
