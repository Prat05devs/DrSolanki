import Footer from "@/components/global/Footer";
import Link from "next/link";
import Image from "next/image";
import { ivfInjectionsInfo, thinEndometriumFaqContent, contactInfo } from "@/data/siteData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "IVF & IUI Fertility Treatments",
  description:
    "IVF, IUI, and fertility treatments with personalized care. Advanced reproductive medicine and support for conception in Vadodara and Ahmedabad.",
  path: "/expertise/ivf-iui",
  keywords: [
    "IVF",
    "IUI",
    "fertility treatment",
    "reproductive medicine",
    "infertility care",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function InfertilityPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center py-16 px-4 sm:px-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPTGir5ImbPjFZ8eceQS_Z2o4hlSlwGI29lr-It5SJkl31HjD7LrhuqjC4r5wIYiAixz3uCvrWYx3uSmtgeIGTjxBp71Z-QMQpoOmiLW4DUVJl05Ph-nU8hUPM25D5oSTp-LQoOGnoVnWfcP3jTfAnYe9u45J3HsAJ_jg8yGOwhlmpSwMp7qWBeI4CU3dWmF8IptGlAIYX6Wxj5_mCL9gF2SPuEzKCLQsKXZIvdngOnm-Z6kG1Whor82R5nTu0U69TLCiTUJphXQ")',
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-[#221e10]/80 hidden dark:block"></div>

        <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] w-full h-full justify-center">
          <div className="max-w-[720px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C07766]/20 text-[#181611] dark:text-white text-sm font-medium w-fit border border-[#C07766]/30">
              <span className="material-symbols-outlined text-[18px] text-[#C07766]">favorite</span>
              Comprehensive Fertility Care
            </span>
            <h1 className="text-[#181611] dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              Infertility Treatment & IVF:<br />
              <span className="text-[#C07766] drop-shadow-sm">Your Journey to Parenthood Starts Here.</span>
            </h1>
            <p className="text-[#181611]/80 dark:text-white/80 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px]">
              Expert fertility care combining advanced reproductive technologies with personalized treatment plans. 
              High success rates, compassionate support, and cutting-edge IVF techniques to help you achieve your dream of parenthood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/appointment" className="flex items-center justify-center gap-2 bg-[#C07766] hover:bg-[#C07766]/90 transition-all text-white h-12 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Appointment
              </Link>
              <Link href={`tel:${contactInfo.phone}`} className="flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-[#C07766]/50 text-[#181611] dark:text-white hover:bg-[#C07766]/10 transition-all h-12 px-8 rounded-full text-base font-medium backdrop-blur-sm">
                <span className="material-symbols-outlined">call</span>
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Infertility */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl ring-8 ring-[#f8f8f5] dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C07766]/20 to-transparent z-10"></div>
              <Image
                alt="Compassionate fertility care and IVF treatment"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvSoqbbQ5awBRU8-QPBeZK3nKP3ZbFXCblGQZ6WS_T10XfCzD3Zl8IAhsM0bctpvQ9sJ_c_zin0aca2RJoDQSsGTFesT8TWiiXxyubCTAFfzDhj0qdsBK1xGCHdyapdT9VZ-WBw3PSs_bog66o27U-e1yyCkG2NbxSiWYgH__MDzZgB-UM6U5zuUgq1PMWjFinHMWf2pEe0SKTNIviMbWcV_X-kqGEbWrjXuZPeylf77YnI4H_R0J1x9G38ITYdy-VqEiAF643Q"
                width={800}
                height={600}
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
                Understanding Infertility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white leading-tight">
                When Hope Meets Science: Comprehensive Fertility Solutions.
              </h2>
              <div className="w-20 h-1.5 bg-[#C07766] rounded-full"></div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Infertility affects millions of couples worldwide. At Dr. Smit Bharat Solanki&apos;s practice, we understand that 
                the journey to parenthood can be challenging, both emotionally and physically. Our comprehensive 
                fertility program offers state-of-the-art diagnostic tools and treatment options tailored to your unique situation.
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                We combine advanced reproductive technologies with personalized care, ensuring you receive the 
                most effective treatment while feeling supported every step of the way. From initial evaluation 
                to successful pregnancy, we&apos;re here to guide you through your fertility journey.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Advanced IVF Techniques</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>High Success Rates</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Personalized Care Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              Comprehensive Fertility Treatment Options
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We offer a full spectrum of fertility treatments, from basic interventions to advanced 
              reproductive technologies, all designed to maximize your chances of conception.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IVF Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">science</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                In Vitro Fertilization (IVF)
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                Advanced IVF techniques including ICSI, blastocyst transfer, and preimplantation genetic testing. 
                Our state-of-the-art laboratory ensures optimal conditions for embryo development.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Intracytoplasmic Sperm Injection (ICSI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Blastocyst Culture & Transfer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Preimplantation Genetic Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Frozen Embryo Transfer (FET)</span>
                </li>
              </ul>
            </div>

            {/* IUI Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">pregnancy</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Intrauterine Insemination (IUI)
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                A less invasive fertility treatment option where prepared sperm is directly placed into the uterus 
                during ovulation, increasing the chances of fertilization.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Ovulation Induction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Sperm Washing & Preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Timed Insemination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Multiple Cycle Options</span>
                </li>
              </ul>
            </div>

            {/* Fertility Evaluation Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#f4c025]/10 text-[#f4c025] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">search</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Comprehensive Fertility Evaluation
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                Thorough diagnostic testing to identify the root cause of infertility, including hormonal 
                assessments, imaging studies, and specialized fertility tests.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Hormonal Profile Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Ultrasound & Imaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Semen Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Hysterosalpingography (HSG)</span>
                </li>
              </ul>
            </div>

            {/* Male Infertility Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">male</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Male Infertility Treatment
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                Comprehensive evaluation and treatment of male factor infertility, including advanced sperm 
                retrieval techniques and medical management.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Advanced Semen Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Sperm Retrieval Procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Hormonal Therapy</span>
                </li>
              </ul>
            </div>

            {/* Egg Freezing Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">ac_unit</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Egg & Embryo Freezing
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                Preserve your fertility for the future with advanced cryopreservation techniques. Ideal for 
                women planning to delay pregnancy or facing medical treatments.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Oocyte Cryopreservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Embryo Banking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Fertility Preservation</span>
                </li>
              </ul>
            </div>

            {/* Surgical Fertility Card */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#f4c025]/10 text-[#f4c025] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">healing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Surgical Fertility Procedures
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                Minimally invasive surgical interventions to correct structural issues affecting fertility, 
                including robotic and laparoscopic techniques.
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Robotic Myomectomy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Endometriosis Excision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                  <span>Tubal Reversal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              Excellence in Fertility Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#C07766]/10 to-transparent rounded-2xl p-8 border border-[#C07766]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#C07766] rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">High Success Rates</h3>
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Our IVF program consistently achieves success rates above national averages through advanced 
                laboratory techniques, optimal embryo selection, and personalized treatment protocols.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#8DA399]/10 to-transparent rounded-2xl p-8 border border-[#8DA399]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#8DA399] rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">State-of-the-Art Laboratory</h3>
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Our advanced embryology laboratory features cutting-edge equipment and maintains the highest 
                standards for embryo culture, ensuring optimal conditions for development and implantation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f4c025]/10 to-transparent rounded-2xl p-8 border border-[#f4c025]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#f4c025] rounded-full flex items-center justify-center text-[#181611]">
                  <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Compassionate Support</h3>
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                We understand the emotional challenges of infertility. Our team provides comprehensive support, 
                counseling, and guidance throughout your entire journey, ensuring you never feel alone.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#C07766]/10 to-transparent rounded-2xl p-8 border border-[#C07766]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 bg-[#C07766] rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">person</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Personalized Treatment</h3>
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Every fertility journey is unique. We create customized treatment plans based on your specific 
                diagnosis, age, medical history, and personal preferences, maximizing your chances of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The IVF Process */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              Your IVF Journey: Step by Step
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Understanding the IVF process helps reduce anxiety and sets realistic expectations. 
              Here&apos;s what to expect during your treatment cycle.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Initial Consultation & Evaluation",
                description: "Comprehensive assessment including medical history, physical examination, and diagnostic tests to determine the best treatment approach.",
                icon: "search"
              },
              {
                step: "2",
                title: "Ovarian Stimulation",
                description: "Controlled ovarian hyperstimulation using fertility medications to produce multiple mature eggs, monitored through regular ultrasounds and blood tests.",
                icon: "science"
              },
              {
                step: "3",
                title: "Egg Retrieval",
                description: "Minimally invasive procedure performed under sedation to collect mature eggs from the ovaries using ultrasound guidance.",
                icon: "medical_services"
              },
              {
                step: "4",
                title: "Fertilization & Embryo Culture",
                description: "Eggs are fertilized with sperm in our advanced laboratory. Embryos are cultured for 3-5 days under optimal conditions with continuous monitoring.",
                icon: "biotech"
              },
              {
                step: "5",
                title: "Embryo Transfer",
                description: "Selected high-quality embryo(s) are transferred into the uterus through a simple, painless procedure. Remaining embryos can be frozen for future cycles.",
                icon: "pregnancy"
              },
              {
                step: "6",
                title: "Pregnancy Testing & Follow-up",
                description: "Blood test performed approximately 10-14 days after transfer to confirm pregnancy. Ongoing support and monitoring throughout early pregnancy.",
                icon: "favorite"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-[#e5dddc] hover:shadow-xl transition-all">
                <div className="flex-shrink-0 size-16 bg-[#C07766] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="material-symbols-outlined text-3xl text-[#C07766]">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-[#181611] dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVF Injections Information Section */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Understanding IVF
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              {ivfInjectionsInfo.title}
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto whitespace-pre-line">
              {ivfInjectionsInfo.introduction}
            </p>
          </div>

          <div className="space-y-12">
            {/* Types of Injections */}
            <div className="bg-gradient-to-br from-[#C07766]/10 to-transparent rounded-2xl p-8 border border-[#C07766]/20">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                {ivfInjectionsInfo.types.heading}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                {ivfInjectionsInfo.types.options.map((option, idx) => (
                  <div key={idx} className="bg-white dark:bg-white/5 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-[#C07766] mb-2">{option.name}</h4>
                    <p className="text-[#8a8060] dark:text-gray-300">{option.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 italic">{ivfInjectionsInfo.types.note}</p>
            </div>

            {/* Study Overview */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                {ivfInjectionsInfo.studyOverview.heading}
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg mb-4">
                {ivfInjectionsInfo.studyOverview.description}
              </p>
              <ul className="space-y-2 mb-4">
                {ivfInjectionsInfo.studyOverview.comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check_circle</span>
                    <span className="text-[#8a8060] dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#8a8060] dark:text-gray-300 italic">{ivfInjectionsInfo.studyOverview.note}</p>
            </div>

            {/* Findings */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#181611] dark:text-white text-center">
                {ivfInjectionsInfo.findings.heading}
              </h3>
              
              {/* rFSH Benefits */}
              <div className="bg-gradient-to-br from-[#8DA399]/10 to-transparent rounded-2xl p-8 border border-[#8DA399]/20">
                <h4 className="text-xl font-bold text-[#181611] dark:text-white mb-3">
                  {ivfInjectionsInfo.findings.rFSH.title}
                </h4>
                <p className="text-[#8a8060] dark:text-gray-300 mb-4">
                  {ivfInjectionsInfo.findings.rFSH.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {ivfInjectionsInfo.findings.rFSH.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check</span>
                      <span className="text-[#8a8060] dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#8a8060] dark:text-gray-300 font-semibold mb-2">This means a better chance of:</p>
                <ul className="space-y-2">
                  {ivfInjectionsInfo.findings.rFSH.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#C07766] mt-0.5">arrow_forward</span>
                      <span className="text-[#8a8060] dark:text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Efficiency */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
                <h4 className="text-xl font-bold text-[#181611] dark:text-white mb-3">
                  {ivfInjectionsInfo.findings.efficiency.title}
                </h4>
                <p className="text-[#8a8060] dark:text-gray-300 mb-4">
                  {ivfInjectionsInfo.findings.efficiency.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#fdf1ec] rounded-xl p-4">
                    <p className="text-sm font-semibold text-[#8a8060] mb-2">Instead of:</p>
                    <p className="text-[#181611] dark:text-white">{ivfInjectionsInfo.findings.efficiency.comparison.insteadOf}</p>
                  </div>
                  <div className="bg-[#e4efe9] rounded-xl p-4">
                    <p className="text-sm font-semibold text-[#8a8060] mb-2">With rFSH:</p>
                    <p className="text-[#181611] dark:text-white">{ivfInjectionsInfo.findings.efficiency.comparison.with}</p>
                  </div>
                </div>
                <p className="text-[#8a8060] dark:text-gray-300 font-semibold mb-2">This means:</p>
                <ul className="space-y-2">
                  {ivfInjectionsInfo.findings.efficiency.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check</span>
                      <span className="text-[#8a8060] dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Economy */}
              <div className="bg-gradient-to-br from-[#f4c025]/10 to-transparent rounded-2xl p-8 border border-[#f4c025]/20">
                <h4 className="text-xl font-bold text-[#181611] dark:text-white mb-3">
                  {ivfInjectionsInfo.findings.economy.title}
                </h4>
                <p className="text-[#8a8060] dark:text-gray-300 mb-4 whitespace-pre-line">
                  {ivfInjectionsInfo.findings.economy.description}
                </p>
                <p className="text-[#8a8060] dark:text-gray-300 font-semibold mb-2">
                  {ivfInjectionsInfo.findings.economy.why}
                </p>
                <ul className="space-y-2 mb-4">
                  {ivfInjectionsInfo.findings.economy.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#8F9E8B] mt-0.5">check</span>
                      <span className="text-[#8a8060] dark:text-gray-300">{reason}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#C07766] dark:text-[#C07766] font-semibold italic text-lg">
                  &quot;{ivfInjectionsInfo.findings.economy.quote}&quot;
                </p>
              </div>
            </div>

            {/* Takeaway */}
            <div className="bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{ivfInjectionsInfo.takeaway.heading}</h3>
              <p className="mb-4 opacity-90">{ivfInjectionsInfo.takeaway.wrongQuestion}</p>
              <p className="mb-4 font-semibold text-lg">{ivfInjectionsInfo.takeaway.rightQuestion}</p>
              <p className="opacity-90 whitespace-pre-line">{ivfInjectionsInfo.takeaway.conclusion}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin Endometrium Section */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Understanding IVF Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              {thinEndometriumFaqContent.title}
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              {thinEndometriumFaqContent.introduction}
            </p>
          </div>

          <div className="space-y-8">
            {/* What is Thin Endometrium */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                What is Thin Endometrium?
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                {thinEndometriumFaqContent.whatIs}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-br from-[#C07766]/10 to-transparent rounded-2xl p-8 border border-[#C07766]/20">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                Why It Affects IVF Success
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-4">
                {thinEndometriumFaqContent.whyAffects}
              </p>
              <div className="bg-white dark:bg-white/5 rounded-xl p-6 mt-4">
                <h4 className="font-bold text-[#181611] dark:text-white mb-3">Common Causes:</h4>
                <p className="text-[#8a8060] dark:text-gray-300">
                  {thinEndometriumFaqContent.whyThin}
                </p>
              </div>
            </div>

            {/* New Approach */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                A New Approach to Thin Endometrium
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-4">
                {thinEndometriumFaqContent.newApproach}
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-4">
                {thinEndometriumFaqContent.shift}
              </p>
              <div className="bg-gradient-to-br from-[#8DA399]/10 to-transparent rounded-xl p-6 mt-4">
                <h4 className="font-bold text-[#181611] dark:text-white mb-3">Improvements Observed:</h4>
                <p className="text-[#8a8060] dark:text-gray-300">
                  {thinEndometriumFaqContent.improvements}
                </p>
              </div>
            </div>

            {/* Who Benefits */}
            <div className="bg-gradient-to-br from-[#C07766]/10 to-transparent rounded-2xl p-8 border border-[#C07766]/20">
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
                Who Can Benefit
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                {thinEndometriumFaqContent.whoBenefits}
              </p>
            </div>

            {/* Important Message */}
            <div className="bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Important to Remember</h3>
              <p className="mb-4 opacity-90 text-lg leading-relaxed">
                {thinEndometriumFaqContent.whatMeans}
              </p>
              <p className="mb-4 font-semibold text-lg">
                {thinEndometriumFaqContent.emotionalMessage}
              </p>
              <p className="opacity-90 text-lg leading-relaxed">
                {thinEndometriumFaqContent.finalMessage}
              </p>
            </div>
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
                Ready to Begin Your Fertility Journey?
              </h2>
              <p className="text-white/90 text-xl max-w-2xl">
                Take the first step towards parenthood. Schedule a consultation with our fertility specialists 
                and discover how we can help you achieve your dream of having a family.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#C07766] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                  Schedule Appointment
                </button>
                <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">call</span>
                  Call Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

