import Footer from "@/components/global/Footer";
import Link from "next/link";
import { hospitals } from "@/data/siteData";

export default function ClinicsPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 sm:px-10 bg-gradient-to-br from-[#C07766] to-[#8DA399]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30 mb-6">
              <span className="material-symbols-outlined text-[18px]">local_hospital</span>
              Our Clinics & Hospitals
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Where We Provide Care
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed">
              Dr. Smit Bharat Solanki provides expert gynecological and fertility care at multiple locations 
              across Gujarat, ensuring accessible, world-class treatment for all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, idx) => (
              <Link
                key={idx}
                href={`/clinics/${hospital.slug}`}
                className="group bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-[#e5dddc] hover:shadow-xl transition-all duration-300"
              >
                <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">local_hospital</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3 group-hover:text-[#C07766] transition-colors">
                  {hospital.name}
                </h3>
                <p className="text-[#8a8060] dark:text-gray-300 mb-4 font-medium">
                  {hospital.city}
                </p>
                <p className="text-[#8a8060] dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {hospital.description}
                </p>
                <div className="flex items-center gap-2 text-[#C07766] font-semibold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
