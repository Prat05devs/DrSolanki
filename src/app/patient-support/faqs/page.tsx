"use client";

import Footer from "@/components/global/Footer";
import { useState, useEffect } from "react";
import { 
  ivfInjectionsInfo, 
  prpTTCRFContent, 
  prpTTCRFFaqs,
  laparoscopy3DFaqContent,
  laser1470FaqContent,
  thinEndometriumFaqContent,
  hysterectomyContent
} from "@/data/siteData";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface FAQTopic {
  id: string;
  title: string;
  category: string;
  icon: string;
  color: string;
  summary: string;
  whyItMatters: string;
  fullContent: {
    introduction?: string;
    sections: { heading: string; content: string }[];
    faqs?: { question: string; answer: string }[];
    conclusion?: string;
  };
  pdfPath?: string;
  journal?: string;
  year?: number;
}

export default function FAQPage() {
  const [selectedTopic, setSelectedTopic] = useState<FAQTopic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqTopics: FAQTopic[] = [
    {
      id: "laparoscopic-hysterectomy",
      title: "Laparoscopic Hysterectomy: Faster Recovery, Less Pain",
      category: "Surgical Recovery",
      icon: "healing",
      color: "bg-[#df4320]",
      summary: hysterectomyContent.introduction,
      whyItMatters: "Understanding your recovery options helps reduce anxiety and sets realistic expectations. Modern laparoscopic techniques mean faster healing and less discomfort.",
      fullContent: {
        introduction: hysterectomyContent.introduction,
        sections: [
          {
            heading: "What Is Laparoscopic Hysterectomy?",
            content: "Laparoscopic hysterectomy is a minimally invasive surgery done through very small incisions. Compared to open surgery, it usually means:\n• Less pain\n• Smaller scars\n• Faster healing\n• Quicker return to normal life"
          },
          {
            heading: "Enhanced Recovery After Surgery (ERAS)",
            content: "Dr. Smit Bharat Solanki routinely follows a modern approach called Enhanced Recovery After Surgery (ERAS).\n\nInstead of:\n• Long hours of fasting\n• Strong pain injections\n• Staying in bed for days\n\nWe focus on:\n• Better pain control\n• Early walking\n• Early eating\n• Short and safe hospital stay\n\nThe goal is simple: help your body recover naturally and faster - without increasing risk."
          },
          {
            heading: "Is This Approach Safe and Proven?",
            content: "Yes. Dr. Smit Bharat Solanki published a medical study involving 56 women who underwent laparoscopic hysterectomy under care across different hospitals.\n\nThe results were reassuring:\n• All patients walked within 6 hours\n• All started eating within 6 hours\n• All went home within 24 hours\n• No complications were observed"
          },
          {
            heading: "Who Can Benefit?",
            content: "Women undergoing laparoscopic hysterectomy for:\n• Fibroids\n• Heavy or irregular bleeding\n• Adenomyosis\n• Chronic pelvic pain"
          }
        ]
      }
    },
    {
      id: "3d-laparoscopy",
      title: "3D Laparoscopic Surgery: Better Precision for Hysterectomy",
      category: "Advanced Surgery",
      icon: "precision_manufacturing",
      color: "bg-[#8DA399]",
      summary: laparoscopy3DFaqContent.introduction,
      whyItMatters: "3D laparoscopy offers better visualization and precision, especially important for women with higher body weight. This means safer surgery and faster recovery.",
      fullContent: {
        introduction: laparoscopy3DFaqContent.introduction,
        sections: [
          {
            heading: "What is 3D Laparoscopic Surgery?",
            content: laparoscopy3DFaqContent.whatIs3D
          },
          {
            heading: "Why Body Weight Matters",
            content: laparoscopy3DFaqContent.whyWeightMatters
          },
          {
            heading: "Study Findings",
            content: laparoscopy3DFaqContent.studyFindings
          },
          {
            heading: "Patient Benefits",
            content: laparoscopy3DFaqContent.patientBenefits
          },
          {
            heading: "Who Benefits Most?",
            content: laparoscopy3DFaqContent.whoBenefits
          },
          {
            heading: "Important Questions to Ask",
            content: laparoscopy3DFaqContent.finalMessage
          }
        ],
        conclusion: laparoscopy3DFaqContent.doctorsNote
      }
    },
    {
      id: "prp-ttcrf",
      title: "PRP & TTCRF: New Hope for Stress Urinary Incontinence",
      category: "Aesthetic Gynecology",
      icon: "water_drop",
      color: "bg-[#C07766]",
      summary: prpTTCRFContent.summary,
      whyItMatters: prpTTCRFContent.meaning,
      fullContent: {
        introduction: prpTTCRFContent.summary,
        sections: [
          {
            heading: "What is Stress Urinary Incontinence?",
            content: "It is leakage of urine during physical pressure such as coughing, sneezing, laughing, or exercise."
          },
          {
            heading: "Why Does It Worsen After Menopause?",
            content: "Loss of estrogen weakens pelvic floor muscles and supporting tissues."
          },
          {
            heading: "What is the Treatment?",
            content: "This treatment combines:\n\n1. Radiofrequency (TTCRF): A non-surgical therapy using controlled heat to tighten and strengthen vaginal and peri-urethral tissues.\n\n2. Platelet-Rich Plasma (PRP): Prepared from your own blood and contains growth factors that help tissue healing and regeneration.\n\nRadiofrequency tightens tissues, while PRP helps them heal and regenerate."
          },
          {
            heading: "Study Results",
            content: "Women who received PRP with radiofrequency experienced:\n• Significantly better bladder control\n• Stronger urethral support\n• Better quality of life\n• Higher patient satisfaction\n• No increase in complications"
          },
          {
            heading: "Who Can Benefit?",
            content: "Peri- and postmenopausal women with stress urinary incontinence who did not improve with exercises. Benefits were seen in women both below and above 60 years of age."
          },
          {
            heading: "How Long Do Results Last?",
            content: "The study showed benefits lasting at least 12 months."
          }
        ],
        faqs: prpTTCRFFaqs.map(faq => ({ question: faq.question, answer: faq.answer }))
      }
    },
    {
      id: "ivf-injections",
      title: "IVF Injections: Understanding Your Options",
      category: "Fertility Treatment",
      icon: "science",
      color: "bg-[#C07766]",
      summary: ivfInjectionsInfo.introduction,
      whyItMatters: ivfInjectionsInfo.whyItMatters.description,
      fullContent: {
        introduction: ivfInjectionsInfo.introduction,
        sections: [
          {
            heading: ivfInjectionsInfo.types.heading,
            content: `${ivfInjectionsInfo.types.options[0].name} – ${ivfInjectionsInfo.types.options[0].description}\n\n${ivfInjectionsInfo.types.options[1].name} – ${ivfInjectionsInfo.types.options[1].description}\n\n${ivfInjectionsInfo.types.note}`
          },
          {
            heading: ivfInjectionsInfo.studyOverview.heading,
            content: `${ivfInjectionsInfo.studyOverview.description}\n\n${ivfInjectionsInfo.studyOverview.comparisons.join('\n• ')}\n\n${ivfInjectionsInfo.studyOverview.note}`
          },
          {
            heading: ivfInjectionsInfo.findings.rFSH.title,
            content: `${ivfInjectionsInfo.findings.rFSH.description}\n\nBenefits:\n• ${ivfInjectionsInfo.findings.rFSH.benefits.join('\n• ')}\n\nThis means a better chance of:\n• ${ivfInjectionsInfo.findings.rFSH.outcomes.join('\n• ')}`
          },
          {
            heading: ivfInjectionsInfo.findings.efficiency.title,
            content: `${ivfInjectionsInfo.findings.efficiency.description}\n\nInstead of:\n• ${ivfInjectionsInfo.findings.efficiency.comparison.insteadOf}\n\nWith rFSH:\n• ${ivfInjectionsInfo.findings.efficiency.comparison.with}\n\nThis means:\n• ${ivfInjectionsInfo.findings.efficiency.benefits.join('\n• ')}`
          },
          {
            heading: ivfInjectionsInfo.whyItMatters.heading,
            content: `${ivfInjectionsInfo.whyItMatters.description}\n\nEvery failed cycle means:\n• ${ivfInjectionsInfo.whyItMatters.failedCycleCosts.join('\n• ')}`
          },
          {
            heading: "Takeaway",
            content: `${ivfInjectionsInfo.takeaway.wrongQuestion}\n\n${ivfInjectionsInfo.takeaway.rightQuestion}\n\n${ivfInjectionsInfo.takeaway.conclusion}`
          }
        ]
      }
    },
    {
      id: "vaginal-rejuvenation",
      title: "1470-nm Laser: Vaginal Rejuvenation Treatment",
      category: "Aesthetic Gynecology",
      icon: "spa",
      color: "bg-[#8FA392]",
      summary: laser1470FaqContent.introduction,
      whyItMatters: laser1470FaqContent.finalMessage,
      fullContent: {
        introduction: laser1470FaqContent.introduction,
        sections: [
          {
            heading: "Why Do These Changes Occur?",
            content: laser1470FaqContent.whyChanges
          },
          {
            heading: "What Is This Treatment?",
            content: laser1470FaqContent.whatIsTreatment
          },
          {
            heading: "How Does It Work?",
            content: laser1470FaqContent.howItWorks
          },
          {
            heading: "Study Findings",
            content: laser1470FaqContent.studyFindings
          },
          {
            heading: "Safety",
            content: laser1470FaqContent.safety
          },
          {
            heading: "Who Can Benefit?",
            content: laser1470FaqContent.whoBenefits
          },
          {
            heading: "How Many Sessions Are Needed?",
            content: laser1470FaqContent.sessions
          }
        ],
        conclusion: laser1470FaqContent.finalMessage
      }
    },
    {
      id: "thin-endometrium",
      title: "Thin Endometrium in IVF: New Hope for Better Outcomes",
      category: "Fertility Treatment",
      icon: "favorite",
      color: "bg-[#C07766]",
      summary: thinEndometriumFaqContent.introduction,
      whyItMatters: thinEndometriumFaqContent.emotionalMessage,
      fullContent: {
        introduction: thinEndometriumFaqContent.introduction,
        sections: [
          {
            heading: "What Is Thin Endometrium?",
            content: thinEndometriumFaqContent.whatIs
          },
          {
            heading: "Why Does Endometrium Become Thin?",
            content: thinEndometriumFaqContent.whyThin
          },
          {
            heading: "Why It Affects IVF Success",
            content: thinEndometriumFaqContent.whyAffects
          },
          {
            heading: "New Approach to Treatment",
            content: `${thinEndometriumFaqContent.newApproach}\n\n${thinEndometriumFaqContent.shift}`
          },
          {
            heading: "Improvements Observed",
            content: thinEndometriumFaqContent.improvements
          },
          {
            heading: "Who Can Benefit?",
            content: thinEndometriumFaqContent.whoBenefits
          }
        ],
        conclusion: thinEndometriumFaqContent.finalMessage
      }
    }
  ];

  const openModal = (topic: FAQTopic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] min-h-screen">
        {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute top-0 left-0 right-0 w-full h-[200%] bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/homePageBg.jpeg")',
            backgroundPosition: 'center top',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold w-fit border border-white/30 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-base sm:text-[18px]">help</span>
              <span className="hidden sm:inline">Frequently Asked Questions</span>
              <span className="sm:hidden">FAQs</span>
                  </span>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-6 drop-shadow-lg px-2">
              Your Questions,<br />
              <span className="text-[#f4c025]">Answered</span>
                </h1>
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md px-2">
              Find answers to common questions about our treatments, procedures, and research. 
              Clear, honest information to help you make informed decisions about your care.
            </p>
                </div>
              </div>
      </section>

      {/* Doctor's Introduction */}
      <section className="py-12 px-4 sm:px-10 bg-white dark:bg-white/5 border-b border-[#e5dddc]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="size-16 rounded-full bg-[#C07766] flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-[#181611] dark:text-white text-lg">Dr. Smit Bharat Solanki</p>
                <p className="text-sm text-[#8a8060] dark:text-gray-300">Your Trusted Gynecologist</p>
              </div>
            </div>
            <blockquote className="text-lg text-[#8a8060] dark:text-gray-300 italic leading-relaxed border-l-4 border-[#C07766] pl-6">
              &quot;I believe in empowering my patients with knowledge. Understanding your condition and treatment options 
              helps you make informed decisions. Here are answers to questions many patients ask—I hope they help you too.&quot;
            </blockquote>
            </div>
          </div>
        </section>

      {/* FAQ Topics Grid */}
      <section className="py-16 px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mt-4 mb-6 leading-[1.15] tracking-[-0.01em]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Explore answers to common questions about treatments, procedures, and research. 
              Click on any topic to learn more.
              </p>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {faqTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-white/5 rounded-xl sm:rounded-2xl shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual Header */}
                <div className={`${topic.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-shrink-0 size-12 sm:size-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl sm:text-4xl">{topic.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold mb-1 sm:mb-2">
                          {topic.category}
                </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight">{topic.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* Summary */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-4">
                      {topic.summary}
                    </p>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-white/50 dark:border-white/10 shadow-sm">
                    <div className="flex items-start gap-2 mb-1 sm:mb-2">
                      <span className="material-symbols-outlined text-[#C07766] text-lg sm:text-xl flex-shrink-0">lightbulb</span>
                      <p className="font-bold text-[#181611] dark:text-white text-xs sm:text-sm">Why This Matters</p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8a8060] dark:text-gray-300 leading-relaxed line-clamp-2">
                      {topic.whyItMatters}
                    </p>
              </div>

                  {/* Learn More Button */}
                  <div className="mt-auto pt-3 sm:pt-4">
                    <button
                      onClick={() => openModal(topic)}
                      className="group flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation"
                    >
                      <span className="material-symbols-outlined text-lg sm:text-xl">info</span>
                      <span>Learn More</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="bg-[#C07766] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="size-16 sm:size-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-white/30">
                <span className="material-symbols-outlined text-3xl sm:text-5xl">chat</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em] px-2">
                Still Have Questions?
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help. Book a consultation 
                to discuss your specific questions and concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#C07766] font-semibold rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base touch-manipulation"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">calendar_month</span>
                  <span>Book Consultation</span>
                </a>
                <a
                  href={getWhatsAppUrl("faqQuestions")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm sm:text-base touch-manipulation"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">chat</span>
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* Modal */}
      {isModalOpen && selectedTopic && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-[#221e10] rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col m-2 sm:m-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`${selectedTopic.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0 size-12 sm:size-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl sm:text-4xl">{selectedTopic.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold mb-1 sm:mb-2">
                        {selectedTopic.category}
                      </span>
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-[var(--font-playfair)] font-bold leading-tight break-words">
                        {selectedTopic.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 size-8 sm:size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation"
                    aria-label="Close modal"
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
              {selectedTopic.fullContent.introduction && (
                <div className="mb-4 sm:mb-6">
                  <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {selectedTopic.fullContent.introduction}
                  </p>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                {selectedTopic.fullContent.sections.map((section, idx) => (
                  <div key={idx} className="border-l-4 border-[#C07766] pl-3 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-2 sm:mb-3 leading-[1.15] tracking-[-0.01em]">
                      {section.heading}
                </h3>
                    <p className="text-[#8a8060] dark:text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {section.content}
                </p>
              </div>
                ))}

                {selectedTopic.fullContent.faqs && selectedTopic.fullContent.faqs.length > 0 && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#e5dddc]">
                    <h3 className="text-lg sm:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em]">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedTopic.fullContent.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-[#f8f8f5] dark:bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#e5dddc]">
                          <h4 className="font-semibold text-sm sm:text-base text-[#181611] dark:text-white mb-1 sm:mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-[#8a8060] dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                </div>
                )}

                {selectedTopic.fullContent.conclusion && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#e5dddc]">
                    <div className="bg-[#C07766]/10 dark:bg-[#C07766]/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#C07766]/30">
                      <p className="text-[#181611] dark:text-white font-semibold text-sm sm:text-base leading-relaxed">
                        {selectedTopic.fullContent.conclusion}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {selectedTopic.pdfPath && (
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#e5dddc]">
                  <a
                    href={selectedTopic.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base touch-manipulation w-full sm:w-auto justify-center"
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">description</span>
                    <span className="text-xs sm:text-base">View Full Research Paper (PDF)</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#e5dddc] p-3 sm:p-4 bg-[#f8f8f5] dark:bg-white/5">
              <button
                onClick={closeModal}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base touch-manipulation"
              >
                Close
              </button>
              </div>
            </div>
          </div>
      )}

      <Footer />
    </main>
  );
}
