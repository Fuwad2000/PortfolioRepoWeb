import { Outlet, useNavigation } from "react-router";
import Header from "~/component/HeaderComponent/header";
import { useTheme } from "~/component/ThemeProvider";

export default function PortfolioLayout() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div
      className={isDarkMode ? "text-white" : "text-slate-900"}
      style={{
        minHeight: "100vh",
        background: isDarkMode
          ? "linear-gradient(135deg, #000000 0%, #0a0a0a 35%, #111111 65%, #000000 100%), radial-gradient(ellipse at 20% 20%, rgba(16, 185, 129, 0.14) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%)"
          : "linear-gradient(135deg, #f7f9fb 0%, #eef2f7 35%, #e9edf3 65%, #f7f9fb 100%), radial-gradient(ellipse at top, rgba(16, 185, 129, 0.05) 0%, transparent 55%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <footer className="mt-16 border-t border-(--border) bg-linear-to-b from-transparent via-(--surface) to-(--surface)/90 backdrop-blur-md">
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
              aria-hidden
            >
              <span className="block h-full w-full bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-60 animate-[shimmer_4s_linear_infinite]" />
            </span>
            <div
              className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-sm"
              style={{ color: "var(--textSecondary)" }}
            >
              <span
                className="inline-flex items-center gap-2 text-base"
                style={{ color: "var(--textPrimary)" }}
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.9)0%,rgba(16,185,129,0.25)60%,transparent_85%)] shadow-[0_0_24px_-8px_var(--accent)]"
                  aria-hidden
                >
                  🐦
                </span>
                Degaz Development Team
              </span>
              <span>© 2025 Degaz. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
      {isPageLoading && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="status"
          aria-live="polite"
          aria-label="Page loading"
        >
          <div className="flex flex-col items-center gap-4 text-sm">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-(--accent) border-t-transparent" />
            <span className="text-base tracking-[0.3em] uppercase text-(--textPrimary)">
              Loading...
            </span>
          </div>
        </div>
      )}
      <style>{`
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}
      `}</style>
    </div>
  );
}
