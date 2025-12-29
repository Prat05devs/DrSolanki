"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-gradient-to-br from-[#2D2A26] to-[#181611] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Experience the difference that precision, compassion, and advanced technology can make 
            in your healthcare journey. Book a consultation with Dr. Smit Bharat Solanki today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+919712982198"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +91 97129 82198</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

