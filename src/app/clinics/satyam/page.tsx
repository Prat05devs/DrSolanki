import Footer from "@/components/global/Footer";
import Link from "next/link";
import { hospitals } from "@/data/siteData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Satyam Hospital | Vadodara Clinic",
  description:
    "Multi-specialty women's healthcare at Satyam Hospital, Vadodara. Consult Dr. Smit Bharat Solanki for gynecology care.",
  path: "/clinics/satyam",
  keywords: [
    "Satyam Hospital",
    "Vadodara clinic",
    "gynecology care",
    "women's health",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function SatyamHospitalPage() {
  const hospital = hospitals.find(h => h.name === "Satyam Hospital");

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/SatyamHospital.png")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium w-fit border border-white/30 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-base sm:text-[18px]">local_hospital</span>
              <span className="hidden sm:inline">Multi-Specialty Hospital</span>
              <span className="sm:hidden">Hospital</span>
            </span>
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-6 drop-shadow-lg px-2">
              {hospital.name}
            </h1>
            <p className="text-white/95 text-sm sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-md px-2">
              {hospital.city} • {hospital.timing}
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Details */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em]">About This Location</h2>
              <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {hospital.description}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white">Key Features</h3>
                <ul className="space-y-2">
                  {hospital.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5 flex-shrink-0 text-lg sm:text-xl">check_circle</span>
                      <span className="text-[#8a8060] dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#e5dddc]">
              <h3 className="text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em]">Location & Contact</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#8a8060] dark:text-gray-300 mb-1">Location</p>
                  <p className="text-[#181611] dark:text-white text-sm sm:text-base">{hospital.city}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#8a8060] dark:text-gray-300 mb-1">Timing</p>
                  <p className="text-[#181611] dark:text-white text-sm sm:text-base">{hospital.timing}</p>
                </div>
                {hospital.mapLink && (
                  <Link
                    href={hospital.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C07766] font-semibold hover:gap-3 transition-all text-sm sm:text-base touch-manipulation"
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">map</span>
                    <span>View on Map</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
