"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, MapPin, Clock, Stethoscope, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30 min-h-screen flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto pt-6 pb-12">
          {/* Left Content */}
          <div>
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl font-black text-[#2D2A26] leading-[1.15] tracking-[-0.01em] mb-6">
              Where Compassion Meets Advanced Women&apos;s Care
            </h1>

            <p className="text-xl text-[#2D2A26]/70 leading-[1.7] mb-8">
              With a gentle heart and a surgeon's precision, a space where healing begins for women of substance. 
              Trusted by thousands of women in Gujarat and globally, Dr. Smit Bharat Solanki is committed to restoring 
              health, confidence, and quality of life—one woman at a time.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold tracking-[0.01em] rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/expertise/dr-smit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#2D2A26] font-semibold tracking-[0.01em] rounded-xl border-2 border-[#2D2A26]/10 hover:border-[#C07766]/30 transition-all">
                <Stethoscope className="w-5 h-5 text-[#C07766]" />
                Meet Dr. Smit Bharat Solanki
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#2D2A26]/10">
              <div className="flex items-center gap-2 text-[#2D2A26]/70">
                <Phone className="w-4 h-4 text-[#C07766]" />
                <span className="text-sm font-medium leading-[1.7]">+91 97129 82198</span>
              </div>
              <div className="flex items-center gap-2 text-[#2D2A26]/70">
                <MapPin className="w-4 h-4 text-[#C07766]" />
                <span className="text-sm font-medium leading-[1.7]">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-[#2D2A26]/70">
                <Clock className="w-4 h-4 text-[#C07766]" />
                <span className="text-sm font-medium leading-[1.7]">Mon-Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/homePageBg.jpeg"
                alt="Dr. Smit Bharat Solanki - Gynecological Surgeon"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-[#C07766] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-[#8DA399] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

