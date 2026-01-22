"use client";

import Link from "next/link";
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden -mt-16 sm:-mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-[70%_20%] lg:bg-[50%_20%]"
        style={{ backgroundImage: 'url("/heroBG.png")' }}
      />

      {/* Soft overlay to preserve faces */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Subtle flowing lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-lines hero-lines-a" />
        <div className="hero-lines hero-lines-b" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto min-h-[100svh] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 md:pb-10 lg:pb-12 flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 justify-center">
          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-[#E8B4C8] leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-5 md:mb-6 drop-shadow-lg">
              Where Compassion Shapes Women&apos;s Care.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium leading-[1.4] drop-shadow-md">
              Precision gynaecology. Thoughtful care. Meaningful outcomes.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 md:gap-10 items-end">
            {/* Left Main Card */}
            <div className="space-y-5 sm:space-y-6 lg:translate-y-10 pb-4 sm:pb-6 md:pb-8">
              

              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-[1.7] mb-6 sm:mb-7 md:mb-8 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
                A trusted gynaecologist&apos;s clinic designed around women&apos;s
                comfort, safety, and outcomes. From preventive care to advanced
                surgery, we focus on restoring health, confidence, and quality of
                life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#C07766] hover:bg-[#C07766]/90 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">Schedule Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/expertise/dr-smit"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-xl border border-white/30 transition-all backdrop-blur"
                >
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">Meet Dr. Smit Bharat Solanki</span>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8 border-t border-white/25 drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-2 text-white/90">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    +91 97129 82198
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                  Vadodara & Ahmedabad, Gujarat, India
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Mon–Sat: 9AM–6PM
                  </span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Flowing Lines Animation */}
      <style jsx>{`
        .hero-lines {
          position: absolute;
          inset: -20%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.08) 45%,
            rgba(255, 255, 255, 0.02) 55%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 200%;
          mix-blend-mode: screen;
          opacity: 0.45;
          animation: flow 18s linear infinite;
        }

        .hero-lines-a {
          transform: rotate(6deg);
        }

        .hero-lines-b {
          transform: rotate(-4deg);
          animation-duration: 26s;
          opacity: 0.3;
        }

        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
