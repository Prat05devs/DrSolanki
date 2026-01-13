"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Individual Counter Component for the "New" feel
function Counter({ value, direction = "up" }: { value: string, direction?: "up" | "down" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Clean numeric value for animation
  const numericValue = parseFloat(value.replace(/,/g, "").replace(/[+%]/g, ""));
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (latest) => {
    const formatted = Math.floor(latest).toLocaleString();
    if (value.includes("%")) return `${latest.toFixed(1)}%`;
    if (value.includes("+")) return `${formatted}+`;
    return formatted;
  });

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const stats = [
    { number: "98.5%", label: "Clinical Success", sub: "Outcome rate" },
    { number: "15,000+", label: "Global Patients", sub: "Trusted care" },
    { number: "1,000+", label: "Robotic Surgeries", sub: "Precision cases" },
    { number: "15+", label: "Years Experience", sub: "Specialized" }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 md:py-20 bg-white dark:bg-[#080807] overflow-hidden"
    >
      {/* Background Accent Blur - subtle and contained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-32 bg-[#C07766]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative group">
          {/* The Glass Ribbon */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/5"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="relative bg-white/70 dark:bg-[#0c0c0a]/80 backdrop-blur-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center group/item hover:bg-white/90 dark:hover:bg-white/5 transition-colors"
              >
                {/* Decorative Micro-Dot */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#C07766] opacity-30 group-hover/item:scale-150 group-hover/item:opacity-100 transition-all" />

                <div className="relative">
                  <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black tracking-[-0.01em] text-slate-900 dark:text-white mb-2 leading-[1.15]">
                    <Counter value={stat.number} />
                  </h3>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#C07766] uppercase tracking-widest mb-1 leading-[1.7]">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-tight leading-[1.7]">
                      {stat.sub}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider for Mobile/Desktop UX */}
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-slate-200 dark:via-white/10 to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Floating Aesthetic Elements */}
          <div className="absolute -top-6 -left-6 size-12 rounded-full bg-gradient-to-br from-[#C07766] to-[#8DA399] blur-2xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-6 -right-6 size-12 rounded-full bg-gradient-to-br from-[#8DA399] to-[#C07766] blur-2xl opacity-40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}