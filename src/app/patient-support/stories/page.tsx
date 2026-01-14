"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/global/Footer";
import { testimonials, testimonialsNote } from "@/data/siteData";

type FilterCategory = "All Stories" | "IVF Success" | "Robotic Surgery" | "Fibroid Freedom";

export default function StoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("All Stories");

  // Function to determine category from treatment
  const getCategoryFromTreatment = (treatment: string): FilterCategory => {
    const lowerTreatment = treatment.toLowerCase();
    if (lowerTreatment.includes("ivf") || lowerTreatment.includes("infertility")) {
      return "IVF Success";
    }
    if (lowerTreatment.includes("robotic") || lowerTreatment.includes("hysterectomy")) {
      return "Robotic Surgery";
    }
    if (lowerTreatment.includes("fibroid")) {
      return "Fibroid Freedom";
    }
    return "All Stories";
  };

  // Function to get category badge info for display
  const getCategoryBadge = (treatment: string) => {
    const category = getCategoryFromTreatment(treatment);
    switch (category) {
      case "IVF Success":
        return { label: "IVF Success", color: "bg-[#cd8570]" };
      case "Robotic Surgery":
        return { label: "Robotic Surgery", color: "bg-[#8ab098]" };
      case "Fibroid Freedom":
        return { label: "Fibroid Freedom", color: "bg-[#f4a261]" };
      default:
        if (treatment.toLowerCase().includes("endometriosis")) {
          return { label: "Endometriosis", color: "bg-rose-400" };
        }
        if (treatment.toLowerCase().includes("vaginal") || treatment.toLowerCase().includes("rejuvenation")) {
          return { label: "Intimate Wellness", color: "bg-teal-500" };
        }
        if (treatment.toLowerCase().includes("urinary") || treatment.toLowerCase().includes("uro")) {
          return { label: "Urogynecology", color: "bg-blue-400" };
        }
        return { label: "Patient Story", color: "bg-[#8ab098]" };
    }
  };

  // Filter testimonials based on selected filter
  const filteredTestimonials = selectedFilter === "All Stories"
    ? testimonials
    : testimonials.filter(testimonial => getCategoryFromTreatment(testimonial.treatment) === selectedFilter);

  const filters: FilterCategory[] = ["All Stories", "IVF Success", "Robotic Surgery", "Fibroid Freedom"];

  return (
    <div className="antialiased overflow-x-hidden selection:bg-[#e4efe9] selection:text-[#4a4036] bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden min-h-[400px] sm:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/patientBg.webp")'
          }}
        />
        {/* Black Fade Overlay - 40% */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-lg">
              Patient Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Real experiences of healing, strength, and renewed life. See how precision care meets compassionate support.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[64px] sm:top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto w-full hide-scrollbar pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all touch-manipulation flex-shrink-0 ${
                  selectedFilter === filter
                    ? "bg-[#4a4036] text-white"
                    : "bg-white border border-stone-200 text-[#7c726a] active:border-[#cd8570] active:text-[#cd8570]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {filteredTestimonials.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {filteredTestimonials.map((testimonial, idx) => {
                  const category = getCategoryBadge(testimonial.treatment);
                  const initials = testimonial.name.charAt(0);

                  return (
                    <article
                      key={idx}
                      className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 active:border-[#cd8570]/50 active:shadow-lg transition-all duration-300 flex flex-col h-full group"
                    >
                      <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                        <div className="mb-3 sm:mb-4">
                          <span className={`inline-block ${category.color} text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-2.5 sm:px-3 py-1 rounded-full`}>
                            {category.label}
                          </span>
                        </div>
                        
                        <blockquote className="mb-3 sm:mb-4">
                          <h3 className="font-[var(--font-playfair)] text-lg sm:text-xl md:text-2xl text-[#4a4036] mb-2 sm:mb-4 leading-[1.15] tracking-[-0.01em]">
                            &quot;{testimonial.quote}&quot;
                          </h3>
                        </blockquote>
                        
                        <p className="text-[#7c726a] text-xs sm:text-sm leading-[1.7] mb-4 sm:mb-6 line-clamp-4">
                          {testimonial.fullStory.split('\n')[0]}
                        </p>
                        
                        <div className="mt-auto flex items-center pt-4 sm:pt-6 border-t border-stone-100">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e4efe9] flex items-center justify-center text-[#8ab098] text-xs sm:text-sm font-semibold flex-shrink-0">
                              {initials}
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-semibold text-[#4a4036] truncate">{testimonial.name}</p>
                              <p className="text-[10px] sm:text-xs text-[#7c726a] truncate">{testimonial.treatment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-[#7c726a] text-base sm:text-lg">No stories found for this category.</p>
            </div>
          )}

          {/* Note about anonymization */}
          {filteredTestimonials.length > 0 && (
            <div className="text-center pt-6 sm:pt-8 border-t border-stone-100 px-4">
              <p className="text-xs sm:text-sm text-[#7c726a] italic max-w-2xl mx-auto leading-[1.7]">
                {testimonialsNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4a4036] mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em]">
            Ready to start your own story?
          </h2>
          <p className="text-[#7c726a] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-[1.7] px-2">
            Every journey begins with a conversation. Book your consultation with Dr. Smit Bharat Solanki today.
          </p>
          <Link href="/appointment" className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#4a4036] text-white active:bg-[#3a3329] transition-all flex items-center justify-center gap-2 mx-auto font-semibold text-sm sm:text-base touch-manipulation">
            <span className="material-symbols-outlined text-lg sm:text-xl">calendar_month</span>
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
