"use client";

import { motion } from "motion/react";
import { Badge } from "./badge";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly duration: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly achievements: readonly string[];
}

interface TimelineProps {
  items: readonly TimelineItem[];
}


export function Timeline({ items }: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="relative pb-24">
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-border via-border to-transparent" />


      {/* Timeline Items */}
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isExpanded = expandedItems.has(item.id);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline Marker */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="w-3 h-3 rounded-full bg-foreground border-2 border-background"
                />
              </div>

              {/* Content Card */}
              <div
                className={cn(
                  "group relative border border-border rounded-lg p-6 md:p-8 bg-card hover:border-foreground/20 transition-all duration-300",
                  "hover:shadow-lg hover:shadow-foreground/5"
                )}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium whitespace-nowrap">
                    {item.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs md:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Achievements Toggle */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground hover:text-foreground/70 transition-colors group/button"
                >
                  <span>Key Achievements</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                {/* Achievements List */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 pl-5">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed list-disc"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
