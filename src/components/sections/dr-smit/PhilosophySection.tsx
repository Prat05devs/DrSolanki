"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-[#fbfbf9] dark:bg-[#0f0e0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B3A33]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5B3A33]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#181611] dark:text-white mb-6 leading-[1.15] tracking-[-0.01em]">
            Every Patient Deserves<br />
            <span className="text-[#5B3A33]">Precision & Compassion</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#5B3A33] to-[#5B3A33]/70 relative">
                <Image
                  src="/dr2.jpeg"
                  alt="Dr. Smit Bharat Solanki - Professional Portrait"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/20 to-transparent"></div>
              </div>
            </div>
            {/* Decorative Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border-4 border-[#5B3A33]/40"
            >
              <div className="flex items-center gap-3">
                <div className="size-12 bg-[#5B3A33] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#8a8060] font-medium leading-[1.7]">Certified</p>
                  <p className="text-sm font-[var(--font-playfair)] font-black text-[#181611] leading-[1.15] tracking-[-0.01em]">Da Vinci Robotics</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-[1.15] tracking-[-0.01em]">A Personal Commitment</h3>
              <p className="text-lg text-[#8a8060] dark:text-gray-300 leading-[1.7]">
                As a surgeon, I believe that technology is only as powerful as the human touch behind it. 
                Every procedure I perform combines cutting-edge robotic precision with genuine care for 
                your wellbeing.
              </p>
              <p className="text-lg text-[#8a8060] dark:text-gray-300 leading-[1.7]">
                My approach is simple: treat every patient as I would want my own family treated. This 
                means taking time to listen, explaining everything clearly, and ensuring you feel 
                confident and supported throughout your journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: "Compassionate Care" },
                { label: "Precision Focus" },
                { label: "Advanced Tech" },
                { label: "Safety First" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="flex items-center justify-center p-4 bg-[#f8f8f5] dark:bg-[#221e10] rounded-xl"
                >
                  <span className="font-semibold text-[#181611] dark:text-white text-sm leading-[1.7]">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

