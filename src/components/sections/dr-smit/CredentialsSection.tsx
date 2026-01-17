"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Stethoscope, Activity, GraduationCap, Award, MapPin } from "lucide-react";
import { clinicalExperience, education, certifications } from "@/data/siteData";

export default function CredentialsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<"all" | "clinical" | "education" | "cert">("clinical");

  const getIcon = (position: string) => {
    const pos = position.toLowerCase();
    if (pos.includes("director") || pos.includes("lead")) return Stethoscope;
    if (pos.includes("professor") || pos.includes("resident") || pos.includes("fellow") || pos.includes("student")) return GraduationCap;
    return Activity;
  };

  const allCredentials = [
    ...clinicalExperience.map((exp) => ({ ...exp, type: "clinical" })),
    ...education.map((edu) => ({ ...edu, type: "education" })),
    ...certifications.map((cert) => ({ ...cert, type: "cert" }))
  ].map((item) => {
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
      type: (item as any).type,
      isCurrent: year === "Present"
    };
  }).sort((a, b) => (a.year === "Present" ? -1 : b.year === "Present" ? 1 : parseInt(b.year) - parseInt(a.year)));

  const filteredCredentials = activeCategory === "all"
    ? allCredentials
    : allCredentials.filter((cred) => cred.type === activeCategory);

  const categories: { id: "all" | "clinical" | "education" | "cert"; label: string; icon: any }[] = [
    { id: "clinical", label: "Clinical", icon: Stethoscope },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "cert", label: "Certifications", icon: Award },
    { id: "all", label: "All", icon: Activity }
  ];

  const getCategoryLabel = (type: string) => {
    if (type === "clinical") return "Clinical";
    if (type === "education") return "Education";
    return "Certification";
  };

  return (
    <section ref={containerRef} className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-[#fbfbf9] dark:bg-[#0f0e0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-left mb-10 sm:mb-12 md:mb-14"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#5B3A33] mb-3">
            Academic Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-slate-900 dark:text-white mb-4 leading-[1.15] tracking-[-0.01em]">
            Professional <span className="text-[#5B3A33]">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-[1.7]">
            A refined view of clinical leadership, specialized training, and certifications, presented as a continuous academic journey.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">
              Filter
            </p>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#5B3A33] text-white border-[#5B3A33]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#5B3A33]/40"
                  }`}
                  aria-pressed={activeCategory === cat.id}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-white/10" />
            <ol className="space-y-6 sm:space-y-8">
              {filteredCredentials.map((cred, idx) => (
                <li key={`${cred.title}-${idx}`} className="relative pl-10 sm:pl-12 lg:pl-16">
                  <span className="absolute left-2.5 sm:left-3.5 top-4 size-3 rounded-full bg-[#5B3A33] shadow-[0_0_0_6px_rgba(91,58,51,0.15)]" />
                  <motion.article
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md px-5 sm:px-6 py-4 sm:py-5 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                      <span className="inline-flex items-center gap-2 text-[#5B3A33] font-semibold">
                        <span className="size-2 rounded-full bg-[#5B3A33]" />
                        {cred.year}
                      </span>
                      <span className="uppercase tracking-[0.25em] text-slate-400">
                        {getCategoryLabel(cred.type)}
                      </span>
                    </div>

                    <div className="mt-4 flex items-start gap-3 sm:gap-4">
                      <div className="size-10 sm:size-11 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[#5B3A33]">
                        <cred.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-[var(--font-playfair)] font-semibold text-slate-900 dark:text-white leading-tight break-words">
                          {cred.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed break-words">
                          {cred.subtitle}
                        </p>
                      </div>
                    </div>

                    {cred.location && (
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-3">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{cred.location}</span>
                      </div>
                    )}

                    {cred.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 break-words">
                        {cred.description}
                      </p>
                    )}
                  </motion.article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
