import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

const profile = process.env.NEXT_PUBLIC_PROFILE;

const commonData = {
  builds: {
    title: "Initiatives",
    subline1: "Products & Businesses that solve real problems.",
    subline2:
      "From automating job applications to crafting custom software solutions.",
    items: [
      {
        id: "refermate",
        title: "ReferMate",
        description:
          "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
        href: "https://refermate.novacraftsai.com/",
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
  clientProjects: {
    title: "Client Projects.",
    subline1: "Projects I've worked on.",
    subline2:
      "From automating job applications to crafting custom software solutions.",
    items: [
      {
        id: "remember-press",
        name: "Remember Press",
        category: "AI-Assisted Writing Platform",
        description:
          `Remember Press is an AI-powered writing platform that helps users transform raw thoughts and notes into structured books. 
          
          The system uses LLMs to refine, organize, and expand personal writing while maintaining the user's original voice.`,
        technologies: [
          "React.js",
          "TypeScript",
          "OpenAI",
          "Express",
          "Langgraph",
          "PostgreSQL",
        ],
        year: "2025",
        featured: false,
        image: "/backgrounds/remember-publisher.png",
        logo: "/logos/remember-press.png",
        website: "https://landing.rememberpress.com/",
      },
      {
        id: "afm",
        name: "Asia Forex Mentor",
        category: "AI Automation & Workflows",
        description:
          `AFM is a coaching organisation that specialized in Forex-trading. 
          
          We helped them build several AI-powered automation workflows to support lead generation, outreach, SEO-driven content updates, and customer support using n8n and LLMs.`,
        technologies: ["n8n", "OpenAI", "Python", "Render"],
        year: "2024",
        featured: true,
        image: "/backgrounds/afm.png",
        logo: "/logos/afm.png",
        website: "https://asiaforexmentor.com/",
      },
      {
        id: "disability-dynamics",
        name: "Disability Dynamics",
        category: "Web Platform · Accessibility",
        description:
          `Disability Dynamics is independent living space provider for specially abled people. 
          
          We designed and developed an accessibility-first and SEO optimized marketing page which is optimized for higher conversion rates and special focus on clarity, compliance, and real-world usability.`,
        technologies: ["Next.js", "TypeScript", "Prisma"],
        year: "2024",
        featured: false,
        image: "/backgrounds/disability-dynamics.png",
        logo: "/logos/disability-dynamics.png",
        website: "https://www.disabilitydynamics.com.au/",
      },
      {
        id: "yash-bikes",
        name: "Yash Bikes",
        category: "E-commerce",
        description:
          `Yash Bikes is a hyperlocal bike rental company based in Pune. 
          
          We helped them build a custom marketing platform which helped them boost their online sales, and service bookings through a single, streamlined system.`,
        technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        year: "2024",
        featured: true,
        image: "/backgrounds/yash-bikes.png",
        logo: "/logos/yash-bikes.png",
        website: "https://yashbikes.vercel.app/",
      },
    ],
  },
  contact: {
    title: "Contact.",
    subline1: "Want to hire me? Let's connect.",
    subline2: "Available for freelance projects and full-time opportunities.",
    primaryCTA: {
      text: "Book a Call",
    },
    secondaryHeading: "Or connect via other channels:",
    items: [
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
};

const himanshuData = {
  name: "Himanshu J.",
  fullName: "Himanshu Jaroli",
  title: "Building & shipping\nreal-world products.",
  siteUrl: "https://himanshujaroli.novacraftsai.com",
  currentCompany: "RapidStart",
  companyUrl: "https://www.rapidstart.net/",
  calLink: "https://cal.com/himanshu-jaroli-cjbeah/30min",
  resume: "/resume/himanshu.pdf",
  email: "jaroli.himanshu.work@gmail.com",
  image: "/himanshu.png",
  logo: "/himanshu-square.png",
  social: {
    github: "https://github.com/HJ1X/",
    twitter: "https://x.com/himanshu_jaroli/",
    linkedin: "https://www.linkedin.com/in/himanshu-jaroli/",
  },
  navigation: [
    { label: "Initiatives", href: "/initiatives" },
    { label: "Client Projects", href: "/client-projects" },
    { label: "Changelog", href: "/changelog" },
    { label: "Contact", href: "/contact" },
  ],
  home: {
    title: (
      <span>
        Building & shipping
        <br />
        <span className="text-gray-600 dark:text-gray-400">
          real-world products.
        </span>
      </span>
    ),
    subline: (
      <span>
        Currently building{" "}
        <Link
          href="https://refermate.novacraftsai.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">ReferMate</Highlight>
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
          href="https://www.tcs.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">TCS</Highlight>
        </Link>
        .
      </span>
    ),
    image: "/himanshu.png",
    cta: {
      text: "Let's connect",
    },
  },
  writings: {
    title: null,
    subline1: null,
    subline2: null,
    items: null,
  },
  changelog: {
    title: "Changelog.",
    subline1: "My professional journey.",
    subline2: "Full-time roles and career milestones.",
    items: [
      {
        id: "toptal",
        type: "experience",
        title: "Software Engineer",
        company: "Toptal",
        logo: "/logos/toptal.svg",
        duration: "Mar 2026 - Present",
        description:
          "Engineered a multi-agent AI pipeline that automates M&A due diligence and evolved it into a billable product with a marketing site, UI, and backend services.",
        toptalBadge: true,
      },
      {
        id: "novacrafts",
        type: "experience",
        title: "Co-Founder",
        company: "NovaCrafts.AI",
        logo: "/logos/novacraftsai.png",
        duration: "Nov 2025 - Present",
        description:
          "Co-founded a custom software agency driving technical strategy and end-to-end delivery for client solutions and internal ventures, ranging from rapid MVP development to full-scale application architectures.",
      },
      {
        id: "rapidstart",
        type: "experience",
        title: "Software Development Engineer 2",
        company: "Rapidstart Pty. Ltd.",
        logo: "/logos/rapidstart.svg",
        duration: "Mar 2025 - Oct 2025",
        description:
          "Engineered AI powered ecosystems for orchestrating dynamic task chaining, Voice calling Agents and vision-based autonomous systems capable of executing complex computer operations.",
        testimonials: [
          {
            name: "Mo Hassan",
            content:
              "Himanshu is a focused engineer who consistently delivers complex technical requirements with minimal supervision. He successfully took ownership of our multi-agent infrastructure, scaling our AI phone backend to handle over 10k+ monthly calls.",
          },
        ],
      },
      {
        id: "tcs",
        type: "experience",
        title: "Product Engineer",
        company: "Tata Consultancy Services",
        logo: "/logos/tcs.png",
        duration: "Dec 2023 - Feb 2025",
        description:
          "Developed enterprise SaaS platform for Product Delivery and talent engagement, engineering interactive AI workbenches, in-browser code editors, and RAG-based agents capable of assisting complex user workflows.",
        awards: ["Young Innovator"],
      },
      {
        id: "tcs",
        type: "experience",
        title: "Software Engineer",
        company: "Tata Consultancy Services",
        logo: "/logos/tcs.png",
        duration: "Aug 2022 - Nov 2023",
        description:
          "Engineered a low-code development platform and custom VS Code extension ecosystem capable of transforming high-level user intent into full-stack digital experiences.",
        awards: ["Start performer of the month"],
        testimonials: [
          {
            name: "Rohan Hirekerur",
            content:
              "As a Product Engineer, I've seen firsthand his exceptional problem-solving skills, attention to detail, and commitment to writing clean, maintainable code. He bring a collaborative and proactive approach to every project, making them a valuable asset to any team.",
          },
        ],
      },
      {
        id: "bharati",
        type: "education",
        title: "Computer Science and Business Systems",
        university: "Bharati Vidyapeeth University",
        logo: "/logos/bvp.png",
        duration: "Jul 2018 - Aug 2022",
        grade: 9.26,
        awards: ["Startup Conclave 2021, EDC Pune - Wisey"],
      },
      {
        id: "tcs-intern",
        type: "experience",
        title: "Software Engineering Intern",
        company: "Tata Consultancy Services",
        logo: "/logos/tcs.png",
        duration: "Jun 2021 - Aug 2021",
        description:
          "Contributed to full-stack development projects, learned industry best practices, and collaborated with cross-functional teams.",
      },
      {
        id: "humaps-intern",
        type: "experience",
        title: "Full-Stack Developer Intern",
        company: "Humaps",
        logo: "/logos/humaps.png",
        duration: "Jan 2021 - Mar 2021",
        description:
          "Developed responsive web interfaces, intuitive user experiences and suite of Rest APIs to support a hyperlocal e-commerce platform.",
        testimonials: [
          {
            name: "Anup Routray",
            content:
              "I have worked with Himanshu and have found him to be deligent, hardworking and honest. His programming skills are good, on top of that he has a very special spark, and I trust he will go far in making our world a better place.",
          },
        ],
      },
    ],
  },
} as const;

const sahilData = {
  name: "Sahil G.",
  fullName: "Sahil Gupta",
  title: "Building & shipping\nreal-world products.",
  siteUrl: "https://portfolio-sahil-gupta.vercel.app",
  currentCompany: "HSBC",
  companyUrl: "https://www.hsbc.com/",
  calLink: "https://cal.com/sahil-gupta-7/15min?overlayCalendar=true",
  resume:
    "https://drive.google.com/file/d/1oVp1wjGylHoye7SxgcwJee4LXr7s_hDu/view?usp=drive_link",
  image: "/sahil.png",
  email: "sahilhsgupta7@gmail.com",
  logo: "/sahil-fav.png",
  navigation: [
    { label: "Initiatives", href: "/initiatives" },
    { label: "Projects", href: "/client-projects" },
    { label: "Changelog", href: "/changelog" },
    { label: "Writings", href: "/writings" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com/Sahil2012/",
    twitter: "https://x.com/guptasahil7/",
    linkedin: "https://www.linkedin.com/in/sahil-gupta7/",
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
          href="https://www.hsbc.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">HSBC</Highlight>
        </Link>
        .
      </span>
    ),
    cta: {
      text: "Let's connect",
    },
  },
  changelog: {
    title: "Changelog.",
    subline1: "My professional journey.",
    subline2: "Full-time roles and career milestones.",
    items: [
      {
        id: "hsbc",
        title: "Senior Software Engineer",
        type: "experience",
        company: "HSBC",
        logo: "/logos/hsbc.png",
        logoSize: 128,
        duration: "Jun 2025 - Present",
        description:
          "Building core Prime Finance systems that process high-volume trade and position data across global markets, supporting pricing, margining, and financing workflows at scale.",
      },
      {
        id: "tcs",
        title: "Software Engineer",
        type: "experience",
        company: "Tata Consultancy Services",
        logo: "/logos/tcs.png",
        duration: "Jul 2022 - Jun 2025",
        description:
          "Worked on enterprise SaaS platforms focused on developer productivity, security assessments, and AI-assisted workflows.",
      },
      {
        id: "capgemini-intern",
        title: "Software Engineering Intern",
        type: "experience",
        company: "Capgemini",
        logo: "/logos/capgemini.png",
        logoSize: 128,
        duration: "Feb 2022 - May 2022",
        description:
          "Contributed to internal platforms by building user-facing features that improved discoverability and engagement.",
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

export let data: any;
if (profile === "HIMANSHU") {
  data = { ...commonData, ...himanshuData };
} else {
  data = { ...commonData, ...sahilData };
}
export type SiteData = typeof data;
