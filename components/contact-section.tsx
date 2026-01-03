"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
    return (
        <section className="pb-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left: Heading + Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-[1.1]">
                            Want to hire me?<br />
                            <span className="text-muted-foreground">let&apos;s connect.</span>
                        </h2>

                        <div>
                            <a
                                href={siteData.profile.calLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-2xl font-semibold hover:text-blue-500 transition-colors"
                            >
                                <Calendar className="w-8 h-8" />
                                Book a Call
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Secondary Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6 lg:pt-4"
                    >
                        <p className="text-lg text-muted-foreground mb-4">
                            Or connect via other channels:
                        </p>
                        <div className="space-y-6">
                            <Link
                                href={`mailto:${siteData.contact.email}`}
                                className="group flex items-center justify-between text-2xl md:text-3xl font-medium text-foreground border-b border-input py-4 hover:text-blue-500 transition-colors"
                            >
                                <span>Email</span>
                                <Mail className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={siteData.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between text-2xl md:text-3xl font-medium text-foreground border-b border-input py-4 hover:text-blue-500 transition-colors"
                            >
                                <span>Twitter / X</span>
                                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={siteData.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between text-2xl md:text-3xl font-medium text-foreground border-b border-input py-4 hover:text-blue-500 transition-colors"
                            >
                                <span>LinkedIn</span>
                                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href={siteData.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between text-2xl md:text-3xl font-medium text-foreground border-b border-input py-4 hover:text-blue-500 transition-colors"
                            >
                                <span>GitHub</span>
                                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
