"use client";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-transparent"
      style={{}}
    >
      <motion.div
        className="h-full bg-[--color-accent]"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
}


