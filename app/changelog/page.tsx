"use client";

import ContentLayout from "@/components/ContentLayout";
import { data } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";

export default function ChangelogPage() {
  return (
    <ContentLayout
      title={data.changelog.page.title}
      subline1={data.changelog.page.subline1}
      subline2={data.changelog.page.subline2}
    >
      <div className="space-y-8 sm:space-y-12 md:space-y-16 pb-16 pt-2 md:pt-0">
        {data.work.fullTime.map((experience: any, index: number) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
            className="flex gap-4 sm:gap-6 group"
          >
            {/* Company Logo */}
            <div className="shrink-0">
              <div className="w-12 h-12 p-1 md:w-16 md:h-16 rounded-2xl bg-gray-200 dark:bg-gray-50 flex items-center justify-center overflow-hidden border border-border mt-1">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={experience.id === "hsbc" || experience.id === "capgemini" ? 128 : 64}
                  height={experience.id === "hsbc" || experience.id === "capgemini" ? 128 : 64}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Experience Details */}
            <div className="flex-1 flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-wide">
                  {experience.company}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground font-semibold">
                  {experience.title}
                </p>
                <p className="md:hidden text-sm md:text-base text-muted-foreground/80">
                  {experience.duration}
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-normal max-w-3xl pt-2.5">
                  {experience.description}
                </p>
              </div>
              <p className="hidden md:block text-sm md:text-base text-muted-foreground/80">
                {experience.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </ContentLayout>
  );
}
