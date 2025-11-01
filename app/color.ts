// AutoInsight Color System
// Comprehensive color palette with light and dark modes

export const colors = {
  // Brand Colors - AutoInsight Purple Theme
  brand: {
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7c3aed",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },
    secondary: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e",
    },
    accent: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
  },

  // Logo Gradient Colors
  logo: {
    gradient: {
      from: "#8b5cf6",
      via: "#a855f7",
      to: "#c084fc",
      accent: "#a78bfa",
    },
    // Alternative gradient combinations
    gradients: {
      primary: "linear-gradient(to right, #8b5cf6, #a855f7, #c084fc, #a78bfa)",
      secondary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accent: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
      purple: "linear-gradient(to right, #8b5cf6, #a855f7, #c084fc)",
      blue: "linear-gradient(to right, #3b82f6, #1d4ed8, #1e40af)",
    },
  },

  // Light Mode Colors
  light: {
    // Background Colors
    background: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#f1f5f9",
      card: "#ffffff",
      cardHover: "#f8fafc",
      overlay: "rgba(0, 0, 0, 0.1)",
      backdrop: "rgba(0, 0, 0, 0.05)",
    },

    // Text Colors
    text: {
      primary: "#0f172a",
      secondary: "#475569",
      tertiary: "#64748b",
      muted: "#94a3b8",
      inverse: "#ffffff",
      brand: "#7c3aed",
    },

    // Border Colors
    border: {
      primary: "#e2e8f0",
      secondary: "#cbd5e1",
      tertiary: "#f1f5f9",
      brand: "#c084fc",
      focus: "#8b5cf6",
    },

    // Semantic Colors
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      text: "#166534",
      bg: "#f0fdf4",
      border: "#bbf7d0",
    },

    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      text: "#92400e",
      bg: "#fffbeb",
      border: "#fde68a",
    },

    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      text: "#991b1b",
      bg: "#fef2f2",
      border: "#fecaca",
    },

    info: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      text: "#1e40af",
      bg: "#eff6ff",
      border: "#bfdbfe",
    },

    // Interactive Colors
    interactive: {
      primary: {
        bg: "#8b5cf6",
        bgHover: "#7c3aed",
        bgActive: "#6b21a8",
        text: "#ffffff",
        border: "#8b5cf6",
      },
      secondary: {
        bg: "transparent",
        bgHover: "rgba(139, 92, 246, 0.1)",
        bgActive: "rgba(139, 92, 246, 0.2)",
        text: "#8b5cf6",
        border: "#8b5cf6",
      },
      ghost: {
        bg: "transparent",
        bgHover: "rgba(0, 0, 0, 0.05)",
        bgActive: "rgba(0, 0, 0, 0.1)",
        text: "#475569",
        border: "transparent",
      },
    },

    // Shadow Colors
    shadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      brand: "0 4px 14px 0 rgba(139, 92, 246, 0.25)",
    },
  },

  // Dark Mode Colors
  dark: {
    // Background Colors
    background: {
      primary: "#000000",
      secondary: "#111111",
      tertiary: "#1a1a1a",
      card: "#111111",
      cardHover: "#1a1a1a",
      overlay: "rgba(0, 0, 0, 0.5)",
      backdrop: "rgba(0, 0, 0, 0.3)",
    },

    // Text Colors
    text: {
      primary: "#ffffff",
      secondary: "#e5e5e5",
      tertiary: "#a3a3a3",
      muted: "#737373",
      inverse: "#000000",
      brand: "#c084fc",
    },

    // Border Colors
    border: {
      primary: "#262626",
      secondary: "#404040",
      tertiary: "#111111",
      brand: "#a855f7",
      focus: "#c084fc",
    },

    // Semantic Colors (adjusted for dark mode)
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      text: "#4ade80",
      bg: "rgba(34, 197, 94, 0.1)",
      border: "rgba(34, 197, 94, 0.2)",
    },

    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      text: "#fbbf24",
      bg: "rgba(245, 158, 11, 0.1)",
      border: "rgba(245, 158, 11, 0.2)",
    },

    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      text: "#f87171",
      bg: "rgba(239, 68, 68, 0.1)",
      border: "rgba(239, 68, 68, 0.2)",
    },

    info: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      text: "#60a5fa",
      bg: "rgba(59, 130, 246, 0.1)",
      border: "rgba(59, 130, 246, 0.2)",
    },

    // Interactive Colors
    interactive: {
      primary: {
        bg: "#8b5cf6",
        bgHover: "#a855f7",
        bgActive: "#c084fc",
        text: "#ffffff",
        border: "#8b5cf6",
      },
      secondary: {
        bg: "transparent",
        bgHover: "rgba(139, 92, 246, 0.1)",
        bgActive: "rgba(139, 92, 246, 0.2)",
        text: "#c084fc",
        border: "#8b5cf6",
      },
      ghost: {
        bg: "transparent",
        bgHover: "rgba(255, 255, 255, 0.05)",
        bgActive: "rgba(255, 255, 255, 0.1)",
        text: "#cbd5e1",
        border: "transparent",
      },
    },

    // Shadow Colors
    shadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      brand: "0 4px 14px 0 rgba(139, 92, 246, 0.4)",
    },
  },

  // Animation Colors
  animation: {
    shimmer: {
      from: "rgba(255, 255, 255, 0)",
      to: "rgba(255, 255, 255, 0.1)",
    },
    glow: {
      purple: "rgba(139, 92, 246, 0.3)",
      blue: "rgba(59, 130, 246, 0.3)",
      green: "rgba(34, 197, 94, 0.3)",
      red: "rgba(239, 68, 68, 0.3)",
    },
  },

  // Status Colors
  status: {
    online: "#22c55e",
    offline: "#ef4444",
    away: "#f59e0b",
    busy: "#dc2626",
    pending: "#64748b",
  },

  // Chart Colors
  chart: {
    primary: ["#8b5cf6", "#a855f7", "#c084fc", "#a78bfa", "#7c3aed"],
    secondary: ["#3b82f6", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    success: ["#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"],
    warning: ["#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"],
    error: ["#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"],
  },
};

// Utility functions for theme switching
export const getThemeColors = (isDark: boolean) => {
  return isDark ? colors.dark : colors.light;
};

export const getBrandGradient = (
  variant: keyof typeof colors.logo.gradients = "primary"
) => {
  return colors.logo.gradients[variant];
};

export const getSemanticColor = (
  type: "success" | "warning" | "error" | "info",
  isDark: boolean = false
) => {
  const theme = isDark ? colors.dark : colors.light;
  return theme[type];
};

// CSS Variables for easy use in CSS
export const cssVariables = {
  light: {
    "--color-bg-primary": colors.light.background.primary,
    "--color-bg-secondary": colors.light.background.secondary,
    "--color-text-primary": colors.light.text.primary,
    "--color-text-secondary": colors.light.text.secondary,
    "--color-border-primary": colors.light.border.primary,
    "--color-brand-primary": colors.brand.primary[600],
    "--color-success": colors.light.success[500],
    "--color-warning": colors.light.warning[500],
    "--color-error": colors.light.error[500],
    "--color-info": colors.light.info[500],
  },
  dark: {
    "--color-bg-primary": colors.dark.background.primary,
    "--color-bg-secondary": colors.dark.background.secondary,
    "--color-text-primary": colors.dark.text.primary,
    "--color-text-secondary": colors.dark.text.secondary,
    "--color-border-primary": colors.dark.border.primary,
    "--color-brand-primary": colors.brand.primary[400],
    "--color-success": colors.dark.success[500],
    "--color-warning": colors.dark.warning[500],
    "--color-error": colors.dark.error[500],
    "--color-info": colors.dark.info[500],
  },
};

export default colors;

// THEME APPLICATION HELPERS (CSS Variables)
export type ThemeMode = "light" | "dark";

// Applies both the existing cssVariables tokens and a small set of common tokens
export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const theme = mode === "dark" ? colors.dark : colors.light;
  const varSet = mode === "dark" ? cssVariables.dark : cssVariables.light;

  // Apply existing token set
  Object.entries(varSet).forEach(([key, value]) => {
    root.style.setProperty(key, value as string);
  });

  // Apply convenience variables for components (background, surface, text, accent, border)
  const commons: Record<string, string> =
    mode === "dark"
      ? {
          "--background": theme.background.primary,
          "--surface": theme.background.secondary,
          "--textPrimary": theme.text.primary,
          "--textSecondary": theme.text.secondary,
          "--textMuted": theme.text.muted,
          // Use green success palette for accent in dark mode
          "--accent": colors.dark.success[500],
          "--accentHover": colors.dark.success[400],
          "--accentSubtle": colors.dark.success[600],
          "--border": theme.border.primary,
          "--borderAccent": "rgba(34,197,94,0.25)",
        }
      : {
          "--background": theme.background.primary,
          "--surface": theme.background.card,
          "--textPrimary": theme.text.primary,
          "--textSecondary": theme.text.secondary,
          "--textMuted": theme.text.muted,
          // Use green success palette for accent in light mode
          "--accent": colors.light.success[500],
          "--accentHover": colors.light.success[400],
          "--accentSubtle": colors.light.success[600],
          "--border": theme.border.primary,
          "--borderAccent": "rgba(34,197,94,0.25)",
        };

  Object.entries(commons).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Component-specific helpers
  const componentVars =
    mode === "dark"
      ? {
          "--chipBg": "rgba(255,255,255,0.05)",
          "--chipBorder": "rgba(255,255,255,0.1)",
        }
      : {
          "--chipBg": "rgba(0,0,0,0.05)",
          "--chipBorder": "rgba(0,0,0,0.08)",
        };
  Object.entries(componentVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  root.setAttribute("data-theme", mode);
}
