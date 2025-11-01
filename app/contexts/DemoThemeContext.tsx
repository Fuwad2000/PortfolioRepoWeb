import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { colors, getThemeColors } from "~/color";

interface DemoThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeColors: typeof colors.light | typeof colors.dark;
}

const DemoThemeContext = createContext<DemoThemeContextType | undefined>(
  undefined
);

interface DemoThemeProviderProps {
  children: ReactNode;
}

export const DemoThemeProvider: React.FC<DemoThemeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Load demo theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("demo-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save demo theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("demo-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeColors = getThemeColors(isDarkMode);

  const value: DemoThemeContextType = {
    isDarkMode,
    toggleTheme,
    themeColors,
  };

  return (
    <DemoThemeContext.Provider value={value}>
      {children}
    </DemoThemeContext.Provider>
  );
};

export const useDemoTheme = (): DemoThemeContextType => {
  const context = useContext(DemoThemeContext);
  if (context === undefined) {
    throw new Error("useDemoTheme must be used within a DemoThemeProvider");
  }
  return context;
};

export default DemoThemeContext;
