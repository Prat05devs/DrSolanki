"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Priya Kumar",
      age: 34,
      treatment: "Fibroid Removal",
      quote: "I was back to work in just 10 days. Dr. Smit Bharat Solanki's skill and care made all the difference. I can't thank him enough for giving me my life back.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8OW1Kqzng86a5oRot43JFEq_OGwibn05_ZvhkefCVvphRb1zqf7poECYBY2IwcB5KdjoqbXnQP9x1hg7zB8yVV7eN-nAOGKS0QwdQ9uPEcvolPoli6I2iH_gSdzEOw494P0ob5L0NbodGWqbtSlXFms5dsK59X6KGhEg3ZY12smFiLw84yiNFPt8Rs7I9tTvuo6wgyrdopt2lO0qfCz4JQ7Yk5aWl879CF7wZ_xfTs4V_wr0AFk698pgjYQr6qmFUIPPbKI75w"
    },
    {
      name: "Anjali Mehta",
      age: 29,
      treatment: "Endometriosis Surgery",
      quote: "After years of pain, I finally found relief. Dr. Smit Bharat Solanki took the time to listen and create a personalized treatment plan. I'm pain-free now!",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOcdH36a0mHid5QcjvylRRODQlPA2SGFaMXPdEB8I1ax48jBPmLdmaD8ClreYA_b6C_cpdAgf2UqS3ZehoU7TkHA_wq0Ktq7Be1axNy5hpEu1urL0qP0sDBmitcFhNoGDrwSjNKO5QuAVD5XoXEEGNqQ8x7WTJQRNhgvN4jI8WPFG94_6KcFsBXKhtLKprDTWydZw1V5teAZfLWsckAaG9XDj6ddeUT6H0mxO30SqGHhHHIwx-r69NekmumRSKfqIwUl74EjE5Cg"
    },
    {
      name: "Deepa Sharma",
      age: 38,
      treatment: "IVF Success",
      quote: "We tried for 7 years. Dr. Smit Bharat Solanki's expertise and support made our dream of parenthood come true. Our baby is now 6 months old!",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8OW1Kqzng86a5oRot43JFEq_OGwibn05_ZvhkefCVvphRb1zqf7poECYBY2IwcB5KdjoqbXnQP9x1hg7zB8yVV7eN-nAOGKS0QwdQ9uPEcvolPoli6I2iH_gSdzEOw494P0ob5L0NbodGWqbtSlXFms5dsK59X6KGhEg3ZY12smFiLw84yiNFPt8Rs7I9tTvuo6wgyrdopt2lO0qfCz4JQ7Yk5aWl879CF7wZ_xfTs4V_wr0AFk698pgjYQr6qmFUIPPbKI75w"
    }
  ];

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
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#2D2A26]/5 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f4c025] text-[#f4c025]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2D2A26] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D2A26]/10">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E4EFE9]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
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

