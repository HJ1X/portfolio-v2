"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const articles = [
    {
        id: "cors-guide",
        title: "What is CORS? Why is it important?",
        excerpt: "CORS stands for Cross-Origin Resource Sharing. It is a browser mechanism which enables controlled access to resources located outside of a given domain.",
        date: "Dec 12, 2025",
        readTime: "4 min read",
        tags: ["Web Dev", "Security"],
        url: "https://medium.com/@sahilhsgupta7/what-is-cors-why-is-it-important-9a875b0253cd",
    },
    {
        id: "ssl-works",
        title: "How SSL Works / How Do You Secure Your Web App?",
        excerpt: "Let’s assume your server is deployed in a remote location, and a user wants to interact with your application secure ly over the internet.",
        date: "Dec 10, 2025",
        readTime: "6 min read",
        tags: ["System Design", "Security"],
        url: "https://medium.com/@sahilhsgupta7/how-ssl-works-how-do-you-secure-your-web-app-a72441065f02",
    },
    {
        id: "scaling-username",
        title: "Scaling Username Availability Checks Like Meta & Google: From Indexes to Bloom Filters",
        excerpt: "Ever wondered how big platforms like Meta, Google, or Twitter instantly tell you if your dream username is available, even after billions…",
        date: "Aug 21, 2025",
        readTime: "8 min read",
        tags: ["Bloom Filters", "Scaling"],
        url: "https://medium.com/@sahilhsgupta7/scaling-username-availability-checks-like-meta-google-from-indexes-to-bloom-filters-4d3c9863b005",
    },
    {
        id: "bloom-filters",
        title: "What Are Bloom Filters? How do they work?",
        excerpt: "Ever wondered how massive platforms like Meta, Google, or Twitter know instantly if your username is taken, even with billions of users?",
        date: "Aug 21, 2025",
        readTime: "5 min read",
        tags: ["Bloom Filters", "Algorithms"],
        url: "https://medium.com/@sahilhsgupta7/what-are-bloom-filters-how-do-they-work-e21a73704d2f",
    },
];

export const WritingsSection = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <section id="writings" className="pt-12 pb-24 relative bg-muted/20">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-6 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-semibold tracking-tighter text-foreground mb-6"
                    >
                        Writings.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl"
                    >
                        Thoughts on engineering, security, and system design. <br className="hidden md:block" />
                        Read more on <Link href="https://medium.com/@sahilhsgupta7" target="_blank" className="text-foreground border-b border-foreground/20 hover:border-foreground transition-colors">Medium (@sahilhsgupta7)</Link>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(0, showAll ? undefined : 3).map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Link
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full"
                            >
                                <div className="h-full bg-card hover:bg-muted/50 border border-input rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-border" />
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex gap-2">
                                                {article.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-input">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                {!showAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 text-center"
                    >
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-all duration-300 group border border-input"
                        >
                            View More
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
