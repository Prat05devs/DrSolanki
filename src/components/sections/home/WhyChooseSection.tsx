"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Activity } from "lucide-react";

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: GraduationCap,
      title: "Highly Qualified",
      description: "MBBS, MD (OB/GYN), Fellowship in Reproductive Medicine & Da Vinci Robotic Surgery",
      color: "from-[#8DA399] to-[#8DA399]/70"
    },
    {
      icon: Award,
      title: "Award-Winning Care",
      description: "Recognized internationally for excellence in minimally invasive gynecological surgery",
      color: "from-[#C07766] to-[#C07766]/70"
    },
    {
      icon: Users,
      title: "15,000+ Patients",
      description: "Trusted by thousands of women across India and internationally for compassionate care",
      color: "from-[#f4c025] to-[#f4c025]/70"
    },
    {
      icon: Activity,
      title: "Advanced Technology",
      description: "State-of-the-art Da Vinci Xi Robotic System for precision and faster recovery",
      color: "from-[#C07766] to-[#8DA399]"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 max-w-7xl w-full py-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-4">
            Excellence in Women's Healthcare
          </h2>
          <p className="text-lg text-[#2D2A26]/60 max-w-2xl mx-auto">
            Combining advanced medical expertise with compassionate, personalized care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white to-[#E4EFE9]/30 border border-[#2D2A26]/5 hover:border-[#C07766]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2A26] mb-2">{feature.title}</h3>
              <p className="text-[#2D2A26]/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

