"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    {
      src: "/dr3.jpeg",
      alt: "Dr. Smit Bharat Solanki - In Practice",
      title: "In Practice",
      description: "Dedicated to excellence in patient care"
    },
    {
      src: "/dr4.jpeg",
      alt: "Dr. Smit Bharat Solanki - Professional Excellence",
      title: "Professional Excellence",
      description: "Leading innovation in women's health"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-10 bg-[#fbfbf9] dark:bg-[#0f0e0a] relative overflow-hidden">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#181611] dark:text-white mb-6 leading-[1.15] tracking-[-0.01em]">
            A Glimpse Into Practice
          </h2>
          <p className="text-lg text-[#8a8060] dark:text-gray-300 max-w-2xl mx-auto leading-[1.7]">
            See Dr. Smit Bharat Solanki in action, bringing expertise and compassion to every patient interaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-[#5B3A33]/10 bg-white"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-black text-white mb-2 leading-[1.15] tracking-[-0.01em]">{image.title}</h3>
                  <p className="text-white/90 leading-[1.7]">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

