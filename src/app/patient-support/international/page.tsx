import Footer from "@/components/global/Footer";

export default function InternationalPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-[var(--font-manrope)] selection:bg-[#f0c442]/30">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-8 lg:px-20 lg:py-16">
          <div
            className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl h-[550px] lg:h-[650px] relative"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnHv_61aRpV6V3dDR9zv88gXzCoLcyVsors4NVxq7fTb2l51Zd-dYrkucTrZop9oTuA5Asm30Xe107V3C1Nbm1F52aZVcw4sPIleenjquoNjQVvHNcPTlNQHyIZlR_LCK7qAbD_qAV1Mf7-zXF9jtnwiGWvMAmPe6XioQ1tYDE4ZvxM2trwLbF9VatsWUzj_8z7vgYl1gNEQH_OOJYB3xFuBKAhGy6f3x0W6O-I6xlZ1gYK56pJhot89bef4BgznHoEy_xCb_mEA')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9886E]/40 via-transparent to-[#f0c442]/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center z-10">
              <div className="bg-white/15 backdrop-blur-lg p-8 lg:p-14 rounded-3xl border border-white/30 max-w-[850px] shadow-glass flex flex-col items-center">
                <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest text-white uppercase bg-white/20 rounded-full border border-white/20 backdrop-blur-sm">
                  International Concierge
                </span>
                <h1 className="text-white text-4xl font-[var(--font-playfair)] font-medium leading-tight tracking-tight lg:text-6xl mb-6 drop-shadow-lg">
                  Your Global Health Journey, <br />
                  <span className="italic text-primary-100 font-[var(--font-playfair)]">Simplified.</span>
                </h1>
                <h2 className="text-white/90 text-lg lg:text-xl font-light leading-relaxed max-w-[600px] mx-auto drop-shadow-md">
                  World-class care for our international patients, with compassionate support every step of the way.
                </h2>
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                  <button className="flex items-center justify-center rounded-xl h-14 px-8 bg-gradient-to-r from-[#f0c442] to-[#E6C86E] text-[#181611] text-base font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Start Your Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-20 lg:px-20 bg-[#fdfbf7] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#8BA88E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#C9886E]/10 rounded-full blur-3xl"></div>
          <div className="mx-auto max-w-[1200px] relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#C9886E] uppercase bg-[#C9886E]/10 rounded-full">
                Dedicated Services
              </span>
              <h2 className="text-[#181611] text-3xl lg:text-5xl font-[var(--font-playfair)] mb-4">
                A Sanctuary of Support
              </h2>
              <p className="text-[#897f61] max-w-2xl mx-auto">
                We handle the logistics so you can focus on healing. Our team acts as your personal concierge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white/50 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-soft hover:bg-white/80 transition-all duration-300 group">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-[#f0c442]/20 to-[#f0c442]/5 flex items-center justify-center text-[#f0c442] mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">support_agent</span>
                </div>
                <h3 className="text-2xl font-[var(--font-playfair)] text-[#181611] mb-3">Medical Concierge</h3>
                <p className="text-[#897f61] leading-relaxed text-sm">
                  Dedicated coordinator for all your needs: appointments, travel logistics, accommodation, and local
                  assistance.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white/50 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-soft hover:bg-white/80 transition-all duration-300 group">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-[#8BA88E]/30 to-[#8BA88E]/10 flex items-center justify-center text-[#8BA88E] mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">flight_takeoff</span>
                </div>
                <h3 className="text-2xl font-[var(--font-playfair)] text-[#181611] mb-3">
                  Visa &amp; Travel Support
                </h3>
                <p className="text-[#897f61] leading-relaxed text-sm">
                  Guidance on medical visas, seamless airport transfers, and booking comfortable lodging options.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white/50 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-soft hover:bg-white/80 transition-all duration-300 group">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-[#C9886E]/30 to-[#C9886E]/10 flex items-center justify-center text-[#C9886E] mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">videocam</span>
                </div>
                <h3 className="text-2xl font-[var(--font-playfair)] text-[#181611] mb-3">
                  Remote Consultations
                </h3>
                <p className="text-[#897f61] leading-relaxed text-sm">
                  Initial video consultations for convenient, preliminary assessments from your home country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 py-20 lg:px-20 bg-[#F9F5EB] overflow-hidden relative">
          <div className="mx-auto max-w-[1000px] relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#8BA88E] uppercase bg-[#8BA88E]/10 rounded-full">
                Your Flow
              </span>
              <h2 className="text-[#181611] text-3xl lg:text-5xl font-[var(--font-playfair)] mb-4">
                The Path to Healing
              </h2>
              <p className="text-[#897f61] max-w-lg mx-auto">
                A seamless journey curated for your comfort and peace of mind.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8BA88E] via-[#C9886E] to-[#8BA88E] opacity-40 md:-ml-[1px]"></div>
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-[#e6e3db] order-2 md:order-1 text-right hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-xl font-[var(--font-playfair)] text-[#C9886E] mb-2">
                      01. Online Inquiry
                    </h4>
                    <p className="text-sm text-[#897f61]">
                      Connect with us via video consult to discuss your history.
                    </p>
                  </div>
                  <div className="z-10 size-14 rounded-full bg-[#fdfbf7] border-4 border-[#8BA88E] flex items-center justify-center text-[#8BA88E] font-bold text-xl order-1 md:order-2 shadow-md shrink-0 absolute left-0 md:relative md:left-auto">
                    <span className="material-symbols-outlined">laptop_mac</span>
                  </div>
                  <div className="md:w-[45%] order-3 md:order-3 pl-16 md:pl-0"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="md:w-[45%] order-2 md:order-1 pl-16 md:pl-0"></div>
                  <div className="z-10 size-14 rounded-full bg-[#fdfbf7] border-4 border-[#C9886E] flex items-center justify-center text-[#C9886E] font-bold text-xl order-1 md:order-2 shadow-md shrink-0 absolute left-0 md:relative md:left-auto">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-[#e6e3db] order-3 md:order-3 text-left hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-xl font-[var(--font-playfair)] text-[#8BA88E] mb-2">
                      02. Treatment Plan
                    </h4>
                    <p className="text-sm text-[#897f61]">
                      Receive a personalized care plan &amp; comprehensive cost estimate.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-[#e6e3db] order-2 md:order-1 text-right hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-xl font-[var(--font-playfair)] text-[#C9886E] mb-2">
                      03. Visa &amp; Travel
                    </h4>
                    <p className="text-sm text-[#897f61]">
                      We assist with medical visas and arrange your travel logistics.
                    </p>
                  </div>
                  <div className="z-10 size-14 rounded-full bg-[#fdfbf7] border-4 border-[#8BA88E] flex items-center justify-center text-[#8BA88E] font-bold text-xl order-1 md:order-2 shadow-md shrink-0 absolute left-0 md:relative md:left-auto">
                    <span className="material-symbols-outlined">airplane_ticket</span>
                  </div>
                  <div className="md:w-[45%] order-3 md:order-3 pl-16 md:pl-0"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="md:w-[45%] order-2 md:order-1 pl-16 md:pl-0"></div>
                  <div className="z-10 size-14 rounded-full bg-[#fdfbf7] border-4 border-[#C9886E] flex items-center justify-center text-[#C9886E] font-bold text-xl order-1 md:order-2 shadow-md shrink-0 absolute left-0 md:relative md:left-auto">
                    <span className="material-symbols-outlined">meeting_room</span>
                  </div>
                  <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-[#e6e3db] order-3 md:order-3 text-left hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-xl font-[var(--font-playfair)] text-[#8BA88E] mb-2">
                      04. Arrival &amp; Welcome
                    </h4>
                    <p className="text-sm text-[#897f61]">
                      Airport pickup and direct comfortable transfer to the hospital.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-[#e6e3db] order-2 md:order-1 text-right hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-xl font-[var(--font-playfair)] text-[#C9886E] mb-2">
                      05. Post-Treatment
                    </h4>
                    <p className="text-sm text-[#897f61]">
                      Continuous support and follow-ups even after you return home.
                    </p>
                  </div>
                  <div className="z-10 size-14 rounded-full bg-[#fdfbf7] border-4 border-[#8BA88E] flex items-center justify-center text-[#8BA88E] font-bold text-xl order-1 md:order-2 shadow-md shrink-0 absolute left-0 md:relative md:left-auto">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <div className="md:w-[45%] order-3 md:order-3 pl-16 md:pl-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-4 py-20 lg:px-20 bg-[#fdfbf7]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-[#181611] text-3xl lg:text-5xl font-[var(--font-playfair)] mb-8 leading-tight">
                  Global Trust, <br />
                  <span className="text-[#f0c442] italic">Local Expertise.</span>
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-[#C9886E]/10 flex items-center justify-center text-[#C9886E] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#181611]">Pioneering Robotic Surgeon</h4>
                      <p className="text-[#897f61] text-sm">State-of-the-art technology for minimal downtime.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-[#8BA88E]/10 flex items-center justify-center text-[#8BA88E] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">child_care</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#181611]">Uterus Transplant Authority</h4>
                      <p className="text-[#897f61] text-sm">World-renowned expertise in complex procedures.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-[#f0c442]/10 flex items-center justify-center text-[#f0c442] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">translate</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#181611]">Multilingual Support Staff</h4>
                      <p className="text-[#897f61] text-sm">Removing language barriers for better care.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-[#C9886E]/10 flex items-center justify-center text-[#C9886E] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">savings</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#181611]">Cost-Effective World-Class Care</h4>
                      <p className="text-[#897f61] text-sm">Superior medical outcomes at a fraction of the cost.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-[#8BA88E]/10 flex items-center justify-center text-[#8BA88E] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#181611]">Patient Privacy Assured</h4>
                      <p className="text-[#897f61] text-sm">Strict confidentiality protocols for all patients.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[500px] w-full rounded-tr-[100px] rounded-bl-[100px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    alt="Dr Smit Portrait"
                    className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbKJxfxCMW6JzcvXz3fZomTfN3CgyHfSfSZ6TpS1kzOS8KtKPbN3lbkYVYqhi9eWoZs9ZQByCnsqLm0OnakdFekPifh8XrZnWCk_IbFH03qrz0VdFrOL4WogV1hlsK9SFPwhIUMq4ovdoTkGv5lAX-ssweBEhRQUd5swD73Feb4ctIOkNfiodk_Ez4hvFoKvQmIcNlhXFF4Y2UPHXzuhuB_N3Pfxh7Ubutg0rGlWTzfapAqLttXJ_D8WDZ2tT8Pmoh_zTT-JcMLw"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#f0c442] shadow-lg">
                    <p className="text-[#181611] text-lg font-[var(--font-playfair)] italic leading-snug">
                      "I believe healing begins the moment you feel understood, regardless of where you call home."
                    </p>
                    <p className="text-[#C9886E] font-bold mt-2 text-sm tracking-wide uppercase">- Dr. Smit Bharat Solanki</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 py-20 lg:px-20 bg-gradient-to-t from-[#F9F5EB] to-[#fdfbf7]">
          <div className="mx-auto max-w-[1200px] text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#8BA88E] uppercase bg-[#8BA88E]/10 rounded-full">
              Patient Stories
            </span>
            <h2 className="text-[#181611] text-3xl lg:text-4xl font-[var(--font-playfair)] mb-12">
              Healing Across Borders
            </h2>
            <div className="flex flex-nowrap overflow-x-auto gap-6 pb-12 snap-x scrollbar-hide px-4 lg:px-0">
              {/* Testimonial 1 */}
              <div className="snap-center shrink-0 w-[350px] bg-white rounded-2xl p-8 border border-white/50 shadow-glass relative hover:shadow-soft transition-shadow">
                <div className="absolute -top-4 right-8 text-4xl">🇬🇧</div>
                <div className="text-[#C9886E] mb-4">
                  <span className="material-symbols-outlined text-[32px]">format_quote</span>
                </div>
                <p className="text-[#897f61] italic mb-6 leading-relaxed text-sm">
                  "The level of care I received was unmatched. Dr. Smit Bharat Solanki's team made me feel like family despite being
                  thousands of miles from home."
                </p>
                <div className="flex items-center gap-4 border-t border-dashed border-gray-200 pt-4">
                  <div className="size-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-[#f0c442]/20">
                    <img
                      alt="Sarah"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv_Tjv3DZUCuJ5ieT4UDLnc0laP4saOwQzBeMXisn7mk8WrbijEoN9BrnF7i8Sn_N5_rx4GmELspXQCqZf1zv24CYWUoTBI6c91Vr-vZ31hT73oaYi4q7jyatD-q23ZXzB7ZT6Ctmn3fKn0II7UAjX1LHqCisI8Vzk4G7QS-uyr3BbpfbY50jLfwTtSwOpOf4DIy3aLzHeJnlI5YOjOQuttArs-MLElhzpM2nSYA5tD0sQpY56wjhQr3RMIgk93mdk51uM2vzmiQ"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#181611] font-[var(--font-playfair)]">Sarah Jenkins</p>
                    <p className="text-xs text-[#8BA88E] font-medium">London, United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="snap-center shrink-0 w-[350px] bg-white rounded-2xl p-8 border border-white/50 shadow-glass relative hover:shadow-soft transition-shadow">
                <div className="absolute -top-4 right-8 text-4xl">🇦🇪</div>
                <div className="text-[#C9886E] mb-4">
                  <span className="material-symbols-outlined text-[32px]">format_quote</span>
                </div>
                <p className="text-[#897f61] italic mb-6 leading-relaxed text-sm">
                  "From visa processing to my recovery suite, everything was handled perfectly. I recovered faster than
                  I expected."
                </p>
                <div className="flex items-center gap-4 border-t border-dashed border-gray-200 pt-4">
                  <div className="size-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-[#f0c442]/20">
                    <img
                      alt="Ahmed"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Br7NicMd5WLosobDbZ7RQuD-urlr1g8khKezxoL1YBnsbduLfvryLHBlw6NMKNhMqw0t1eYXFJtxjSSHEqLf1VHntpQ9anbe_LytWZHnVn0qTc48vzxlnQhLADZvkWrA_qTnqPTru2NZ1YsQ252uAWuL-4uXJzLIBB5pdv_vaHHktgx0qiUdCj5CFjfpH50UEdFpK4elO3eswfTMgfGwn1sYA2WuHhIM--EdiyWZXt0l0MijZLp-F1xlYlIzXo5MQnpEk9IuZQ"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#181611] font-[var(--font-playfair)]">Ahmed Khalil</p>
                    <p className="text-xs text-[#8BA88E] font-medium">Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="snap-center shrink-0 w-[350px] bg-white rounded-2xl p-8 border border-white/50 shadow-glass relative hover:shadow-soft transition-shadow">
                <div className="absolute -top-4 right-8 text-4xl">🇺🇸</div>
                <div className="text-[#C9886E] mb-4">
                  <span className="material-symbols-outlined text-[32px]">format_quote</span>
                </div>
                <p className="text-[#897f61] italic mb-6 leading-relaxed text-sm">
                  "Dr. Smit Bharat Solanki is truly a miracle worker. The robotic surgery was minimally invasive, and I was back on my
                  feet in days."
                </p>
                <div className="flex items-center gap-4 border-t border-dashed border-gray-200 pt-4">
                  <div className="size-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-[#f0c442]/20">
                    <img
                      alt="Priya"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEoxClWHkxmHdO3uCGy9V2IFxIUBAi-CTNHSllQIcwD91LAf0DPw1QwpqAq7YrRlCJNgbfkbAbZnLQap-mEEVy9R66k_ydmiQDxle8XuAk-LFJbGBOMNZKlLiWKrDGrnCfsPWOLWYmZigALNFcJta7jtgIet-aMU9L6GQTU1T_oluK_sy7T_p24UcZ5OnM-_k1ERetHHQeB_BdeQ7Lvct6IGkH5hDTLuS-K6ToEr_m6mMb-ZAfktwzCez6JrJTmz_GSIpYZ8iYfg"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#181611] font-[var(--font-playfair)]">Priya Sharma</p>
                    <p className="text-xs text-[#8BA88E] font-medium">California, USA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="snap-center shrink-0 w-[350px] bg-white rounded-2xl p-8 border border-white/50 shadow-glass relative hover:shadow-soft transition-shadow">
                <div className="absolute -top-4 right-8 text-4xl">🇦🇺</div>
                <div className="text-[#C9886E] mb-4">
                  <span className="material-symbols-outlined text-[32px]">format_quote</span>
                </div>
                <p className="text-[#897f61] italic mb-6 leading-relaxed text-sm">
                  "A safe haven indeed. The staff respected my cultural needs and dietary restrictions. Highly
                  recommended."
                </p>
                <div className="flex items-center gap-4 border-t border-dashed border-gray-200 pt-4">
                  <div className="size-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-[#f0c442]/20">
                    <img
                      alt="David"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6n4kNBuxZbe5yWGxQN_XpHh6Zot2u4OU4zbQQk_iQB20SGSn3gW2hEDWQBunkZoz1vxlWbbu0cZo4dPkfRRTBYczYZRQzaH1kYAHdiwX3dVHfUt7rVHre08vzHKJR-yzMyUnNRcwdW-NPuNo3BsKGwB63nLiMJAQ-XIWr25CKEjHBzGfz153Ip1hjRWAdNsZ49Ll12H1uHeMNvofNfw4FE_wVFcZdiekJMrIt4aOUBGS4qJTY1bSTHJ0NAU-Eb47x3iknBRMpXA"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#181611] font-[var(--font-playfair)]">David Miller</p>
                    <p className="text-xs text-[#8BA88E] font-medium">Sydney, Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 lg:px-20 bg-white border-t border-[#f4f3f0]">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="size-16 mx-auto mb-6 rounded-full bg-[#f0c442]/10 flex items-center justify-center text-[#f0c442]">
              <span className="material-symbols-outlined text-3xl">local_florist</span>
            </div>
            <h2 className="text-[#181611] text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold mb-6 tracking-tight">
              Begin Your Journey to Healing
            </h2>
            <p className="text-[#897f61] mb-10 text-lg">
              We are here to answer your questions and guide you towards the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="flex items-center justify-center rounded-xl h-14 px-8 bg-gradient-to-r from-[#f0c442] to-[#E6C86E] text-[#181611] text-base font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <span className="text-xl mr-2">✉️</span> Send an International Inquiry
              </button>
              <button className="flex items-center justify-center rounded-xl h-14 px-8 border-2 border-[#8BA88E] text-[#8BA88E] hover:bg-[#8BA88E] hover:text-white text-base font-bold transition-all transform hover:-translate-y-1">
                <span className="text-xl mr-2">📞</span> Request a Video Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
