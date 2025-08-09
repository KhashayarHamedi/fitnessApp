import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fit Mit Kash — Premium Fitness Coaching",
    template: "%s | Fit Mit Kash",
  },
  description:
    "Strength, mobility, and lifestyle coaching. Minimal, focused, and results-driven.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Fit Mit Kash — Premium Fitness Coaching",
    description:
      "Strength, mobility, and lifestyle coaching. Minimal, focused, and results-driven.",
    url: "http://localhost:3000",
    siteName: "Fit Mit Kash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Mit Kash — Premium Fitness Coaching",
    description:
      "Strength, mobility, and lifestyle coaching. Minimal, focused, and results-driven.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
