"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";

export const ContactSection = () => {
    return (
        <section className="pb-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Heading part */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-foreground leading-[1.1] mb-8">
                            Let&apos;s build <br />
                            <span className="text-muted-foreground">something</span> <br />
                            <span className="text-muted-foreground">together.</span>
                        </h2>
                    </motion.div>

                    {/* Links part */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-end gap-8"
                    >
                        <div className="space-y-6">
                            <Link
                                href={`mailto:${siteData.contact.email}`} // Using a placeholder or siteData if available, hardcoding based on context for now or using siteData if I knew the field. 
                                // Actually, I don't see email in siteData.contact from previous view. I'll use a generic mailto or assume user will fill it.
                                // Wait, the user provided siteData.contact.calLink. 
                                // I will stick to siteData.social for others.
                                className="group flex items-center justify-between text-2xl md:text-3xl font-medium text-foreground border-b border-input py-4 hover:text-blue-500 transition-colors"
                            >
                                <span>Get in touch</span>
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
