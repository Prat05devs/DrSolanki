import Footer from "@/components/global/Footer";
import Link from "next/link";
import { DaVinciComponentsSection, ProceduresSection, JourneySection } from "@/components/sections/robotic-surgery";
import { laparoscopy3DFaqContent } from "@/data/siteData";

export default function LaparoscopyRoboticSurgeryPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(33, 20, 17, 0.95) 0%, rgba(33, 20, 17, 0.8) 50%, rgba(33, 20, 17, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA")',
          }}
        ></div>

        <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] w-full h-full justify-center">
          <div className="max-w-[720px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df4320]/90 text-white text-sm font-medium w-fit border border-[#df4320]">
              <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
              Minimally Invasive Surgery
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
              Laparoscopy & Robotic Surgery:<br />
              <span className="text-[#D4AF37] drop-shadow-md">Precision That Transforms Lives.</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px] drop-shadow-md">
              Experience the future of minimally invasive surgery with advanced laparoscopic and Da Vinci® Robotic techniques. 
              Unmatched precision, faster recovery, and superior outcomes for complex gynecological procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#df4320] hover:bg-[#df4320]/90 transition-all text-white h-12 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Approaches Section */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
              Two Advanced Approaches to Minimally Invasive Surgery
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              {laparoscopy3DFaqContent.introduction}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Laparoscopic Surgery */}
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">medical_services</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">Laparoscopic Surgery</h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                {laparoscopy3DFaqContent.whatIs3D}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Smaller incisions (typically 0.5-1cm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Reduced pain and scarring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Faster recovery times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Shorter hospital stays</span>
                </li>
              </ul>
            </div>

            {/* Robotic Surgery */}
            <div className="bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc]">
              <div className="size-16 bg-[#df4320]/10 text-[#df4320] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">Robotic Surgery (Da Vinci®)</h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                The Da Vinci® Robotic System enhances laparoscopic surgery with 3D HD visualization, 
                enhanced precision, and instruments that move like a human wrist.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">3D HD visualization with magnification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Enhanced precision and control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Ideal for complex procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                  <span className="text-[#8a8060] dark:text-gray-300">Minimal blood loss and complications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
              Benefits of Minimally Invasive Surgery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "healing", title: "Faster Recovery", desc: "Return to normal activities sooner" },
              { icon: "content_cut", title: "Minimal Scarring", desc: "Small incisions mean less visible scars" },
              { icon: "water_drop", title: "Less Blood Loss", desc: "Reduced risk of complications" },
              { icon: "home", title: "Shorter Hospital Stay", desc: "Often same-day or overnight discharge" },
              { icon: "sentiment_very_satisfied", title: "Less Pain", desc: "Minimal tissue trauma means less discomfort" },
              { icon: "verified_user", title: "Lower Risk", desc: "Enhanced safety through precision" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all">
                <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-[#8a8060] dark:text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mb-6">
              Conditions We Treat
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              {/* TODO: Add conditions treated details from single_source_of_truth.md */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Uterine Fibroids", "Endometriosis", "Ovarian Cysts", 
              "Ectopic Pregnancy", "Hysterectomy", "Tubal Ligation",
              "Pelvic Adhesions", "Ovarian Tumors", "Uterine Prolapse"
            ].map((condition, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-[#e5dddc] hover:border-[#C07766] hover:bg-[#C07766]/5 transition-all">
                <span className="font-medium text-[#181611] dark:text-white">{condition}</span>
                <span className="material-symbols-outlined text-[#C07766]">arrow_forward</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Da Vinci Components */}
      <DaVinciComponentsSection />

      {/* Procedures */}
      <ProceduresSection />

      {/* Journey */}
      <JourneySection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#df4320] to-[#b93518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10 text-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Experience Minimally Invasive Surgery
              </h2>
              <p className="text-white/90 text-xl max-w-2xl">
                Discover how laparoscopic and robotic surgery can transform your treatment experience.
              </p>
              <Link href="/contact" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#df4320] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
