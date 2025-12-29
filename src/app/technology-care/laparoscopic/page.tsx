import Image from "next/image";
import Footer from "@/components/global/Footer";

export default function LaparoscopicSurgery() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative px-4 py-10 md:px-40 md:py-20 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
              <div
                className="w-full md:w-1/2 aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzE0htvitgthhI4pkL5dFxkcq0kmUc0u4q1HYoVFbzD9LoBEZI9YmYh6dUUosoPAz6l9F8NfYK_U3Df9ZbzStZrEZwJpmmwAtHLk--cl0kl6hzfDspffu6wzQG_vpgvqi41sWCPcPsCMoaPhoEaqiHCwErmyLDi_iXSILgLT1ZA-NnKqyl_wR06KFbxgHGtsWFeZ5wLiKqz30JPs2FRZ0fuOgcfE-i3QoR4434fkg7FzELRSlSfZRyum_Jc5_jdTugHI6lI8C31A")',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <div className="flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                    <span className="material-symbols-outlined text-primary text-sm">sunny</span>
                    <span className="text-primary text-xs font-bold uppercase tracking-wide">
                      Minimally Invasive
                    </span>
                  </div>
                  <h1 className="text-[#181611] text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                    Laparoscopic Surgery: Gentle Precision, Faster Healing.
                  </h1>
                  <h2 className="text-[#5c564b] text-lg font-normal leading-relaxed">
                    Minimally invasive solutions for gynecological conditions, ensuring a quicker return
                    to your everyday life.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-[#181611] text-base font-bold shadow-md transition-all transform hover:scale-105">
                    Book a Consultation
                  </button>
                  <button className="flex items-center justify-center rounded-xl h-12 px-6 border border-sage text-sage hover:bg-sage hover:text-white text-base font-bold transition-all">
                    View Patient Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is Laparoscopic Surgery Section */}
      <div className="px-4 py-12 md:px-40 flex justify-center bg-white">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-col gap-6 md:w-1/2">
              <h2 className="text-[#181611] text-3xl font-bold leading-tight">
                Understanding Keyhole Surgery
              </h2>
              <p className="text-[#5c564b] text-base leading-relaxed">
                Laparoscopic surgery, often called "keyhole surgery," is a modern technique that allows
                surgeons to access the abdomen and pelvis without large incisions. By using a
                laparoscope—a slender tube with a camera—Dr. Smit Bharat Solanki can perform complex procedures with
                enhanced visualization and precision.
              </p>
              <p className="text-[#5c564b] text-base leading-relaxed">
                Unlike traditional open surgery, which requires significantly larger cuts, laparoscopy
                minimizes trauma to the body, leading to less pain and a smoother recovery journey.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="rounded-xl border border-[#e6e3db] bg-background-light p-8 flex flex-col items-center justify-center text-center gap-4">
                {/* Abstract SVG Diagram Placeholder */}
                <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner border border-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="material-symbols-outlined text-[180px] text-primary">circle</span>
                  </div>
                  <span className="material-symbols-outlined text-6xl text-sage">medical_services</span>
                  <div className="absolute bottom-8 right-8 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-3xl text-primary">videocam</span>
                  </div>
                  <div className="absolute top-8 left-8 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-3xl text-terracotta">content_cut</span>
                  </div>
                </div>
                <p className="text-sm text-[#897f61] italic mt-2">
                  Visualization of small incisions vs. traditional surgery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-16 md:px-40 flex justify-center bg-background-light">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-[#181611] text-3xl font-bold leading-tight">
                Advantages of Minimally Invasive Surgery
              </h2>
              <p className="text-[#5c564b] text-lg max-w-[720px] mx-auto">
                Why choose laparoscopic techniques for your recovery?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Benefit 1 */}
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">content_cut</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#181611] text-lg font-bold">Smaller Incisions</h3>
                  <p className="text-[#5c564b] text-sm">
                    Tiny cuts mean significantly less visible scarring.
                  </p>
                </div>
              </div>
              {/* Benefit 2 */}
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                  <span className="material-symbols-outlined text-2xl">sentiment_very_satisfied</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#181611] text-lg font-bold">Reduced Pain</h3>
                  <p className="text-[#5c564b] text-sm">
                    Less tissue trauma promotes a more comfortable recovery.
                  </p>
                </div>
              </div>
              {/* Benefit 3 */}
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">cottage</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#181611] text-lg font-bold">Back Home Sooner</h3>
                  <p className="text-[#5c564b] text-sm">
                    Shorter hospital stays let you heal in your own bed.
                  </p>
                </div>
              </div>
              {/* Benefit 4 */}
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm border border-transparent hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#181611] text-lg font-bold">Lower Risk</h3>
                  <p className="text-[#5c564b] text-sm">
                    Enhanced safety through precision techniques and visualization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions We Treat Section */}
      <div className="px-4 py-16 md:px-40 flex justify-center bg-white">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#181611] text-3xl font-bold leading-tight">
                Conditions We Treat with Laparoscopy
              </h2>
              <p className="text-[#5c564b] text-base">
                Dr. Smit Bharat Solanki specializes in addressing a wide range of gynecological concerns using these
                advanced methods.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Uterine Fibroids</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Endometriosis</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Ovarian Cysts</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Ectopic Pregnancy</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Hysterectomy</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center justify-between p-4 rounded-lg border border-[#e6e3db] hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="font-medium text-[#181611]">Tubal Ligation</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dr. Smit Bharat Solanki Expertise Section */}
      <div className="px-4 py-16 md:px-40 flex justify-center bg-background-light">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col md:flex-row gap-8 items-center rounded-2xl bg-[#221d10] text-white p-8 md:p-12 shadow-xl overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex-1 z-10">
              <h2 className="text-3xl font-bold mb-4">
                Dr. Smit Bharat Solanki's Skill in Minimally Invasive Procedures
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                With extensive training in both robotic and laparoscopic techniques, Dr. Smit Bharat Solanki combines
                technical precision with a compassionate approach. He understands that surgery is a
                significant event in your life, and his goal is to make it as safe, effective, and
                unintrusive as possible.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">1000+</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider">Surgeries</span>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">15+</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 aspect-square rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 z-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpc0z4Vf39d8Utt0DTj9zPrIxoT91kG306KrnstUOlVMkwxBIMLrIxQjVfAJy9Rtm5O_HCtzZNCD-virqz4W41OZzkjLMc90WcntHC1QmlFjlmdrcFbAmh9OWjKrDeREiMxAstqabegGlTLobHbkxx105HM4cKRMWHjIgtWQyD0-jgaDD1mRTTuGu-VzIIUJBTmE3r3bgYM2YgVYNhxqQQWEW6gFYGp4ON7mLnZsjokR5E7FaAM17rYTl3htKrUlXgDiSD_PRQZA")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-20 md:px-40 flex justify-center bg-white border-t border-[#f4f3f0]">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 text-center">
          <h2 className="text-[#181611] text-3xl font-bold mb-4">
            Explore if Laparoscopic Surgery is right for you
          </h2>
          <p className="text-[#5c564b] mb-8">
            Schedule a consultation to discuss your condition and treatment options in our warm, safe
            haven.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-[#f0c95a] text-[#181611] font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto justify-center">
              <span className="material-symbols-outlined text-xl">calendar_month</span>
              Book a Consultation
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-sage text-sage font-bold py-3 px-8 rounded-xl hover:bg-sage hover:text-white transition-all w-full sm:w-auto justify-center">
              <span className="material-symbols-outlined text-xl">call</span>
              Speak with Our Coordinator
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
