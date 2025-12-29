import Footer from "@/components/global/Footer";

export default function UterusTransplantPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center py-20 px-4 sm:px-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPTGir5ImbPjFZ8eceQS_Z2o4hlSlwGI29lr-It5SJkl31HjD7LrhuqjC4r5wIYiAixz3uCvrWYx3uSmtgeIGTjxBp71Z-QMQpoOmiLW4DUVJl05Ph-nU8hUPM25D5oSTp-LQoOGnoVnWfcP3jTfAnYe9u45J3HsAJ_jg8yGOwhlmpSwMp7qWBeI4CU3dWmF8IptGlAIYX6Wxj5_mCL9gF2SPuEzKCLQsKXZIvdngOnm-Z6kG1Whor82R5nTu0U69TLCiTUJphXQ")',
          }}
        ></div>
        {/* Dark mode overlay adjustment */}
        <div className="absolute inset-0 z-0 bg-[#221e10]/80 hidden dark:block"></div>

        <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] w-full h-full justify-center">
          <div className="max-w-[720px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4c025]/20 text-[#181611] dark:text-white text-sm font-medium w-fit border border-[#f4c025]/30">
              <span className="material-symbols-outlined text-[18px] text-[#f4c025]">verified</span>
              Advanced Robotic Surgery Program
            </span>
            <h1 className="text-[#181611] dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              Uterus Transplant: <br />
              <span className="text-[#f4c025] drop-shadow-sm">A New Horizon for Motherhood.</span>
            </h1>
            <p className="text-[#181611]/80 dark:text-white/80 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px]">
              Offering a second chance at lineage through pioneering surgical expertise and
              compassionate, golden-hour healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 bg-[#f4c025] hover:bg-[#f4c025]/90 transition-all text-[#181611] h-12 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Book Consultation
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-[#f4c025]/50 text-[#181611] dark:text-white hover:bg-[#f4c025]/10 transition-all h-12 px-8 rounded-full text-base font-medium backdrop-blur-sm">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Patient Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Uterus Transplant? */}
      <section className="py-20 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl ring-8 ring-[#f8f8f5] dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f4c025]/20 to-transparent z-10"></div>
              <img
                alt="Abstract gentle medical illustration showing nurturing care and floral motifs representing fertility"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvSoqbbQ5awBRU8-QPBeZK3nKP3ZbFXCblGQZ6WS_T10XfCzD3Zl8IAhsM0bctpvQ9sJ_c_zin0aca2RJoDQSsGTFesT8TWiiXxyubCTAFfzDhj0qdsBK1xGCHdyapdT9VZ-WBw3PSs_bog66o27U-e1yyCkG2NbxSiWYgH__MDzZgB-UM6U5zuUgq1PMWjFinHMWf2pEe0SKTNIviMbWcV_X-kqGEbWrjXuZPeylf77YnI4H_R0J1x9G38ITYdy-VqEiAF643Q"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl z-20 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#f4c025]/20 rounded-full text-[#f4c025]">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#181611] dark:text-white">
                      Restoring Possibility
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-300 mt-1">
                      A life-giving procedure restoring the biological capacity to carry a child.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <span className="text-[#C78D75] dark:text-[#C78D75] font-bold tracking-widest uppercase text-sm">
                The Procedure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white leading-tight">
                Understanding Uterus Transplant.
              </h2>
              <div className="w-20 h-1.5 bg-[#f4c025] rounded-full"></div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Uterine Factor Infertility (UFI) affects thousands of women worldwide. A uterus
                transplant is not just a surgery; it is a profound restoration of hope. This complex
                yet transformative procedure allows women without a functional uterus to experience
                pregnancy and childbirth.
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Our program is designed with the utmost sensitivity, guiding you from the initial
                evaluation through the transplant, pregnancy, and birth, ensuring safety and
                emotional support at every step.
              </p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Absolute Uterine Factor Infertility</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Congenital Absence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Smit Bharat Solanki's Expertise (Features) */}
      <section className="py-24 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f4c025]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8F9E8B]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#181611] dark:text-white max-w-[800px]">
              Dr. Smit Bharat Solanki: A Pioneer in Uterus Transplantation.
            </h2>
            <p className="text-[#8a8060] dark:text-gray-400 text-lg max-w-[700px]">
              One of India's few Robotic Uterus Transplant Surgeons, committed to advanced training
              and complex procedures with a heart for healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white dark:bg-[#2a261a] border border-[#e6e3db] dark:border-[#332d1d] p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#f4c025]/5 transition-all duration-300 flex flex-col gap-4">
              <div className="size-14 rounded-full bg-[#f4c025]/10 flex items-center justify-center text-[#f4c025] group-hover:bg-[#f4c025] group-hover:text-[#181611] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">trophy</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] dark:text-white">Rare Expertise</h3>
              <p className="text-[#8a8060] dark:text-gray-400">
                One of India's Leading Surgeons with specialized global training in transplant
                medicine.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white dark:bg-[#2a261a] border border-[#e6e3db] dark:border-[#332d1d] p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#f4c025]/5 transition-all duration-300 flex flex-col gap-4">
              <div className="size-14 rounded-full bg-[#f4c025]/10 flex items-center justify-center text-[#f4c025] group-hover:bg-[#f4c025] group-hover:text-[#181611] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] dark:text-white">Robotic Precision</h3>
              <p className="text-[#8a8060] dark:text-gray-400">
                Minimally Invasive Techniques ensuring quicker recovery and minimal scarring.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white dark:bg-[#2a261a] border border-[#e6e3db] dark:border-[#332d1d] p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#f4c025]/5 transition-all duration-300 flex flex-col gap-4">
              <div className="size-14 rounded-full bg-[#f4c025]/10 flex items-center justify-center text-[#f4c025] group-hover:bg-[#f4c025] group-hover:text-[#181611] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] dark:text-white">
                Comprehensive Support
              </h3>
              <p className="text-[#8a8060] dark:text-gray-400">
                Holistic care that goes beyond surgery, guiding you towards motherhood.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white dark:bg-[#2a261a] border border-[#e6e3db] dark:border-[#332d1d] p-8 rounded-[2rem] hover:shadow-xl hover:shadow-[#f4c025]/5 transition-all duration-300 flex flex-col gap-4">
              <div className="size-14 rounded-full bg-[#f4c025]/10 flex items-center justify-center text-[#f4c025] group-hover:bg-[#f4c025] group-hover:text-[#181611] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">shield_person</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] dark:text-white">
                Ethical &amp; Patient-Centric
              </h3>
              <p className="text-[#8a8060] dark:text-gray-400">
                Rigorous screening protocols and ethical standards prioritizing patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section className="py-24 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1000px] mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#8F9E8B] font-bold tracking-widest uppercase text-sm">
              Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#181611] dark:text-white mt-2">
              Your Journey Towards a Transplant
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line for mobile/desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f4c025]/20 via-[#f4c025] to-[#f4c025]/20 md:left-1/2 md:-ml-px"></div>

            <div className="flex flex-col gap-12">
              {/* Step 1 */}
              <div className="relative flex md:justify-end items-center md:items-start group">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-[#f8f8f5] dark:bg-[#221e10] border-4 border-[#f4c025] z-10"></div>
                <div className="ml-24 md:ml-0 md:mr-[50%] md:pr-16 md:text-right w-full">
                  <div className="bg-[#f8f8f5] dark:bg-[#2a261a] p-6 rounded-2xl md:rounded-tr-none md:rounded-br-[2rem] border-l-4 border-[#f4c025] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#f4c025] font-bold text-sm uppercase mb-1 block">
                      Phase 01
                    </span>
                    <h3 className="text-lg font-bold text-[#181611] dark:text-white mb-2">
                      Initial Consultation &amp; Assessment
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-400">
                      Comprehensive medical history review and initial compatibility checks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex md:justify-start items-center md:items-start group">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-white dark:bg-[#221e10] border-4 border-[#f4c025] z-10"></div>
                <div className="ml-24 md:ml-[50%] md:pl-16 w-full">
                  <div className="bg-[#f8f8f5] dark:bg-[#2a261a] p-6 rounded-2xl md:rounded-tl-none md:rounded-bl-[2rem] border-l-4 md:border-l-0 md:border-r-4 border-[#f4c025] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#f4c025] font-bold text-sm uppercase mb-1 block">
                      Phase 02
                    </span>
                    <h3 className="text-lg font-bold text-[#181611] dark:text-white mb-2">
                      Donor Screening &amp; Matching
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-400">
                      Ethical and rigorous donor evaluation to ensure a safe match.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex md:justify-end items-center md:items-start group">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-white dark:bg-[#221e10] border-4 border-[#f4c025] z-10"></div>
                <div className="ml-24 md:ml-0 md:mr-[50%] md:pr-16 md:text-right w-full">
                  <div className="bg-[#f8f8f5] dark:bg-[#2a261a] p-6 rounded-2xl md:rounded-tr-none md:rounded-br-[2rem] border-l-4 border-[#f4c025] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#f4c025] font-bold text-sm uppercase mb-1 block">
                      Phase 03
                    </span>
                    <h3 className="text-lg font-bold text-[#181611] dark:text-white mb-2">
                      Surgical Procedure
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-400">
                      Advanced robotic surgery for donor and recipient with expert teams.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex md:justify-start items-center md:items-start group">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-white dark:bg-[#221e10] border-4 border-[#f4c025] z-10"></div>
                <div className="ml-24 md:ml-[50%] md:pl-16 w-full">
                  <div className="bg-[#f8f8f5] dark:bg-[#2a261a] p-6 rounded-2xl md:rounded-tl-none md:rounded-bl-[2rem] border-l-4 md:border-l-0 md:border-r-4 border-[#f4c025] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#f4c025] font-bold text-sm uppercase mb-1 block">
                      Phase 04
                    </span>
                    <h3 className="text-lg font-bold text-[#181611] dark:text-white mb-2">
                      Recovery &amp; Monitoring
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-400">
                      Close post-operative care and immunosuppression management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex md:justify-end items-center md:items-start group">
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-[#f4c025] border-4 border-white dark:border-[#221e10] shadow-lg shadow-[#f4c025]/30 z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#181611] text-[16px]">
                    child_care
                  </span>
                </div>
                <div className="ml-24 md:ml-0 md:mr-[50%] md:pr-16 md:text-right w-full">
                  <div className="bg-[#f4c025]/10 dark:bg-[#f4c025]/5 p-6 rounded-2xl md:rounded-tr-none md:rounded-br-[2rem] border-l-4 border-[#f4c025] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#f4c025] font-bold text-sm uppercase mb-1 block">
                      Phase 05
                    </span>
                    <h3 className="text-lg font-bold text-[#181611] dark:text-white mb-2">
                      IVF &amp; Pregnancy
                    </h3>
                    <p className="text-sm text-[#8a8060] dark:text-gray-400">
                      Embryo transfer and careful monitoring throughout pregnancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & FAQs */}
      <section className="py-24 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col lg:flex-row gap-16 max-w-[1280px] mx-auto">
          {/* Testimonial Side */}
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-3xl font-black text-[#181611] dark:text-white">Stories of Hope</h2>
            <div className="relative p-8 md:p-12 bg-white dark:bg-[#2a261a] rounded-[2rem] border border-[#f0eee6] dark:border-[#332d1d] shadow-sm">
              <span className="material-symbols-outlined absolute top-8 left-8 text-6xl text-[#f4c025]/20 rotate-180">
                format_quote
              </span>
              <div className="relative z-10 flex flex-col gap-6">
                <p className="text-xl italic text-[#181611] dark:text-gray-200 leading-relaxed">
                  "After years of silence and closed doors, Dr. Smit Bharat Solanki gave us a reason to believe
                  again. The care wasn't just medical; it was deeply human. Holding my baby today
                  feels like a miracle made possible by his hands."
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYl-It8oO8obuz3pbFQPe0iN4pzmGSr145JXCowL_bojQbZ3ms3iamykF4eF8hC2OT4G3HnfsxScDkDmXCR3ayukkbQkSz6AMuFXD0B40chiEvf2DRLBpN10PaO1rawKIRnKMGZ-94b5HH259YIuEWW7b46rjt41UgkluZCImLN-5wo9jOCWE9-ODlcvDjzlubBmE048_f5K6AQYVmImD8d1n79_xjNWqhA8eMdgA5VWzAHit6QpdyHjC8sJ7xoY66E97x4E8oog")',
                    }}
                  ></div>
                  <div>
                    <h4 className="font-bold text-[#181611] dark:text-white">
                      Ananya &amp; Baby Viaan
                    </h4>
                    <p className="text-sm text-[#8a8060]">Uterus Transplant Recipient, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Block inside layout */}
            <div className="p-8 bg-gradient-to-br from-[#f4c025]/10 to-transparent rounded-[2rem] border border-[#f4c025]/20 flex flex-col gap-4 items-start">
              <h3 className="text-xl font-bold text-[#181611] dark:text-white">
                Ready to start your journey?
              </h3>
              <p className="text-[#8a8060] dark:text-gray-400 text-sm">
                Our transplant coordinator is here to answer your personal questions confidentially.
              </p>
              <div className="flex flex-wrap gap-3 w-full">
                <button className="flex-1 bg-[#f4c025] hover:bg-[#f4c025]/90 text-[#181611] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Book Confidential Consult
                </button>
                <button className="flex-1 bg-transparent hover:bg-[#8F9E8B]/10 text-[#181611] dark:text-white border-2 border-[#8F9E8B] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">call</span>
                  Speak to Coordinator
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Side */}
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-3xl font-black text-[#181611] dark:text-white">Common Questions</h2>
            <div className="flex flex-col gap-4">
              {/* FAQ Item 1 */}
              <details className="group bg-white dark:bg-[#2a261a] rounded-2xl overflow-hidden border border-[#f0eee6] dark:border-[#332d1d]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-[#181611] dark:text-white">
                    Who is a suitable candidate?
                  </span>
                  <span className="material-symbols-outlined text-[#f4c025] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#8a8060] dark:text-gray-400 leading-relaxed border-t border-dashed border-[#f0eee6] dark:border-[#332d1d] pt-4">
                  Generally, women aged 21-40 with absolute uterine factor infertility (AUFI), no
                  serious medical conditions, and a willingness to undergo IVF are considered. Each
                  case is evaluated individually.
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white dark:bg-[#2a261a] rounded-2xl overflow-hidden border border-[#f0eee6] dark:border-[#332d1d]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-[#181611] dark:text-white">
                    What are the risks involved?
                  </span>
                  <span className="material-symbols-outlined text-[#f4c025] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#8a8060] dark:text-gray-400 leading-relaxed border-t border-dashed border-[#f0eee6] dark:border-[#332d1d] pt-4">
                  As with any major transplant surgery, risks include infection, organ rejection, and
                  side effects from immunosuppressants. Our robotic approach minimizes surgical
                  risks, and we monitor you closely.
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white dark:bg-[#2a261a] rounded-2xl overflow-hidden border border-[#f0eee6] dark:border-[#332d1d]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-[#181611] dark:text-white">
                    Is the transplant permanent?
                  </span>
                  <span className="material-symbols-outlined text-[#f4c025] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#8a8060] dark:text-gray-400 leading-relaxed border-t border-dashed border-[#f0eee6] dark:border-[#332d1d] pt-4">
                  No, the uterus is typically removed after one or two successful pregnancies to
                  allow the mother to stop taking immunosuppressive medications.
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group bg-white dark:bg-[#2a261a] rounded-2xl overflow-hidden border border-[#f0eee6] dark:border-[#332d1d]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-[#181611] dark:text-white">
                    How long is the recovery?
                  </span>
                  <span className="material-symbols-outlined text-[#f4c025] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#8a8060] dark:text-gray-400 leading-relaxed border-t border-dashed border-[#f0eee6] dark:border-[#332d1d] pt-4">
                  Hospital stay is typically 5-7 days for the recipient. Full recovery takes about
                  6-8 weeks, but regular monitoring continues for months before embryo transfer.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
