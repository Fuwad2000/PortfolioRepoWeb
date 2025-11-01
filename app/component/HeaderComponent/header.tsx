import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useTheme } from "~/component/ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const pct =
        totalHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / totalHeight) * 100))
          : 0;
      setScrollProgress(pct);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
    { title: "Documents", path: "/documents" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-60"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #10b981, #22c55e, #4ade80)",
          boxShadow: "0 0 12px rgba(16,185,129,0.6)",
          transition: "width 120ms ease-out",
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          isDarkMode
            ? "border-white/10 shadow-2xl shadow-black/80"
            : "border-gray-200/50 shadow-2xl shadow-gray-400/60"
        }`}
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #000000 0%, #000000 30%, rgba(0,27,18,0.6) 60%, #000000 100%), radial-gradient(ellipse at 20% 20%, rgba(16, 185, 129, 0.16) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, rgba(74, 222, 128, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
            : "linear-gradient(135deg, #f7f9fb 0%, #eef2f7 25%, #e9edf3 50%, #f7f9fb 100%), radial-gradient(ellipse at top, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.06) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Aurora background layer */}
          <div className="aurora-layer">
            <div className="aurora-blob b1" />
            <div className="aurora-blob b2" />
          </div>
          {/* Desktop shimmer line under nav */}
          <div className="hidden md:block relative h-0.5 mb-0.5">
            <span className="shimmer-line" />
          </div>
          {/* Desktop layout: full-width flex (no extra box) */}
          <div className="hidden md:flex items-center justify-between h-16">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer select-none"
            >
              <span
                className="text-lg font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--accentHover), var(--accentSubtle), var(--accentHover))",
                  filter: "drop-shadow(0 0 16px var(--accent))",
                }}
              >
                Degaz
              </span>
            </NavLink>
            <nav aria-label="Main" className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive: active }) =>
                      `group relative pb-1 text-sm font-medium transition-colors duration-200 ${
                        active
                          ? isDarkMode
                            ? "text-white"
                            : "text-slate-900"
                          : isDarkMode
                            ? "text-white/80 hover:text-white"
                            : "text-slate-700 hover:text-slate-900"
                      }`
                    }
                  >
                    {item.title}
                    <span
                      className={`pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "group-hover:scale-x-100"
                      }`}
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent), var(--accentHover), var(--accentSubtle))",
                        boxShadow: "0 0 12px var(--accent)",
                      }}
                    />
                  </NavLink>
                );
              })}
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white hover:bg-emerald-400/10 focus:ring-emerald-400/30"
                    : "text-gray-800 hover:bg-emerald-500/10 focus:ring-emerald-400/40"
                }`}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              >
                {isDarkMode ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile shimmer line under nav */}
          <div className="md:hidden relative h-0.5">
            <span className="shimmer-line" />
          </div>

          {/* Mobile layout */}
          <div className="flex md:hidden items-center justify-between h-16">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer select-none"
            >
              <span
                className="ml-2 text-xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--accentHover), var(--accentSubtle), var(--accentHover))",
                  filter: "drop-shadow(0 0 16px var(--accent))",
                }}
              >
                Degaz
              </span>
            </NavLink>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white hover:bg-white/10 focus:ring-white/20"
                    : "text-gray-800 hover:bg-black/5 focus:ring-gray-300"
                }`}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              <button
                onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white hover:bg-emerald-400/10 focus:ring-emerald-400/30"
                    : "text-gray-800 hover:bg-emerald-500/10 focus:ring-emerald-400/40"
                }`}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              >
                {isDarkMode ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
            <div
              ref={mobileMenuRef}
              className={`fixed top-16 left-0 right-0 backdrop-blur-xl border-b z-50 ${
                isDarkMode
                  ? "bg-black/90 border-white/10"
                  : "bg-white/90 border-gray-200/70"
              }`}
            >
              <nav aria-label="Mobile navigation" className="px-4 py-6">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = currentPath === item.path;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive: active }) =>
                          `group block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 ${
                            active
                              ? isDarkMode
                                ? "bg-white text-black shadow-sm focus:ring-white/20"
                                : "bg-black text-white shadow-sm focus:ring-black/20"
                              : isDarkMode
                                ? "text-white/80 hover:bg-white/5 hover:text-white focus:ring-white/20"
                                : "text-gray-800 hover:bg-emerald-50 hover:text-black focus:ring-gray-300"
                          }`
                        }
                      >
                        <span className="relative">
                          {item.title}
                          <span
                            className={`pointer-events-none absolute left-0 -bottom-1 block h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ${
                              isActive
                                ? "scale-x-100"
                                : "group-hover:scale-x-100"
                            }`}
                            style={{
                              background:
                                "linear-gradient(90deg, var(--accent), var(--accentHover), var(--accentSubtle))",
                            }}
                          />
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
