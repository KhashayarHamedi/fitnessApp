"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export function FadeUp({ children, delay = 0, duration = 0.6, y = 12, className = "" }: { children: React.ReactNode; delay?: number; duration?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, delay = 0, stagger = 0.12, className = "" }: { children: React.ReactNode; delay?: number; stagger?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { delay, staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxY({ children, from = 0, to = -60, className = "" }: { children: React.ReactNode; from?: number; to?: number; className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}


