export type Locale = "en" | "de";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links?: Record<string, string>;
}


