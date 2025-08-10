"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ClientHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-sm" : ""}`}>
      <div className={`container flex items-center justify-between rounded-b-xl px-4 transition-all ${scrolled ? "h-12 glass" : "h-14 glass"}`}>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Fit Mit Kash logo" width={scrolled ? 22 : 28} height={scrolled ? 22 : 28} className="rounded transition-all" priority />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold">Fit Mit Kash</span>
            <span className="text-[10px] text-white/60">{t('based_in')} 🇩🇪</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#programs" className="nav-link" onClick={(e)=>{e.preventDefault(); document.getElementById('programs')?.scrollIntoView({behavior:'smooth'});}}>{t('programs')}</a>
          <a href="#testimonials" className="nav-link" onClick={(e)=>{e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({behavior:'smooth'});}}>{t('results')}</a>
          <a href="#stories" className="nav-link" onClick={(e)=>{e.preventDefault(); document.getElementById('stories')?.scrollIntoView({behavior:'smooth'});}}>{t('story')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <label htmlFor="lang" className="sr-only">Language</label>
          <select 
            id="lang" 
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'en' | 'fa' | 'de')}
            className="glass rounded-md px-2 py-1 text-xs text-white/90 dark-select" 
            aria-label="Select language"
          >
            <option value="en" className="text-black">🇬🇧 English</option>
            <option value="fa" className="text-black">🇮🇷 فارسی</option>
            <option value="de" className="text-black">🇩🇪 Deutsch</option>
          </select>
        </div>
      </div>
    </header>
  );
}


