"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Stethoscope } from "lucide-react";

export default function ConditionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const conditions = [
    {
      name: "Uterine Fibroids",
      description: "Non-cancerous growths causing heavy bleeding and pelvic pain",
      symptoms: ["Heavy periods", "Pelvic pressure", "Frequent urination"],
      link: "/laparoscopy-robotic-surgery"
    },
    {
      name: "Endometriosis",
      description: "Tissue similar to uterine lining grows outside the uterus",
      symptoms: ["Painful periods", "Chronic pelvic pain", "Infertility"],
      link: "/laparoscopy-robotic-surgery"
    },
    {
      name: "PCOS",
      description: "Hormonal disorder affecting ovaries and menstrual cycles",
      symptoms: ["Irregular periods", "Weight gain", "Excess hair growth"],
      link: "/fertility"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 max-w-7xl w-full py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#2D2A26] mb-4 leading-[1.15] tracking-[-0.01em]">
            Specialized Care for Complex Conditions
          </h2>
          <p className="text-lg text-[#2D2A26]/60 max-w-2xl mx-auto leading-[1.7]">
            Reproductive medicine addresses hormonal health, ovulation, fertility, and reproductive organs, while surgery treats structural
            problems in conditions such as irregular periods, PCOS, endometriosis, fibroids, blocked fallopian tubes, and unexplained
            infertility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {conditions.map((condition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link href={condition.link} className="group block h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#E4EFE9]/20 border border-[#2D2A26]/5 hover:border-[#C07766]/30 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-[#2D2A26] mb-3 group-hover:text-[#C07766] transition-colors leading-[1.15] tracking-[-0.01em]">
                  {condition.name}
                </h3>
                <p className="text-[#2D2A26]/70 mb-6 leading-[1.7]">
                  {condition.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-[#2D2A26]/80 mb-2">Common Symptoms:</p>
                  {condition.symptoms.map((symptom, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#2D2A26]/60">
                      <CheckCircle2 className="w-4 h-4 text-[#8DA399]" />
                      {symptom}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-[#C07766] font-semibold tracking-[0.01em] group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/laparoscopy-robotic-surgery" className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#2D2A26] font-semibold tracking-[0.01em] rounded-xl border-2 border-[#2D2A26]/10 hover:border-[#C07766]/30 transition-all">
            <Stethoscope className="w-5 h-5 text-[#C07766]" />
            Learn About Treatment Options
          </Link>
        </div>
      </div>
    </section>
  );
}

