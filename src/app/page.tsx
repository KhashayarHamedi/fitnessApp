"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Globe2, CheckCircle2, MapPin, Star, Languages, Brain, Dumbbell, Sparkles, UserRoundCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// i18n removed for now
// Transformation visuals removed per request
import { ApplyForm } from "@/components/ApplyForm";

const brand = {
  orange: "#FF6B35",
  charcoal: "#2D2D2D",
};

const statItems = [
  { label: "Clients Transformed", value: 105, suffix: "+" },
  { label: "Countries Reached", value: 25, suffix: "+" },
  { label: "Age Range", value: "16–65", suffix: " yrs" },
  { label: "Success Rate", value: 94, suffix: "%" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-parallax">
        {/* Clean black background with subtle parallax gradient */}

        <div className="spotlight-overlay absolute inset-0 -z-10" />

        <div className="container grid place-items-center py-24">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="relative">
              <motion.h1
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12 } },
                }}
                className="text-6xl sm:text-8xl md:text-[8.5rem] leading-[0.9] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Word text="Fit" />
                <span> </span>
                <Word text="Mit" />
                <span> </span>
                <Word text="Kash" />
              </motion.h1>
            </div>

            <motion.p className="max-w-3xl text-base sm:text-lg text-white/80"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.
            </motion.p>

            <div className="flex flex-col items-center gap-1 text-white/70">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Based in Berlin, Germany 🇩🇪</div>
              <div className="text-xs text-white/60">Serving clients globally from Berlin • European time zone advantage</div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/consultation" className="btn-primary btn-neon btn-ripple tilt-3d cta-pulse neon-ring">Book Your Consultation</Link>
            </div>

            {/* Transformation visual removed */}

            {/* Trust bar moved to dedicated Stats section */}
          </div>
        </div>
        {/* Removed globe/background imagery for clean black background */}
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
              <Counter label={s.label} value={s.value} suffix={s.suffix} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      

      {/* STORY */}
      <section className="container py-24 border-t border-white/10" id="stories">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">From 17-Year-Old Energy to Global Transformation Coach</h2>
            <p className="text-white/80">
              I’m 32 now. I started at 17 with endless natural energy and a drive to understand my body. No shortcuts, no cheats. Along the way I had ups and downs—injuries, setbacks, and life changes—but each season taught me how much of this journey is mental. My philosophy is simple: 90% is mindset, not external difficulties. I coach people to build sustainable habits, regain confidence, and lead with clarity.
            </p>
            <p className="text-white/80">
              I’ve coached and trained across countries and cultures: Iran, Turkey, UAE, Germany, Switzerland, Czech Republic, Budapest—and clients from many more. This global perspective helps me adapt to your culture, schedule, and reality while holding you to a high standard.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <Badge icon={<Award className="h-4 w-4" />} label="NASM Certified" />
              <Badge icon={<Brain className="h-4 w-4" />} label="Mindset-first Philosophy" />
              <Badge icon={<Dumbbell className="h-4 w-4" />} label="Sustainable Habit Building" />
            </div>
          </div>
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
            <h2 className="text-3xl font-semibold">Choose Your Path</h2>
            <p className="text-white/80">Custom transformation programs starting at €30/month. Investment varies based on your goals — consultation first.</p>
          </div>
          <div className="hidden items-center gap-2 text-sm text-white/60 sm:flex">
            <Languages className="h-4 w-4" /> Multi-language ready
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
          <div className="mb-3 text-xl">🏋️‍♂️ IN-PERSON & VIRTUAL COACHING</div>
          <p className="mx-auto max-w-3xl text-white/80">
            Train with Kash in Berlin or anywhere in the world via video sessions. Experience the same energy and motivation whether we're in the same room or across continents.
          </p>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="container py-24 border-t border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Tell us your story</h2>
            <p className="mt-2 text-white/70">A preview of the intake that shapes your plan.</p>
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
        <h2 className="mb-6 text-3xl font-semibold">Real Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial name="Sarah" meta="28, Marketing Manager — Germany" text="Kash helped me realize my anxiety was blocking my fitness progress. His approach isn't just about workouts - it's about changing your whole mindset. I finally feel confident in my own skin." />
          <Testimonial name="Ahmad" meta="35, Software Engineer — Iran" text="Working with Kash remotely was amazing. He understood my Persian background and work culture. Lost 15kg but more importantly, gained mental clarity I never had before." />
          <Testimonial name="Maria" meta="42, Teacher — Spain" text="After years of trying different coaches, Kash was the first to ask about my emotional relationship with food. The life coaching aspect changed everything for me." />
          <Testimonial name="James" meta="25, Student — UK" text="Kash's energy is infectious. Even through video calls, his motivation kept me going when I wanted to quit. He gets that fitness is 90% mental." />
          <Testimonial name="Fatima" meta="38, Nurse — Italy" text="The cultural sensitivity matters so much. Kash adapted everything to my schedule and religious practices. Finally, a coach who gets it." />
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
      {[...Array(20)].map((_, i) => (
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
      {/* subtle geometric bars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-64 bg-[--color-accent]/15"
          style={{ left: `${10 + i * 25}%`, top: `${40 + i * 10}%` }}
          animate={{ x: [0, 60, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
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
    <h1 className="text-gradient text-glow text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
      <motion.span
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
      >
        {text.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.span>
    </h1>
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

function Word({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="animated-gradient-text neon-glitch neon-cycle inline-block"
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
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
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
      <Button className="w-full" onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>{cta}</Button>
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
