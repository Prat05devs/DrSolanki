"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus } from "lucide-react";

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      count: "15",
      suffix: "+",
      label: "Scientific Publications",
      subtext: "Peer-reviewed research in global medical journals.",
      accent: "from-[#5B3A33] to-[#5B3A33]/70"
    },
    {
      count: "50",
      suffix: "+",
      label: "Conference Keynotes",
      subtext: "Presentations at national and international summits.",
      accent: "from-[#5B3A33] to-[#5B3A33]/70"
    },
    {
      count: "10",
      suffix: "+",
      label: "Excellence Awards",
      subtext: "Recognition for surgical innovation and patient care.",
      accent: "from-[#5B3A33] to-[#5B3A33]/70"
    },
    {
      count: "05",
      suffix: "+",
      label: "Mentorship Programs",
      subtext: "Training and certifying the next generation of surgeons.",
      accent: "from-[#5B3A33] to-[#5B3A33]/70"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center py-12 md:py-20 bg-[#fbfbf9] dark:bg-[#0f0e0a] overflow-hidden"
    >
      {/* Dynamic Background elements for Glass Reflection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#5B3A33] rounded-full blur-[120px] animate-pulse opacity-40" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#5B3A33] rounded-full blur-[120px] opacity-35" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <header className="mb-10 md:mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex flex-col gap-3"
          >
            <h2 className="text-5xl md:text-7xl font-[var(--font-playfair)] font-black tracking-[-0.01em] text-slate-900 dark:text-white leading-[1.15]">
              The <span className="italic font-[var(--font-playfair)] font-light text-[#5B3A33]">Benchmark</span> of Success
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/40 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-8 min-h-[280px] lg:min-h-[340px] transition-all duration-500"
            >
              {/* Internal Glass Highlight */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                {/* Metric Display */}
                <div className="flex items-baseline mb-2">
                  <span className={`text-6xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b ${item.accent}`}>
                    {item.count}
                  </span>
                  <span className="text-2xl font-bold text-slate-400 ml-1">{item.suffix}</span>
                </div>

                {/* Content Section */}
                <div className="pt-6 border-t border-slate-900/5 dark:border-white/10">
                  <h3 className="text-lg font-[var(--font-playfair)] font-bold text-slate-900 dark:text-white mb-2 leading-[1.15] tracking-[-0.01em]">
                    {item.label}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-[1.7] max-w-[200px]">
                    {item.subtext}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <Plus className={`w-6 h-6 text-slate-400 dark:text-slate-600`} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative flourish */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 1 }}
           className="mt-12 flex justify-center"
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}