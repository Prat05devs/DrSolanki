"use client";

import Footer from "@/components/global/Footer";

export default function SupportCirclePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Main Content */}
      <main className="flex flex-col min-h-screen">
        <section className="relative w-full bg-[#F5F2EB] py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
          {/* Background Blurs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DCC5]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D9CBAE]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="max-w-[1100px] mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <div className="flex items-center gap-2 mb-4 bg-white/60 border border-white px-4 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
                <span className="material-symbols-outlined text-[#D98E5F] text-lg">home_health</span>
                <span className="text-[#2D241E]/80 text-xs font-bold uppercase tracking-wider">
                  A Safe Haven for Healing
                </span>
              </div>
              <h1 className="text-[#2D241E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                The Support Circle
              </h1>
              <p className="text-[#4A4036] text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                Healing starts at home. We've created a sanctuary of resources to guide partners and families through the journey of care.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
              {/* Partner Card */}
              <div className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden paper-shadow border border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-72 w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 saturate-[0.95] contrast-[1.05]"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJAF3mqZEGHQ9RFMvcJRk_jNeoqM5gpexU83aMnaKMZMPoLIwJ3HoWbF4Rstyvw_sZ8yJiz-Xhmolilcw-3-KusNbWAHw-AHTvhl1a-DUbOVS8ENbWlM2sGfNgTUiQ8diKDcD2EoDVfCtxYKTKIwNIV4Hv14-CkjRPUmXrzcMeiJTrWr8cJwCqm8e2Iq3H3V_86RauF6NBe478SrgRhhR-XdC7KI7oCrVBJcVi45uvhgALje3ItdfbC01nVVi3Z5ANM4yupUODlQ')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <span className="bg-white/90 text-[#2D241E] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#D98E5F]">favorite</span>
                      For Partners
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-[#2D241E] text-2xl font-bold mb-3">Her Partner in Healing</h3>
                  <p className="text-[#4A4036] mb-6 leading-relaxed">
                    {/* TODO: Add partner support guide content from single_source_of_truth.md */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="h-px w-full bg-[#E6DCCA] mb-6"></div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F]">
                        <span className="material-symbols-outlined text-lg">local_cafe</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-sm pt-0.5">Small gestures that heal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F]">
                        <span className="material-symbols-outlined text-lg">psychology_alt</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-sm pt-0.5">
                        Understanding her emotional shifts
                      </span>
                    </li>
                  </ul>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#2D241E] text-white h-12 px-6 rounded-full font-bold text-sm hover:bg-[#D98E5F] transition-colors group/btn">
                    <span>Read the Husband's Guide</span>
                    <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Family Card */}
              <div className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden paper-shadow border border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-72 w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 saturate-[0.95] contrast-[1.05]"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnYyunYNybH0AEx8yXE0QRfTNN0jkYq-K5RIobbfaM7FCpTm9CcpfuHGMHNnc9gG5-Iu0Z-oYOhH9FxUh3Ler8-FyrEb_nUUvtiHLkQK_Kg8AZvNcIzhj_6OvvmlFiARib0MXwumAh7I5nubyzS0YDWb8a6UQIZGfql06Mh_0onDmqsuiilmcBHfQNLRD56_fcErUDCb_ieCBSrv__4Wz6vOHZ-8zN3ljOXqtQEQ6OWiOjQKkfObN32IMrFLv6PdgXWXgVp77COw')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-5 left-6">
                    <span className="bg-white/90 text-[#2D241E] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#D98E5F]">diversity_1</span>
                      For The Family
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-[#2D241E] text-2xl font-bold mb-3">Peace of Mind for the Family</h3>
                  <p className="text-[#4A4036] mb-6 leading-relaxed">
                    {/* TODO: Add family support guide content from single_source_of_truth.md */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="h-px w-full bg-[#E6DCCA] mb-6"></div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F]">
                        <span className="material-symbols-outlined text-lg">security</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-sm pt-0.5">
                        Safety protocols explained for elders
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F]">
                        <span className="material-symbols-outlined text-lg">spa</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-sm pt-0.5">
                        Why this is the safest choice
                      </span>
                    </li>
                  </ul>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#2D241E] text-white h-12 px-6 rounded-full font-bold text-sm hover:bg-[#D98E5F] transition-colors group/btn">
                    <span>Watch Family Video</span>
                    <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Write a Note Section */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative bg-[#FDFBF7] rounded-xl p-8 md:p-12 paper-shadow border border-[#E6DCCA] rotate-1 hover:rotate-0 transition-transform duration-500 origin-center">
                <div className="absolute inset-0 opacity-10 paper-lines pointer-events-none rounded-xl"></div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#F0E6D2]/80 rotate-1 shadow-sm backdrop-blur-sm z-20"></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center mb-8">
                    <h3 className="text-3xl text-[#2D241E] font-serif font-medium mb-3 italic">
                      Write a note to Dr. Smit
                    </h3>
                    <p className="text-[#4A4036] text-sm">
                      Have a quiet worry or a personal question? Write it down here. Dr. Smit Bharat Solanki reads every note personally.
                    </p>
                  </div>
                  <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                      <div className="relative group">
                        <textarea
                          className="w-full bg-transparent border-b-2 border-[#E6DCCA] text-[#2D241E] placeholder-[#A89F91] focus:outline-none focus:border-[#D98E5F] transition-colors resize-none py-2 text-lg leading-loose"
                          placeholder="Dear Doctor..."
                          rows={3}
                        ></textarea>
                      </div>
                      <div className="relative group">
                        <input
                          className="w-full bg-transparent border-b-2 border-[#E6DCCA] text-[#2D241E] placeholder-[#A89F91] focus:outline-none focus:border-[#D98E5F] transition-colors py-2 text-sm"
                          placeholder="Your email (optional, for reply)"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#8C8479]">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <span>Private &amp; Secure</span>
                      </div>
                      <button
                        className="bg-[#D98E5F] hover:bg-[#c57d4f] text-white rounded-lg px-6 py-2.5 font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                        type="submit"
                      >
                        <span>Send Note</span>
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
