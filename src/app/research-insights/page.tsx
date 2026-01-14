"use client";

import Footer from "@/components/global/Footer";
import Link from "next/link";

interface Publication {
  id: number;
  title: string;
  author: string;
  journal?: string;
  pdfPath: string;
}

interface Presentation {
  year: number;
  items: string[];
}

export default function ResearchInsightsPage() {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Regenerative Synergy: Combining Platelet‑rich Plasma with Transcutaneous Temperature‑controlled Radiofrequency for Enhanced Treatment of Stress Urinary Incontinence in Peri‑ and Postmenopausal Women",
      author: "Smit Bharat Solanki",
      pdfPath: "/pdfs/article1.pdf"
    },
    {
      id: 2,
      title: "Impact of 3D high-definition laparoscopy on total laparoscopic hysterectomy: a body mass index-stratified retrospective analysis",
      author: "Smit Bharat Solanki",
      pdfPath: "/pdfs/article2.pdf"
    },
    {
      id: 3,
      title: "MECHANISMS AND OUTCOMES OF 1470NM LASER THERAPY FOR VAGINAL REJUVENATION: A MULTI-OMICS OBSERVATIONAL STUDY",
      author: "Smit Bharat Solanki",
      journal: "JRE : Jurnal Rekonstruksi dan Estetik",
      pdfPath: "/pdfs/article3.pdf"
    },
    {
      id: 4,
      title: "Comparative efficacy of granulocyte colony stimulating factor and platelet-rich plasma on clinical pregnancy rates and endometrial outcomes in women undergoing frozen embryo transfer: a randomized controlled trial with 560 subjects",
      author: "Dr. Smit Bharat Solanki",
      journal: "Gynecology",
      pdfPath: "/pdfs/article4.pdf"
    },
    {
      id: 5,
      title: "Predictors of Gonadotropin Efficiency Index (GEI): a regression-based model using patient and stimulation parameters in controlled ovarian stimulation cycles",
      author: "Dr. Smit Bharat Solanki, Deepa Shah",
      pdfPath: "/pdfs/article5.pdf"
    }
  ];

  const presentations: Presentation[] = [
    {
      year: 2023,
      items: [
        "Jan 2023- Faculty in AICOG 2023 Kolkata- Panel discussion on male subfertility",
        "June 2023- Delegate at 18th AAGL International congress on \"unravelling uterine issues and beyond\" along with IAGE supported by FOGSI, Mumbai. Presented video of \"Laparoscopic excision of rudimentary uterine horn\"",
        "June 2023- Presented a poster at IUGA Annual meeting 2023, at the Hague, Netherlands on TTCRF: Groundbreaking Technology - Female SUI Can Be Treated Non-Invasively and with Vulvovaginal Rejuvenation? 14 ECMEC points",
        "August 2023- Moderator in panel discussion on \"Complications of urogynecological surgeries\" in IMS West Zonal Conference",
        "October 2023- Talk on \"Current status, challenges and future of uterus transplant in India\"- Chairperson was Dr Stefan G. Tullius at ISOT 2023",
        "October 2023- Video Presentation in YAG category at APAGE Annual Congress 2023 in Singapore \"Laparoscopic uterine rudimentary horn excision in fertility\"",
        "Contributor for Uterus transplant Chapter in NOTTO transplant manual 2023 released by NOTTO. Directorate General of Health Services, MOHFW, Government of INDIA",
        "December 2023- Podium Presentation at ESAG 2023 on TTCRF on OAB, London 2023"
      ]
    },
    {
      year: 2024,
      items: [
        "April 2024- Invited as faculty for Case discussion in Hiding under the sheets: Sexual Pain in 1st Annual Conference of FEFFA at Medanta, Gurugram",
        "June 2024- Abstract poster presentation on \"Efficacy of Transcutaneous Temperature-Controlled Radiofrequency for Overactive Bladder \"at IUGA annual meeting 2024, Singapore",
        "Sept 2024- Successfully completed the BCME (Basic Course in Medical Education) course conducted by the NMC at Pramukh Swami Medical College, Karamsad",
        "Sept 2024- Delivered a lecture on TTCRF in Overactive bladder at Baroda, FOGSI national conference WWWCON 2024",
        "Sept 2024- Podium presentation on \"Empowering maternal health- Preventing GDM from becoming chronic\" in colloboration with Vcare Denmark at DiaCare Con 2024, Ahmedabad",
        "Oct 2024- Chaired a session on Uterine Transplant development worldwide by Dr. Stefan G. Tullius, at ISOT 2024, Ahmedabad",
        "Oct 2024- Faculty in training workshop Registration for Day-3 during 44th Congress of the Société Internationale d&apos;Urologie (SIU) 2024, New Delhi",
        "Dec 2024- Faculty presentation on \"Alternative Therapy for Stress Urinary Incontinence\" at WZ- IMSCON 2024, Udaipur",
        "Dec 2024- Attended workshop on Cosmetic gynecology on 12th Dec at Oracle Clinic, Nagpur by Dr Sejal Ajmera and Dr Parul Saoji"
      ]
    },
    {
      year: 2025,
      items: [
        "April 2025- Guest speaker at 112th AMASI Skill Course and FMAS Examination on 25th, 26th & 27th, April 2025 at Parul Institute of Medical Sciences & Research, Baroda \" Laparoscopic rudimentary uterine horn excision\" and \" Uterine Transplant\"",
        "June 2025- Oral presentation on \"Evaluating the Efficacy of Pelvic Floor Muscle Training Enhanced by Biofeedback in Postpartum Women with Pelvic Organ Prolapse Symptoms\" at IUGA- EUGA 2025 Annual meeting in Barcelona, Spain",
        "June 2025- E poster presentation on \"Assessment of Bladder Neck Mobility in Stress Urinary Incontinence Using Rotational Angles and Pubourethral Distance: A Transperineal Ultrasonography Study\" at IUGA- EUGA 2025 Annual Meeting in Barcelona, Spain (7 ECMEC points)",
        "Aug 2025- Session on \"Endometrial Microbiome in fertility- New frontiers in reproductive medicine\" at fertility update organized by BOGS",
        "Sept 2025- E poster presentation with discussion on \"Efficacy and Safety of Diode Laser Therapy for Vaginal Rejuvenation: A Prospective Clinical Study\" at ICS- EUS 2025 in Abu Dhabi",
        "Sept 2025- Oral presentation on Botulinum Toxin for Refractory Vaginismus: A Prospective, Randomized, Controlled Trial at ICS- EUS 2025 in Abu Dhabi (Awarded best in category award – female sexual dysfunction, 28.5 CME points accredited by EACCME and 23.5 CME points accredited by EHS)",
        "October 2025- 2 Oral presentation and 4 Poster presentation at 5th Annual Meeting of ISUTx, Antalya, Turkey: Establishing a uterus transplant program in India: regulatory roadmap, institutional readiness, and early experience from a nationally authorized center (Poster), Dual laparoscopic-assisted uterus retrieval from living donors for uterine transplantation: surgical technique and perioperative outcomes (Poster), Implementation of a comprehensive perioperative protocol for uterus transplantation: clinical outcomes from a dual living donor cohort in India (Poster), Immunosuppressive therapy in uterus transplantation: drug-specific strategy for rejection prevention and fertility preservation in a dual living donor experience (Poster), Early recipient outcomes after dual uterus transplantation from living donors retrieved laparoscopically: challenges and lessons learned (Oral), Navigating ethical challenges in living donor uterus transplantation in India: insights from the NOTTO framework (Oral)"
      ]
    }
  ];

  return (
    <main className="flex flex-col w-full bg-gradient-to-br from-[#f8f8f5] via-white to-[#f8f8f5] dark:from-[#221e10] dark:via-[#1a1710] dark:to-[#221e10] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 sm:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C07766]/5 via-[#8DA399]/5 to-[#f4c025]/5"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md text-[#181611] dark:text-white text-sm font-semibold border border-white/50 dark:border-white/20 shadow-lg mb-8">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Published Research & Achievements
            </div>
            <h1 className="text-[#181611] dark:text-white text-4xl sm:text-5xl md:text-6xl font-[var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] mb-6">
              Science in Practice:<br />
              <span className="text-[#C07766]">Research & Achievements</span>
            </h1>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              We believe in transparency. Here, you&apos;ll find our published research and academic presentations, 
              showcasing our commitment to advancing women&apos;s health care.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4 sm:px-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-sm">
              Published Research
            </span>
            <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mt-4 mb-6 leading-[1.15] tracking-[-0.01em]">
              Research Publications
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Our peer-reviewed research published in leading medical journals, advancing the field of gynecology and women&apos;s health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C07766]/5 via-transparent to-[#8DA399]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                      <h3 className="text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-3 leading-[1.3] tracking-[-0.01em]">
                        {pub.title}
                      </h3>
                      <p className="text-[#8a8060] dark:text-gray-300 text-sm font-medium mb-2">
                        {pub.author}
                      </p>
                        {pub.journal && (
                        <p className="text-[#8a8060] dark:text-gray-400 text-sm italic">
                          {pub.journal}
                        </p>
                        )}
                    </div>
                  </div>
                  <a
                    href={pub.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <span className="material-symbols-outlined text-xl">article</span>
                    <span>View Publication (PDF)</span>
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-16 px-4 sm:px-10 bg-gradient-to-br from-[#f8f8f5]/50 to-transparent dark:from-[#221e10]/50">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#8DA399] dark:text-[#8DA399] font-bold tracking-widest uppercase text-sm">
              Academic Presentations
            </span>
            <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mt-4 mb-6 leading-[1.15] tracking-[-0.01em]">
              Last 3 Years of Presentations
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Our contributions to national and international conferences, sharing knowledge and advancing the field.
                    </p>
                  </div>

          <div className="space-y-12">
            {presentations.map((presentation) => (
              <div
                key={presentation.year}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 size-16 bg-[#8DA399] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {presentation.year}
                    </div>
                  <div>
                    <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-[1.15] tracking-[-0.01em]">
                      {presentation.year}
                    </h3>
                    <p className="text-[#8a8060] dark:text-gray-400 text-sm">
                      {presentation.items.length} presentations & activities
                    </p>
                  </div>
                      </div>
                <div className="space-y-4 pl-20">
                  {presentation.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative"
                    >
                      <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                        {item}
                      </p>
                  </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#C07766] to-[#8DA399] rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center size-20 bg-white/20 backdrop-blur-md rounded-full mb-6 shadow-xl">
                <span className="material-symbols-outlined text-5xl">chat</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-4 leading-[1.15] tracking-[-0.01em]">
                Questions About Our Research?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                We&apos;re here to explain any study in detail. Book a consultation to discuss how this 
                research applies to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#C07766] font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  <span>Book Consultation</span>
                </Link>
                <a
                  href="https://wa.me/919712982198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
