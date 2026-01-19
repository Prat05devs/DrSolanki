import Footer from "@/components/global/Footer";
import Link from "next/link";
import { services } from "@/data/siteData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Urogynecology & Pelvic Floor Care",
  description:
    "Urogynecology care for pelvic floor health, urinary incontinence, and bladder concerns with compassionate, personalized treatment.",
  path: "/urogynecology",
  keywords: [
    "urogynecology",
    "pelvic floor",
    "urinary incontinence",
    "bladder health",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function UrogynecologyPage() {
  const urogynecologyService = services.find(s => s.id === "uro-gynecology");

  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 sm:px-10 bg-gradient-to-br from-[#C07766] to-[#8DA399]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30 mb-6">
              <span className="material-symbols-outlined text-[18px]">healing</span>
              Pelvic Floor Health
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Urogynecology:<br />
              <span className="text-[#f4c025]">Restoring Confidence & Quality of Life</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed">
              Specialized care for pelvic floor disorders, urinary incontinence, and related conditions 
              affecting women's health and daily life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Urogynecology */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
                Understanding Urogynecology
              </h2>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
                {urogynecologyService?.description}
              </p>
              {urogynecologyService?.note && (
                <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                  {urogynecologyService.note}
                </p>
              )}
            </div>
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">Common Conditions</h3>
              <ul className="space-y-3">
                {urogynecologyService?.conditions?.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                    <span className="text-[#8a8060] dark:text-gray-300">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
              Treatment Options
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We offer comprehensive treatment options ranging from conservative management to advanced surgical procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fitness_center",
                title: "Pelvic Floor Therapy",
                desc: "Non-surgical strengthening exercises and physical therapy"
              },
              {
                icon: "medication",
                title: "Medical Management",
                desc: "Medications and lifestyle modifications"
              },
              {
                icon: "precision_manufacturing",
                title: "Minimally Invasive Surgery",
                desc: "Laparoscopic and robotic procedures for complex cases"
              },
              {
                icon: "healing",
                title: "Sling Procedures",
                desc: "Surgical support for urinary incontinence"
              },
              {
                icon: "spa",
                title: "Laser Therapy",
                desc: "Non-surgical vaginal rejuvenation options"
              },
              {
                icon: "monitor_heart",
                title: "Biofeedback",
                desc: "Techniques to improve pelvic muscle control"
              }
            ].map((treatment, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all">
                <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">{treatment.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-3">{treatment.title}</h3>
                <p className="text-[#8a8060] dark:text-gray-300">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C07766] to-[#8DA399] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10 text-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Don't Suffer in Silence
              </h2>
              <p className="text-white/90 text-xl max-w-2xl">
                Early evaluation allows effective treatment often without major surgery. 
                Schedule a consultation to discuss your options.
              </p>
              <Link href="/appointment" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#C07766] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
