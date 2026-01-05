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
      <div className="space-y-12 md:space-y-16 pb-16">
        {data.work.fullTime.map((experience: any, index: number) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            className="flex gap-6 md:gap-8 group"
          >
            {/* Company Logo */}
            <div className="shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden border border-border">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={64}
                  height={64}
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
                <p className="text-base md:text-lg text-foreground/80 leading-normal max-w-3xl pt-2.5">
                  {experience.description}
                </p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground/80">
                {experience.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </ContentLayout>
  );
}
