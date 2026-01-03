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
    { label: "More", href: "/more" },
  ],
  contact: {
    calLink: "https://cal.com/himanshujangid",
  },
  social: {
    github: "https://github.com/himanshujangid",
    linkedin: "https://linkedin.com/in/himanshujangid",
    twitter: "https://twitter.com/himanshujangid",
  },
} as const;

export type SiteData = typeof siteData;
