"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { data } from "@/lib/data";
import Link from "next/link";
import { Github, Twitter, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="relative h-full flex items-stretch">
      <div className="container mx-auto w-full px-7 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-start lg:items-center h-full">
          {/* Left Content - Positioned slightly above center */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center pt-12 md:pt-16 lg:pt-0 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] whitespace-pre-line"
            >
              {data.home.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg text-muted-foreground font-medium tracking-wide"
            >
              {data.home.subline}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <Button size="lg" variant="default" asChild>
                <a
                  href={data.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  {data.home.cta.text}
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <Link
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Portrait - Aligned to bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="absolute flex bottom-0 right-0 justify-center lg:justify-end items-end h-full w-full sm:w-5/6 md:w-2/3 lg:w-1/2"
          >
            <div className="relative w-full h-full">
              <Image
                src={data.home.image}
                alt={data.fullName}
                fill
                style={{
                  filter:
                    "drop-shadow(0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.5)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                }}
                className="absolute left-0 bottom-0 object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
