"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, Clock, MapPin, Shield, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function AppointmentCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#C07766] to-[#8DA399] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4c025]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black mb-6 leading-[1.15] tracking-[-0.01em]">
              Ready to Take the Next Step?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-[1.7] max-w-2xl mx-auto">
            Schedule your consultation today. Gentle, advanced gynecology care just a click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#C07766] font-semibold tracking-[0.01em] rounded-xl shadow-2xl hover:shadow-3xl transition-all">
                <Calendar className="w-5 h-5" />
                Schedule Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold tracking-[0.01em] rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all">
                <Phone className="w-5 h-5" />
                Call Us: +91 97129 82198
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Mon-Sat: 9AM-6PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Insurance Accepted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

