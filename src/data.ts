export const projects = [
  {
    id: "liquid",
    name: "Liquid",
    accent: "bg-[#FF0055]",
    problem: "Scans a photo of a bill, pulls out the line items, and tracks what you actually owe — including rent arrears that settle oldest-first.",
    stack: "React, TypeScript, Vite, Postgres (Supabase, row-level security), Gemini, Render, installable PWA",
    demoLink: "https://liquid-financial.onrender.com",
    demoText: "Live Demo (no signup required)",
    repoLink: "https://github.com/hrithiknl17/liquid-financial",
  },
  {
    id: "mcpwatch",
    name: "MCPwatch",
    accent: "bg-[#EAB308]",
    problem: "Nobody knew how many MCP servers actually work, so I audited all 6,800 of them.",
    stack: "Next.js static dashboard, Vercel",
    stats: [
      { label: "run with zero config", value: "~52%" },
      { label: "declare credential needs", value: "~32%" },
      { label: "have undeclared requirements", value: "~7%" },
      { label: "are broken", value: "~8.5%" }
    ],
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/mcpwatch",
  },
  {
    id: "outreachos",
    name: "OutreachOS",
    accent: "bg-[#00E676]",
    problem: "Sends personalised cold emails from a spreadsheet, with the personalisation written by a model running on my own machine.",
    stack: "Gmail OAuth, Google Sheets, Firecrawl, Ollama (qwen2.5:7b)",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/Cold-OutReach",
  },
  {
    id: "project-pulse",
    name: "Project Pulse",
    accent: "bg-[#8B5CF6]",
    problem: "A focused project workspace for keeping ideas, progress, and delivery signals visible in one place.",
    stack: "React, TypeScript, Next.js, PostgreSQL",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/Product-Plus",
  },
  {
    id: "api-explorer-env",
    name: "API Explorer.env",
    accent: "bg-[#0F766E]",
    problem: "A practical environment for exploring APIs, testing requests, and understanding responses without losing the thread.",
    stack: "React, TypeScript, API tooling, REST",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/api-explorer-env",
  },
  {
    id: "creative-dine",
    name: "Creative Dine",
    accent: "bg-[#F97316]",
    problem: "A warm, visual dining experience that makes discovering a place to eat feel as inviting as the food itself.",
    stack: "React, TypeScript, Vercel, responsive UI",
    demoLink: "https://creative-dine.vercel.app/",
    demoText: "Live Demo",
    repoLink: "https://github.com/hrithiknl17/Creative-dine",
  },
  {
    id: "mailscout",
    name: "MailScout",
    accent: "bg-[#0EA5E9]",
    problem: "Checks whether an email address is real before you send to it, so campaigns stop bouncing. Free and open source.",
    stack: "FastAPI, Python 3.11, Next.js 15, Vercel",
    demoLink: "https://mailscout.vercel.app",
    demoText: "Live Demo",
    repoLink: "https://github.com/hrithiknl17/mailscout",
  },
  {
    id: "grounded",
    name: "Grounded",
    accent: "bg-[#6366F1]",
    problem: "An AI interviewer that reads a resume, retrieves the relevant textbook passages, and asks questions grounded in what it retrieved — then shows you the page numbers behind every question.",
    stack: "FastAPI, Next.js 15, RAG, Python 3.11",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/ai-technical-screening",
  },
  {
    id: "ats-scan-pro",
    name: "ATS Scan Pro",
    accent: "bg-[#F97316]",
    problem: "Most resumes are rejected by applicant tracking systems before a human reads them. This scores yours against a job description and tells you which keywords are missing.",
    stack: "React 18, Supabase, Gemini 1.5 Flash, Vercel",
    demoLink: "https://ats-scanner-six.vercel.app",
    demoText: "Live Demo",
    repoLink: "https://github.com/hrithiknl17/ATS-Scanner-",
  },
  {
    id: "social-spark",
    name: "Social Spark",
    accent: "bg-[#EC4899]",
    problem: "A marketing agent that reads product inventory, checks past campaigns for brand consistency, and writes the captions and visuals itself — falling back to another model when one is rate-limited.",
    stack: "RAG, vector database, multimodal generation, mock Shopify API",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/Social-Agent-",
  },
  {
    id: "rcb-monitor",
    name: "RCB Ticket Monitor",
    accent: "bg-[#DC2626]",
    problem: "Watches the RCB store around the clock in a container and messages me on Telegram the second tickets drop.",
    stack: "Python, Docker, Telegram Bot API",
    demoLink: "#",
    repoLink: "https://github.com/hrithiknl17/Rcb-Ticket-monitor",
  }
];

export const experience = [
  {
    id: "ethnotech",
    company: "Ethnotech Academy Solutions",
    role: "Python Full-Stack Intern",
    date: "Feb–May 2026",
    description: "Built Asset Harmony, a smart inventory and asset management system."
  },
  {
    id: "sjbit-adventure",
    company: "ISE Department Adventure Club, SJBIT",
    role: "Lead",
    date: "2024 — 2026",
    description: "Ran treks and outdoor events for the department."
  },
  {
    id: "fury-arts",
    company: "Fury Arts",
    role: "Founder",
    date: "2022 — 2023",
    description: "Ran a custom posters and digital art business. Closed in 2023."
  }
];

export const detailedExperience = [
  {
    company: "Ethnotech Academy Solutions",
    logoInitials: "EA",
    logoColor: "bg-blue-600",
    roles: [
      {
        title: "Python Full-Stack Intern",
        date: "Feb 2026 — May 2026",
        type: "Internship",
        description: "Built Asset Harmony, a smart inventory and asset management system.",
        tags: ["PYTHON", "FULL-STACK", "ASSET MANAGEMENT"]
      }
    ]
  },
  {
    company: "ISE Department Adventure Club, SJBIT",
    logoInitials: "AC",
    logoColor: "bg-[#1E50FF]", // Super bright blue
    roles: [
      {
        title: "Lead",
        date: "2024 — 2026",
        type: "Extracurricular",
        description: "Ran treks and outdoor events for the department.",
        tags: ["LEADERSHIP", "EVENT MANAGEMENT"]
      }
    ]
  },
  {
    company: "Fury Arts",
    logoInitials: "FA",
    logoColor: "bg-amber-500",
    roles: [
      {
        title: "Founder",
        date: "2022 — 2023",
        type: "Side business",
        description: "Ran a custom posters and digital art business. Closed in 2023.",
        tags: ["DESIGN", "POSTERS", "SMALL BUSINESS"]
      }
    ]
  },
];

export const education = [
  {
    id: "sjbit-be",
    degree: "B.E. Information Science Engineering",
    institution: "SJB Institute of Technology / VTU",
    date: "2026"
  }
];
