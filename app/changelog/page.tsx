"use client";

import ContentLayout from "@/components/ContentLayout";
import { data } from "@/lib/data";
import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";
// import EducationDetails from "./EducationDetails";
// import ExperienceDetails from "./ExperienceDetails";

// const componentMap: Record<string, FC<{ log: any }>> = {
//   experience: ExperienceDetails,
//   education: EducationDetails,
// };

export default function ChangelogPage() {
  return (
    <ContentLayout
      title={data.changelog.title}
      subline1={data.changelog.subline1}
      subline2={data.changelog.subline2}
    >
      <div className="space-y-8 sm:space-y-10 md:space-y-12 pb-16 pt-2 md:pt-0">
        {data.changelog.items.map((log: any, index: number) => {
          // const Comp = componentMap[log.type];

          return (
            <motion.div
              key={log.id}
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
                <div className="w-12 h-12 p-1 md:w-16 md:h-16 rounded-2xl bg-gray-900 dark:bg-gray-50 flex items-center justify-center overflow-hidden border border-border mt-1">
                  <Image
                    src={log.logo}
                    alt={`${log.company} logo`}
                    width={log.logoSize || 64}
                    height={log.logoSize || 64}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Experience Details */}
              {/* <Comp log={log} /> */}
            </motion.div>
          );
        })}
      </div>
    </ContentLayout>
  );
}
