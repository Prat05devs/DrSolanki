"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Activity, GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { clinicalExperience, education, certifications } from "@/data/siteData";

export default function CredentialsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Progress bar for the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getIcon = (position: string) => {
    const pos = position.toLowerCase();
    if (pos.includes("director") || pos.includes("lead")) return Stethoscope;
    if (pos.includes("professor") || pos.includes("resident") || pos.includes("fellow") || pos.includes("student")) return GraduationCap;
    return Activity;
  };

  const getColor = (idx: number) => {
    const colors = [
      "from-rose-400 to-orange-300",
      "from-emerald-400 to-teal-500",
      "from-blue-400 to-indigo-500",
      "from-amber-400 to-yellow-600",
    ];
    return colors[idx % colors.length];
  };

  const allCredentials = [
    ...clinicalExperience.map((exp) => ({ ...exp, type: 'clinical' })),
    ...education.map((edu) => ({ ...edu, type: 'education' })),
    ...certifications.map((cert) => ({ ...cert, type: 'cert' }))
  ].map((item, idx) => {
    const year = (item as any).period 
      ? ((item as any).period.split("–")[1] || (item as any).period.split("-")[1] || "Present")
      : (item as any).year || "Present";
    
    return {
      year,
      title: (item as any).position || (item as any).degree || (item as any).title,
      subtitle: item.institution,
      location: item.location,
      description: (item as any).focus?.join(", ") || (item as any).description || "",
      icon: (item as any).type === 'education' ? GraduationCap : (item as any).type === 'cert' ? Award : getIcon((item as any).position),
      color: getColor(idx),
      isCurrent: year === "Present"
    };
  }).sort((a, b) => (a.year === "Present" ? -1 : b.year === "Present" ? 1 : parseInt(b.year) - parseInt(a.year)));

  return (
    <section ref={containerRef} className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fbfbf9] dark:bg-[#0f0e0a]">
      
      {/* Background Decorative Elements for Glassmorphism */}
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-rose-200/20 dark:bg-rose-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-black text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em] px-2">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C07766] to-[#8DA399]">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-[1.7] px-4">
            A comprehensive timeline of clinical excellence, specialized education, and professional certifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 w-full h-full bg-gradient-to-b from-[#C07766] via-[#8DA399] to-[#f4c025]"
            />
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {allCredentials.map((cred, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 transform md:-translate-x-1/2 z-20">
                  <div className={`w-full h-full rounded-full border-2 sm:border-4 border-white dark:border-slate-900 bg-[#C07766] ${cred.isCurrent ? 'animate-pulse ring-2 sm:ring-4 ring-[#C07766]/30' : ''}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-right" : "md:text-left pl-8 sm:pl-10 md:pl-16"}`}>
                   <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                  >
                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                    
                    <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                      <div className={`flex items-center gap-2 mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-white/50 dark:border-white/5 text-xs sm:text-sm font-semibold text-[#C07766] leading-[1.7]`}>
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {cred.year}
                      </div>

                      <div className={`flex items-start gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}>
                        <div className={`flex-shrink-0 size-10 sm:size-12 md:size-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cred.color} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                          <cred.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-playfair)] font-bold text-slate-900 dark:text-white mb-1 leading-[1.15] tracking-[-0.01em]">
                            {cred.title}
                          </h3>
                          <p className="text-[#8DA399] font-medium flex items-center gap-2 leading-[1.7] text-sm sm:text-base">
                             <span className="opacity-70 truncate">{cred.subtitle}</span>
                          </p>
                        </div>
                      </div>

                      {cred.description && (
                        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-[1.7] mb-3 sm:mb-4">
                          {cred.description}
                        </p>
                      )}

                      {cred.location && (
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider leading-[1.7]">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {cred.location}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Date Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
