"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Globe2, CheckCircle2, MapPin, Star, Languages, Brain, Dumbbell, Sparkles, UserRoundCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
// i18n removed for now
// Transformation visuals removed per request
import { ApplyForm } from "@/components/ApplyForm";
import { FadeUp, Stagger, ParallaxY } from "@/components/animations/Reveal";

const brand = {
  orange: "#FF6B35",
  charcoal: "#2D2D2D",
};

const statItems = [
  { label: "clients_transformed", value: 105, suffix: "+" },
  { label: "countries_reached", value: 25, suffix: "+" },
  { label: "age_range", value: "16–65", suffix: " yrs" },
  { label: "success_rate", value: 94, suffix: "%" },
];

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-parallax flex items-center">
        {/* Clean black background with subtle parallax gradient */}

        <div className="spotlight-overlay absolute inset-0 -z-10" />
        
        {/* Enhanced background texture layers */}
        <div className="bg-texture-grid absolute inset-0 -z-20 opacity-30" />
        <div className="bg-texture-dots absolute inset-0 -z-20 opacity-20" />
        <div className="bg-texture-lines absolute inset-0 -z-20 opacity-15" />

        <div className="container grid place-items-center py-20 sm:py-24">
          <Stagger className="flex flex-col items-center text-center gap-5">
            <div className="relative">
              <TypewriterText text="FIT MIT KASH" />
            </div>

            <FadeUp delay={0.05} className="max-w-3xl text-base sm:text-lg text-white/80">
              {t('hero_subtitle')}
            </FadeUp>

            <div className="flex flex-col items-center gap-1 text-white/70">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {t('location_text')}</div>
            </div>

            <FadeUp delay={0.1} className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/consultation" className="btn-primary btn-neon btn-ripple tilt-3d cta-pulse neon-ring consultation-glow">{t('book_consultation')}</Link>
            </FadeUp>

            {/* Transformation visual removed */}

            {/* Trust bar moved to dedicated Stats section */}
          </Stagger>
        </div>
        {/* Scroll indicator */}
        <div aria-hidden className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
          <div className="relative h-6 w-4 rounded-full border border-white/30">
            <span className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-white/70 scroll-dot" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="container py-24 border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid w-full grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:grid-cols-4 backdrop-blur-sm"
        >
          {statItems.map((s) => (
            <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Counter label={t(s.label)} value={s.value} suffix={s.suffix} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      

      {/* STORY */}
      <section className="container py-24 border-t border-white/10" id="stories">
        <div className="grid gap-10 md:grid-cols-2">
          <ParallaxY className="space-y-4">
            <h2 className="headline-glow text-2xl sm:text-3xl md:text-4xl font-semibold">{t('story_title')}</h2>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>{t('story_paragraph_1')}</p>
              <p>{t('story_paragraph_2')}</p>
              <p><strong>{t('story_paragraph_3')}</strong></p>
              <p>{t('story_paragraph_4')}</p>
              <p>{t('story_paragraph_5')}</p>
              <p>{t('story_paragraph_6')}</p>
              <p>{t('story_paragraph_7')}</p>
              <p>{t('story_paragraph_8')}</p>
              <p>{t('story_paragraph_9')}</p>
              <p>{t('story_paragraph_10')}</p>
              <p>{t('story_paragraph_11')}</p>
              <p>{t('story_paragraph_12')}</p>
              <p>{t('story_paragraph_13')}</p>
              <p>{t('story_paragraph_14')}</p>
              <p>{t('story_paragraph_15')}</p>
              <p><strong>{t('story_paragraph_16')}</strong></p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <Badge icon={<Award className="h-4 w-4" />} label={t('nasm_certified')} />
              <Badge icon={<Brain className="h-4 w-4" />} label={t('philosophy')} />
              <Badge icon={<Dumbbell className="h-4 w-4" />} label="Sustainable Habit Building" />
            </div>
          </ParallaxY>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4">
              <HealthFacts />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="container py-24 border-t border-white/10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">{t('programs_title')}</h2>
            <p className="text-white/80">{t('programs_subtitle')}</p>
          </div>
          
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProgramCard
            title="The Kash Family"
            price="from €30"
            cadence="/month"
            features={["Community support", "Weekly accountability", "Training templates"]}
            cta="Start Your Application"
          />
          <ProgramCard
            title="Life Cycle"
            popular
            price="from €200"
            cadence="program"
            features={["Complete transformation", "3–6 months guided journey", "Nutrition + Mindset + Training"]}
            cta="Start Your Application"
          />
          <ProgramCard
            title="1-on-1 Intensive"
            price="from €150"
            cadence="premium"
            features={["Personal coaching", "Weekly check-ins", "Custom plan"]}
            cta="Start Your Application"
          />
        </div>
      </section>

      {/* IN-PERSON & VIRTUAL */}
      <section className="container py-24 border-t border-white/10">
        <div className="rounded-2xl glass p-8 text-center">
          <div className="mb-3 text-xl">🏋️‍♂️ {t('in_person_title')}</div>
          <p className="mx-auto max-w-3xl text-white/80">
            {t('in_person_subtitle')}
          </p>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="container py-24 border-t border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">{t('assessment_title')}</h2>
            <p className="mt-2 text-white/70">{t('assessment_subtitle')}</p>
            <div className="mt-6 space-y-3">
              {[
                "What are your top 3 goals?",
                "What challenges have held you back?",
                "What’s your training background?",
                "What support do you need most?",
              ].map((q) => (
                <div key={q} className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-white/80">
                  {q}
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-white/60">Designed with cultural sensitivity and accessibility in mind.</div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Support Options</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3">
                {[
                  "Motivation",
                  "Accountability",
                  "Nutrition",
                  "Form checks",
                  "Mindset",
                  "Program design",
                ].map((o) => (
                  <div key={o} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.01] px-3 py-2">
                    <UserRoundCheck className="h-4 w-4 text-[--color-accent]" /> {o}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials preview moved to full section below */}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-24 border-t border-white/10" id="testimonials">
        <h2 className="mb-6 text-3xl font-semibold">{t('testimonials_title')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial name="Leni" meta="28, Marketing Manager — Germany" text="Kash helped me realize my anxiety was blocking my fitness progress. His approach isn't just about workouts - it's about changing your whole mindset. I finally feel confident in my own skin." />
          <Testimonial name="Sepehr" meta="35, Software Engineer — Iran" text="Working with Kash remotely was amazing. He understood my Persian background and work culture. Lost 15kg but more importantly, gained mental clarity I never had before." />
          <Testimonial name="Maria" meta="42, Teacher — Spain" text="After years of trying different coaches, Kash was the first to ask about my emotional relationship with food. The life coaching aspect changed everything for me." />
          <Testimonial name="Henry" meta="25, Student — UK" text="Kash's energy is infectious. Even through video calls, his motivation kept me going when I wanted to quit. He gets that fitness is 90% mental." />
          <Testimonial name="Bianca" meta="38, Nurse — Italy" text="The cultural sensitivity matters so much. Kash adapted everything to my schedule and religious practices. Finally, a coach who gets it." />
        </div>
      </section>

      {/* SEO footer spacer */}
      <section className="container py-16" aria-hidden="true" />
    </main>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Premium particles */}
      {[...Array(35)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute block h-[2px] w-[2px] rounded-full bg-[--color-accent]/70"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{
            y: [0, -10 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
        />
      ))}
      
      {/* Enhanced geometric bars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-64 bg-[--color-accent]/15"
          style={{ left: `${10 + i * 15}%`, top: `${30 + i * 8}%` }}
          animate={{ x: [0, 60, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 bg-[--color-accent]/20 rounded-sm"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 8 + Math.random() * 8, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
        />
      ))}
      
      {/* Floating circles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-[--color-accent]/30"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            x: [0, (Math.random() - 0.5) * 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{ duration: 10 + Math.random() * 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 4 }}
        />
      ))}
      
      {/* Floating lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-[--color-accent]/25 to-transparent"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 150}px`
          }}
          animate={{
            y: [0, -15 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            opacity: [0.1, 0.3, 0.1],
            scaleX: [1, 1.2, 1],
          }}
          transition={{ duration: 14 + Math.random() * 8, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
        />
      ))}
      
      {/* Floating dots with trails */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-[--color-accent]/50 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{
            y: [0, -25 - Math.random() * 35, 0],
            x: [0, (Math.random() - 0.5) * 15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 7 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
        />
      ))}
      
      {/* Floating triangles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-[--color-accent]/25"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{
            y: [0, -20 - Math.random() * 25, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            rotate: [0, 120, 240],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 9 + Math.random() * 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
        />
      ))}
    </div>
  );
}

function GradientOverlay() {
  return <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,107,53,0.12),transparent)]" />;
}

function AnimatedTitle({ text }: { text: string }) {
  return (
    <div className="logo-3d-container">
      <div className="relative logo-3d">
        {/* Multiple Shadow Layers for Depth */}
        <h1 className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black/40 transform translate-x-4 translate-y-4 blur-lg">
          {text}
        </h1>
        <h1 className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black/25 transform translate-x-2 translate-y-2 blur-md">
          {text}
        </h1>
        <h1 className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black/15 transform translate-x-1 translate-y-1 blur-sm">
          {text}
        </h1>
        
        {/* Main 3D Text */}
        <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight logo-3d-text logo-3d-glow">
          <motion.span
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {text.split("").map((ch, i) => (
              <motion.span
                key={i}
                className="logo-3d-char relative"
                data-char={ch === " " ? "\u00A0" : ch}
                variants={{ 
                  hidden: { opacity: 0, y: 50, rotateX: -90, scale: 0.5, rotateY: -45 }, 
                  show: { opacity: 1, y: 0, rotateX: 0, scale: 1, rotateY: 0 } 
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: i * 0.05
                }}
                whileHover={{
                  y: -15,
                  scale: 1.25,
                  rotateX: 30,
                  rotateY: 15,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                {ch === " " ? "\u00A0" : ch}
                
                {/* 3D Highlight Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1 + 2,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
                
                {/* 3D Side Highlights */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 4,
                    delay: i * 0.1 + 3,
                    repeat: Infinity,
                    repeatDelay: 6
                  }}
                />
              </motion.span>
            ))}
          </motion.span>
        </h1>
        
        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-pink-500/40 blur-5xl -z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-4xl -z-10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/20 via-orange-500/15 to-red-500/20 blur-3xl -z-10" />
        
        {/* 3D Border and Depth Effects */}
        <div className="absolute inset-0 border-3 border-white/40 rounded-2xl transform translate-x-3 translate-y-3" />
        <div className="absolute inset-0 border-2 border-white/20 rounded-2xl transform translate-x-2 translate-y-2" />
        <div className="absolute inset-0 border border-white/10 rounded-2xl transform translate-x-1 translate-y-1" />
        
        {/* Floating Particles Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (Math.random() - 0.5) * 20, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 2, 1]
              }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Counter({ label, value, suffix }: { label: string; value: number | string; suffix?: string }) {
  const isNumber = typeof value === "number";
  const tooltipMap: Record<string, string> = {
    "Clients Transformed": "Real people from 25+ countries",
    "Countries Reached": "Community across continents",
    "Age Range": "From teens to 65+",
    "Success Rate": "Completion and satisfaction",
  };
  return (
    <div className="group relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white"
      >
        {isNumber ? (
          <AnimatedNumber value={value as number} />
        ) : (
          <span>{value}</span>
        )}
        <span className="ml-1 text-white/70">{suffix}</span>
      </motion.div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
      {tooltipMap[label] && (
        <div className="pointer-events-none absolute bottom-full mb-2 hidden w-44 rounded-md border border-white/10 bg-black/80 p-2 text-center text-[11px] text-white/80 backdrop-blur-sm group-hover:block">
          {tooltipMap[label]}
        </div>
      )}
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 100, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => count.set(v),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120); // 120ms delay between letters

      return () => clearTimeout(timer);
    } else {
      // Add a small delay before hiding cursor
      const completionTimer = setTimeout(() => {
        setIsComplete(true);
      }, 500);
      
      return () => clearTimeout(completionTimer);
    }
  }, [currentIndex, text]);

  return (
    <h1 
      className="text-6xl sm:text-8xl md:text-[8.5rem] leading-[0.9] tracking-tight font-black text-white relative"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.3, 1], 
            opacity: [0, 1, 1] 
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.12 // 120ms delay per letter
          }}
          className="inline-block"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {!isComplete && (
        <motion.span
          className="inline-block w-2 h-full bg-white ml-1 rounded-sm"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
          }}
        />
      )}
    </h1>
  );
}

function Word({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="cyber-glitch animated-gradient-text neon-glitch neon-cycle inline-block"
      data-text={text}
    >
      {text}
    </motion.span>
  );
}







function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/80">
      {icon}
      {label}
    </span>
  );
}

function ProgramCard({
  title,
  price,
  cadence,
  features,
  cta,
  popular,
}: {
  title: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <div className="neon-card relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
      {popular && (
        <div className="absolute -top-3 right-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
          Most Popular
        </div>
      )}
      <div className="mb-2 text-sm text-white/60">{title}</div>
      {price && (
        <div className="mb-4 flex items-end gap-2">
          <div className="text-4xl font-semibold">{price}</div>
          <div className="pb-2 text-white/60">{cadence}</div>
        </div>
      )}
      <ul className="mb-6 space-y-2 text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--color-accent]" /> {f}
          </li>
        ))}
      </ul>
      {/* CTA intentionally removed per request */}
    </div>
  );
}

function HealthFacts() {
  const facts = [
    "Consistency beats intensity. 3 focused sessions/week > 7 random ones.",
    "Sleep is the top performance enhancer. Aim for 7–9 hours.",
    "Protein at each meal supports recovery and appetite control.",
    "Your environment shapes habits. Make the good choice easy.",
    "Strength training improves mental health markers.",
    "Walking 8–10k steps daily is a powerful baseline.",
    "Mindset drives outcomes: small wins compound into big change.",
    "Track what matters: sleep, steps, sessions, and mood.",
    "Hydration affects energy more than you think.",
    "Progress is rarely linear—stick to the plan, adjust slowly.",
    "Form before load: quality reps build longevity.",
    "Sunlight in the morning anchors your circadian rhythm.",
    "Plan your sessions—don’t negotiate with yourself.",
    "Add mobility as a meeting with your future self.",
    "High-protein snacks curb late-night cravings.",
    "Two rest days can improve your weekly progress.",
    "Track what you eat for one week to reset awareness.",
    "Breathe through the nose on easy cardio for better control.",
    "Use a training log. What you measure improves.",
    "Warm-ups prepare your nervous system, not just muscles.",
    "A 10-minute walk post-meal aids digestion and glucose control.",
    "Set bed and wake times; rhythm creates energy.",
    "Lifting technique first; progression follows.",
    "Limit phone time before bed; blue light disrupts sleep.",
    "Schedule deload weeks to prevent burnout.",
    "Protein target: roughly 1.6–2.2g/kg/day (general guidance).",
    "Park further away for more daily movement.",
    "Prep simple meals to win busy weeks.",
  ];
  // Avoid hydration mismatch: render deterministic order on server, shuffle after mount
  const [order, setOrder] = React.useState<number[] | null>(null);
  React.useEffect(() => {
    const idxs = facts.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    setOrder(idxs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = (order ?? facts.map((_, i) => i)).slice(0, 14).map((idx) => facts[idx]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-full w-full flex-col gap-3"
    >
      <div className="text-sm uppercase tracking-wider text-white/60">Daily Health Insights</div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((f, i) => {
          const variants = ["green", "cyan", "violet", "pink", "amber"];
          const v = variants[i % variants.length];
          return (
            <div
              key={i}
              className={`fact-card group rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/80 border-gradient-hover blink-${v}`}
              style={{ animationDelay: `${(i % 6) * 0.3}s` }}
            >
              <div className="inline-flex items-center gap-2">
                <span className={`inline-block h-1.5 w-1.5 rounded-full dot-${v}`} />
                {f}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
function Testimonial({ name, meta, text }: { name: string; meta: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="mb-2 text-white/90 font-medium">{name}</div>
      <div className="mb-3 text-xs text-white/60">{meta}</div>
      <p className="text-white/80">“{text}”</p>
      <div className="mt-4 inline-flex items-center gap-1 text-[--color-accent]">
        {[...Array(5)].map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-[--color-accent]" />
        ))}
      </div>
    </div>
  );
}
