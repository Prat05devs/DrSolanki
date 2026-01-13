"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ExpertiseShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      id: "01",
      title: "Robotic Surgery",
      description: "Precision Da Vinci Xi protocols for complex interventions.",
      color: "from-rose-500/20 to-orange-500/20",
      accent: "#f43f5e",
      stats: "1,000+ Cases"
    },
    {
      id: "02",
      title: "IVF & Fertility",
      description: "Advanced medicine focusing on high-complexity success.",
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "#3b82f6",
      stats: "85% Success"
    },
    {
      id: "03",
      title: "Minimally Invasive",
      description: "Laparoscopic techniques for rapid 24-hour recovery.",
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "#10b981",
      stats: "Rapid Recovery"
    },
    {
      id: "04",
      title: "Complex Cases",
      description: "Pioneering work in endometriosis and uterine transplants.",
      color: "from-amber-500/20 to-yellow-500/20",
      accent: "#f59e0b",
      stats: "Expert Level"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center py-12 md:py-20 bg-[#fafaf9] dark:bg-[#080807] overflow-hidden"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <header className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-col gap-2"
          >
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500 leading-[1.7]">
              Technical Proficiency
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-black tracking-[-0.01em] text-slate-900 dark:text-white leading-[1.15]">
              Core <span className="text-slate-400/50">Expertise</span>
            </h2>
          </motion.div>
        </header>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-6 md:p-8 min-h-[320px] lg:min-h-[380px] transition-all duration-500"
            >
              {/* Glass Blob */}
              <div className={`absolute -top-16 -right-16 size-48 bg-gradient-to-br ${item.color} blur-[60px] group-hover:blur-[40px] transition-all duration-700 opacity-60`} />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-5xl font-black text-slate-200/50 dark:text-white/5 tracking-tighter transition-colors group-hover:text-slate-300 dark:group-hover:text-white/10">
                  {item.id}
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <div 
                  className="w-10 h-1 mb-4 transition-all duration-500 group-hover:w-16" 
                  style={{ backgroundColor: item.accent }} 
                />
                <h3 className="text-xl md:text-2xl font-[var(--font-playfair)] font-bold text-slate-900 dark:text-white mb-2 leading-[1.15] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-[1.7] mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-400 mb-0.5 leading-[1.7]">Benchmarked Impact</span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase leading-[1.7]">{item.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}