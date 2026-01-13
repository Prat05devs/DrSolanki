import Footer from "@/components/global/Footer";
import Link from "next/link";
import { hospitals, contactInfo } from "@/data/siteData";

export default function AppointmentPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 sm:px-10 bg-gradient-to-br from-[#C07766] to-[#8DA399]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-1 h-9">
              <button className="px-3 h-full rounded-full bg-white/30 shadow-sm text-xs font-bold text-white tracking-wide transition-all">
                ENG
              </button>
              <button className="px-3 h-full rounded-full text-xs font-semibold text-white/80 hover:text-white transition-all">
                HIN
              </button>
              <button className="px-3 h-full rounded-full text-xs font-semibold text-white/80 hover:text-white transition-all">
                GUJ
              </button>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30 mb-6">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Your Consultation
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed">
              Book a consultation with Dr. Smit Bharat Solanki at any of our clinic locations. 
              We're here to help you on your journey to better health.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Options */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
              Choose Your Preferred Method
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Multiple convenient ways to schedule your appointment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone Booking */}
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc] hover:shadow-xl transition-all">
              <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">call</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">Call Us</h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6">
                Speak directly with our team to schedule your appointment
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 text-[#C07766] font-semibold hover:gap-3 transition-all"
              >
                <span className="material-symbols-outlined">phone</span>
                <span>{contactInfo.phone}</span>
              </a>
            </div>

            {/* WhatsApp Booking */}
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc] hover:shadow-xl transition-all">
              <div className="size-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">chat</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">WhatsApp</h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6">
                Message us on WhatsApp for quick appointment booking
              </p>
              <a
                href={`https://wa.me/919712982198`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:gap-3 transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email Booking */}
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc] hover:shadow-xl transition-all">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">email</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">Email Us</h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6">
                Send us an email and we'll get back to you promptly
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-[#8DA399] font-semibold hover:gap-3 transition-all"
              >
                <span className="material-symbols-outlined">email</span>
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Clinic Locations */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6 text-center">
              Available at Multiple Locations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {hospitals.map((hospital, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-[#e5dddc] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-2">
                    {hospital.name}
                  </h3>
                  <p className="text-[#8a8060] dark:text-gray-300 mb-4">{hospital.city}</p>
                  <p className="text-sm text-[#8a8060] dark:text-gray-300 mb-4">
                    <span className="font-semibold">Timing:</span> {hospital.timing}
                  </p>
                  <Link
                    href={`/clinics/${hospital.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#C07766] font-semibold text-sm hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* What to Bring */}
          <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">
              What to Bring to Your Appointment
            </h3>
            <ul className="space-y-3">
              {[
                "Previous medical records and test reports",
                "List of current medications",
                "Insurance card (if applicable)",
                "Photo ID",
                "List of questions or concerns you'd like to discuss"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C07766] to-[#8DA399] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10 text-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/90 text-xl max-w-2xl">
                Take the first step towards better health. Schedule your consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#C07766] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="material-symbols-outlined mr-2 text-2xl">call</span>
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <span className="material-symbols-outlined mr-2 text-2xl">location_on</span>
                  View Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
