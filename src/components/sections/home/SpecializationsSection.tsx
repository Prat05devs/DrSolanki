"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  Cpu, 
  Baby, 
  Sparkles, 
  Activity, 
  Stethoscope, 
  User 
} from "lucide-react";

export default function SpecializationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specializations = [
    {
      title: "Robotic & Laparoscopic Surgery",
      description: "Advanced minimally invasive procedures for complex gynecological conditions with faster recovery.",
      icon: Cpu,
      link: "/laparoscopy-robotic-surgery",
      className: "md:col-span-2 md:row-span-1", // Featured Wide Card
      theme: "bg-[#8DA399]/5 border-[#8DA399]/20"
    },
    {
      title: "IVF & Fertility",
      description: "World-class fertility treatments combining science and empathy to help you grow your family.",
      icon: Baby,
      link: "/fertility",
      className: "md:col-span-1 md:row-span-2", // Featured Tall Card
      theme: "bg-[#C07766]/5 border-[#C07766]/20"
    },
    {
      title: "Aesthetic Gynecology",
      description: "Restoring confidence through functional and aesthetic wellness.",
      icon: Sparkles,
      link: "/expertise/aesthetic-gynecology",
      className: "md:col-span-1 md:row-span-1",
      theme: "bg-white/50 border-gray-100"
    },
    {
      title: "Urogynecology",
      description: "Specialized care for pelvic floor health and intimate comfort.",
      icon: Activity,
      link: "/urogynecology",
      className: "md:col-span-1 md:row-span-1",
      theme: "bg-white/50 border-gray-100"
    },
    {
      title: "PCOS & Hormones",
      description: "Holistic management of metabolic and hormonal health.",
      icon: Stethoscope,
      link: "/fertility",
      className: "md:col-span-1 md:row-span-1",
      theme: "bg-white/50 border-gray-100"
    },
    {
      title: "Meet Dr. Smit",
      description: "Expertise built on years of international surgical excellence.",
      icon: User,
      link: "/about",
      className: "md:col-span-1 md:row-span-1",
      theme: "bg-white/50 border-gray-100"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-br from-[#E4EFE9]/60 via-white to-[#f9fdfb] py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold text-[#2D2A26] leading-[1.15] tracking-[-0.01em] mb-6"
          >
            Specialized Care for <br />
            <span className="italic">Every Stage of Life</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-lg text-[#2D2A26]/60 leading-[1.7]"
          >
            From revolutionary robotic-assisted surgeries to personalized fertility journeys, we provide a full spectrum of advanced gynecological care.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {specializations.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={spec.className}
            >
              <Link
                href={spec.link}
                className={`group h-full flex flex-col justify-between p-8 rounded-[2.5rem] backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl hover:shadow-[#C07766]/10 ${spec.theme} hover:bg-white`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#C07766] transition-colors duration-500">
                    <spec.icon className="w-6 h-6 text-[#C07766] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-[#2D2A26] mb-3 group-hover:text-[#C07766] transition-colors leading-[1.15] tracking-[-0.01em]">
                    {spec.title}
                  </h3>
                  <p className="text-[#2D2A26]/50 mb-6 leading-[1.7]">
                    {spec.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#C07766] font-semibold text-sm tracking-[0.01em]">
                  Explore Service
                  <div className="w-8 h-8 rounded-full border border-[#C07766]/20 flex items-center justify-center group-hover:bg-[#C07766] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}