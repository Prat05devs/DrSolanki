"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, ActivitySquare, Microscope, GraduationCap, BookOpen } from "lucide-react";

export default function CredentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    {
      year: "Present",
      title: "Robotic & Reproductive Surgeon",
      institution: "Multiple Hospitals, Ahmedabad",
      description: "Leading robotic surgery programs and advanced fertility treatments",
      icon: Stethoscope,
      color: "from-[#C07766] to-[#8DA399]"
    },
    {
      year: "2020",
      title: "Fellowship in Da Vinci Robotic Surgery",
      institution: "International Training Program",
      description: "Advanced certification in minimally invasive robotic procedures",
      icon: ActivitySquare,
      color: "from-[#df4320] to-[#b93518]"
    },
    {
      year: "2018",
      title: "Fellowship in Reproductive Medicine",
      institution: "Leading Fertility Institute",
      description: "Specialized training in IVF, IUI, and advanced fertility techniques",
      icon: Microscope,
      color: "from-[#8DA399] to-[#6B8E7A]"
    },
    {
      year: "2015",
      title: "MD (Obstetrics & Gynecology)",
      institution: "Medical University",
      description: "Post-graduate specialization in women's health and surgery",
      icon: GraduationCap,
      color: "from-[#f4c025] to-[#dba915]"
    },
    {
      year: "2010",
      title: "MBBS",
      institution: "Medical College",
      description: "Bachelor of Medicine, Bachelor of Surgery",
      icon: BookOpen,
      color: "from-[#C07766] to-[#8DA399]"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10] relative overflow-hidden">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#8DA399]/10 text-[#8DA399] text-sm font-bold mb-6">
            Education & Training
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#181611] dark:text-white mb-6">
            A Journey of Excellence
          </h2>
          <p className="text-lg text-[#8a8060] dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and specialization have been the foundation of Dr. Smit Bharat Solanki's 
            commitment to providing world-class care.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C07766] via-[#8DA399] to-[#f4c025] transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-[#C07766] rounded-full transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`size-16 bg-gradient-to-br ${cred.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        <cred.icon className="w-8 h-8" />
                      </div>
                      <div className={idx % 2 === 0 ? "md:text-right" : ""}>
                        <span className="inline-block px-3 py-1 bg-[#C07766]/10 text-[#C07766] rounded-lg text-xs font-bold mb-2">
                          {cred.year}
                        </span>
                        <h3 className="text-2xl font-black text-[#181611] dark:text-white mb-2">
                          {cred.title}
                        </h3>
                        <p className="text-[#8DA399] font-semibold mb-2">{cred.institution}</p>
                        <p className="text-[#8a8060] dark:text-gray-300">{cred.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

