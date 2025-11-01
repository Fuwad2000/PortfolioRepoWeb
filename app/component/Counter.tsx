import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Counter({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  if (typeof window === "undefined") {
    return (
      <div className="text-center space-y-1">
        <span className="text-4xl font-bold text-(--accent) block">
          {value}+
        </span>
        <p style={{ color: "var(--textSecondary)" }}>{label}</p>
      </div>
    );
  }

  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    controls.start({ opacity: 1, y: 0 });
    let raf = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(t * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="text-center space-y-1"
    >
      <motion.span
        className="text-4xl font-bold text-(--accent) block"
        initial={{}}
      >
        {display}+
      </motion.span>
      <p style={{ color: "var(--textSecondary)" }}>{label}</p>
    </motion.div>
  );
}
