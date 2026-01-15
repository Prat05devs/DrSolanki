"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Activity, Eye, Zap } from "lucide-react";

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Activity,
      title: "Da Vinci Robotic System",
      description: "World's most advanced surgical robot for precision procedures"
    },
    {
      icon: Eye,
      title: "3D HD Visualization",
      description: "Crystal-clear imaging for enhanced surgical accuracy"
    },
    {
      icon: Zap,
      title: "Minimally Invasive",
      description: "Smaller incisions, faster recovery, less pain"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-br from-white to-[#E4EFE9]/30">
      <div className="container mx-auto px-6 max-w-7xl w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#2D2A26] mb-6 leading-[1.15] tracking-[-0.01em]">
              Cutting-Edge Surgical Technology
            </h2>
            <p className="text-lg text-[#2D2A26]/70 leading-[1.7] mb-8">
              Internationally accepted advanced robotic surgery systems like the Da Vinci Si System ensure top-of-the-line surgical
              standards. We use state-of-the-art technology and cutting-edge surgical and medical techniques to deliver outstanding
              outcomes with precision and safety.
            </p>

            <div className="space-y-4 mb-8">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#2D2A26]/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C07766]/10 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 text-[#C07766]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-playfair)] font-bold text-[#2D2A26] mb-1 leading-[1.15] tracking-[-0.01em]">{tech.title}</h3>
                    <p className="text-[#2D2A26]/60 text-sm leading-[1.7]">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/laparoscopy-robotic-surgery" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold tracking-[0.01em] rounded-xl transition-colors">
              Learn About Our Technology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA"
                alt="Da Vinci Robotic Surgical System"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

