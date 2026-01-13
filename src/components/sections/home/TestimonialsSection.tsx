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
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-br from-[#E4EFE9]/30 to-white">
      <div className="container mx-auto px-6 max-w-7xl w-full py-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#f4c025]/10 text-[#f4c025] text-sm font-semibold mb-4">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-[#2D2A26]/60 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from women whose lives we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#2D2A26]/5 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f4c025] text-[#f4c025]" />
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-[#2D2A26] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D2A26]/10">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E4EFE9] flex items-center justify-center">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-[#C07766]">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-[#2D2A26]">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-sm text-[#2D2A26]/60">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/patient-support/stories" className="inline-flex items-center gap-2 text-[#C07766] font-semibold hover:gap-3 transition-all">
            Read More Patient Stories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

