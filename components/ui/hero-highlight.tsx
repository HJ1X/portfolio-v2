"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      }}
      className={cn(
        "relative inline-block px-2 py-0.5 rounded-lg bg-white/10 hover:bg-gray-200/40 dark:hover:bg-neutral-800/40 backdrop-blur-lg border border-white/20 shadow-sm my-1 cursor-pointer transition-colors",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
