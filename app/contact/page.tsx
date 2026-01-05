"use client";

import ContentLayout from "@/components/ContentLayout";
import { data } from "@/lib/data";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function ContactPage() {
  const { page } = data.contact;

  return (
    <ContentLayout
      title={page.title}
      subline1={page.subline1}
      subline2={page.subline2}
    >
      <div className="pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Link
              href={data.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-2 text-2xl md:text-3xl font-semibold text-foreground hover:text-foreground/70 transition-all duration-300 w-fit"
            >
              <span className="inline-flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Book a call
              </span>
              <span className="h-0.5 bg-foreground w-0 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          </motion.div>

          {/* Right: Secondary Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 lg:pt-4"
          >
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {page.secondaryHeading}
              </p>
              <div className="h-px bg-border w-16" />
            </div>
            <div className="space-y-4">
              {page.channels.map((channel: any) => {
                const href =
                  channel.id === "email"
                    ? `mailto:${data.contact.email}`
                    : data.social[channel.id as keyof typeof data.social];
                const isExternal = channel.id !== "email";
                const Icon = channel.id === "email" ? Mail : ArrowUpRight;

                return (
                  <Link
                    key={channel.id}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between text-xl md:text-2xl font-medium text-foreground border-b border-border/50 py-5 hover:border-foreground/30 transition-all duration-300 relative tracking-wide"
                  >
                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                      {channel.label}
                    </span>
                    <Icon className="w-5 h-5 relative transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-muted-foreground group-hover:text-foreground" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </ContentLayout>
  );
}
