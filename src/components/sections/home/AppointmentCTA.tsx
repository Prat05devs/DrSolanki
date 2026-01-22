"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, Clock, MapPin, Shield, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function AppointmentCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#C07766] to-[#8DA399] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#f4c025]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-black mb-4 sm:mb-5 md:mb-6 leading-[1.15] tracking-[-0.01em]">
              Ready to Take the Next Step?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-9 md:mb-10 leading-[1.7] max-w-2xl mx-auto px-4">
            Schedule your consultation today. Gentle, advanced gynecology care just a click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/appointment" className="group inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white hover:bg-gray-50 text-[#C07766] text-sm sm:text-base font-semibold tracking-[0.01em] rounded-lg sm:rounded-xl shadow-2xl hover:shadow-3xl transition-all w-full sm:w-auto">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Schedule Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent hover:bg-white/10 text-white text-sm sm:text-base font-semibold tracking-[0.01em] rounded-lg sm:rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all w-full sm:w-auto">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Call Us: +91 97129 82198</span>
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white/80">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Mon-Sat: 9AM-6PM</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Insurance Accepted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

