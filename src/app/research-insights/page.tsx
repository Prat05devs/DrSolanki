"use client";

import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<number>(1);

  // Helper function to highlight month and year in presentation items
  const formatPresentationItem = (item: string) => {
    // Match patterns like "Jan 2023-", "June 2023-", "Sept 2024-", etc.
    const monthYearPattern = /^([A-Za-z]+)\s+(\d{4})(\s*-\s*)/;
    const match = item.match(monthYearPattern);
    
    if (match) {
      const month = match[1];
      const year = match[2];
      const separator = match[3];
      const rest = item.substring(match[0].length);
      
      return (
        <>
          <span className="font-bold text-[#181611] dark:text-gray-100">{month} {year}</span>
          {separator}
          {rest}
        </>
      );
    }
    
    // If no match, return as is
    return item;
  };

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

  // Split publications into two tabs (13 in first tab, 12 in second)
  const publicationsTab1 = publications.slice(0, 13);
  const publicationsTab2 = publications.slice(13);
  const currentPublications = activeTab === 1 ? publicationsTab1 : publicationsTab2;

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
    <main className="flex flex-col w-full bg-white dark:bg-[#1a1710] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1597955942443-5a61862792aa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
          }}
        />
        {/* Black Fade Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              Research Publications &<br />
              <span className="text-[#C07766]">Academic Contributions</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-md">
              Evidence-based research published in leading medical journals, advancing the field of gynecology and women&apos;s health through rigorous scientific inquiry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base text-white/90">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C07766]">article</span>
                <span className="font-semibold">{publications.length}</span>
                <span>Publications</span>
          </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8DA399]">event</span>
                <span className="font-semibold">{presentations.reduce((acc, p) => acc + p.items.length, 0)}</span>
                <span>Presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C07766]">calendar_today</span>
                <span>2024-2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#fafafa] dark:bg-[#221e10]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="mb-6">
              <span className="text-[#C07766] dark:text-[#C07766] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">
                Published Research
            </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-tight mb-4">
                Research Publications
            </h2>
              <p className="text-[#4a4a4a] dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                Peer-reviewed research published in leading medical journals, contributing to evidence-based practice in gynecology and women&apos;s health.
            </p>
            </div>
          </div>

          <div>
            <ol className="space-y-0">
              {currentPublications.map((pub, index) => (
                <li
                key={pub.id}
                  className="py-6 sm:py-8"
                >
                  <div className="flex gap-4 sm:gap-6">

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white mb-3 leading-[1.4]">
                        {pub.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4 text-sm sm:text-base text-[#4a4a4a] dark:text-gray-300 leading-relaxed">
                        <p>
                          <span className="font-semibold">Authors:</span> {pub.author}
                        </p>
                        
                        {pub.journal && (
                          <p>
                            <span className="font-semibold">Journal:</span> <span className="italic">{pub.journal}</span>
                          </p>
                        )}
                        
                        {pub.citation && (
                          <p>
                            <span className="font-semibold">Citation:</span> {pub.citation}
                          </p>
                        )}
                        
                        {pub.doi && (
                          <p>
                            <span className="font-semibold">DOI:</span>{" "}
                            <a 
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#8DA399] dark:text-[#8DA399] hover:underline"
                            >
                              {pub.doi}
                            </a>
                          </p>
                        )}
                      </div>

                      {pub.pdfPath && (
                        <a
                          href={pub.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#181611] dark:bg-white text-white dark:text-[#181611] font-medium rounded hover:bg-[#2a2a2a] dark:hover:bg-gray-100 transition-colors text-sm"
                        >
                          <span className="material-symbols-outlined text-base">description</span>
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

          {/* Tabs */}
          <div className="mt-8 sm:mt-12">
            <div className="flex items-center gap-1 bg-white dark:bg-[#1a1710] border border-[#e5dddc] dark:border-white/10 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab(1)}
                className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base transition-all duration-200 touch-manipulation ${
                  activeTab === 1
                    ? "bg-[#181611] dark:bg-white text-white dark:text-[#181611] shadow-sm"
                    : "text-[#6a6a6a] dark:text-gray-400 hover:text-[#181611] dark:hover:text-white"
                }`}
              >
                Publications 1-13
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base transition-all duration-200 touch-manipulation ${
                  activeTab === 2
                    ? "bg-[#181611] dark:bg-white text-white dark:text-[#181611] shadow-sm"
                    : "text-[#6a6a6a] dark:text-gray-400 hover:text-[#181611] dark:hover:text-white"
                }`}
              >
                Publications 14-25
              </button>
            </div>
                  </div>
                    </div>
      </section>

      {/* Presentations Section */}
      <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <span className="text-[#8DA399] dark:text-[#8DA399] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">
              Academic Presentations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-tight mb-4">
              Conference Presentations
            </h2>
            <p className="text-[#4a4a4a] dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              Contributions to national and international conferences, sharing research findings and advancing clinical practice through knowledge dissemination.
                    </p>
                  </div>

          <div className="space-y-10 sm:space-y-12">
            {presentations.map((presentation) => (
              <div
                key={presentation.year}
                className="pb-8 last:pb-0"
              >
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-tight">
                    {presentation.year}
                  </h3>
                  <p className="text-[#6a6a6a] dark:text-gray-500 text-sm font-semibold uppercase tracking-wide mt-1">
                    {presentation.items.length} Presentations & Activities
                        </p>
                      </div>
                <div className="space-y-4 sm:space-y-5">
                  {presentation.items.map((item, idx) => (
                    <div
                      key={idx}
                    >
                      <p className="text-[#181611] dark:text-gray-100 text-base sm:text-lg leading-relaxed">
                        {formatPresentationItem(item)}
                      </p>
                  </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </main>
  );
}
