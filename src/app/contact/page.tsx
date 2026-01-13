import Footer from "@/components/global/Footer";
import { hospitals, consultationMessage, contactInfo } from "@/data/siteData";

export default function ContactPage() {
  const getIcon = (name: string) => {
    if (name.includes("Parth")) return "schedule";
    if (name.includes("Parul")) return "calendar_today";
    return "event_repeat";
  };

  const getColor = (idx: number) => {
    const colors = [
      "from-[#df4320] to-[#b93518]",
      "from-[#8DA399] to-[#6B8E7A]",
      "from-[#f4c025] to-[#dba915]"
    ];
    return colors[idx % colors.length];
  };

  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 sm:px-10 bg-gradient-to-br from-[#C07766] to-[#8DA399]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30 mb-6">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              Multiple Locations
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Visit Dr. Smit Bharat Solanki
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed">
              {consultationMessage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              Practice Locations in Ahmedabad
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Choose the location and timing that works best for you. All locations require prior appointment booking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hospitals.map((hospital, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-white/5 rounded-2xl shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${getColor(idx)} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">{getIcon(hospital.name)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{hospital.name}</h3>
                      <p className="text-white/90 text-sm mt-1">{hospital.city}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#C07766] text-xl mt-0.5">schedule</span>
                      <div>
                        <p className="font-semibold text-[#181611] dark:text-white">Timing</p>
                        <p className="text-[#8a8060] dark:text-gray-300">{hospital.timing}</p>
                        {hospital.schedule && (
                          <p className="text-sm text-[#8a8060] dark:text-gray-300 mt-1">{hospital.schedule}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#8DA399] text-xl mt-0.5">info</span>
                      <div>
                        <p className="font-semibold text-[#181611] dark:text-white">Location</p>
                        <p className="text-[#8a8060] dark:text-gray-300 text-sm">{hospital.city}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#e5dddc]">
                      {hospital.mapLink && (
                        <a
                          href={hospital.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span className="material-symbols-outlined">map</span>
                          <span>View on Google Maps</span>
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="size-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-5xl">calendar_month</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Appointment
              </h2>
              <p className="text-white/90 text-lg mb-4 leading-relaxed">
                {consultationMessage.philosophy}
              </p>
              <p className="text-white/80 text-base mb-8 leading-relaxed italic">
                {consultationMessage.tagline}
              </p>
              <p className="text-white/90 text-sm mb-8 leading-relaxed">
                {contactInfo.consultationNote || "All consultations require prior appointment booking. Choose your preferred location and timing, and we'll confirm your appointment."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919712982198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#C07766] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Book via WhatsApp</span>
                </a>
                <a
                  href="tel:+919712982198"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined">call</span>
                  <span>Call: +91 97129 82198</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">info</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Appointment Policy</h3>
              </div>
              <ul className="space-y-3 text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>All consultations require prior appointment booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Please book at least 24-48 hours in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Bring all previous medical reports and prescriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Arrive 10-15 minutes before your scheduled time</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Services Available</h3>
              </div>
              <ul className="space-y-3 text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Robotic Surgery Consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>IVF & Fertility Treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Aesthetic Gynecology Consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>General Gynecological Care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Follow-up Consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-4">
              Find Us on the Map
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg">
              Click on any location card above to view it on Google Maps and get directions
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

