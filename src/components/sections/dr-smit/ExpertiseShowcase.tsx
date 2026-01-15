"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExpertiseShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      title: "Robotic Surgery",
      description: "Precision Da Vinci Xi protocols for complex interventions.",
      image: "/images/Robotic.png"
    },
    {
      title: "IVF & Fertility",
      description: "Advanced medicine focusing on high-complexity success.",
      image: "/images/ivf.png"
    },
    {
      title: "Minimally Invasive",
      description: "Laparoscopic techniques for rapid 24-hour recovery.",
      image: "/images/laproscopy.png"
    },
    {
      title: "Complex Cases",
      description: "Pioneering work in endometriosis and uterine transplants.",
      image: "/images/uterus.png"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center py-12 md:py-20 bg-[#fbfbf9] dark:bg-[#0f0e0a] overflow-hidden"
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
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[#5B3A33] leading-[1.7]">
              Technical Proficiency
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-black tracking-[-0.01em] text-slate-900 dark:text-white leading-[1.15]">
              Core <span className="text-[#5B3A33]/70">Expertise</span>
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
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-[var(--font-playfair)] font-bold text-slate-900 dark:text-white mb-2 leading-[1.15] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}