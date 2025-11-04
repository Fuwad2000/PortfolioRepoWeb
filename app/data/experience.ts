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

export const EXPERIENCES: Experience[] = [
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
    org: "Personal & Freelance",
    start: "2022-09",
    end: "Present",
    bullets: [
      "Built and deployed multiple apps with CI/CD and AWS infrastructure.",
      "Owned UI/UX, API design, database modeling, and production hardening.",
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
];

export const PROJECTS: Project[] = [
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
    title: "AutoInsight (Marketing + App)",
    bullets: [
      "Marketing site in React; mobile app in Expo/React Native for on-site inspections.",
      "Python/FastAPI backend for VIN decode, image upload, and appraisal endpoints.",
    ],
    tags: ["React", "React Native", "FastAPI", "SQLite/SQL", "AWS"],
    links: [
      { label: "Live Site", href: "https://autoinsight.cc/" },
      {
        label: "App Repo",
        href: "https://github.com/Automotive-Toolkit/Automotive-Buyers-Toolkit.git",
      },
    ],
  },
  {
    title: "AwolInventoryManager",
    bullets: [
      "Inventory management system for a company that sells inventory to other companies.",
      "The system allows the company to manage their inventory, track sales, and generate reports.",
    ],
    tags: ["NextJs", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Live Site", href: "https://awolinvmanager.vercel.app/" },
      {
        label: "Repo",
        href: "https://github.com/Fuwad2000/awolinvmanager.git",
      },
    ],
  },
  {
    title: "Dog Event App",
    bullets: [
      "Spring Boot domain model for owners, dogs, judges, and event assignments.",
      "RESTful APIs, validation, and relational mapping with JPA.",
    ],
    tags: ["Spring Boot", "JPA", "REST", "PostgreSQL"],
    links: [{ label: "Repo", href: "#" }],
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
      { label: "Live Site", href: "#" },
      { label: "Repo", href: "#" },
    ],
  },

  {
    title: "Timhortons Demo App",
    bullets: [
      "A demo app for Timhortons that allows users to view the menu and place orders.",
    ],
    tags: ["Php", "HTML5", "CSS", "JavaScript"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/Fuwad2000/Timhortons-Project.git",
      },
    ],
  },
  {
    title: "Eagles Shoe Website",
    bullets: [
      "E-commerce platform for an online shoe store with product catalog and shopping functionality.",
      "Built with responsive HTML/CSS frontend and Java Spring Boot backend for order management and user interactions.",
    ],
    tags: ["HTML", "CSS", "Java", "Spring Boot"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/Fuwad2000/Eagles-Shoe-Website.git",
      },
    ],
  },
  {
    title: "Soccer Event App",
    bullets: [
      "Event management application for organizing and managing soccer tournaments and matches.",
      "Built with HTML5/CSS frontend, Thymeleaf templating engine, and Java Spring Boot backend for event scheduling, team registration, and match tracking.",
    ],
    tags: ["HTML5", "CSS", "Thymeleaf", "Java", "Spring Boot"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/Fuwad2000/SportEvent.git",
      },
    ],
  },
];

export const SKILLS: Record<string, string[]> = {
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
};
