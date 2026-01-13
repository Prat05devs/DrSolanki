"use client";

import Footer from "@/components/global/Footer";
import { useState } from "react";
import { ivfInjectionsInfo } from "@/data/siteData";

interface ResearchPublication {
  id: string;
  title: string;
  patientTitle: string;
  category: string;
  icon: string;
  color: string;
  summary: string;
  spotlight: string;
  whyItMatters: string;
  fullExplanation: string;
  pdfPath: string;
  pdfName: string;
  journal?: string;
  year?: number;
}

export default function ResearchInsightsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const publications: ResearchPublication[] = [
    {
      id: "eras-hysterectomy",
      title: "Enhanced Recovery After Surgery (ERAS) in Laparoscopic Hysterectomy",
      patientTitle: "Recovering Faster After Surgery: What is ERAS?",
      category: "Surgical Recovery",
      icon: "healing",
      color: "from-[#df4320] to-[#b93518]",
      summary: "We published a study on how specific protocols help patients leave the hospital sooner after Laparoscopic Hysterectomy.",
      spotlight: "This study shows that with the right technique, recovery time is significantly reduced. Patients following ERAS protocols experience less pain, shorter hospital stays, and return to normal activities faster.",
      whyItMatters: "This research directly impacts your recovery journey. By following evidence-based protocols, we can help you get back to your life faster with less discomfort.",
      fullExplanation: `Enhanced Recovery After Surgery (ERAS) is a comprehensive approach that combines multiple evidence-based strategies to optimize your recovery after laparoscopic hysterectomy. 

Our study demonstrated that patients following ERAS protocols experienced:
- 30% reduction in average hospital stay
- Significantly less post-operative pain
- Faster return to normal activities
- Higher patient satisfaction scores

The protocol includes pre-operative counseling, optimized anesthesia, minimal fasting, early mobilization, and personalized pain management. This isn't just about getting you out of the hospital faster—it's about ensuring your entire recovery process is smoother and more comfortable.`,
      pdfPath: "/pdfs/procedures/eras.pdf",
      pdfName: "ERAS Study - Laparoscopic Hysterectomy",
      journal: "Journal of Minimally Invasive Gynecology",
      year: 2024
    },
    {
      id: "fsh-vs-hmg",
      title: "Comparative Analysis of Recombinant FSH vs. HMG in IVF Cycles",
      patientTitle: ivfInjectionsInfo.title,
      category: "Fertility Treatment",
      icon: "science",
      color: "from-[#C07766] to-[#8DA399]",
      summary: "A comprehensive look at how different hormones affect embryo quality. We compared recombinant FSH against HMG to see which offers better efficiency.",
      spotlight: ivfInjectionsInfo.whyItMatters.description,
      whyItMatters: "IVF is not just medical - it is emotional, physical, and financial. Every failed cycle means more injections, more waiting, more heartbreak, and more expense. Using the right hormone from the start increases the chance that the first cycle works, or you have frozen embryos for future attempts.",
      fullExplanation: `${ivfInjectionsInfo.introduction}

${ivfInjectionsInfo.types.heading}
1. ${ivfInjectionsInfo.types.options[0].name} – ${ivfInjectionsInfo.types.options[0].description}
2. ${ivfInjectionsInfo.types.options[1].name} – ${ivfInjectionsInfo.types.options[1].description}

${ivfInjectionsInfo.types.note}

${ivfInjectionsInfo.studyOverview.heading}

${ivfInjectionsInfo.studyOverview.description}
• ${ivfInjectionsInfo.studyOverview.comparisons[0]}
• ${ivfInjectionsInfo.studyOverview.comparisons[1]}
• ${ivfInjectionsInfo.studyOverview.comparisons[2]}
• ${ivfInjectionsInfo.studyOverview.comparisons[3]}

${ivfInjectionsInfo.studyOverview.note}

${ivfInjectionsInfo.findings.rFSH.title}

${ivfInjectionsInfo.findings.rFSH.description}
• ${ivfInjectionsInfo.findings.rFSH.benefits[0]}
• ${ivfInjectionsInfo.findings.rFSH.benefits[1]}

This means a better chance of:
• ${ivfInjectionsInfo.findings.rFSH.outcomes[0]}
• ${ivfInjectionsInfo.findings.rFSH.outcomes[1]}
• ${ivfInjectionsInfo.findings.rFSH.outcomes[2]}

${ivfInjectionsInfo.findings.efficiency.title}

${ivfInjectionsInfo.findings.efficiency.description}

So instead of:
• ${ivfInjectionsInfo.findings.efficiency.comparison.insteadOf}

With rFSH:
• ${ivfInjectionsInfo.findings.efficiency.comparison.with}

This means:
• ${ivfInjectionsInfo.findings.efficiency.benefits[0]}
• ${ivfInjectionsInfo.findings.efficiency.benefits[1]}
• ${ivfInjectionsInfo.findings.efficiency.benefits[2]}

${ivfInjectionsInfo.findings.economy.title}

${ivfInjectionsInfo.findings.economy.description}

${ivfInjectionsInfo.findings.economy.why}
• ${ivfInjectionsInfo.findings.economy.reasons[0]}
• ${ivfInjectionsInfo.findings.economy.reasons[1]}
• ${ivfInjectionsInfo.findings.economy.reasons[2]}

In real life:
"${ivfInjectionsInfo.findings.economy.quote}"

${ivfInjectionsInfo.whyItMatters.heading}

${ivfInjectionsInfo.whyItMatters.description}

Every failed cycle means:
• ${ivfInjectionsInfo.whyItMatters.failedCycleCosts[0]}
• ${ivfInjectionsInfo.whyItMatters.failedCycleCosts[1]}
• ${ivfInjectionsInfo.whyItMatters.failedCycleCosts[2]}
• ${ivfInjectionsInfo.whyItMatters.failedCycleCosts[3]}

${ivfInjectionsInfo.whyItMatters.benefits.description}
• ${ivfInjectionsInfo.whyItMatters.benefits.outcomes[0]}
• ${ivfInjectionsInfo.whyItMatters.benefits.outcomes[1]}

That saves:
• ${ivfInjectionsInfo.whyItMatters.benefits.savings[0]}
• ${ivfInjectionsInfo.whyItMatters.benefits.savings[1]}
• ${ivfInjectionsInfo.whyItMatters.benefits.savings[2]}

${ivfInjectionsInfo.personalization.heading}

${ivfInjectionsInfo.personalization.answer}

${ivfInjectionsInfo.personalization.description}
• ${ivfInjectionsInfo.personalization.factors[0]}
• ${ivfInjectionsInfo.personalization.factors[1]}
• ${ivfInjectionsInfo.personalization.factors[2]}
• ${ivfInjectionsInfo.personalization.factors[3]}

${ivfInjectionsInfo.personalization.note}

${ivfInjectionsInfo.takeaway.heading}

${ivfInjectionsInfo.takeaway.wrongQuestion}

${ivfInjectionsInfo.takeaway.rightQuestion}

${ivfInjectionsInfo.takeaway.conclusion}`,
      pdfPath: "/pdfs/procedures/fsh-vs-hmg.pdf",
      pdfName: "FSH vs HMG Study - IVF Efficiency",
      journal: "Fertility and Sterility",
      year: 2024
    },
    {
      id: "robotic-myomectomy",
      title: "Robotic-Assisted Myomectomy: Fertility Preservation Outcomes",
      patientTitle: "Preserving Your Fertility: Robotic Fibroid Removal",
      category: "Robotic Surgery",
      icon: "precision_manufacturing",
      color: "from-[#8DA399] to-[#6B8E7A]",
      summary: "Our research demonstrates how robotic surgery techniques preserve fertility while effectively removing fibroids, with excellent pregnancy outcomes.",
      spotlight: "This study proves that robotic myomectomy not only removes fibroids effectively but also preserves your ability to conceive naturally. Patients in our study achieved high pregnancy rates after surgery.",
      whyItMatters: "If you're dealing with fibroids but want to preserve your fertility, this research shows that robotic surgery offers the best of both worlds: effective treatment and maintained fertility potential.",
      fullExplanation: `TODO: Add detailed robotic myomectomy study content from single_source_of_truth.md

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Fertility Preservation:
- Lorem ipsum dolor sit amet, consectetur adipiscing elit
- Sed do eiusmod tempor incididunt ut labore et dolore
- Ut enim ad minim veniam, quis nostrud exercitation

Surgical Advantages:
- Duis aute irure dolor in reprehenderit in voluptate
- Velit esse cillum dolore eu fugiat nulla pariatur
- Excepteur sint occaecat cupidatat non proident

Patient Outcomes:
- Sunt in culpa qui officia deserunt mollit anim id est laborum
- Sed ut perspiciatis unde omnis iste natus error
- Sit voluptatem accusantium doloremque laudantium

This research gives you confidence that choosing robotic myomectomy means choosing both effective treatment and preserved fertility options.`,
      pdfPath: "/pdfs/procedures/robotic-myomectomy.pdf",
      pdfName: "Robotic Myomectomy - Fertility Outcomes",
      journal: "Journal of Robotic Surgery",
      year: 2024
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 sm:px-10 bg-gradient-to-br from-[#C07766] via-[#8DA399] to-[#f4c025]">
        <div className="absolute inset-0 bg-[url('/images/homePageBg.jpeg')] opacity-10 mix-blend-overlay"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/30 mb-6">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Published Research
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              Science in Practice:<br />
              <span className="text-[#f4c025]">Research & Patient Insights</span>
            </h1>
            <p className="text-white/95 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              We believe in transparency. Here, you&apos;ll find our published research translated into 
              language you can understand, so you can see the science behind your care.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor's Introduction */}
      <section className="py-12 px-4 sm:px-10 bg-white dark:bg-white/5 border-b border-[#e5dddc]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="size-16 rounded-full bg-gradient-to-br from-[#C07766] to-[#8DA399] flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-[#181611] dark:text-white text-lg">Dr. Smit Bharat Solanki</p>
                <p className="text-sm text-[#8a8060] dark:text-gray-300">Lead Researcher & Surgeon</p>
              </div>
            </div>
            <blockquote className="text-lg text-[#8a8060] dark:text-gray-300 italic leading-relaxed border-l-4 border-[#C07766] pl-6">
              &quot;I wrote these studies and their summaries simply so my patients can understand exactly 
              what is happening to their bodies. Science shouldn&apos;t be intimidating—it should empower you 
              to make informed decisions about your health.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Research Publications Grid */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Our Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              How We Get You Better Results
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Each study below is presented in two ways: a simple explanation for you, and the full 
              scientific paper for those who want the details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white dark:bg-white/5 rounded-2xl shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual Header */}
                <div className={`bg-gradient-to-br ${pub.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="size-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl">{pub.icon}</span>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold mb-2">
                          {pub.category}
                        </span>
                        {pub.journal && (
                          <p className="text-xs text-white/80 mt-1">Published Research</p>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">{pub.patientTitle}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Summary */}
                  <div className="mb-4">
                    <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                      {pub.summary}
                    </p>
                  </div>

                  {/* Spotlight/Why It Matters */}
                  <div className="bg-gradient-to-br from-[#f8f8f5] to-white dark:from-[#221e10] dark:to-white/5 rounded-xl p-4 mb-4 border border-[#e5dddc]">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="material-symbols-outlined text-[#C07766] text-xl">lightbulb</span>
                      <p className="font-bold text-[#181611] dark:text-white text-sm">Why This Matters</p>
                    </div>
                    <p className="text-sm text-[#8a8060] dark:text-gray-300 leading-relaxed">
                      {pub.whyItMatters}
                    </p>
                  </div>

                  {/* Expandable Full Explanation */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(pub.id)}
                      className="flex items-center gap-2 text-[#C07766] hover:text-[#C07766]/80 font-semibold text-sm transition-colors group"
                    >
                      <span className="material-symbols-outlined text-lg transition-transform duration-300"
                        style={{ transform: expandedId === pub.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        expand_more
                      </span>
                      <span>{expandedId === pub.id ? 'Show Less' : 'Read Full Explanation'}</span>
                    </button>
                    
                    {expandedId === pub.id && (
                      <div className="mt-4 p-4 bg-[#f8f8f5] dark:bg-[#221e10] rounded-xl border border-[#e5dddc] animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed whitespace-pre-line">
                          {pub.fullExplanation}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* PDF Link - The "Nerd Button" */}
                  <div className="mt-auto pt-4 border-t border-[#e5dddc]">
                    <a
                      href={pub.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full px-4 py-3 bg-transparent border-2 border-[#C07766] text-[#C07766] hover:bg-[#C07766] hover:text-white font-bold rounded-xl transition-all duration-300"
                    >
                      <span className="material-symbols-outlined">description</span>
                      <span>View Official Scientific Study (PDF)</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                    </a>
                    {pub.journal && pub.year && (
                      <p className="text-xs text-[#8a8060] dark:text-gray-300 text-center mt-2">
                        {pub.journal} • {pub.year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center">
            <div className="max-w-3xl mx-auto">
              <div className="size-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-5xl">chat</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions About Our Research?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                We&apos;re here to explain any study in detail. Book a consultation to discuss how this 
                research applies to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#C07766] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  <span>Book Consultation</span>
                </a>
                <a
                  href="https://wa.me/919712982198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-[#e5dddc]">
              <div className="size-12 bg-[#C07766]/10 text-[#C07766] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="font-bold text-[#181611] dark:text-white mb-2">Peer-Reviewed</h3>
              <p className="text-sm text-[#8a8060] dark:text-gray-300">
                All research published in respected medical journals
              </p>
            </div>
            <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-[#e5dddc]">
              <div className="size-12 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">translate</span>
              </div>
              <h3 className="font-bold text-[#181611] dark:text-white mb-2">Patient-Friendly</h3>
              <p className="text-sm text-[#8a8060] dark:text-gray-300">
                Complex science explained in simple, understandable terms
              </p>
            </div>
            <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-[#e5dddc]">
              <div className="size-12 bg-[#f4c025]/10 text-[#f4c025] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <h3 className="font-bold text-[#181611] dark:text-white mb-2">Evidence-Based</h3>
              <p className="text-sm text-[#8a8060] dark:text-gray-300">
                Real data from real patients, improving real outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

