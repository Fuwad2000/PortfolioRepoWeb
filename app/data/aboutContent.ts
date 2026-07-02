export type AboutTextSegment = {
  text: string;
  highlight?: boolean;
};

export type AboutParagraph = {
  segments: AboutTextSegment[];
};

export type AboutIconKey =
  | "cloud"
  | "code2"
  | "server"
  | "graduationCap"
  | "target"
  | "trendUp"
  | "bookOpen"
  | "dumbbell"
  | "trophy";

export type AboutCard = {
  icon: AboutIconKey;
  title: string;
  text: string;
};

export type AboutTimelineItem = {
  year: string;
  title: string;
  org: string;
  body: string;
};

export type AboutStat = {
  value: number;
  label: string;
};

export type AboutLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export const aboutContent = {
  hero: {
    eyebrow: "Who I Am",
    name: "Fuwad Oladega",
    title: "Cloud & Software Developer",
    achievement: "Sheridan Software Capstone Winner 2025",
    image: {
      src: "/images/work.jpg",
      alt: "Fuwad Oladega",
    },
    bio: [
      {
        segments: [
          {
            text: "I build scalable cloud applications, modern web platforms, and enterprise infrastructure that solve real-world problems. My passion lies in combining software engineering, cloud technologies, and automation to create solutions that are secure, reliable, and intuitive to use.",
          },
        ],
      },
      {
        segments: [
          {
            text: "Originally from Nigeria and proudly calling Canada home since 2017, I bring a global perspective, curiosity, and a commitment to continuous learning. I enjoy transforming complex technical challenges into practical solutions that deliver measurable value for businesses and users.",
          },
        ],
      },
      {
        segments: [
          { text: "Today, I work as an " },
          {
            text: "Datacenter Infrastructure Specialist at Microsoft",
            highlight: true,
          },
          {
            text: ", where I help support large-scale cloud infrastructure powering enterprise services. Previously, I worked as an ",
          },
          {
            text: "Infrastructure Analyst at the Region of Peel",
            highlight: true,
          },
          { text: ", contributing to enterprise IT operations, and served as a " },
          {
            text: "Cloud & Networking Tutor at Sheridan College",
            highlight: true,
          },
          {
            text: ", helping students strengthen their understanding of software development, networking, and cloud technologies.",
          },
        ],
      },
      {
        segments: [
          { text: "Beyond my professional work, I am the " },
          {
            text: "Co-founder of Eagles Development Team",
            highlight: true,
          },
          {
            text: ", where I design and build production-ready websites and cloud-based solutions for businesses. From responsive front-end experiences to secure backend systems, databases, booking platforms, and cloud deployments, I enjoy turning ideas into reliable digital products.",
          },
        ],
      },
    ] satisfies AboutParagraph[],
    expertiseHeading: "Areas of Expertise",
    expertise: [
      "Cloud Infrastructure Engineering",
      "Full-Stack Web Development",
      "Software Engineering",
      "Cloud Application Development",
      "AWS & Azure Cloud Services",
      "DevOps & Automation",
      "Enterprise IT Infrastructure",
      "Networking & Systems Administration",
      "Database Design & API Development",
      "UI/UX Development",
      "IT Support & Infrastructure Operations",
      "Technical Mentoring & Tutoring",
    ],
    actions: [
      { label: "View Resume", href: "/documents" },
      { label: "Let's Connect", href: "/contact" },
    ] satisfies AboutLink[],
  },
  stats: [
    { value: 3, label: "Years of Experience" },
    { value: 30, label: "Courses Taught" },
    { value: 150, label: "Students Mentored" },
  ] satisfies AboutStat[],
  whatIDo: {
    eyebrow: "Core Focus",
    heading: "What I Do",
    intro:
      "Software development meets cloud infrastructure — I architect systems, ship products, and automate workflows.",
    strengths: [
      {
        icon: "cloud",
        title: "Cloud Architecture & Automation",
        text: "Resilient AWS ecosystems, IaC, and automated deployments.",
      },
      {
        icon: "code2",
        title: "Full-Stack Development",
        text: "Modern interfaces and secure APIs with React, Spring Boot, and .NET.",
      },
      {
        icon: "server",
        title: "Infrastructure & API Management",
        text: "Observability, performance tuning, and production lifecycle management.",
      },
      {
        icon: "graduationCap",
        title: "Tutoring & Mentorship",
        text: "Structured lessons, labs, and real-world project coaching.",
      },
    ] satisfies AboutCard[],
  },
  journey: {
    heading: "My Journey",
    timeline: [
      {
        year: "January 2026 — Present",
        title: "Microsoft Infrastructure Specialist",
        org: "Microsoft",
        body: "Azure, Exchange, Windows, and Xbox cloud infrastructure at scale.",
      },
      {
        year: "January 2024 — August 2025",
        title: "Infrastructure Analyst Intern",
        org: "Region of Peel",
        body: "Automated workflows and monitored enterprise production workloads.",
      },
      {
        year: "October 2023 — Present",
        title: "Software Development Tutor",
        org: "Sheridan College",
        body: "Teaching programming, databases, networking, and cloud computing.",
      },
      {
        year: "September 2022 — Present",
        title: "Full-Stack Projects",
        org: "Eagles Development Team",
        body: "End-to-end web apps on AWS with CI/CD and container orchestration.",
      },
    ] satisfies AboutTimelineItem[],
  },
  howIWork: {
    eyebrow: "My Principles",
    heading: "How I Work",
    intro:
      "Three principles that shape how I build, collaborate, and keep improving.",
    values: [
      {
        icon: "target",
        title: "Consistency",
        text: "Deliberate practice and focus drive reliable engineering.",
      },
      {
        icon: "code2",
        title: "Simplicity",
        text: "Complex problems deserve clear, maintainable solutions.",
      },
      {
        icon: "trendUp",
        title: "Growth",
        text: "Every project and mentorship session is a chance to level up.",
      },
    ] satisfies AboutCard[],
  },
  beyondTheScreen: {
    eyebrow: "Off the Clock",
    heading: "Beyond the Screen",
    intro: "Football, fitness, and mentoring outside of work.",
    interests: [
      {
        icon: "bookOpen",
        title: "Mentoring",
        text: "Helping aspiring engineers grow faster.",
      },
      {
        icon: "dumbbell",
        title: "Wellness",
        text: "Gym sessions keep my focus sharp.",
      },
      {
        icon: "trophy",
        title: "Football",
        text: "Strategy, teamwork, and grit from the sport I love.",
      },
    ] satisfies AboutCard[],
  },
  cta: {
    eyebrow: "Let's Connect",
    text: "Ready to collaborate or need a mentor?",
    subtext:
      "Whether you're hiring, partnering, or looking for guidance — I'd love to hear from you.",
    actions: [
      { label: "Get in Touch", href: "/contact", variant: "primary" },
      { label: "View Experience", href: "/experience", variant: "secondary" },
    ] satisfies AboutLink[],
  },
} as const;
