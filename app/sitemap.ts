import type { MetadataRoute } from "next";
import { data } from "@/lib/data";

const routes = ["", "/initiatives", "/client-projects", "/changelog", "/contact", "/writings"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${data.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
