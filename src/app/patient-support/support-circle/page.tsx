"use client";

import { useEffect } from "react";
import Footer from "@/components/global/Footer";
import Chatbot from "@/components/sections/support-circle/Chatbot";

export default function SupportCirclePage() {
  useEffect(() => {
    // Handle smooth scroll to chatbot section when hash is present
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#ask-your-questions") {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const element = document.getElementById("ask-your-questions");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Main Content */}
      <main className="flex flex-col min-h-screen">
        <section className="relative w-full bg-[#F5F2EB] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
          {/* Background Blurs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#E8DCC5]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-[#D9CBAE]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="max-w-[1100px] mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-14">
              
              <h1 className="text-[#2D241E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 px-2">
                The Support Circle
              </h1>
              <p className="text-[#4A4036] text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed px-4">
                Healing starts at home. We've created a sanctuary of resources to guide partners and families through the journey of care.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
              {/* Partner Card */}
              <div className="group relative flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden paper-shadow border border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-56 sm:h-64 md:h-72 w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 saturate-[0.95] contrast-[1.05]"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJAF3mqZEGHQ9RFMvcJRk_jNeoqM5gpexU83aMnaKMZMPoLIwJ3HoWbF4Rstyvw_sZ8yJiz-Xhmolilcw-3-KusNbWAHw-AHTvhl1a-DUbOVS8ENbWlM2sGfNgTUiQ8diKDcD2EoDVfCtxYKTKIwNIV4Hv14-CkjRPUmXrzcMeiJTrWr8cJwCqm8e2Iq3H3V_86RauF6NBe478SrgRhhR-XdC7KI7oCrVBJcVi45uvhgALje3ItdfbC01nVVi3Z5ANM4yupUODlQ')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                    <span className="bg-white/90 text-[#2D241E] px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs sm:text-sm text-[#D98E5F]">favorite</span>
                      For Partners
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-8">
                  <h3 className="text-[#2D241E] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Her Partner in Healing</h3>
                  <div className="h-px w-full bg-[#E6DCCA] mb-4 sm:mb-6"></div>
                  <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8 flex-1">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F] flex-shrink-0">
                        <span className="material-symbols-outlined text-base sm:text-lg">local_cafe</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-xs sm:text-sm pt-0.5">Small gestures that heal</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F] flex-shrink-0">
                        <span className="material-symbols-outlined text-base sm:text-lg">psychology_alt</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-xs sm:text-sm pt-0.5">
                        Understanding her emotional shifts
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Family Card */}
              <div className="group relative flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden paper-shadow border border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-56 sm:h-64 md:h-72 w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 saturate-[0.95] contrast-[1.05]"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnYyunYNybH0AEx8yXE0QRfTNN0jkYq-K5RIobbfaM7FCpTm9CcpfuHGMHNnc9gG5-Iu0Z-oYOhH9FxUh3Ler8-FyrEb_nUUvtiHLkQK_Kg8AZvNcIzhj_6OvvmlFiARib0MXwumAh7I5nubyzS0YDWb8a6UQIZGfql06Mh_0onDmqsuiilmcBHfQNLRD56_fcErUDCb_ieCBSrv__4Wz6vOHZ-8zN3ljOXqtQEQ6OWiOjQKkfObN32IMrFLv6PdgXWXgVp77COw')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6">
                    <span className="bg-white/90 text-[#2D241E] px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs sm:text-sm text-[#D98E5F]">diversity_1</span>
                      For The Family
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-8">
                  <h3 className="text-[#2D241E] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Peace of Mind for the Family</h3>
                  <div className="h-px w-full bg-[#E6DCCA] mb-4 sm:mb-6"></div>
                  <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8 flex-1">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F] flex-shrink-0">
                        <span className="material-symbols-outlined text-base sm:text-lg">security</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-xs sm:text-sm pt-0.5">
                        Safety protocols explained for elders
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-[#F5F2EB] p-1 rounded-full text-[#D98E5F] flex-shrink-0">
                        <span className="material-symbols-outlined text-base sm:text-lg">spa</span>
                      </div>
                      <span className="text-[#2D241E] font-medium text-xs sm:text-sm pt-0.5">
                        Why this is the safest choice
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Chatbot Section */}
            <div id="ask-your-questions" className="w-full max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 scroll-mt-20 sm:scroll-mt-24 px-2 sm:px-0">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2D241E] font-bold mb-3 sm:mb-4 px-2">
                  Ask Your Questions
                </h2>
                <p className="text-[#4A4036] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                  Whether you're a partner, parent, or family member, get instant answers to common questions about care, recovery, and support.
                </p>
              </div>
              <Chatbot />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
