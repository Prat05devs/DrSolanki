"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function SpecializationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specializations = [
    {
      title: "Robotic & Laparoscopic Surgery",
      description: "Minimally invasive procedures for fibroids, endometriosis, and more",
      icon: "🤖",
      link: "/laparoscopy-robotic-surgery"
    },
    {
      title: "IVF & Fertility",
      description: "Comprehensive fertility treatments with high success rates",
      icon: "👶",
      link: "/fertility"
    },
    {
      title: "Aesthetic Gynecology",
      description: "Non-surgical and surgical options for intimate wellness",
      icon: "✨",
      link: "/expertise/aesthetic-gynecology"
    },
    {
      title: "Urogynecology",
      description: "Treatment for pelvic floor disorders and urinary incontinence",
      icon: "🏥",
      link: "/urogynecology"
    },
    {
      title: "PCOS Management",
      description: "Holistic treatment approach for hormonal balance",
      icon: "⚖️",
      link: "/fertility"
    },
    {
      title: "About Dr. Smit",
      description: "Learn about our expert surgeon and his approach to care",
      icon: "🌟",
      link: "/about"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-br from-[#E4EFE9]/50 to-white">
      <div className="container mx-auto px-6 max-w-7xl w-full py-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#8DA399]/10 text-[#8DA399] text-sm font-semibold mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-4">
            Specialized Treatments
          </h2>
          <p className="text-lg text-[#2D2A26]/60 max-w-2xl mx-auto">
            {/* TODO: Add specializations overview from single_source_of_truth.md */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                href={spec.link}
                className="group block p-6 rounded-2xl bg-white border border-[#2D2A26]/5 hover:border-[#C07766]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold text-[#2D2A26] mb-2 group-hover:text-[#C07766] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-[#2D2A26]/60 mb-4 leading-relaxed">{spec.description}</p>
                <div className="flex items-center gap-2 text-[#C07766] font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

