import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

const profile = process.env.NEXT_PUBLIC_PROFILE;

const himanshuData = {
  name: "Himanshu J.",
  fullName: "Himanshu Jaroli",
  title: "Building & shipping\nreal-world products.",
  currentCompany: "RapidStart",
  companyUrl: "https://www.rapidstart.net/",
  calLink: "https://cal.com/himanshu-jaroli-cjbeah/30min",
  navigation: [
    { label: "Creations", href: "/creations" },
    { label: "Work", href: "/work" },
    { label: "Changelog", href: "/changelog" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "jaroli.himanshu.work@gmail.com",
    page: {
      title: "Contact.",
      subline1: "Want to hire me? Let's connect.",
      subline2: "Available for freelance projects and full-time opportunities.",
      primaryCTA: {
        text: "Book a Call",
      },
      secondaryHeading: "Or connect via other channels:",
      channels: [
        {
          id: "email",
          label: "Email",
        },
        {
          id: "twitter",
          label: "Twitter / X",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
        },
        {
          id: "github",
          label: "GitHub",
        },
      ],
    },
  },
  social: {
    github: "https://github.com/HJ1X/",
    twitter: "https://x.com/himanshu_jaroli/",
    linkedin: "https://www.linkedin.com/in/himanshu-jaroli/",
  },
  home: {
    title: "Building & shipping\nreal-world products.",
    subline: (
      <span>
        Currently building{" "}
        <Link
          href="https://Naukri-outreach.vercel.app/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">Naukri Outreach</Highlight>
        </Link>{" "}
        and{" "}
        <Link
          href="https://novacraftsai.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">NovaCraftsAI</Highlight>
        </Link>
        , while engineering production systems at{" "}
        <Link
          href="https://www.rapidstart.net/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">RapidStart</Highlight>
        </Link>
        .
      </span>
    ),
    image: "/himanshu.png",
    cta: {
      text: "Let's connect",
    },
  },
  creations: {
    page: {
      title: "Creations",
      subline1: "Tools that solve real problems.",
      subline2:
        "From automating job applications to crafting custom software solutions.",
    },
    items: [
      {
        id: "naukri",
        title: "Naukri Outreach",
        description:
          "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
        href: "https://Naukri-outreach.vercel.app/",
        actionText: "See the Tool",
        gradient: "from-emerald-500/10 via-teal-500/10 to-blue-500/10",
        image: "/naukri-outreach.png",
      },
      {
        id: "novacrafts",
        title: "NovaCraftsAI",
        description:
          "A software studio focused on turning ideas into real systems — spanning web and mobile applications, AI agents and workflow automation.",
        href: "https://novacraftsai.com/",
        actionText: "Visit Studio",
        gradient: "from-orange-500/10 via-amber-500/10 to-red-500/10",
        image: "/nova-crafts-ai.png",
      },
    ],
  },
  changelog: {
    page: {
      title: "Changelog.",
      subline1: "My professional journey.",
      subline2: "Full-time roles and career milestones.",
    },
  },
  work: {
    page: {
      title: "Work.",
      subline1: "Projects I've worked on.",
      subline2:
        "From automating job applications to crafting custom software solutions.",
    },
    ui: {
      openLink: "Open Link",
      fallbackImage: "/himanshu.png",
    },
    fullTime: [
      {
        id: "rapidstart",
        title: "Senior Full Stack Developer",
        company: "Rapidstart",
        duration: "Jan 2023 - Present",
        description:
          "Leading development of enterprise SaaS applications, architecting scalable solutions, and mentoring junior developers.",
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        achievements: [
          "Reduced API response time by 60% through optimization",
          "Led migration to microservices architecture",
          "Implemented CI/CD pipeline reducing deployment time by 80%",
        ],
      },
      {
        id: "tcs",
        title: "Full Stack Developer",
        company: "Tata Consultancy Services",
        duration: "Jul 2021 - Dec 2022",
        description:
          "Developed and maintained enterprise applications for Fortune 500 clients, focusing on scalability and performance.",
        technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker"],
        achievements: [
          "Delivered 5+ client projects on time and within budget",
          "Improved application performance by 40%",
          "Mentored 3 junior developers",
        ],
      },
      {
        id: "tcs-intern",
        title: "Software Engineering Intern",
        company: "Tata Consultancy Services",
        duration: "Jan 2021 - Jun 2021",
        description:
          "Contributed to full-stack development projects, learned industry best practices, and collaborated with cross-functional teams.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        achievements: [
          "Built internal tool used by 50+ team members",
          "Received pre-placement offer",
          "Completed training in Agile methodologies",
        ],
      },
      {
        id: "humaps-intern",
        title: "Frontend Development Intern",
        company: "Humaps",
        duration: "Jun 2020 - Dec 2020",
        description:
          "Developed responsive web interfaces and collaborated with designers to create intuitive user experiences.",
        technologies: ["React", "JavaScript", "CSS3", "Figma"],
        achievements: [
          "Redesigned company website increasing user engagement by 35%",
          "Implemented responsive design across all pages",
          "Created reusable component library",
        ],
      },
    ],
    clientProjects: [
      {
        id: "yash-bikes",
        name: "Yash Bikes",
        category: "E-commerce",
        description:
          "Custom e-commerce platform for premium bicycle retailer with inventory management and online booking system.",
        technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        year: "2024",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/yash-bikes.svg",
      },
      {
        id: "afm",
        name: "Asia Forex Mentor",
        category: "Education Platform",
        description:
          "Comprehensive forex trading education platform with course management, student dashboard, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/afm.svg",
      },
      {
        id: "grief-navigator",
        name: "Grief Navigator",
        category: "Mental Health",
        description:
          "Compassionate platform connecting individuals with grief counselors and support resources.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/grief-navigator.svg",
      },
      {
        id: "valerie-ai",
        name: "Valerie.ai",
        category: "AI/ML",
        description:
          "AI-powered virtual assistant for healthcare professionals with natural language processing capabilities.",
        technologies: ["Python", "React", "OpenAI", "FastAPI"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/valerie-ai.svg",
      },
      {
        id: "disability-dynamics",
        name: "Disability Dynamics",
        category: "Accessibility",
        description:
          "Accessibility-first platform providing resources and tools for individuals with disabilities.",
        technologies: ["Next.js", "TypeScript", "Prisma", "WCAG 2.1"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/disability-dynamics.svg",
      },
      {
        id: "remember-publisher",
        name: "Remember Publisher",
        category: "Content Management",
        description:
          "Modern CMS for memorial and obituary publishing with multi-site support and custom templates.",
        technologies: ["Next.js", "Sanity.io", "Vercel", "TypeScript"],
        year: "2023",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/remember-publisher.svg",
      },
    ],
  },
} as const;

const sahilData = {
  name: "Sahil G.",
  fullName: "Sahil Gupta",
  title: "Building & shipping\nreal-world products.",
  currentCompany: "HSBC",
  companyUrl: "https://www.hsbc.com/",
  calLink: "https://cal.com/sahil-gupta-7/15min?overlayCalendar=true",
  navigation: [
    { label: "Creations", href: "/creations" },
    { label: "Work", href: "/work" },
    { label: "Writings", href: "/writings" },
    { label: "Hire Me", href: "/contact" },
  ],
  contact: {
    email: "sahilhsgupta7@gmail.com",
    page: {
      title: "Contact.",
      subline1: "Want to hire me? Let's connect.",
      subline2: "Available for freelance projects and full-time opportunities.",
      primaryCTA: {
        text: "Book a Call",
      },
      secondaryHeading: "Or connect via other channels:",
      channels: [
        {
          id: "email",
          label: "Email",
        },
        {
          id: "twitter",
          label: "Twitter / X",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
        },
        {
          id: "github",
          label: "GitHub",
        },
      ],
    },
  },
  social: {
    github: "https://github.com/Sahil2012/",
    twitter: "https://x.com/guptasahil7/",
    linkedin: "https://www.linkedin.com/in/sahil-gupta7/",
  },
  home: {
    hero: {
      currentlyBuilding: "Currently building",
      and: "and",
      while: ", while engineering production systems at",
      image: "/sahil-1.png",
    },
    cta: {
      text: "Let's connect",
    },
  },
  creations: {
    page: {
      title: "Creations",
      subline1: "Tools that solve real problems.",
      subline2:
        "From automating job applications to crafting custom software solutions.",
    },
    ui: {
      viewCreation: "View Creation",
    },
    items: [
      {
        id: "naukri",
        title: "Naukri Outreach",
        description:
          "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
        href: "https://Naukri-outreach.vercel.app/",
        actionText: "See the Tool",
        gradient: "from-emerald-500/10 via-teal-500/10 to-blue-500/10",
        image: "/naukri-outreach.png",
      },
      {
        id: "novacrafts",
        title: "NovaCraftsAI",
        description:
          "A software studio focused on turning ideas into real systems — spanning web and mobile applications, AI agents and workflow automation.",
        href: "https://novacraftsai.com/",
        actionText: "Visit Studio",
        gradient: "from-orange-500/10 via-amber-500/10 to-red-500/10",
        image: "/nova-crafts-ai.png",
      },
    ],
  },
  changelog: {
    page: {
      title: "Changelog.",
      subline1: "My professional journey.",
      subline2: "Full-time roles and career milestones.",
    },
  },
  work: {
    page: {
      title: "Work.",
      subline1: "Projects I've worked on.",
      subline2:
        "From automating job applications to crafting custom software solutions.",
    },
    ui: {
      openLink: "Open Link",
      fallbackImage: "/sahil-1.png",
    },
    fullTime: [
      {
        id: "rapidstart",
        title: "Senior Full Stack Developer",
        company: "Rapidstart",
        duration: "Jan 2023 - Present",
        description:
          "Leading development of enterprise SaaS applications, architecting scalable solutions, and mentoring junior developers.",
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        achievements: [
          "Reduced API response time by 60% through optimization",
          "Led migration to microservices architecture",
          "Implemented CI/CD pipeline reducing deployment time by 80%",
        ],
      },
      {
        id: "tcs",
        title: "Full Stack Developer",
        company: "Tata Consultancy Services",
        duration: "Jul 2021 - Dec 2022",
        description:
          "Developed and maintained enterprise applications for Fortune 500 clients, focusing on scalability and performance.",
        technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker"],
        achievements: [
          "Delivered 5+ client projects on time and within budget",
          "Improved application performance by 40%",
          "Mentored 3 junior developers",
        ],
      },
      {
        id: "tcs-intern",
        title: "Software Engineering Intern",
        company: "Tata Consultancy Services",
        duration: "Jan 2021 - Jun 2021",
        description:
          "Contributed to full-stack development projects, learned industry best practices, and collaborated with cross-functional teams.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        achievements: [
          "Built internal tool used by 50+ team members",
          "Received pre-placement offer",
          "Completed training in Agile methodologies",
        ],
      },
      {
        id: "humaps-intern",
        title: "Frontend Development Intern",
        company: "Humaps",
        duration: "Jun 2020 - Dec 2020",
        description:
          "Developed responsive web interfaces and collaborated with designers to create intuitive user experiences.",
        technologies: ["React", "JavaScript", "CSS3", "Figma"],
        achievements: [
          "Redesigned company website increasing user engagement by 35%",
          "Implemented responsive design across all pages",
          "Created reusable component library",
        ],
      },
    ],
    clientProjects: [
      {
        id: "yash-bikes",
        name: "Yash Bikes",
        category: "E-commerce",
        description:
          "Custom e-commerce platform for premium bicycle retailer with inventory management and online booking system.",
        technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        year: "2024",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/yash-bikes.svg",
      },
      {
        id: "afm",
        name: "Asia Forex Mentor",
        category: "Education Platform",
        description:
          "Comprehensive forex trading education platform with course management, student dashboard, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/afm.svg",
      },
      {
        id: "grief-navigator",
        name: "Grief Navigator",
        category: "Mental Health",
        description:
          "Compassionate platform connecting individuals with grief counselors and support resources.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/grief-navigator.svg",
      },
      {
        id: "valerie-ai",
        name: "Valerie.ai",
        category: "AI/ML",
        description:
          "AI-powered virtual assistant for healthcare professionals with natural language processing capabilities.",
        technologies: ["Python", "React", "OpenAI", "FastAPI"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/valerie-ai.svg",
      },
      {
        id: "disability-dynamics",
        name: "Disability Dynamics",
        category: "Accessibility",
        description:
          "Accessibility-first platform providing resources and tools for individuals with disabilities.",
        technologies: ["Next.js", "TypeScript", "Prisma", "WCAG 2.1"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/disability-dynamics.svg",
      },
      {
        id: "remember-publisher",
        name: "Remember Publisher",
        category: "Content Management",
        description:
          "Modern CMS for memorial and obituary publishing with multi-site support and custom templates.",
        technologies: ["Next.js", "Sanity.io", "Vercel", "TypeScript"],
        year: "2023",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/remember-publisher.svg",
      },
    ],
  },
  writings: {
    title: "Writings.",
    subline1: "Thoughts on engineering, security, and system design.",
    subline2: (
      <span>
        Read more on{" "}
        <Link
          href="https://medium.com/@sahilhsgupta7"
          target="_blank"
          className="text-foreground border-b border-foreground/20 hover:border-foreground transition-colors"
        >
          Medium (@sahilhsgupta7)
        </Link>
      </span>
    ),
    articles: [
      {
        id: "cors-guide",
        title: "What is CORS? Why is it important?",
        excerpt:
          "CORS stands for Cross-Origin Resource Sharing. It is a browser mechanism which enables controlled access to resources located outside of a given domain.",
        date: "Dec 12, 2025",
        readTime: "4 min read",
        tags: ["Web Dev", "Security"],
        url: "https://medium.com/@sahilhsgupta7/what-is-cors-why-is-it-important-9a875b0253cd",
      },
      {
        id: "ssl-works",
        title: "How SSL Works / How Do You Secure Your Web App?",
        excerpt:
          "Let’s assume your server is deployed in a remote location, and a user wants to interact with your application secure ly over the internet.",
        date: "Dec 10, 2025",
        readTime: "6 min read",
        tags: ["System Design", "Security"],
        url: "https://medium.com/@sahilhsgupta7/how-ssl-works-how-do-you-secure-your-web-app-a72441065f02",
      },
      {
        id: "scaling-username",
        title:
          "Scaling Username Availability Checks Like Meta & Google: From Indexes to Bloom Filters",
        excerpt:
          "Ever wondered how big platforms like Meta, Google, or Twitter instantly tell you if your dream username is available, even after billions…",
        date: "Aug 21, 2025",
        readTime: "8 min read",
        tags: ["Bloom Filters", "Scaling"],
        url: "https://medium.com/@sahilhsgupta7/scaling-username-availability-checks-like-meta-google-from-indexes-to-bloom-filters-4d3c9863b005",
      },
      {
        id: "bloom-filters",
        title: "What Are Bloom Filters? How do they work?",
        excerpt:
          "Ever wondered how massive platforms like Meta, Google, or Twitter know instantly if your username is taken, even with billions of users?",
        date: "Aug 21, 2025",
        readTime: "5 min read",
        tags: ["Bloom Filters", "Algorithms"],
        url: "https://medium.com/@sahilhsgupta7/what-are-bloom-filters-how-do-they-work-e21a73704d2f",
      },
    ],
  },
} as const;

export let data: SiteData;
if (profile === "HIMANSHU") {
  data = himanshuData;
} else {
  data = sahilData;
}
export type SiteData = typeof himanshuData;
