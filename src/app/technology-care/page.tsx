import Footer from "@/components/global/Footer";

export default function TechnologyCarePage() {
  return (
    <div className="tech-scrollbar overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex h-auto min-h-[700px] w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
              <div className="h-full">
                <div className="h-full flex flex-col">
                  <div
                    className="flex flex-1 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-16 pt-32 md:px-16 relative overflow-hidden shadow-xl"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(33, 20, 17, 0) 0%, rgba(33, 20, 17, 0.4) 50%, rgba(33, 20, 17, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoLFRExDHXKk0VRRGft1_kNWBN6xz3c5SqVFFtPTl_UyHvke2cMpKWOeRjhQ0XO_qsn1-ujG0fU1ItvFV1ylPG3XOp3UVqmk-9tVJPj-cxkfHzyxEK7nPnEqXqvKcoENNtGy9vOHObdf2moBkC3W7jvSrNi6R-j0RFj38Y1ojGbNu4MVe5yrlw36nmpbcHK5JQlybQU4KC45jzsWivEtgPts1_PX-PWxFwx6pdZrdop4lOJTphBe8FJhUkFIVIk5Xp6Afivzu-bw")`
                    }}
                  >
                    <div className="absolute inset-0 bg-[#df4320]/10 mix-blend-overlay pointer-events-none"></div>
                    <div className="flex flex-col gap-6 text-left max-w-3xl relative z-10">
                      <span className="bg-[#df4320]/90 text-white w-fit px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                        The Interactive Anatomy Approach
                      </span>
                      <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                        Behind the Precision:<br />
                        The Technology That Transforms Lives.
                      </h1>
                      <h2 className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-4 border-[#D4AF37] pl-6">
                        Explore the advanced robotic and laser systems Dr. Smit Bharat Solanki uses to ensure safer, faster, and more effective healing journeys.
                      </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 relative z-10 w-full sm:w-auto">
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-[#df4320] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#b93518] transition-colors shadow-lg">
                        <span className="truncate">Scroll to Explore</span>
                        <span className="material-symbols-outlined ml-2">arrow_downward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Da Vinci Scrolly Section */}
      <section className="bg-[#FFFBF7] py-10 relative">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-row max-w-[1280px] flex-1 gap-8 relative">
              {/* Sticky Visual - Desktop Only */}
              <div className="hidden lg:block w-1/2 relative">
                <div className="sticky top-[100px] h-[calc(100vh-120px)] flex items-center justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 relative w-full h-full">
                    <img
                      alt="Close up of Da Vinci robotic surgical instruments with precision focus"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA"
                    />
                    {/* Hotspot 1 */}
                    <div className="hotspot absolute top-[40%] left-[30%] z-20 cursor-pointer group">
                      <div className="hotspot-dot"></div>
                      <div className="tooltip absolute left-8 top-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur text-sm p-3 rounded-lg shadow-xl opacity-0 invisible transition-all duration-300 transform translate-y-2 border border-[#df4320]/20">
                        <p className="font-bold text-[#df4320]">EndoWrist® Instruments</p>
                        <p className="text-xs mt-1 text-[#171211]">
                          Bend and rotate far greater than the human hand.
                        </p>
                      </div>
                    </div>
                    {/* Hotspot 2 */}
                    <div className="hotspot absolute top-[60%] right-[35%] z-20 cursor-pointer group">
                      <div className="hotspot-dot"></div>
                      <div className="tooltip absolute right-8 top-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur text-sm p-3 rounded-lg shadow-xl opacity-0 invisible transition-all duration-300 transform translate-y-2 border border-[#df4320]/20">
                        <p className="font-bold text-[#df4320]">Precision Control</p>
                        <p className="text-xs mt-1 text-[#171211]">
                          Tremor filtration technology for accuracy within 1mm.
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-6 w-full text-center pointer-events-none">
                      <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
                        Hover over pulsing dots to explore features
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Content */}
              <div className="w-full lg:w-1/2 relative z-10 pl-0 lg:pl-10">
                {/* Block 1 */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8 opacity-95">
                  <span className="text-[#df4320] font-bold uppercase tracking-wider text-sm mb-4">
                    Robotic Surgery
                  </span>
                  <h2 className="text-[#171211] text-4xl md:text-5xl font-bold leading-tight mb-6">
                    The Da Vinci® Robot:<br />
                    Where Human Skill Meets Unrivaled Accuracy.
                  </h2>
                  <p className="text-[#876a64] text-xl leading-relaxed">
                    Imagine a surgeon's hands, but smaller, steadier, and able to reach where no human hand can. The Da Vinci system isn't a replacement for the surgeon—it's an extension of their expertise, translating every movement into micro-precise actions.
                  </p>
                  <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mt-8 shadow-lg relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA"
                      alt="Da Vinci Robot"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-lg text-sm">
                        Interactive view available on desktop
                      </span>
                    </div>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#D4AF37]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                        <span className="material-symbols-outlined text-3xl">visibility</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#171211]">Immersive 3D HD Vision</h3>
                    </div>
                    <p className="text-lg text-[#876a64]">
                      Dr. Smit Bharat Solanki sees the surgical site with crystal-clear depth and magnification. This enhanced visualization allows for the identification of vital structures that might be missed with the naked eye, ensuring safer tissue preservation.
                    </p>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#df4320]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#df4320]/10 rounded-full text-[#df4320]">
                        <span className="material-symbols-outlined text-3xl">healing</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#171211]">Tiny Incisions, Faster Recovery</h3>
                    </div>
                    <p className="text-lg text-[#876a64]">
                      Because the instruments are so small, surgery is performed through incisions just a few millimeters long. For you, this means significantly less pain, minimal scarring, a lower risk of infection, and a quicker return to your daily life.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 text-sm text-[#171211]">
                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                        Less blood loss
                      </li>
                      <li className="flex items-center gap-2 text-sm text-[#171211]">
                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                        Shorter hospital stay
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Block 4 - Video */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer aspect-video bg-black">
                    <div
                      className="absolute inset-0 opacity-60 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4Kf427G1IDzEJ3QGUq-_hJUMVT31a_XF02z8yABMSBEbfLnb86mjbbv6tTRxWq8Hpnd-ZbGI9b5K-pnjj59aaizfV-e6Qbpt03rvvMdvk9cZZZqnUtB-FCdFDNoUSlhMrukHe91TbnAaxQfSco0xT-EGm3C9okWF7ar1Kmzi-SLmy9V_SEiedB5REyGcADnbbUwJoyMPrw7BYZ9xT14nZNEVFDrjZLpX9ciHnWZbti6i2ZubtXB_lBqCBio5edThk2LZ_IP16Bg")`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="flex shrink-0 items-center justify-center rounded-full size-20 bg-[#df4320]/90 text-white shadow-xl hover:scale-110 transition-transform duration-300 mb-4 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                      </div>
                      <h3 className="text-white font-bold text-xl drop-shadow-md">See the Difference</h3>
                      <p className="text-white/80 text-sm mt-2 max-w-md">
                        Watch how the Da Vinci system translates Dr. Smit Bharat Solanki's hand movements into precise surgical actions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full bg-[#FFFBF7] py-10 flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#df4320]/50 to-transparent"></div>
        <span className="text-xs uppercase tracking-[0.2em] text-[#876a64]/60 font-bold">
          From Surgery to Wellness
        </span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#df4320]/50 to-transparent"></div>
      </div>

      {/* Femifine Scrolly Section (Reversed) */}
      <section className="bg-white/50 py-10 relative">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-row-reverse max-w-[1280px] flex-1 gap-8 relative">
              {/* Sticky Visual - Desktop Only */}
              <div className="hidden lg:block w-1/2 relative">
                <div className="sticky top-[100px] h-[calc(100vh-120px)] flex items-center justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-neutral-100 relative w-full h-full">
                    <img
                      alt="Sleek Femifine laser medical device in a clean spa-like room"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-10 left-10 right-10 text-white backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20">
                      <h3 className="text-2xl font-bold mb-1">Femifine™ Laser System</h3>
                      <p className="opacity-90 font-light">
                        Engineered for delicate, non-invasive tissue rejuvenation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Content */}
              <div className="w-full lg:w-1/2 relative z-10 pr-0 lg:pr-10">
                {/* Block 1 */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8 opacity-95">
                  <span className="text-[#8FA392] font-bold uppercase tracking-wider text-sm mb-4">
                    Intimate Wellness
                  </span>
                  <h2 className="text-[#171211] text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Femifine™ Laser:<br />
                    Gentle Innovation for Modern Wellness.
                  </h2>
                  <p className="text-[#876a64] text-xl leading-relaxed">
                    Not all healing requires a scalpel. The Femifine™ system represents a breakthrough in non-surgical care, using focused thermal energy to revitalize tissue, improve circulation, and restore confidence—all in a comfortable, clinical-spa setting.
                  </p>
                  <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mt-8 shadow-lg">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ"
                      alt="Femifine Laser"
                    />
                  </div>
                </div>

                {/* Block 2 - Grid Cards */}
                <div className="min-h-[80vh] flex flex-col justify-center py-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5dddc] hover:-translate-y-1 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl text-[#8FA392] mb-3">spa</span>
                      <h4 className="font-bold text-lg mb-2 text-[#171211]">Non-Surgical</h4>
                      <p className="text-sm text-[#876a64]">
                        No incisions, no anesthesia, and absolutely no downtime. Walk out and resume your day immediately.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5dddc] hover:-translate-y-1 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl text-[#8FA392] mb-3">chair</span>
                      <h4 className="font-bold text-lg mb-2 text-[#171211]">Comfort First</h4>
                      <p className="text-sm text-[#876a64]">
                        Designed with patient comfort as the priority. Most patients describe the sensation as merely warm.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5dddc] hover:-translate-y-1 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl text-[#8FA392] mb-3">schedule</span>
                      <h4 className="font-bold text-lg mb-2 text-[#171211]">Quick Sessions</h4>
                      <p className="text-sm text-[#876a64]">
                        Treatments are efficient, often taking less than 30 minutes, respecting your busy schedule.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5dddc] hover:-translate-y-1 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl text-[#8FA392] mb-3">auto_awesome</span>
                      <h4 className="font-bold text-lg mb-2 text-[#171211]">Lasting Results</h4>
                      <p className="text-sm text-[#876a64]">
                        Stimulates your body's natural collagen production for long-term improvement and rejuvenation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Robotics Section */}
      <section className="bg-[#FFFBF7] py-20 border-t border-[#8FA392]/10 relative">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-[#171211] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Beyond Robotics:<br />
                  Other Advanced Surgical Options.
                </h2>
                <p className="text-[#876a64] text-lg md:text-xl leading-relaxed">
                  Dr. Smit Bharat Solanki's commitment to minimal invasiveness extends to a range of procedures designed for faster recovery and reduced discomfort.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Laparoscopy Card */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl hover:border-[#8FA392]/50 transition-all duration-300 flex flex-col items-center text-center group">
                  <div className="size-20 bg-[#8FA392]/10 text-[#8FA392] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl">cut</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#171211] mb-3">
                    Laparoscopic Surgery:<br />
                    Keyhole Precision
                  </h3>
                  <p className="text-[#876a64] mb-8 leading-relaxed">
                    Explore minimally invasive solutions for various gynecological conditions.
                  </p>
                  <a
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 border-2 border-[#8FA392] text-[#8FA392] font-bold rounded-xl hover:bg-[#8FA392] hover:text-white transition-colors duration-300 group-hover:bg-[#8FA392] group-hover:text-white"
                    href="/technology-care/laparoscopic"
                  >
                    Learn About Laparoscopy
                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                  </a>
                </div>

                {/* Hysteroscopy Card */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl hover:border-[#8FA392]/50 transition-all duration-300 flex flex-col items-center text-center group">
                  <div className="size-20 bg-[#8FA392]/10 text-[#8FA392] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl">travel_explore</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#171211] mb-3">
                    Hysteroscopy:<br />
                    Uterine Insights
                  </h3>
                  <p className="text-[#876a64] mb-8 leading-relaxed">
                    Understand the precise procedure for diagnosing and treating conditions inside the uterus.
                  </p>
                  <a
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 border-2 border-[#8FA392] text-[#8FA392] font-bold rounded-xl hover:bg-[#8FA392] hover:text-white transition-colors duration-300 group-hover:bg-[#8FA392] group-hover:text-white"
                    href="/technology-care/hysteroscopy"
                  >
                    Learn About Hysteroscopy
                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-[#df4320]/5">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1 text-center gap-8">
              <div className="size-16 rounded-full bg-[#df4320]/10 flex items-center justify-center mx-auto text-[#df4320] ring-4 ring-[#df4320]/5">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <div>
                <h2 className="text-[#171211] text-3xl md:text-4xl font-bold mb-4">
                  Innovation for Your Tomorrow
                </h2>
                <p className="text-[#876a64] text-lg md:text-xl leading-relaxed">
                  Dr. Smit Bharat Solanki is committed to continually exploring and adopting the best global technologies. Our promise is to always bring the safest, most advanced care options home to you, ensuring your healing journey is always at the forefront of medical science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFFBF7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8FA392]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10">
              <h2 className="text-[#171211] text-4xl md:text-5xl font-bold text-center leading-tight">
                Experience the Difference of<br />
                Advanced Care.
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-gradient-to-r from-[#D4AF37] to-[#e6c766] text-white text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                  Book a Consultation
                </button>
                <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-[#8FA392] text-[#171211] text-lg font-bold hover:bg-[#8FA392] hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">call</span>
                  Speak to Coordinator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

