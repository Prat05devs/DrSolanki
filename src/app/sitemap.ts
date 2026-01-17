import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.drsmitbharatsolanki.com";
  const routes = [
    "/",
    "/about",
    "/appointment",
    "/clinics",
    "/clinics/parth",
    "/clinics/parul-sevashram",
    "/clinics/satyam",
    "/contact",
    "/expertise/aesthetic-gynecology",
    "/expertise/dr-smit",
    "/expertise/ivf-iui",
    "/faqs",
    "/fertility",
    "/gallery",
    "/laparoscopy-robotic-surgery",
    "/papers",
    "/patient-support/faqs",
    "/patient-support/stories",
    "/patient-support/support-circle",
    "/research-insights",
    "/testimonials",
    "/urogynecology",
    "/html-sitemap",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
