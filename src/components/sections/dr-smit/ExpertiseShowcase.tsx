"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ActivitySquare, Heart, Zap, Target, TrendingUp } from "lucide-react";

export default function ExpertiseShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      title: "Robotic Surgery",
      description: "Da Vinci Xi System expertise for complex gynecological procedures",
      icon: ActivitySquare,
      color: "from-[#df4320] to-[#b93518]",
      stats: "1,000+ Procedures"
    },
    {
      title: "IVF & Fertility",
      description: "Advanced reproductive medicine with high success rates",
      icon: Heart,
      color: "from-[#C07766] to-[#8DA399]",
      stats: "85% Success Rate"
    },
    {
      title: "Minimally Invasive",
      description: "Laparoscopic and hysteroscopic techniques for faster recovery",
      icon: Zap,
      color: "from-[#8DA399] to-[#6B8E7A]",
      stats: "24hr Recovery"
    },
    {
      title: "Complex Cases",
      description: "Specialized in endometriosis, fibroids, and uterine transplants",
      icon: Target,
      color: "from-[#f4c025] to-[#dba915]",
      stats: "Expert Level"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#f4c025]/10 text-[#f4c025] text-sm font-bold mb-6">
            Core Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#181611] dark:text-white mb-6">
            Areas of Specialization
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`size-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#181611] dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8a8060] dark:text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#C07766]">
                  <TrendingUp className="w-4 h-4" />
                  <span>{item.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

