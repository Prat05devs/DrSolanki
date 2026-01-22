"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Display first 3 testimonials on homepage, rest available on stories page
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/homeTestimonialBg.mp4" type="video/mp4" />
        </video>
        {/* Black Fade Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full py-10 sm:py-12 md:py-16 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f4c025]/20 backdrop-blur-sm text-[#f4c025] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-[#f4c025]/30">
            Patient Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold text-white mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em] drop-shadow-lg">
            Real Stories, Real Results
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-[1.7] drop-shadow-md px-4">
            Don't just take our word for it. Hear from women whose lives we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {displayedTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-shadow"
            >
              {/* Stars */}
              {testimonial.rating && (
                <div className="flex gap-0.5 sm:gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f4c025] text-[#f4c025]" />
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-[#2D2A26] leading-[1.7] mb-4 italic text-sm sm:text-base">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#2D2A26]/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#E4EFE9] flex items-center justify-center flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl sm:text-2xl font-bold text-[#C07766]">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#2D2A26] text-sm sm:text-base truncate">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-xs sm:text-sm text-[#2D2A26]/60 truncate">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link href="/patient-support/stories" className="inline-flex items-center gap-2 text-white text-sm sm:text-base font-semibold tracking-[0.01em] hover:gap-3 transition-all bg-white/10 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/20">
            Read More Patient Stories
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

