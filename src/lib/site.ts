import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fit Mit Kash",
  description:
    "Transform Your Body, Mind & Life. Holistic coaching that merges fitness, mental health, and life strategy.",
  url: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  links: {
    email: "mailto:coach@fitmitkash.com",
    instagram: "https://instagram.com/",
  },
};


