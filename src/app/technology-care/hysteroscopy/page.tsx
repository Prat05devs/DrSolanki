import Footer from "@/components/global/Footer";

export default function Hysteroscopy() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light text-[#181611] font-display overflow-x-hidden selection:bg-primary/30">

      <div className="layout-container flex h-full grow flex-col">
        {/* Breadcrumbs */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5 bg-background-light">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 px-4 items-center">
              <a
                className="text-sage hover:text-primary transition-colors text-sm font-medium leading-normal"
                href="#"
              >
                Home
              </a>
              <span className="material-symbols-outlined text-sage text-sm">chevron_right</span>
              <a
                className="text-sage hover:text-primary transition-colors text-sm font-medium leading-normal"
                href="#"
              >
                Technology &amp; Care
              </a>
              <span className="material-symbols-outlined text-sage text-sm">chevron_right</span>
              <span className="text-[#181611] text-sm font-semibold leading-normal">Hysteroscopy</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center pb-10">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="@container">
              <div className="rounded-3xl overflow-hidden relative min-h-[520px] flex items-center p-8 md:p-16">
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(248, 247, 246, 0.2) 0%, rgba(34, 29, 16, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0TbnEv9oIMvCYSKEJcvYWhIumGNByg4sFDWr0AUiv-WMBXdPoWjyBAmdiJ_hmtZzgs26EzOv10-W_sf4rQHiVYtELsZUPzVRh4mUbXGy0rwFTFnLZ7h2S1xxLlKlh_vEGuTYyFhmeq1IGSyr_kMV96BhYlOm3A46UEKjD3JKQ5VP5fs44_yulGXOhzqNJsE3qcZSmRRBHDH4NLoEGbVqst1s4vphRPkzUagzYCQUC3apSbeib3dtB3GfkzaC-4DzM-vHpRJdPyg")',
                  }}
                ></div>
                {/* Content Card */}
                <div className="relative z-10 max-w-[600px] bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex flex-col gap-6 text-left">
                    <h1 className="text-[#181611] text-4xl md:text-5xl font-serif font-medium leading-tight tracking-tight">
                      Hysteroscopy: <br />
                      <span className="text-primary-dark">Clear Insights</span> for Uterine Health
                    </h1>
                    <p className="text-[#4a4a4a] text-lg font-light leading-relaxed">
                      A precise, minimally invasive procedure for diagnosing and treating conditions
                      within the uterus, delivered with Dr. Smit Bharat Solanki's compassionate expertise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-[#181611] text-base font-bold leading-normal hover:bg-primary-dark transition-all shadow-md">
                        Book a Consultation
                      </button>
                      <button className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 border border-sage text-sage-dark hover:bg-sage/10 transition-all text-base font-medium leading-normal bg-transparent">
                        <span className="material-symbols-outlined mr-2 text-lg">call</span>
                        Speak with Care Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Hysteroscopy Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-12 bg-white">
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
            <div className="flex flex-col md:flex-row items-center gap-12 p-4">
              <div className="flex-1 flex flex-col gap-6">
                <span className="text-sage font-bold tracking-widest uppercase text-xs">
                  The Procedure
                </span>
                <h2 className="text-[#181611] text-3xl md:text-4xl font-serif font-medium leading-tight">
                  Understanding Uterine Inspection
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <p className="text-[#4a4a4a] text-base leading-7">
                  Hysteroscopy is a clear, easy-to-understand procedure where a thin, lighted telescope
                  is gently inserted through the vagina to visualize the inside of the uterus. Unlike
                  other surgeries, it requires no external incisions.
                </p>
                <p className="text-[#4a4a4a] text-base leading-7">
                  It is primarily used to diagnose the causes of abnormal bleeding or to treat specific
                  uterine conditions. Because of its minimally invasive nature, it is often performed as
                  a day-care procedure, prioritizing your comfort and quick return to daily life.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-sage-dark bg-sage/10 px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-lg">timer</span>
                    30-60 Minutes
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-sage-dark bg-sage/10 px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-lg">home</span>
                    Same-Day Discharge
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#fbf9f4] border border-[#eee9dc] relative flex items-center justify-center p-8">
                  {/* Placeholder for line art illustration */}
                  <img
                    alt="Artistic line drawing illustration of a uterus with gentle warm tones"
                    className="opacity-80 mix-blend-multiply w-full h-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdDbo4En52Cw4bSGSwRP3tbKT4wboqDRrHyMoMcCwUNyuprK2UbwwyPaBbkwyMfkw7rpE7Y-rLQNmlySKyEB2Td5AReg-OLtCIYaRHmtN3JEup9ODiV4qmsVCQ3pVRODzGLw1YFzMn0DpiQwAFxUqaawG147hFbYEV_NzNhxlYHDnRzx61cDI-FHYXKNd9AjznTfoOPCTNR_mrYdc0eNX9tee8V08MwJbSMfgo_iP4c-LUxPOnmWsIyd7ukbZNCZarT8PpvYWsog"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-sage-dark shadow-sm">
                    Visualization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indications Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-16 bg-background-light">
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
            <div className="flex flex-col gap-10 px-4">
              <div className="text-center flex flex-col items-center gap-4">
                <h2 className="text-[#181611] text-3xl md:text-4xl font-serif font-medium leading-tight">
                  When is Hysteroscopy Recommended?
                </h2>
                <p className="text-[#4a4a4a] max-w-[600px] text-center">
                  Dr. Smit Bharat Solanki utilizes hysteroscopy for diagnosing and treating various uterine conditions
                  with precision and care.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">water_drop</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Abnormal Bleeding
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Diagnosing causes of heavy or irregular menstrual flow to find the right solution.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">coronavirus</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Polyp &amp; Fibroid Removal
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Gentle, targeted removal of uterine growths without invasive surgery.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">child_care</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Infertility Investigation
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Investigating structural uterine factors that may be affecting fertility.
                    </p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">search</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Misplaced IUDs
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Safely locating and retrieving contraceptive devices that have shifted.
                    </p>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Sterilization
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Permanent birth control procedures performed with minimally invasive techniques.
                    </p>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e3db] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">healing</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#181611] text-lg font-bold font-serif leading-tight">
                      Adhesion Removal
                    </h3>
                    <p className="text-[#897f61] text-sm leading-normal">
                      Clearing scar tissue (Asherman's syndrome) to restore uterine function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-16 bg-white">
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
            <div className="px-4 mb-10">
              <h2 className="text-[#181611] text-3xl md:text-4xl font-serif font-medium leading-tight mb-4">
                Advantages of This Insightful Procedure
              </h2>
              <p className="text-[#4a4a4a]">
                Why patients and doctors prefer hysteroscopy for uterine care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {/* Benefit 1 */}
              <div className="relative overflow-hidden rounded-2xl bg-[#fbf9f4] p-8 group hover:bg-[#f5f0e6] transition-colors">
                <div className="mb-4 text-sage">
                  <span className="material-symbols-outlined text-4xl">visibility</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#181611] mb-2">Precise Diagnosis</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Direct visualization allows Dr. Smit Bharat Solanki to see exactly what is happening, leading to more
                  accurate diagnoses than ultrasound alone.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="relative overflow-hidden rounded-2xl bg-[#fbf9f4] p-8 group hover:bg-[#f5f0e6] transition-colors">
                <div className="mb-4 text-sage">
                  <span className="material-symbols-outlined text-4xl">do_not_touch</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#181611] mb-2">
                  Minimally Invasive
                </h3>
                <p className="text-sm text-[#4a4a4a]">
                  No external incisions are made. Access is gained gently through natural pathways,
                  preserving the body's integrity.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="relative overflow-hidden rounded-2xl bg-[#fbf9f4] p-8 group hover:bg-[#f5f0e6] transition-colors">
                <div className="mb-4 text-sage">
                  <span className="material-symbols-outlined text-4xl">bed</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#181611] mb-2">Quick Recovery</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Most procedures are outpatient. Patients typically return home the same day with
                  minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Smit Bharat Solanki Expertise */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-16 bg-background-light">
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
            <div className="bg-gradient-to-br from-[#221d10] to-[#3a321b] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-10 items-center shadow-2xl relative overflow-hidden">
              {/* Decor element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex-1 z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-6 text-primary">
                  Dr. Smit Bharat Solanki's Gentle &amp; Expert Hysteroscopy
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
                  "My goal is to provide clarity and healing with the gentlest touch possible.
                  Hysteroscopy allows us to treat the uterus without major surgery, preserving its
                  health and your peace of mind."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary"></div>
                  <span className="font-serif italic text-primary">Golden Hour Healing</span>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center z-10">
                <div className="size-48 md:size-56 rounded-full border-4 border-primary/30 p-1">
                  <div
                    className="w-full h-full rounded-full overflow-hidden bg-white/10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB08VxUvV0Xhxixf2Msr184lQmZ7ycCShnMllNDXxYUSNE64wOE99WWEy_tvrp4QJJz31vbT_XN3_1k11cmkW8CKn4KYX3Ac5-9M6WxBYP39J7r2mmcyC2WNARL_zDpdByf28qAf1BCdTqGtmqegmjIT0MxRev9zySYEnDLiFY_8OozwJIpUwLh02vdGPrAPzRdubztDd7wvD5l-m-Q0ytq2A2pf10TSTRatyKq1BQEZAI1sJpr7ez691gRC7zMHZsx_awQAdjkCg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-20 bg-white">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 text-center">
            <div className="flex flex-col gap-6 items-center">
              <div className="size-16 rounded-full bg-primary/20 text-primary-dark flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-4xl">spa</span>
              </div>
              <h2 className="text-[#181611] text-3xl md:text-5xl font-serif font-bold leading-tight">
                Seek clarity for your uterine health concerns.
              </h2>
              <p className="text-[#4a4a4a] text-lg">
                Take the first step towards a healthier tomorrow in a safe, warm environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-gradient-to-r from-primary to-[#e5b320] text-[#181611] text-lg font-bold leading-normal shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                  <span className="material-symbols-outlined">calendar_month</span>
                  Book a Consultation
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl h-14 px-8 border-2 border-sage text-sage-dark text-lg font-semibold leading-normal hover:bg-sage/5 transition-all w-full sm:w-auto">
                  <span className="material-symbols-outlined">call</span>
                  Speak with Care Coordinator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
