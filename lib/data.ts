export const siteData = {
  profile: {
    name: "Sahil G.",
    fullName: "Sahil Gupta",
    title: "Building & shipping\nreal-world products.",
    currentCompany: "HSBC",
    companyUrl: "https://www.hsbc.com/",
    calLink: "https://cal.com/sahil-gupta-7/15min?overlayCalendar=true"
  },
  navigation: [
    { label: "Creations", href: "/creations" },
    { label: "Work", href: "/work" },
    { label: "Writings", href: "/writings" },
    { label: "Hire Me", href: "/contact" },
  ],
  contact: {
    email: "sahilhsgupta7@gmail.com",
  },
  social: {
    github: "https://github.com/Sahil2012/",
    twitter: "https://x.com/guptasahil7/",
    linkedin: "https://www.linkedin.com/in/sahil-gupta7/",
  },
} as const;

export type SiteData = typeof siteData;
