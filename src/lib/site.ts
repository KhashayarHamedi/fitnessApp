import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fit Mit Kash",
  description:
    "Strength, mobility, and lifestyle coaching. Minimal, focused, and results-driven.",
  url: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  links: {
    email: "mailto:coach@fitmitkash.com",
    instagram: "https://instagram.com/",
  },
};


