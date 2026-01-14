"use client";

import Footer from "@/components/global/Footer";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface Publication {
  id: number;
  title: string;
  author: string;
  journal?: string;
  year?: number;
  doi?: string;
  pdfPath?: string;
  citation?: string;
}

interface Presentation {
  year: number;
  items: string[];
}

export default function ResearchInsightsPage() {
  const publications: Publication[] = [
    // 2024 Publications
    {
      id: 1,
      title: "A study of peripheral nerve block for analgesia during caesarean section",
      author: "Solanki S, Mishra V",
      journal: "PMJUA",
      year: 2024,
      citation: "PMJUA [Internet]. 2024 Jan. 3 [cited 2024 Feb. 20];8(3-4):46-57"
    },
    {
      id: 2,
      title: "Prevention of infection and assessment of fever following laparoscopic hysterectomy",
      author: "Mishra VV, Solanki SB, Mishra NV, Aggarwal R, Shajan A",
      journal: "The New Indian Journal of OBGYN",
      year: 2024,
      citation: "2024; 10(2): 242 - 48"
    },
    {
      id: 3,
      title: "Efficacy of Transcutaneous temperature-controlled radiofrequency for overactive bladder",
      author: "Smit Bharat Solanki",
      journal: "IUGA Scientific Meeting 2024",
      year: 2024,
      citation: "Int Urogynecol J (2024). https://doi.org/10.1007/s00192-024-05892-3"
    },
    {
      id: 4,
      title: "Surgical management for stress urinary incontinence",
      author: "Smit B. Solanki, Vineet V. Mishra",
      journal: "MEDICHUB MEDIA",
      year: 2024,
      doi: "10.26416/Gine.45.3.2024.10083",
      citation: "First published: 30 septembrie 2024"
    },
    {
      id: 5,
      title: "Evaluating the impact of the Cordia® digital health platform on maternal care in underserved areas: a pilot study",
      author: "Smit B. Solanki",
      journal: "MEDICHUB MEDIA",
      year: 2024,
      doi: "10.26416/Gine.46.4.2024.10361",
      citation: "First published: 29 noiembrie 2024"
    },
    {
      id: 6,
      title: "Laparoscopy in urogynecology: advances, challenges and future directions",
      author: "Smit B. Solanki, Vineet V. Mishra",
      journal: "MEDICHUB MEDIA",
      year: 2024,
      doi: "10.26416/Gine.46.4.2024.10364",
      citation: "First published: 29 noiembrie 2024"
    },
    {
      id: 7,
      title: "Transcutaneous Temperature-controlled Radiofrequency for Vaginal Rejuvenation",
      author: "Solanki, Smit Bharat; Mishra, Vineet; Mishra, Nita; Desai, Sejal Ajmera; Alinsod, Red",
      journal: "Journal of Mid-life Health",
      year: 2024,
      doi: "10.4103/jmh.jmh_32_24",
      citation: "15(4):p 250-257, Oct–Dec 2024"
    },
    // 2025 Publications
    {
      id: 8,
      title: "Pregnancy after kidney transplantation: effect on maternal and foetal health",
      author: "Solanki, S., & Mishra, V.",
      journal: "KIDNEYS",
      year: 2025,
      doi: "10.22141/2307-1257.14.1.2025.489",
      citation: "14(1), 2025"
    },
    {
      id: 9,
      title: "Reducing Surgical Site Infections in Laparoscopic Gynecology: A Comparative Study of the Aesculap Aicon Sterile Container System vs. Traditional Packaging",
      author: "Solanki SB, Dhiman AS, Mishra V",
      journal: "Journal of Patient Safety and Quality Improvement",
      year: 2025,
      doi: "10.22038/psj.2025.85955.1459",
      citation: "13(1): 3-9, 2025"
    },
    {
      id: 10,
      title: "Comparative efficacy of granulocyte colony stimulating factor and platelet-rich plasma on clinical pregnancy rates and endometrial outcomes in women undergoing frozen embryo transfer: a randomized controlled trial with 560 subjects",
      author: "Solanki SB",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "47(1):46-52, 2025",
      pdfPath: "/pdfs/article4.pdf"
    },
    {
      id: 11,
      title: "Takotsubo Cardiomyopathy Following Intravaginal Local Anesthetic with Epinephrine in a Patient Undergoing McIndoe Vaginoplasty: A Rare Perioperative Event",
      author: "Solanki SB, Patel S",
      journal: "J South Asian Feder Obst Gynae",
      year: 2025,
      citation: "17(2):223–225, 2025"
    },
    {
      id: 12,
      title: "Managing pregnancy in a patient with Von Willebrand disease: a case report of tailored hemostatic care",
      author: "Solanki SB",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "48(2):15-18, 2025"
    },
    {
      id: 13,
      title: "Regenerative Synergy: Combining Platelet-rich Plasma with Transcutaneous Temperature-controlled Radiofrequency for Enhanced Treatment of Stress Urinary Incontinence in Peri- and Postmenopausal Women",
      author: "Solanki, Smit Bharat",
      journal: "Journal of Mid-life Health",
      year: 2025,
      doi: "10.4103/jmh.jmh_34_25",
      citation: "16(2):p 179-185, Apr–Jun 2025",
      pdfPath: "/pdfs/article1.pdf"
    },
    {
      id: 14,
      title: "Impact of 3D high-definition laparoscopy on total laparoscopic hysterectomy: a body mass index-stratified retrospective analysis",
      author: "Solanki SB, Mishra VV, Dhiman AS",
      journal: "Ann Saudi Med",
      year: 2025,
      doi: "10.5144/0256-4947.2025.243",
      citation: "45(4): 243-248, 2025",
      pdfPath: "/pdfs/article2.pdf"
    },
    {
      id: 15,
      title: "Botulinum Toxin for Refractory Vaginismus: A Prospective, Randomized, Controlled Trial",
      author: "S Solanki",
      journal: "Continence",
      year: 2025,
      doi: "10.1016/j.cont.2025.102165",
      citation: "Volume 15, Supplement, 2025"
    },
    {
      id: 16,
      title: "Two triggers, no oocytes: a rare case of genuine empty follicle syndrome overcome by dual trigger protocol",
      author: "Solanki SB",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "49(3):24-25, 2025"
    },
    {
      id: 17,
      title: "Entrapment of the intrauterine device removing hook during difficult Mirena removal: a case report",
      author: "Solanki SB, Rathore AS, Patel S",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "49(3):42-44, 2025"
    },
    {
      id: 18,
      title: "Assessment of Bladder Neck Mobility in Stress Urinary Incontinence Using Rotational Angles and Pubourethral Distance: A Transperineal Ultrasonography Study",
      author: "Smit Bharat Solanki",
      journal: "IUGA/EUGA Joint Meeting 2025",
      year: 2025,
      citation: "IUGA 50th Annual Meeting – Barcelona, June 18-21, 2025"
    },
    {
      id: 19,
      title: "Evaluating the Efficacy of Pelvic Floor Muscle Training Enhanced by Biofeedback in Postpartum Women With Pelvic Organ Prolapse Symptoms",
      author: "Smit Bharat Solanki",
      journal: "IUGA/EUGA Joint Meeting 2025",
      year: 2025,
      citation: "IUGA 50th Annual Meeting – Barcelona, June 18-21, 2025"
    },
    {
      id: 20,
      title: "Overcoming Refractory Vaginismus with Intra-vaginal Botulinum Toxin: A Case of Restored Marital Harmony",
      author: "Solanki S, Nayani Z",
      journal: "Journal of Psychosexual Health",
      year: 2025,
      doi: "10.1177/26318318251394062",
      citation: "2025"
    },
    {
      id: 21,
      title: "MECHANISMS AND OUTCOMES OF 1470NM LASER THERAPY FOR VAGINAL REJUVENATION: A MULTI-OMICS OBSERVATIONAL STUDY",
      author: "Smit Bharat Solanki, & Dutta, D.",
      journal: "Jurnal Rekonstruksi Dan Estetik",
      year: 2025,
      doi: "10.20473/jre.v10i2.74266",
      citation: "10(2): 90–101, 2025",
      pdfPath: "/pdfs/article3.pdf"
    },
    {
      id: 22,
      title: "Pheochromocytoma in pregnancy: a case report and review of management challenges",
      author: "Rathore AS, Solanki SB",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "50(4):10-13, 2025"
    },
    {
      id: 23,
      title: "Predictors of Gonadotropin Efficiency Index (GEI): a regression-based model using patient and stimulation parameters in controlled ovarian stimulation cycles",
      author: "Solanki SB, Shah D",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "50(4):24-29, 2025",
      pdfPath: "/pdfs/article5.pdf"
    },
    {
      id: 24,
      title: "Comparative analysis of recombinant FSH versus human menopausal gonadotropin on embryo profile and gonadotropin efficiency in IVF cycles: a matched cohort study",
      author: "Solanki SB, Shah D",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "50(4):38-43, 2025"
    },
    {
      id: 25,
      title: "Enhanced recovery pathway for total laparoscopic hysterectomy performed by a single freelancing gynecologic surgeon",
      author: "Solanki SB",
      journal: "Ginecologia.ro",
      year: 2025,
      citation: "50(4):44-48, 2025"
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
      <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#C07766]/5"></div>
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md text-[#181611] dark:text-white text-xs sm:text-sm font-semibold border border-white/50 dark:border-white/20 shadow-lg mb-6 sm:mb-8">
              <span className="material-symbols-outlined text-base sm:text-[18px]">verified</span>
              <span className="hidden sm:inline">Published Research & Achievements</span>
              <span className="sm:hidden">Research</span>
            </div>
            <h1 className="text-[#181611] dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.15] tracking-[-0.01em] mb-4 sm:mb-6 px-2">
              Science in Practice:<br />
              <span className="text-[#C07766]">Research & Achievements</span>
            </h1>
            <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto px-2">
              We believe in transparency. Here, you&apos;ll find our published research and academic presentations, 
              showcasing our commitment to advancing women&apos;s health care.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Published Research
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mt-3 sm:mt-4 mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em] px-2">
              Research Publications (2024-2025)
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2">
              Our peer-reviewed research published in leading medical journals over the last two years, advancing the field of gynecology and women&apos;s health.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="space-y-0">
              {publications.map((pub, index) => (
                <li
                  key={pub.id}
                  className="py-6 sm:py-8 border-b border-[#e5dddc] dark:border-white/10 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="flex-shrink-0 size-8 sm:size-10 bg-[#C07766]/10 dark:bg-[#C07766]/20 text-[#C07766] dark:text-[#C07766] font-bold rounded-full flex items-center justify-center text-sm sm:text-base">
                          {index + 1}
                        </span>
                        {pub.year && (
                          <span className="px-2.5 sm:px-3 py-1 bg-[#8DA399]/10 dark:bg-[#8DA399]/20 text-[#8DA399] dark:text-[#8DA399] text-xs font-semibold rounded">
                            {pub.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-2 sm:mb-3 leading-[1.4] tracking-[-0.01em]">
                        {pub.title}
                      </h3>
                      
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        <p className="text-[#8a8060] dark:text-gray-300 text-sm sm:text-base font-medium">
                          <span className="font-semibold">Authors:</span> {pub.author}
                        </p>
                        
                        {pub.journal && (
                          <p className="text-[#8a8060] dark:text-gray-400 text-sm sm:text-base">
                            <span className="font-semibold">Journal:</span> <span className="italic">{pub.journal}</span>
                          </p>
                        )}
                        
                        {pub.citation && (
                          <p className="text-[#8a8060] dark:text-gray-500 text-sm sm:text-base">
                            <span className="font-semibold">Citation:</span> {pub.citation}
                          </p>
                        )}
                        
                        {pub.doi && (
                          <p className="text-[#8DA399] dark:text-[#8DA399] text-sm sm:text-base font-medium">
                            <span className="font-semibold">DOI:</span> {pub.doi}
                          </p>
                        )}
                      </div>

                      {pub.pdfPath && (
                        <a
                          href={pub.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-medium rounded-lg transition-colors text-sm sm:text-base touch-manipulation"
                        >
                          <span className="material-symbols-outlined text-base sm:text-lg">article</span>
                          <span>View PDF</span>
                          <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-[#f8f8f5]/50 dark:bg-[#221e10]/50">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#8DA399] dark:text-[#8DA399] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Academic Presentations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mt-3 sm:mt-4 mb-4 sm:mb-6 leading-[1.15] tracking-[-0.01em] px-2">
              Last 3 Years of Presentations
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2">
              Our contributions to national and international conferences, sharing knowledge and advancing the field.
                    </p>
                  </div>

          <div className="space-y-8 sm:space-y-12">
            {presentations.map((presentation) => (
              <div
                key={presentation.year}
                className="relative"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-[1.15] tracking-[-0.01em]">
                      {presentation.year}
                    </h3>
                    <p className="text-[#8a8060] dark:text-gray-400 text-xs sm:text-sm">
                      {presentation.items.length} presentations & activities
                    </p>
                  </div>
                      </div>
                <div className="space-y-3 sm:space-y-4 pl-0 sm:pl-16 md:pl-20">
                  {presentation.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative"
                    >
                      <p className="text-[#8a8060] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto">
          <div className="relative bg-[#C07766] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl text-center overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center size-16 sm:size-20 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6 shadow-xl border border-white/30">
                <span className="material-symbols-outlined text-3xl sm:text-5xl">chat</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em] px-2">
                Questions About Our Research?
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2">
                We&apos;re here to explain any study in detail. Book a consultation to discuss how this 
                research applies to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#C07766] font-semibold rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base touch-manipulation"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">calendar_month</span>
                  <span>Book Consultation</span>
                </Link>
                <a
                  href={getWhatsAppUrl("researchQuestions")}
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

      <Footer />
    </main>
  );
}
