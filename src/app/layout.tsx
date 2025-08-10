import type { Metadata } from "next";
import { ClientHeader } from "@/components/ClientHeader";
import { FactTicker } from "@/components/FactTicker";
import { DynamicSparkles } from "@/components/DynamicSparkles";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Inter, JetBrains_Mono, Anton, Black_Ops_One } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
// i18n removed for now

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontDisplay = Black_Ops_One({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fit Mit Kash — Premium Fitness Coaching",
    template: "%s | Fit Mit Kash",
  },
  description:
    "Transform Your Body, Mind & Life. Holistic coaching that merges fitness, mental health, and life strategy.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Fit Mit Kash — Transform Your Body, Mind & Life",
    description:
      "Holistic coaching that merges fitness, mental health, and life strategy.",
    url: "http://localhost:3000",
    siteName: "Fit Mit Kash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Mit Kash — Transform Your Body, Mind & Life",
    description:
      "Holistic coaching that merges fitness, mental health, and life strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
              return (
              <html lang="en">
                <body className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} antialiased`}>
                  <LanguageProvider>
                    <ClientHeader />
                    <ScrollProgress />
                    <BackgroundShapes />
                    <DynamicSparkles />
                    <div className="pt-14">{children}</div>
                    <FactTicker />
                  </LanguageProvider>
                </body>
              </html>
            );
}
