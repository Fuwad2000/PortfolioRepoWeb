import { useEffect, type CSSProperties } from "react";
import { createPortal } from "react-dom";

export type ToastVariant = "success" | "error" | "info";

type ToastProps = {
  message: string;
  variant?: ToastVariant;
  onDismiss: () => void;
  duration?: number;
};

const variantStyles: Record<ToastVariant, CSSProperties> = {
  success: {
    background: "color-mix(in srgb, var(--accent) 18%, var(--surface))",
    borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
  },
  error: {
    background: "rgba(239, 68, 68, 0.12)",
    borderColor: "rgba(239, 68, 68, 0.35)",
  },
  info: {
    background: "color-mix(in srgb, var(--surface) 85%, transparent)",
    borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)",
  },
};

export default function Toast({
  message,
  variant = "info",
  onDismiss,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(timeout);
  }, [duration, onDismiss]);

  const style = variantStyles[variant];
  const target = typeof document === "undefined" ? null : document.body;

  if (!target) return null;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-4 bottom-6 z-50 flex justify-center"
    >
      <div
        className="max-w-xl w-full rounded-2xl border px-5 py-3 shadow-[0_20px_45px_-30px_rgba(15,118,110,0.8)] backdrop-blur-xl"
        style={{
          background: style.background,
          borderColor: style.borderColor,
          color: "var(--textPrimary)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm sm:text-base leading-relaxed">
            {message}
          </span>
          <button
            type="button"
            onClick={onDismiss}
            className="text-xs uppercase tracking-[0.25em] text-(--textSecondary) hover:text-(--textPrimary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full px-2 py-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    target
  );
}
