"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Microscope, Award, GraduationCap } from "lucide-react";

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      title: "Published Research",
      count: "15+",
      description: "Peer-reviewed publications in leading medical journals",
      icon: BookOpen,
      color: "from-[#C07766] to-[#8DA399]"
    },
    {
      title: "Conference Presentations",
      count: "50+",
      description: "National and international medical conferences",
      icon: Microscope,
      color: "from-[#8DA399] to-[#6B8E7A]"
    },
    {
      title: "Awards & Recognition",
      count: "10+",
      description: "Excellence in surgical innovation and patient care",
      icon: Award,
      color: "from-[#f4c025] to-[#dba915]"
    },
    {
      title: "Training Programs",
      count: "5+",
      description: "Mentoring next generation of surgeons",
      icon: GraduationCap,
      color: "from-[#df4320] to-[#b93518]"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-gradient-to-br from-[#C07766] to-[#8DA399] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
            Achievements & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Excellence in Practice
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className={`size-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl font-black text-white mb-2">{item.count}</p>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

