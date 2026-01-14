import Footer from "@/components/global/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FemifineLaserSection,
  TreatmentOptionsSection,
  WhoCanBenefitSection,
  TreatmentProcessSection,
  CTASection
} from "@/components/sections/aesthetic-gynecology";

export default function AestheticGynecologyPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(143, 158, 155, 0.95) 0%, rgba(143, 158, 155, 0.8) 50%, rgba(143, 158, 155, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ")',
          }}
        ></div>

        <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] w-full h-full justify-center">
          <div className="max-w-[720px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30">
              <span className="material-symbols-outlined text-[18px]">spa</span>
              Intimate Wellness & Aesthetic Care
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
              Aesthetic Gynecology:<br />
              <span className="text-[#f4c025] drop-shadow-md">Restoring Confidence, Enhancing Wellness.</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px] drop-shadow-md">
              {/* TODO: Add aesthetic gynecology hero description from single_source_of_truth.md */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 transition-all text-[#8FA392] h-12 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Consultation
              </Link>
              <a href="#treatment-options" className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all h-12 px-8 rounded-full text-base font-medium backdrop-blur-sm">
                <span className="material-symbols-outlined">info</span>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Aesthetic Gynecology */}
      <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl ring-8 ring-[#f8f8f5] dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8FA392]/20 to-transparent z-10"></div>
              <Image
                alt="Aesthetic gynecology and intimate wellness treatments"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ"
                width={800}
                height={600}
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
                Modern Wellness
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white leading-tight">
                Aesthetic Gynecology: Where Science Meets Self-Care.
              </h2>
              <div className="w-20 h-1.5 bg-[#8FA392] rounded-full"></div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                {/* TODO: Add detailed aesthetic gynecology description from single_source_of_truth.md */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                {/* TODO: Add treatment approach details from single_source_of_truth.md */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Non-Surgical Treatments</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>No Downtime</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Comfortable & Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Femifine Laser Section */}
      <FemifineLaserSection />

      {/* Treatment Options */}
      <div id="treatment-options">
      <TreatmentOptionsSection />
      </div>

      {/* Who Can Benefit */}
      <WhoCanBenefitSection />

      {/* Treatment Process */}
      <TreatmentProcessSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
