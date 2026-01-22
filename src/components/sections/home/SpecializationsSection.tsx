"use client";

import Link from "next/link";
import Image from "next/image";
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
      description: "Advanced minimally invasive procedures for complex gynaecological conditions with faster recovery.",
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
      title: "Aesthetic Gynaecology",
      description: "Restoring confidence through functional and aesthetic wellness.",
      icon: Sparkles,
      link: "/expertise/aesthetic-gynecology",
      className: "md:col-span-1 md:row-span-1",
      theme: "bg-white/50 border-gray-100"
    },
    {
      title: "Urogynaecology",
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Left side image */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-20">
          <Image
            src="/gallery/img2.jpeg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        
        {/* Right side image */}
        <div className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-20">
          <Image
            src="/gallery/img5.jpeg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E4EFE9]/95 via-white/98 to-[#f9fdfb]/95"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold text-[#2D2A26] leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-5 md:mb-6"
          >
            Gynaecological care for every woman, at every stage of her life.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-base sm:text-lg md:text-xl text-[#2D2A26]/60 leading-[1.7]"
          >
            From revolutionary robotic-assisted surgeries to personalized fertility journeys, we provide a full spectrum of advanced gynaecological care.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
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
                className={`group h-full flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl hover:shadow-[#C07766]/10 ${spec.theme} hover:bg-white`}
              >
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-[#C07766] transition-colors duration-500">
                    <spec.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#C07766] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-[var(--font-playfair)] font-bold text-[#2D2A26] mb-2 sm:mb-2.5 md:mb-3 group-hover:text-[#C07766] transition-colors leading-[1.15] tracking-[-0.01em]">
                  {spec.title}
                </h3>
                  <p className="text-[#2D2A26]/50 mb-4 sm:mb-5 md:mb-6 leading-[1.7] text-sm sm:text-base">
                    {spec.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#C07766] font-semibold text-xs sm:text-sm tracking-[0.01em]">
                  Explore Service
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C07766]/20 flex items-center justify-center group-hover:bg-[#C07766] group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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