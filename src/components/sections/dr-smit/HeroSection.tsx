"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/dr1.jpeg"
          alt="Dr. Smit Bharat Solanki"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>


      {/* Content */}
      <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[var(--font-playfair)] font-black text-white mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em] px-2"
          >
            Dr. Smit Bharat Solanki<br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-normal mb-6 sm:mb-8 max-w-3xl mx-auto leading-[1.7] px-4"
          >
            Where Precision Meets Compassion:<br />
            <span className="font-medium">Transforming Women's Health Through Advanced Robotic Surgery</span>
          </motion.p>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 px-2"
          >
            {[
              { number: "15,000+", label: "Patients Treated" },
              { number: "1,000+", label: "Surgeries" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] font-black text-white mb-1 sm:mb-2 leading-[1.15] tracking-[-0.01em]">{stat.number}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium leading-[1.7]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#C07766] font-semibold tracking-[0.01em] rounded-lg sm:rounded-xl shadow-2xl active:shadow-3xl transition-all duration-300 active:-translate-y-1 text-sm sm:text-base touch-manipulation"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-active:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/research-insights"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold tracking-[0.01em] rounded-lg sm:rounded-xl active:bg-white/20 transition-all duration-300 text-sm sm:text-base touch-manipulation"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View Research</span>
            </Link>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
}

