"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface HeadlineProps {
  title: ReactNode;
  subline1: ReactNode;
  subline2: ReactNode;
}

const Headline = ({ title, subline1, subline2 }: HeadlineProps) => {
  return (
    <div className="mb-8 md:mb-12 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-3xl md:text-5xl font-bold tracking-wide text-foreground leading-[1.1] whitespace-pre-line mb-6"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide leading-snug"
      >
        {subline1} <br className="hidden md:block" />
        <span className="text-foreground">{subline2}</span>
      </motion.p>
    </div>
  );
};

export default Headline;
