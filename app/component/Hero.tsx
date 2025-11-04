import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";

type LinkConfig = {
  github: string;
  linkedin: string;
  email: string;
};

type HeroProps = {
  name?: string;
  title?: string;
  subtitle?: string;
  skills?: string[];
  links?: LinkConfig;
};

const defaultSkills = [
  "AWS Lambda",
  "EC2",
  "S3",
  "RDS",
  "VPC",
  "IAM",
  "Lambda",
  "CloudFront",
  "API Gateway",
  "Terraform",
  "Docker",
  "Linux",
  "Nginx",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "C#",
  ".NET",
  "C++",
  "C",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "NoSQL",
  "Redis",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Hive",
  "HDFS",
  "Kafka",
  "Apache Kafka",
  "Apache ActiveMQ",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub Actions",
];

const defaultLinks: LinkConfig = {
  github: "https://github.com/Fuwad2000",
  linkedin: "https://www.linkedin.com/in/fuwad-oladega/",
  email: "mailto:oladegafuwad7@gmail.com",
};

function SkillsMarquee({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex gap-3 whitespace-nowrap motion-reduce:animate-none animate-[marquee_28s_linear_infinite]"
          aria-label="skills marquee"
          role="list"
        >
          {list.map((label, idx) => (
            <span
              key={`${label}-${idx}`}
              role="listitem"
              className="px-3 py-1 text-[0.8rem] uppercase tracking-wide rounded-2xl hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-300 motion-reduce:transition-none"
              style={{
                background: "var(--chipBg)",
                border: "1px solid var(--chipBorder)",
                color: "var(--textPrimary)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <style>{`
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .animate-[marquee_28s_linear_infinite] { animation: none !important; } }
      `}</style>
    </div>
  );
}

export default function Hero({
  name = "Fuwad Oladega",
  title = "Cloud & Software Developer",
  subtitle = "I build cloud-ready apps and infrastructure. Co-op Infrastructure Analyst at Region of Peel, Tutor at Sheridan. I design clean UIs, automate backends, and deploy on AWS with confidence.",
  skills = defaultSkills,
  links = defaultLinks,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const current = heroRef.current;
    if (!current) return;

    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = current.getBoundingClientRect();
        setCursorPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      });
      setCursorVisible(true);
    };

    const handleLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      setCursorVisible(false);
    };

    current.addEventListener("mousemove", handleMove);
    current.addEventListener("mouseleave", handleLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      current.removeEventListener("mousemove", handleMove);
      current.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="relative">
      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40"
      >
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
              opacity: cursorVisible ? 0.4 : 0,
              background:
                "radial-gradient(circle at center, rgba(16,185,129,0.45) 0%, rgba(56,189,248,0.25) 45%, transparent 70%)",
              boxShadow: "0 0 120px rgba(16,185,129,0.35)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-18 items-center relative">
          <div className="lg:col-span-7">
            <p
              className="text-lg sm:text-xl tracking-[0.35em] uppercase"
              style={{ color: "var(--textMuted)" }}
            >
              Hi, I'm
            </p>
            <h1
              className="mt-4 font-extrabold leading-tight"
              style={{
                fontSize: "clamp(3.25rem, 8vw, 5.5rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                color: "var(--textPrimary)",
              }}
            >
              {name}
            </h1>
            <div className="mt-4 h-1.5 w-32 rounded-full bg-linear-to-r from-(--accent) via-emerald-300/60 to-transparent" />
            <h2
              className="mt-6 font-semibold text-2xl sm:text-4xl lg:text-5xl tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              {title}
            </h2>
            <p
              className="mt-8 max-w-3xl text-lg sm:text-xl lg:text-2xl leading-[1.75]"
              style={{ color: "var(--textSecondary)" }}
            >
              {subtitle}
            </p>

            <div className="mt-12 flex items-center gap-5">
              <a
                href={links.email}
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base rounded-2xl btn-accent font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-200"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base rounded-2xl border border-accent hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-200"
                style={{ color: "var(--textPrimary)" }}
              >
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </div>

            {/* Skills rail above social icons */}
            <div className="mt-10">
              <SkillsMarquee items={skills} />
            </div>

            {/* Social icons row */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={links.github}
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:scale-105 hover:ring-2 hover:ring-(--accent) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) transition-all duration-200"
                style={{
                  background: "var(--chipBg)",
                  border: "1px solid var(--chipBorder)",
                  color: "var(--textPrimary)",
                }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="h-[24px] w-[24px]" aria-hidden />
              </a>
              <a
                href={links.linkedin}
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:scale-105 hover:ring-2 hover:ring-(--accent) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) transition-all duration-200"
                style={{
                  background: "var(--chipBg)",
                  border: "1px solid var(--chipBorder)",
                  color: "var(--textPrimary)",
                }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="h-[24px] w-[24px]" aria-hidden />
              </a>
              <a
                href={links.email}
                aria-label="Email"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:scale-105 hover:ring-2 hover:ring-(--accent) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) transition-all duration-200"
                style={{
                  background: "var(--chipBg)",
                  border: "1px solid var(--chipBorder)",
                  color: "var(--textPrimary)",
                }}
                title="Email"
              >
                <Mail className="h-[24px] w-[24px]" aria-hidden />
              </a>
            </div>
          </div>

          {/* Right column: profile photo */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Soft radial gradient glow behind photo */}
            <div
              className="absolute inset-0 rounded-4xl"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
              aria-hidden
            />

            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-md lg:h-112 transform-3d will-change-transform motion-reduce:transform-none border border-white/10 rounded-4xl"
              onMouseMove={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                const rect = el.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                const ry = (px - 0.5) * 10;
                const rx = (0.5 - py) * 10;
                el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "perspective(900px) rotateX(0deg) rotateY(0deg)";
              }}
            >
              {/* Soft emerald glow, reduced for subtle blend */}
              <div
                className="absolute -inset-2 rounded-4xl bg-linear-to-br from-emerald-400/12 via-emerald-500/6 to-transparent blur-2xl animate-[floatY_9s_ease-in-out_infinite] motion-reduce:animate-none"
                aria-hidden
              />
              {/* Animated gradient ring */}
              <div
                className="absolute -inset-0.5 rounded-4xl opacity-70 mask-[linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] mask-exclude p-0.5"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(16,185,129,0.4), rgba(34,197,94,0.25), rgba(16,185,129,0.4))",
                  animation: "spinGrad 16s linear infinite",
                }}
                aria-hidden
              />
              {/* Vignette mask overlay to blend edges */}
              <div
                className="pointer-events-none absolute inset-0 rounded-4xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(120%_120% at 50% 50%, black 70%, transparent 100%)",
                  maskImage:
                    "radial-gradient(120%_120% at 50% 50%, black 70%, transparent 100%)",
                }}
              />
              <img
                src="/images/cool.jpg"
                alt="Fuwad Oladega portrait"
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-cover object-top-right rounded-4xl ring-1 ring-black/30 dark:ring-white/10 shadow-2xl"
              />
              {/* Darken gradient + soft highlight for cohesion */}
              <div
                className="pointer-events-none absolute inset-0 rounded-4xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0) 70%), radial-gradient(60% 40% at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <ChevronDown
          className="h-6 w-6 text-white/40 animate-[pulse_2s_ease-in-out_infinite]"
          aria-hidden
        />
      </div>

      <style>{`
@keyframes floatY { 0% { transform: translateY(0); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0); } }
@keyframes spinGrad { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { 
  .animate-[floatY_9s_ease-in-out_infinite] { animation: none !important; } 
  .animate-[pulse_2s_ease-in-out_infinite] { animation: none !important; }
}
      `}</style>
    </section>
  );
}
