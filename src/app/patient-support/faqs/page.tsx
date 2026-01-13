import Footer from "@/components/global/Footer";
import { faqs, hysterectomyContent } from "@/data/siteData";

export default function FAQPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full px-4 py-12 lg:px-20 lg:py-16 xl:py-16 flex justify-center bg-gradient-to-b from-white to-[#f8f6f6]">
          <div className="container max-w-6xl">
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
              <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10 text-center lg:text-left">
                <h1 className="text-[#181311] text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight">
                  Your Questions, Our Answers:{' '}
                  <span className="font-medium text-[#ee5b2b] block mt-2">
                    A Resource Hub for Your Peace of Mind.
                  </span>
                </h1>
                <h2 className="text-[#685850] text-lg font-light leading-relaxed">
                  Find clear, compassionate answers to common queries and essential resources for your health
                  journey with Dr. Smit Bharat Solanki's Sanctuary.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <button className="flex items-center justify-center rounded-full h-12 px-8 bg-[#ee5b2b] text-white text-base font-medium hover:bg-[#ee5b2b]/90 transition-colors shadow-lg shadow-[#ee5b2b]/20">
                    Browse FAQs
                  </button>
                  <button className="flex items-center justify-center rounded-full h-12 px-8 bg-white border border-[#8ba898] text-[#8ba898] text-base font-medium hover:bg-[#eef3f0] transition-colors">
                    View Guides
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl relative group">
                  <div className="absolute inset-0 bg-[#ee5b2b]/10 group-hover:bg-[#ee5b2b]/0 transition-colors duration-500 z-10"></div>
                  <img
                    alt="Diverse group of women smiling together in warm golden hour lighting"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9817q0mw3aSoc5R4hZYmVMnwT0ntjyEJNzzGUbhVPbpW9IH4Oz07hkTEclHObRZcbB9vI7ClJ3GJP36wVyxLB05dMUsTO-k55ge_zE8wkfFszaW93pQrMZv85hnalKNepDUQFn0x9kURksFG4gUnbWp2JXLco0gVaEZQUWfbuIoEuXLY7bCrdx-wJRxHT5jcsjxKaCUO_XTeNv6oc2LndBklP_R6bRHwl0nu3aO_oh8eL1VyIrrAr57YdFZLKQZjenNWS9pZAQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="w-full px-4 py-8 flex justify-center -mt-10 relative z-20">
          <div className="container max-w-4xl bg-white rounded-[2.5rem] shadow-xl p-6 lg:p-10 border border-[#f0ebe9]">
            {/* Search Bar */}
            <div className="relative w-full mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#ee5b2b] text-2xl">search</span>
              </div>
              <input
                className="block w-full h-14 pl-12 pr-4 rounded-full bg-[#f8f6f6] border-transparent focus:border-[#ee5b2b] focus:bg-white focus:ring-0 text-base text-[#181311] placeholder-[#896b61] transition-all"
                placeholder="Search for specific questions, treatments, or guides..."
                type="text"
              />
            </div>
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-5 py-2 rounded-full bg-[#ee5b2b] text-white text-sm font-medium shadow-md shadow-[#ee5b2b]/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                All
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Robotic Surgery
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Fertility
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Endometriosis
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Uterus Transplant
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Pre-Op
              </button>
              <button className="px-5 py-2 rounded-full bg-[#fdf1ec] text-[#181311] text-sm font-medium hover:bg-[#ee5b2b]/20 transition-colors">
                Billing &amp; Insurance
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 py-16 flex justify-center bg-[#f8f6f6]">
          <div className="container max-w-3xl flex flex-col gap-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-[#181311] mb-3">Common Questions, Clear Answers.</h2>
              <p className="text-[#685850] max-w-xl mx-auto">
                We believe in transparent care. Here are the most frequent topics discussed by our patients.
              </p>
            </div>

            {/* Hysterectomy Introduction */}
            <div className="bg-gradient-to-br from-[#ee5b2b]/10 to-[#fdf1ec] rounded-2xl p-8 mb-8 border border-[#ee5b2b]/20">
              <h3 className="text-2xl font-bold text-[#181311] mb-4">{hysterectomyContent.heading}</h3>
              <p className="text-xl font-semibold text-[#ee5b2b] mb-4">{hysterectomyContent.tagline}</p>
              <p className="text-[#685850] leading-relaxed">{hysterectomyContent.introduction}</p>
            </div>

            {/* FAQs from siteData */}
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-[#f0ebe9] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none text-lg font-medium text-[#181311] hover:bg-[#fdf1ec]/30 transition-colors">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-[#ee5b2b] transition-transform duration-300 accordion-icon">
                    expand_more
                  </span>
                </summary>
                <div className="accordion-content bg-[#fdf1ec]/20 px-6 pb-6 pt-2 text-[#685850] leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Patient Guides Section */}
        <section className="w-full px-4 py-16 bg-[#eef3f0]">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-[#181311] mb-4">Essential Guides for Your Journey.</h2>
                <p className="text-[#685850] text-lg">
                  Access downloadable guides and instructions to prepare for your procedure, understand your
                  recovery, and manage your health effectively.
                </p>
              </div>
              <a className="hidden md:flex items-center text-[#8ba898] font-bold hover:underline" href="#">
                View All Resources
                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Guide Card 1 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white flex flex-col items-start gap-4">
                <div className="size-14 rounded-2xl bg-[#fdf1ec] flex items-center justify-center text-[#ee5b2b]">
                  <span className="material-symbols-outlined text-3xl">checklist</span>
                </div>
                <h3 className="text-xl font-bold text-[#181311] mt-2">
                  Pre-Operative Checklist for Robotic Surgery
                </h3>
                <p className="text-sm text-[#685850] flex-1">
                  A step-by-step guide on diet, medication, and arrival times before your procedure.
                </p>
                <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-full border border-[#8ba898] text-[#8ba898] font-bold py-3 px-6 hover:bg-[#8ba898] hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">download</span> Download Guide
                </button>
              </div>

              {/* Guide Card 2 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white flex flex-col items-start gap-4">
                <div className="size-14 rounded-2xl bg-[#eef3f0] flex items-center justify-center text-[#8ba898]">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h3 className="text-xl font-bold text-[#181311] mt-2">Post-IVF Care &amp; Wellness Guide</h3>
                <p className="text-sm text-[#685850] flex-1">
                  Understanding your body after treatment, managing stress, and what to expect next.
                </p>
                <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-full border border-[#8ba898] text-[#8ba898] font-bold py-3 px-6 hover:bg-[#8ba898] hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">download</span> Download Guide
                </button>
              </div>

              {/* Guide Card 3 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white flex flex-col items-start gap-4">
                <div className="size-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-400">
                  <span className="material-symbols-outlined text-3xl">home_health</span>
                </div>
                <h3 className="text-xl font-bold text-[#181311] mt-2">Managing Pelvic Pain at Home</h3>
                <p className="text-sm text-[#685850] flex-1">
                  Safe exercises, dietary tips, and pain management strategies for daily comfort.
                </p>
                <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-full border border-[#8ba898] text-[#8ba898] font-bold py-3 px-6 hover:bg-[#8ba898] hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">download</span> Download Guide
                </button>
              </div>
            </div>
            <div className="md:hidden mt-8 flex justify-center">
              <a className="flex items-center text-[#8ba898] font-bold hover:underline" href="#">
                View All Resources
                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 py-16 flex justify-center bg-white">
          <div className="container max-w-4xl bg-[#fdf1ec] rounded-[3rem] p-10 lg:p-16 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="size-16 rounded-full bg-white flex items-center justify-center text-[#ee5b2b] shadow-sm mb-2">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181311]">
                Can't find what you're looking for?
              </h2>
              <p className="text-[#685850] text-lg max-w-lg">
                Our compassionate team is here to listen and help you find the answers you need for your peace of
                mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-[#ee5b2b] text-white text-base font-bold shadow-lg shadow-[#ee5b2b]/20 hover:bg-[#ee5b2b]/90 transition-transform hover:-translate-y-1">
                  <span className="material-symbols-outlined">call</span> Contact Our Team Directly
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-[#25D366] text-white text-base font-bold shadow-lg shadow-green-500/20 hover:bg-[#20bd5a] transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
