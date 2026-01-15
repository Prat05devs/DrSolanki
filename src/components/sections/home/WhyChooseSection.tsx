"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Activity } from "lucide-react";

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: GraduationCap,
      title: "Highly Qualified",
      description: "MBBS, MS (OB/GYN), Fellowship in Reproductive Medicine & Da Vinci Robotic Surgery",
      iconColor: "text-[#8DA399]",
      bgColor: "bg-[#8DA399]/10"
    },
    {
      icon: Award,
      title: "Award-Winning Care",
      description: "Reproductive medicine and minimally invasive gynecological surgery",
      iconColor: "text-[#C07766]",
      bgColor: "bg-[#C07766]/10"
    },
    {
      icon: Users,
      title: "15,000+ Patients",
      description: "Trusted by thousands of women across India and internationally for compassionate care",
      iconColor: "text-[#D9A01C]", // Slightly deeper gold for readability
      bgColor: "bg-[#f4c025]/10"
    },
    {
      icon: Activity,
      title: "Advanced Technology",
      description: "State-of-the-art Da Vinci Xi Robotic System for precision and faster recovery",
      iconColor: "text-[#8DA399]",
      bgColor: "bg-[#8DA399]/10"
    }
  ];

  return (
    <section ref={ref} className="min-h-[100svh] flex items-center bg-gradient-to-br from-white via-[#FDFBF7] to-[#E4EFE9]/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center mb-10 sm:mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-[#C07766] font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block leading-[1.7]">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-medium text-[#2D2A26] leading-[1.15] tracking-[-0.01em]">
              Excellence in <br /> 
              <span className="italic">Women's Healthcare</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2D2A26]/60 max-w-xl leading-[1.7] mt-4">
              Combining advanced medical expertise with compassionate, personalized care for every stage of life.
            </p>
          </div>
          <div className="relative max-w-md md:max-w-none mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/70 bg-white">
              <Image
                src="/images/homePageBg.png"
                alt="Dr. Smit Bharat Solanki"
                width={520}
                height={620}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
            </div>
            <div className="absolute -bottom-3 left-4 sm:left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-white/70 text-xs sm:text-sm font-semibold text-[#2D2A26]">
              Meet your doctor
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-2xl sm:rounded-3xl">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-6 sm:p-8 group hover:bg-[#F9F9F9] transition-colors duration-500 flex flex-col"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-[var(--font-playfair)] font-semibold text-[#2D2A26] mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em]">
                {feature.title}
              </h3>
              
              <p className="text-[#2D2A26]/70 leading-[1.7] text-sm sm:text-[15px] flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}