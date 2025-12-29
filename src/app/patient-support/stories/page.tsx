import Footer from "@/components/global/Footer";

export default function StoriesPage() {
  return (
    <div className="font-[var(--font-manrope)] antialiased overflow-x-hidden selection:bg-[#e4efe9] selection:text-[#4a4036]">
      {/* Paper Texture Background */}
      <div className="paper-texture"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#fcfbf7] min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eac6bc]/30 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e4efe9] blur-[80px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8ab098]/10 border border-[#8ab098]/20 mb-8">
                <span className="material-symbols-outlined text-[#8ab098] text-base">auto_awesome</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#8ab098]">
                  Stories of Hope
                </span>
              </div>
              <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-[#4a4036] leading-[1.1] tracking-tight mb-6">
                Every Journey a Story. <br />
                <span className="italic text-[#cd8570]">Every Story a Hope.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#7c726a] font-light max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Explore inspiring real-life experiences of healing, strength, and renewed life at Dr. Smit Bharat Solanki's Sanctuary.
                See how robotic precision meets the gentle warmth of care.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4a4036] text-white hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined">play_circle</span>
                  <span>Watch Highlight Reel</span>
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 right-10 w-48 h-64 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl rotate-6 z-10 border-4 border-white">
                  <img
                    alt="Woman jogging"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9IDNQncakJ1a3Q8xnD3VlwhBKd2NpDgPCsHJEMttVNcm8OuDy2mJMwtTmCszEhHc_yt87JrSBD1hJvQJSMNv5I0yrla1_u8SLwHnhrQwbSD80YTvVzGQA-lgsSu_9PiztNre4-zRDMt0egF7W30QmtcVe--y679L19zSSNk9tiDPK1-SW5CK-6NYU7ruhe2fsxxC0KJihOpD0Qr-J3Pft8SBg_8d68KI0mFgzHos6eWtS89fYyMRfHXJGUTRCqNA_OhBiXxy8Q"
                  />
                </div>
                <div className="absolute bottom-0 left-10 w-56 h-56 md:w-72 md:h-72 rounded-[2rem] overflow-hidden shadow-xl -rotate-3 z-20 border-4 border-white">
                  <img
                    alt="Happy couple"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8OW1Kqzng86a5oRot43JFEq_OGwibn05_ZvhkefCVvphRb1zqf7poECYBY2IwcB5KdjoqbXnQP9x1hg7zB8yVV7eN-nAOGKS0QwdQ9uPEcvolPoli6I2iH_gSdzEOw494P0ob5L0NbodGWqbtSlXFms5dsK59X6KGhEg3ZY12smFiLw84yiNFPt8Rs7I9tTvuo6wgyrdopt2lO0qfCz4JQ7Yk5aWl879CF7wZ_xfTs4V_wr0AFk698pgjYQr6qmFUIPPbKI75w"
                  />
                </div>
                <div className="absolute top-20 left-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white/80 z-0 opacity-80">
                  <img
                    alt="Woman smiling"
                    className="w-full h-full object-cover sepia-[0.3]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOcdH36a0mHid5QcjvylRRODQlPA2SGFaMXPdEB8I1ax48jBPmLdmaD8ClreYA_b6C_cpdAgf2UqS3ZehoU7TkHA_wq0Ktq7Be1axNy5hpEu1urL0qP0sDBmitcFhNoGDrwSjNKO5QuAVD5XoXEEGNqQ8x7WTJQRNhgvN4jI8WPFG94_6KcFsBXKhtLKprDTWydZw1V5teAZfLWsckAaG9XDj6ddeUT6H0mxO30SqGHhHHIwx-r69NekmumRSKfqIwUl74EjE5Cg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-[#fcfbf7]/95 backdrop-blur-md border-y border-stone-200/50 py-4 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
              <button className="px-5 py-2 rounded-full bg-[#4a4036] text-white text-sm font-medium whitespace-nowrap shadow-md">
                All Stories
              </button>
              <button className="px-5 py-2 rounded-full bg-white border border-stone-200 text-[#7c726a] hover:border-[#cd8570] hover:text-[#cd8570] transition-all text-sm font-medium whitespace-nowrap">
                IVF Success
              </button>
              <button className="px-5 py-2 rounded-full bg-white border border-stone-200 text-[#7c726a] hover:border-[#cd8570] hover:text-[#cd8570] transition-all text-sm font-medium whitespace-nowrap">
                Robotic Surgery
              </button>
              <button className="px-5 py-2 rounded-full bg-white border border-stone-200 text-[#7c726a] hover:border-[#cd8570] hover:text-[#cd8570] transition-all text-sm font-medium whitespace-nowrap">
                Fibroid Freedom
              </button>
              <button className="px-5 py-2 rounded-full bg-white border border-stone-200 text-[#7c726a] hover:border-[#cd8570] hover:text-[#cd8570] transition-all text-sm font-medium whitespace-nowrap">
                Uterus Transplant
              </button>
            </div>
            <div className="relative w-full md:w-64 shrink-0">
              <input
                className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-[#4a4036] focus:ring-[#cd8570] focus:border-[#cd8570] placeholder-[#7c726a]/50"
                placeholder="Search stories..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#7c726a]/50 text-lg">
                search
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-[#f4f1de]/30">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Story Card 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Miracle Baby Story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8OW1Kqzng86a5oRot43JFEq_OGwibn05_ZvhkefCVvphRb1zqf7poECYBY2IwcB5KdjoqbXnQP9x1hg7zB8yVV7eN-nAOGKS0QwdQ9uPEcvolPoli6I2iH_gSdzEOw494P0ob5L0NbodGWqbtSlXFms5dsK59X6KGhEg3ZY12smFiLw84yiNFPt8Rs7I9tTvuo6wgyrdopt2lO0qfCz4JQ7Yk5aWl879CF7wZ_xfTs4V_wr0AFk698pgjYQr6qmFUIPPbKI75w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-[#cd8570]/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  IVF Success
                </span>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </button>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  My Miracle Baby: After 7 Years
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "We thought it was impossible, but Dr. Smit Bharat Solanki gave us hope when everyone else said no. The journey
                  wasn't easy, but holding our little one makes every moment worth it."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#eac6bc]/30 flex items-center justify-center text-[#cd8570] text-xs font-bold font-[var(--font-playfair)]">
                      P
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Priya K.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">Mumbai, India</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Watch Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Recovery Story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9IDNQncakJ1a3Q8xnD3VlwhBKd2NpDgPCsHJEMttVNcm8OuDy2mJMwtTmCszEhHc_yt87JrSBD1hJvQJSMNv5I0yrla1_u8SLwHnhrQwbSD80YTvVzGQA-lgsSu_9PiztNre4-zRDMt0egF7W30QmtcVe--y679L19zSSNk9tiDPK1-SW5CK-6NYU7ruhe2fsxxC0KJihOpD0Qr-J3Pft8SBg_8d68KI0mFgzHos6eWtS89fYyMRfHXJGUTRCqNA_OhBiXxy8Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-[#8ab098]/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Robotic Surgery
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  Back on My Feet in 24 Hours
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "I was terrified of surgery. But with the Da Vinci robot, the pain was minimal. I was walking the next
                  morning and back to my jogging routine within weeks."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4efe9] flex items-center justify-center text-[#8ab098] text-xs font-bold font-[var(--font-playfair)]">
                      S
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Sarah J.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">London, UK</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Fibroid Freedom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOcdH36a0mHid5QcjvylRRODQlPA2SGFaMXPdEB8I1ax48jBPmLdmaD8ClreYA_b6C_cpdAgf2UqS3ZehoU7TkHA_wq0Ktq7Be1axNy5hpEu1urL0qP0sDBmitcFhNoGDrwSjNKO5QuAVD5XoXEEGNqQ8x7WTJQRNhgvN4jI8WPFG94_6KcFsBXKhtLKprDTWydZw1V5teAZfLWsckAaG9XDj6ddeUT6H0mxO30SqGHhHHIwx-r69NekmumRSKfqIwUl74EjE5Cg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-[#f4a261]/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Fibroid Freedom
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  Living Without Pain
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "For years, fibroids controlled my life. Dr. Smit Bharat Solanki's approach was different—he listened. The
                  uterus-preserving surgery gave me my life back without losing a part of myself."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f4a261]/20 flex items-center justify-center text-[#f4a261] text-xs font-bold font-[var(--font-playfair)]">
                      A
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Anjali R.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">Ahmedabad, India</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 4 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Uterus Transplant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVTxxcMgu3x-GRe_cqEysoYpRrwdlsfLMC0Xx9MDTauhXxAIYLiLPreElLd816hY1X_vZ-BSA-JXVxZnLmssUU2oSL2yJHonfG_APJSz1l9gkQ25Y5AH8zFuTEKC7WrHZoi1ZsUFjlKGMyggBotT5RJDd4uAABQ1d5H0Vv0LGm8HGEqdrpOKIvjDoAZkERTLGb699guKTu4wwhl3dtCWAbYFROu64Vo3m_N9rvz_DOjxm9f9-mHFycWl4h_wkNfPOuEfEXVt6x4A"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-purple-400/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Uterus Transplant
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  A Second Chance at Motherhood
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "Being born without a uterus felt like a closed door. Dr. Smit Bharat Solanki and his team performed a miracle
                  transplant. Today, I am holding the baby I dreamt of."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs font-bold font-[var(--font-playfair)]">
                      M
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Meera T.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">Surat, India</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 5 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-[#e4efe9]/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#8ab098] text-6xl">spa</span>
                </div>
                <span className="absolute top-4 left-4 bg-teal-500/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Intimate Wellness
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  Confidence Restored
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "Post-menopause changes were affecting my confidence. The rejuvenation therapy was non-invasive and
                  life-changing. I feel vibrant again."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 text-xs font-bold font-[var(--font-playfair)]">
                      K
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Kiran P.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">Vadodara, India</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Card 6 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Endometriosis"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 scale-x-[-1] filter hue-rotate-15"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8OW1Kqzng86a5oRot43JFEq_OGwibn05_ZvhkefCVvphRb1zqf7poECYBY2IwcB5KdjoqbXnQP9x1hg7zB8yVV7eN-nAOGKS0QwdQ9uPEcvolPoli6I2iH_gSdzEOw494P0ob5L0NbodGWqbtSlXFms5dsK59X6KGhEg3ZY12smFiLw84yiNFPt8Rs7I9tTvuo6wgyrdopt2lO0qfCz4JQ7Yk5aWl879CF7wZ_xfTs4V_wr0AFk698pgjYQr6qmFUIPPbKI75w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <span className="absolute top-4 left-4 bg-rose-400/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Endometriosis
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#4a4036] mb-3 leading-tight group-hover:text-[#cd8570] transition-colors">
                  Finally Pain Free
                </h3>
                <p className="text-[#7c726a] text-sm leading-relaxed mb-6 line-clamp-3">
                  "After years of misdiagnosis, Dr. Smit Bharat Solanki identified my deep endometriosis. The robotic excision was
                  precise. I have my life back, pain-free."
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-xs font-bold font-[var(--font-playfair)]">
                      R
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4a4036]">Riya S.</p>
                      <p className="text-[10px] text-[#7c726a] uppercase">Jaipur, India</p>
                    </div>
                  </div>
                  <button className="text-[#cd8570] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-3 rounded-full border border-[#8ab098] text-[#8ab098] hover:bg-[#8ab098] hover:text-white transition-all duration-300 font-bold text-sm tracking-wide flex items-center gap-2">
              <span>Load More Stories</span>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#e4efe9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM4YWIwOTgiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-[#4a4036] mb-6">
            Ready to start your own story of hope?
          </h2>
          <p className="text-[#7c726a] text-lg max-w-2xl mx-auto mb-10">
            Every journey begins with a conversation. Book your consultation with Dr. Smit Bharat Solanki today and take the first step
            towards healing.
          </p>
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#E5C276] to-[#d4af63] text-[#4a4036] font-bold text-lg tracking-wide shadow-lg shadow-[#E5C276]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto">
            <span className="material-symbols-outlined">calendar_month</span>
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
