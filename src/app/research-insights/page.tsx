"use client";

import Footer from "@/components/global/Footer";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface Publication {
  id: number;
  topic: string;
  quote: string;
  benefit: string;
  title: string;
  doi?: string;
  pdfPath?: string;
  citation?: string;
}

interface Presentation {
  year: number;
  items: string[];
}

export default function ResearchInsightsPage() {
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
    {
      id: 1,
      topic: "Urine Leakage — Regain Your Confidence",
      quote: "You deserve to live without embarrassment.",
      benefit: "Gentle regenerative treatments help you laugh, exercise, and live freely again.",
      title: "Solanki, Smit Bharat. Regenerative Synergy: Combining Platelet-rich Plasma with Transcutaneous Temperature-controlled Radiofrequency for Enhanced Treatment of Stress Urinary Incontinence in Peri- and Postmenopausal Women. Journal of Mid-life Health 16(2):p 179-185, Apr–Jun 2025.",
      doi: "10.4103/jmh.jmh_34_25",
      pdfPath: "/pdfs/publication-1.pdf"
    },
    {
      id: 2,
      topic: "Overactive Bladder — Take Back Control",
      quote: "Your bladder should not control your life.",
      benefit: "Non-invasive therapies restore calm and comfort.",
      title: "Efficacy of Transcutaneous Temperature-controlled Radiofrequency for Overactive Bladder.",
      citation: "IUGA Scientific Meeting 2024. Int Urogynecol J (2024). https://doi.org/10.1007/s00192-024-05892-3",
      pdfPath: "/pdfs/publication-2.pdf"
    },
    {
      id: 3,
      topic: "Vaginal Rejuvenation — Comfort, Health & Confidence",
      quote: "Feeling comfortable in your body is your right.",
      benefit: "Restores natural tissue health safely.",
      title: "Solanki, Smit Bharat; Mishra, Vineet; Mishra, Nita; Desai, Sejal Ajmera; Alinsod, Red. Transcutaneous Temperature-controlled Radiofrequency for Vaginal Rejuvenation. Journal of Mid-life Health 15(4):p 250-257, Oct–Dec 2024.",
      doi: "10.4103/jmh.jmh_32_24",
      pdfPath: "/pdfs/publication-3.pdf"
    },
    {
      id: 4,
      topic: "Advanced Laser Vaginal Rejuvenation",
      quote: "Science-backed rejuvenation, not cosmetic promises.",
      benefit: "Long-lasting, natural tissue healing.",
      title: "Smit Bharat Solanki, & Dutta, D. (2025). MECHANISMS AND OUTCOMES OF 1470NM LASER THERAPY FOR VAGINAL REJUVENATION: A MULTI-OMICS OBSERVATIONAL STUDY. Jurnal Rekonstruksi Dan Estetik, 10(2), 90–101.",
      doi: "10.20473/jre.v10i2.74266",
      pdfPath: "/pdfs/publication-4.pdf"
    },
    {
      id: 5,
      topic: "Painful Intercourse & Vaginismus — Gentle Healing",
      quote: "Intimacy should never be painful.",
      benefit: "Gentle treatment restores confidence and closeness.",
      title: "S Solanki. Botulinum Toxin for Refractory Vaginismus: A Prospective, Randomized, Controlled Trial. Continence. Volume 15, Supplement, 2025, 102165.",
      doi: "10.1016/j.cont.2025.102165",
      citation: "https://www.sciencedirect.com/science/article/pii/S2772973725007829",
      pdfPath: "/pdfs/publication-5.pdf"
    },
    {
      id: 6,
      topic: "Restoring Married Life in Vaginismus",
      quote: "Because relationships deserve happiness.",
      benefit: "Care that heals both body and emotions.",
      title: "Solanki S, Nayani Z. Overcoming Refractory Vaginismus with Intra-vaginal Botulinum Toxin: A Case of Restored Marital Harmony. Journal of Psychosexual Health. 2025;0(0).",
      doi: "10.1177/26318318251394062",
      pdfPath: "/pdfs/publication-6.pdf"
    },
    {
      id: 7,
      topic: "IVF Care When Others Have Failed",
      quote: "Hope is always possible.",
      benefit: "Improving implantation and pregnancy chances.",
      title: "Solanki SB. Comparative efficacy of granulocyte colony stimulating factor and platelet-rich plasma on clinical pregnancy rates and endometrial outcomes in women undergoing frozen embryo transfer: a randomized controlled trial with 560 subjects.",
      citation: "Ginecologia.ro. 2025;47(1):46-52.",
      pdfPath: "/pdfs/publication-7.pdf"
    },
    {
      id: 8,
      topic: "Solving Rare IVF Failures",
      quote: "Rare problems need experienced solutions.",
      benefit: "Personalized fertility strategies.",
      title: "Solanki SB. Two triggers, no oocytes: a rare case of genuine empty follicle syndrome overcome by dual trigger protocol.",
      citation: "Ginecologia.ro. 2025;49(3):24-25.",
      pdfPath: "/pdfs/publication-8.pdf"
    },
    {
      id: 9,
      topic: "Gentle, Advanced Hysterectomy",
      quote: "Smaller scars. Faster recovery. Greater peace of mind.",
      benefit: "Safe, modern surgery.",
      title: "Solanki SB, Mishra VV, Dhiman AS. Impact of 3D high definition laparoscopy on total laparoscopic hysterectomy: a body mass index-stratified retrospective analysis. Ann Saudi Med 2025; 45(4): 243-248.",
      doi: "10.5144/0256-4947.2025.243",
      pdfPath: "/pdfs/publication-9.pdf"
    },
    {
      id: 10,
      topic: "Faster Recovery After Hysterectomy",
      quote: "Healing should be quick and comfortable.",
      benefit: "Early mobility, less pain.",
      title: "Solanki SB. Enhanced recovery pathway for total laparoscopic hysterectomy performed by a single freelancing gynecologic surgeon.",
      citation: "Ginecologia.ro. 2025;50(4):44-48.",
      pdfPath: "/pdfs/publication-10.pdf"
    },
    {
      id: 11,
      topic: "Long-Term Relief From Urine Leakage Surgery",
      quote: "Results that last.",
      benefit: "Confidence in long-term outcomes.",
      title: "Mishra, Vineet & Solanki, Smit & Aggarwal, Rohina & Shajan, Athulya. (2024). Patients with transobturator tape: a retrospective observational study of ten-year follow-up. Urogynaecologia. 36.",
      doi: "10.4081/uij.2024.318",
      pdfPath: "/pdfs/publication-11.pdf"
    },
    {
      id: 12,
      topic: "Safe Pregnancy in High-Risk Conditions",
      quote: "Motherhood should never feel impossible.",
      benefit: "Careful planning ensures safety.",
      title: "Solanki, S., & Mishra, V. (2025). Pregnancy after kidney transplantation: effect on maternal and foetal health. KIDNEYS, 14(1).",
      doi: "10.22141/2307-1257.14.1.2025.489",
      pdfPath: "/pdfs/publication-12.pdf"
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
        <div className="absolute inset-0 bg-black/55 dark:bg-black/35"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">
              Research Publications &<br />
              <span className="text-white">Academic Contributions</span>
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
              Evidence-based research published in leading medical journals, advancing the field of gynecology and women&apos;s health through rigorous scientific inquiry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white">article</span>
                <span className="font-semibold">70+</span>
                <span>Publications</span>
          </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white">event</span>
                <span className="font-semibold">24+</span>
                <span>presentations in last 3 years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#F7F3EE] dark:bg-[#1a1710]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="mb-6">
              <span className="text-[#2F4A45] dark:text-[#2F4A45] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">
                Evidence-Based Publications
            </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-tight mb-4">
                Advanced Gynecology Care. Compassionate, Safe, and Personal.
            </h2>
              <p className="text-[#4a4a4a] dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
                From fertility solutions to bladder control, vaginal health, and safe surgeries — every treatment is designed to restore
                your confidence, comfort, and wellbeing.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2F4A45] text-white dark:bg-white dark:text-[#181611] text-sm font-semibold"
                >
                  Book a Consultation
                </Link>
                <Link
                  href={getWhatsAppUrl("researchQuestions")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#2F4A45] text-[#2F4A45] dark:border-white dark:text-white text-sm font-semibold"
                >
                  Learn How I Can Help You
                </Link>
              </div>
              <p className="text-[#4a4a4a] dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Evidence-based treatments supported by published research and years of real patient success.
              </p>
            </div>
          </div>

          <div>
            <ol className="space-y-6 sm:space-y-8">
              {publications.map((pub, index) => (
                <li
                key={pub.id}
                  className="rounded-2xl border border-[#2F4A45]/15 dark:border-white/10 bg-white dark:bg-[#1a1710] p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-sm sm:text-base font-bold text-[#181611] dark:text-white">
                      {pub.topic}
                </div>

                    <div>
                      <p className="text-lg sm:text-xl font-[var(--font-playfair)] font-bold text-[#181611] dark:text-white leading-[1.4] mb-2">
                        {pub.quote}
                      </p>
                      <p className="text-[#4a4a4a] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        {pub.benefit}
                    </p>
                  </div>

                    <div className="text-sm sm:text-base text-[#4a4a4a] dark:text-gray-300 leading-relaxed break-words">
                      <p className="font-semibold text-[#181611] dark:text-white mb-2">Publication Reference</p>
                      <p className="mb-2 break-words">{pub.title}</p>
                      {pub.citation && <p className="mb-2 break-words">{pub.citation}</p>}
                      {pub.doi && (
                        <p>
                          <span className="font-semibold">DOI:</span>{" "}
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2F4A45] dark:text-[#2F4A45] hover:underline break-all"
                          >
                            {pub.doi}
                          </a>
                        </p>
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
