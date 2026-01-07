"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { data } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="relative h-full flex items-center justify-center px-7 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] font-bold text-foreground/5 leading-none select-none">
              404
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Page not found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            <br />
            Let&apos;s get you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" variant="default" asChild className="w-full sm:w-auto">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            className="hidden md:block pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground font-medium mb-4">
              Or explore these pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 space-y-3">
              {data.navigation.map((link: { href: string; label: string }, index: number) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border/50 hover:border-border text-sm font-medium text-foreground/70 hover:text-foreground transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
