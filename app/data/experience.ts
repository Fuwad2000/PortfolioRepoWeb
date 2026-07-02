export type Experience = {
  title: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  title: string;
  role?: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceReference = {
  name: string;
  role: string;
  org: string;
  email: string;
};

export type SkillCategories = Record<string, string[]>;

export const experienceContent = {
  header: {
    eyebrow: "Journey",
    title: "Experience",
    subtitle:
      "Over 3 years of hands-on infrastructure and full-stack work, plus 150+ students mentored.",
    actions: [
      { label: "View Resume", href: "/documents" },
      { label: "Get in Touch", href: "/contact" },
    ] satisfies ExperienceLink[],
  },
  journey: {
    heading: "Professional Journey",
    dateRange: "Jan 2026 – Present",
  },
  projectsSection: {
    heading: "Selected Full-Stack Projects",
    description:
      "A mix of client work, community apps, and Eagles Development Team builds—covering UI, APIs, and production ops.",
  },
  skillsSection: {
    heading: "Core Skills",
    description:
      "The toolset I use to design, build, ship, and maintain dependable software.",
  },
  referencesSection: {
    heading: "References",
    description: "Professional references available upon request.",
    items: [
      {
        name: "Andrew Griffith",
        role: "Supervisor, Infrastructure Services",
        org: "Region of Peel",
        email: "andrew.griffith@peelregion.ca",
      },
      {
        name: "Madeleine Crew",
        role: "Tutor Training & Engagement Coordinator",
        org: "Sheridan College",
        email: "madeleine.crew@sheridancollege.ca",
      },
    ] satisfies ExperienceReference[],
  },
  experiences: [
    {
      title: "Datacenter Infrastructure Specialist",
      org: "Microsoft",
      start: "2026-01",
      end: "Present",
      bullets: [
        "Build and maintain Azure, Exchange, Windows, and Xbox cloud infrastructure at scale.",
        "Support large-scale datacenter operations powering enterprise Microsoft services.",
        "Improve reliability, monitoring, and lifecycle management across production workloads.",
      ],
      tags: [
        "Azure",
        "Windows",
        "Exchange",
        "Cloud Infrastructure",
        "Monitoring",
        "Automation",
      ],
    },
    {
      title: "Infrastructure Analyst Intern  (3 co-op terms)",
      org: "Region of Peel",
      start: "2024-01",
      end: "2025-08",
      bullets: [
        "Automated infrastructure workflows and improved reliability across enterprise environments.",
        "Monitored production workloads; resolved incidents and tuned performance.",
        "Supported migrations, network changes, and asset lifecycle tasks across multiple sites.",
      ],
      tags: [
        "AWS",
        "Linux",
        "Networking",
        "Monitoring",
        "Automation",
        "ServiceNow",
      ],
    },
    {
      title: "Software Development Tutor",
      org: "Sheridan College",
      start: "2023-10",
      end: "Present",
      bullets: [
        "Mentored students in programming, databases, networking, and cloud labs.",
        "Delivered demos and code reviews; simplified complex concepts for diverse learners.",
      ],
      tags: ["Python", "Java", "SQL", "AWS", "Linux", "Teaching"],
    },
    {
      title: "Full-Stack Projects",
      org: "Eagles Development Team",
      start: "2022-09",
      end: "Present",
      bullets: [
        "Co-founded Eagles Development Team and built production-ready websites and cloud solutions for businesses.",
        "Owned UI/UX, API design, database modeling, CI/CD, and AWS deployments.",
      ],
      tags: [
        "React",
        "React Native",
        "Spring Boot",
        ".NET",
        "FastAPI",
        "AWS",
        "Docker",
      ],
    },
  ] satisfies Experience[],
  projects: [

    {
      title: "Imars Barbershop Booking Website",
      bullets: [
        "Production-ready barbershop website with online booking, service selection, and appointment request flow.",
        "Built a secure contact and booking system with spam protection, email notifications, and database storage.",
      ],
      tags: ["Next.js", "Supabase", "Resend", "Turnstile", "Booking System"],
      links: [
        {
          label: "Live Site",
          href: "https://imarsbarbershop.ca",
        },
        {
          label: "Repo",
          href: "https://github.com/Fuwad2000/IMAR_SALOON.git",
        },
      ],
    },
    
    
    {
      title: "AutoInsight (Marketing + App)",
      bullets: [
        "Marketing site in React; mobile app in Expo/React Native for on-site inspections.",
        "Python/FastAPI backend for VIN decode, image upload, and appraisal endpoints.",
      ],
      tags: ["React", "React Native", "FastAPI", "SQLite/SQL", "AWS"],
      links: [
        { label: "Live Site", href: "https://autoinsight.cc/" },
        {
          label: "Repo",
          href: "https://github.com/Automotive-Toolkit/Automotive-Buyers-Toolkit.git",
        },
      ],
    },
    {
      title: "Alex Renovation Website",
      bullets: [
        "Marketing site built with React + responsive Tailwind layout.",
        "Optimized Lighthouse scores, image loading, and SEO metadata.",
      ],
      tags: ["React", "Vite", "Tailwind"],
      links: [
        { label: "Live Site", href: "https://alex-renovation.vercel.app/" },
        {
          label: "Repo",
          href: "https://github.com/Fuwad2000/Alex-Renovation-Repo.git",
        },
      ],
    },
    {
      title: "Yaseen Musallah App",
      bullets: [
        "Community app with schedule display and announcements.",
        "Clean UI, offline-friendly UX, and deployment automation.",
      ],
      tags: ["React Native", "Expo", "Node/Express"],
      links: [
        { label: "Live Site", href: "https://yassen-musallah.vercel.app/" },
        {
          label: "Repo",
          href: "https://github.com/Fuwad2000/YassenMusallah.git",
        },
      ],
    },
    {
      title: "Java Email Service",
      bullets: [
        "Templated email sender with queue/retry logic and provider failover.",
        "Secured secrets and environment configs for multiple environments.",
      ],
      tags: ["Java", "Spring", "SMTP", "Email Service"],
      links: [
        {
          label: "Repo",
          href: "https://github.com/Fuwad2000/SpringEmailService.git",
        },
      ],
    },
    {
      title: "JavaScript Mini-Games",
      bullets: [
        "Rock-Paper-Scissors and Guess-the-Number with clean state management.",
        "Accessible controls, sound toggles, and score persistence.",
      ],
      tags: ["JavaScript", "HTML5", "CSS"],
      links: [
        { label: "Live Site", href: "https://rps-and-guess-game.vercel.app/" },
        {
          label: "Repo",
          href: "https://github.com/Fuwad2000/RPS-and-Guess-Game.git",
        },
      ],
    },
  ] satisfies Project[],
  skills: {
    "Cloud & Infra": [
      "AWS (EC2, S3, RDS, VPC)",
      "IAM",
      "CloudFront",
      "API Gateway",
      "AWS Lambda",
      "Elastic Load Balancer",
      "Auto Scaling Groups",
      "Linux",
      "Networking",
    ],
    Backend: [
      "Java / Spring Boot",
      ".NET C#",
      "Python / FastAPI",
      "Node/Express",
      "REST",
      "Auth/JWT",
    ],
    Frontend: ["React", "React Native", "Tailwind", "Vite", "TypeScript"],
    "DevOps & Automation": [
      "Docker",
      "CI/CD",
      "Terraform",
      "Monitoring/Logs",
      "Kafka",
    ],
    Databases: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB (basic)",
      "Hive",
      "HDFS",
    ],
    Tools: ["Git/GitHub", "ServiceNow", "Figma", "Postman", "Wireshark"],
  } satisfies SkillCategories,
};

export const EXPERIENCES = experienceContent.experiences;
export const PROJECTS = experienceContent.projects;
export const SKILLS = experienceContent.skills;
