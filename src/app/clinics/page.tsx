import Footer from "@/components/global/Footer";
import Link from "next/link";
import { hospitals } from "@/data/siteData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Clinics & Locations",
  description:
    "Find Dr. Smit Bharat Solanki's clinic locations in Vadodara and Ahmedabad, including Parul Sevashram Hospital, Satyam Hospital, and Parth Hospital.",
  path: "/clinics",
  keywords: [
    "clinics",
    "Parul Sevashram Hospital",
    "Satyam Hospital",
    "Parth Hospital",
    "Vadodara",
    "Ahmedabad",
    "gynecologist clinic",
  ],
});

export default function ClinicsPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1567745566980-4378a3db17fc?q=80&w=3174&auto=format&fit=crop")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium w-fit border border-white/30 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-base sm:text-[18px]">local_hospital</span>
              Our Clinics & Hospitals
            </span>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-black leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-6 px-2 drop-shadow-lg">
              Where We Provide Care
            </h1>
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-normal leading-[1.7] px-2 drop-shadow-md">
              Dr. Smit Bharat Solanki provides expert gynecological and fertility care at multiple locations 
              across Gujarat, ensuring accessible, world-class treatment for all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {hospitals.map((hospital, idx) => (
              <Link
                key={idx}
                href={`/clinics/${hospital.slug}`}
                className="group bg-white dark:bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-[#e5dddc] active:shadow-xl transition-all duration-300 touch-manipulation"
              >
                <div className="size-12 sm:size-14 md:size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">local_hospital</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-2 sm:mb-3 group-active:text-[#C07766] transition-colors leading-[1.15] tracking-[-0.01em]">
                  {hospital.name}
                </h3>
                <p className="text-[#8a8060] dark:text-gray-300 mb-3 sm:mb-4 font-medium text-sm sm:text-base leading-[1.7]">
                  {hospital.city}
                </p>
                <p className="text-[#8a8060] dark:text-gray-300 text-xs sm:text-sm leading-[1.7] line-clamp-3 mb-4">
                  {hospital.description}
                </p>
                <div className="flex items-center gap-2 text-[#C07766] font-semibold text-sm sm:text-base group-active:gap-3 transition-all">
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
