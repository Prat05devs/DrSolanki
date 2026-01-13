"use client";

import { useState } from "react";
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
    if (lowerTreatment.includes("uterus") && lowerTreatment.includes("transplant")) {
      return "Uterus Transplant";
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
      <section className="pt-20 pb-16 border-b border-stone-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#4a4036] leading-[1.1] tracking-tight mb-6">
              Patient Stories
            </h1>
            <p className="text-lg md:text-xl text-[#7c726a] max-w-2xl mx-auto leading-relaxed">
              Real experiences of healing, strength, and renewed life. See how precision care meets compassionate support.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 py-4">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-center gap-2 overflow-x-auto w-full hide-scrollbar pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? "bg-[#4a4036] text-white"
                    : "bg-white border border-stone-200 text-[#7c726a] hover:border-[#cd8570] hover:text-[#cd8570]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {filteredTestimonials.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredTestimonials.map((testimonial, idx) => {
                  const category = getCategoryBadge(testimonial.treatment);
                  const initials = testimonial.name.charAt(0);

                  return (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-[#cd8570]/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                    >
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className={`inline-block ${category.color} text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4`}>
                            {category.label}
                          </span>
                        </div>
                        
                        <blockquote className="mb-4">
                          <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-4 leading-tight">
                            "{testimonial.quote}"
                          </h3>
                        </blockquote>
                        
                        <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-4">
                          {testimonial.fullStory.split('\n')[0]}
                        </p>
                        
                        <div className="mt-auto flex items-center pt-6 border-t border-stone-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#e4efe9] flex items-center justify-center text-[#8ab098] text-sm font-semibold">
                              {initials}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#4a4036]">{testimonial.name}</p>
                              <p className="text-xs text-[#7c726a]">{testimonial.treatment}</p>
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
            <div className="text-center py-16">
              <p className="text-[#7c726a] text-lg">No stories found for this category.</p>
            </div>
          )}

          {/* Note about anonymization */}
          {filteredTestimonials.length > 0 && (
            <div className="text-center pt-8 border-t border-stone-100">
              <p className="text-sm text-[#7c726a] italic max-w-2xl mx-auto">
                {testimonialsNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-[#4a4036] mb-4">
            Ready to start your own story?
          </h2>
          <p className="text-[#7c726a] text-lg mb-8 leading-relaxed">
            Every journey begins with a conversation. Book your consultation with Dr. Smit Bharat Solanki today.
          </p>
          <button className="px-8 py-3.5 rounded-full bg-[#4a4036] text-white hover:bg-[#3a3329] transition-all flex items-center justify-center gap-2 mx-auto font-semibold">
            <span className="material-symbols-outlined">calendar_month</span>
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
