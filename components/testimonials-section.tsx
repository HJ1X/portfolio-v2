"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        text: "Sahil is a rare breed of engineer who understands both deep technical constraints and product vision. His work on our core infrastructure was instrumental.",
        author: "Alex Cheng",
        role: "CTO, TechFlow",
    },
    {
        id: 2,
        text: "I was blown away by the attention to detail. The animation work and performance optimizations were top-notch. Highly recommended.",
        author: "Sarah Miller",
        role: "Product Lead, StartUp Inc",
    },
    {
        id: 3,
        text: "Incredible problem solver. He took our vague requirements and turned them into a robust, scalable system in record time.",
        author: "David Kim",
        role: "Engineering Manager",
    },
    {
        id: 4,
        text: "A true professional. Communication was clear, deadlines were met, and the code quality was exceptional. A pleasure to work with.",
        author: "Emily Chen",
        role: "Founder, DesignStudio",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground mb-6">
                        Kind Words.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium">
                        What others have said about working with me.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <div className="group relative bg-muted/20 border border-white/5 p-8 md:p-10 rounded-3xl hover:bg-muted/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                                {/* Subtle noise texture or gradient on hover could go here */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-6 md:mb-8">
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-500/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.8742 16.0371 15.98 15.9392C16.5126 15.9234 16.9203 15.5401 16.9366 14.9904C16.9585 14.4719 16.5516 14.0322 16.0336 14.0183L15.98 14C14.5428 14 13.524 13.0645 12.9806 12.0169C12.4468 10.9832 12.2536 9.87635 12.0628 8.78317C11.9688 8.24354 11.8762 7.71261 11.8157 7.18556L11.8157 7L13.8058 7C14.1804 9.15783 14.7431 10.8752 15.6599 12.1895C16.0315 11.2325 16.7118 10.0573 17.5147 9.07348C18.667 7.66085 20.2195 6.64332 22.0003 6.00287L22.0003 7.82815C20.9168 8.35821 19.99 9.19957 19.2272 10.3204C18.4419 11.4728 18.0645 12.9231 18.0645 14.6191L18.0645 21L14.017 21ZM5.01662 21L5.01662 18C5.01662 16.8954 5.87378 16.0371 6.9796 15.9392C7.51219 15.9234 7.91986 15.5401 7.9362 14.9904C7.95805 14.4719 7.55118 14.0322 7.03322 14.0183L6.9796 14C5.54236 14 4.52358 13.0645 3.98022 12.0169C3.44641 10.9832 3.25324 9.87635 3.06236 8.78317C2.96841 8.24354 2.87578 7.71261 2.81531 7.18556L2.81531 7L4.80544 7C5.17997 9.15783 5.74268 10.8752 6.65948 12.1895C7.03108 11.2325 7.7114 10.0573 8.51426 9.07348C9.66664 7.66085 11.2191 6.64332 13 6.00287L13 7.82815C11.9164 8.35821 10.9895 9.19957 10.2268 10.3204C9.4415 11.4728 9.06411 12.9231 9.06411 14.6191L9.06411 21L5.01662 21Z" />
                                        </svg>
                                        <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium tracking-tight">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                            {item.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{item.author}</div>
                                            <div className="text-sm text-muted-foreground">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
