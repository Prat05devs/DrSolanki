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
      title: "Clinically Accomplished",
      description: "M.B.B.S., M.S. ( OBGyn ), FMAS , FRM , Trained in Da Vinci ( Intuitive Surgical ) Surgical System",
      iconColor: "text-[#8DA399]",
      bgColor: "bg-[#8DA399]/10"
    },
    {
      icon: Award,
      title: "Award-Winning Care",
      description: "Reproductive medicine and minimally invasive gynaecological surgery",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-[1.2fr_0.8fr] items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="max-w-2xl order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-playfair)] font-medium text-[#2D2A26] leading-[1.15] tracking-[-0.01em]">
              Thoughtful Care, Proven Outcomes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#2D2A26]/60 max-w-xl leading-[1.7] mt-3 sm:mt-4">
              Combining advanced clinical expertise with compassionate, individualised care across every stage of a woman&apos;s life.
            </p>
            <div className="mt-4 sm:mt-5 md:mt-6 space-y-1.5 sm:space-y-2">
              <p className="text-sm sm:text-base md:text-lg font-[var(--font-playfair)] font-bold text-[#2D2A26]">
                Dr Smit Bharat Solanki
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#5B3A33] leading-snug">
                Director and Clinical Lead, Reproductive Medicine and IVF services
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#6b6358] leading-relaxed">
                At Parul Sevashram Hospital affiliated with Parul Institute of Medical Sciences and Research, Parul University
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#5B3A33] leading-snug pt-1.5 sm:pt-2">
                Robotic Gynec Surgeon, Endometriosis Surgeon Trained in Da Vinci ( Intuitive Surgical ) Surgical System

              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#6b6358] leading-relaxed">
                at Parth Hospital Ahmedabad
              </p>
            </div>
          </div>
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto order-1 md:order-2 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-white/70 bg-white">
              <Image
                src="/gallery/DrSmit.jpeg"
                alt="Dr. Smit Bharat Solanki"
                width={520}
                height={700}
                className="w-full h-full object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 lg:px-8 lg:py-7 group hover:bg-[#F9F9F9] transition-colors duration-500 flex flex-col"
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-[var(--font-playfair)] font-semibold text-[#2D2A26] mb-2 sm:mb-3 md:mb-4 leading-[1.15] tracking-[-0.01em]">
                {feature.title}
              </h3>
              
              <p className="text-[#2D2A26]/70 leading-[1.7] text-xs sm:text-sm md:text-[15px] flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}