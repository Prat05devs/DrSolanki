"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Activity, Award } from "lucide-react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "98.5%", label: "Success Rate", icon: Star },
    { number: "15,000+", label: "Patients Treated", icon: Users },
    { number: "1,000+", label: "Surgeries Performed", icon: Activity },
    { number: "15+", label: "Years of Excellence", icon: Award }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C07766]/5 to-[#8DA399]/5"></div>
      
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10 w-full py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-2xl mb-6 shadow-xl">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <motion.p
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3, type: "spring" }}
                className="text-5xl md:text-6xl font-black text-[#C07766] mb-3"
              >
                {stat.number}
              </motion.p>
              <p className="text-lg font-semibold text-[#181611] dark:text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

