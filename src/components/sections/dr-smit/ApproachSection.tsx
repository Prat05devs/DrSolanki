"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, CheckCircle2, Shield } from "lucide-react";

export default function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const approaches = [
    {
      title: "Personalized Care",
      description: "Every treatment plan is tailored to your unique needs and circumstances",
      icon: Heart
    },
    {
      title: "Clear Communication",
      description: "You'll understand every step of your journey in simple, clear terms",
      icon: Sparkles
    },
    {
      title: "Evidence-Based",
      description: "All treatments are backed by the latest research and proven techniques",
      icon: CheckCircle2
    },
    {
      title: "Comprehensive Support",
      description: "From consultation to recovery, we're with you every step of the way",
      icon: Shield
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#df4320]/10 text-[#df4320] text-sm font-bold mb-6">
            My Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#181611] dark:text-white mb-6">
            How Dr. Smit Bharat Solanki Cares
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-[#e5dddc] hover:shadow-xl transition-all"
            >
              <div className="size-14 bg-[#C07766]/10 text-[#C07766] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-[#181611] dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

