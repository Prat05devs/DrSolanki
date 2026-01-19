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
  // Helper function to format presentation items with bold headings and dates
  const formatPresentationItem = (item: string) => {
    const formatHeading = (headingText: string) => {
      const [prefix, suffix] = headingText.split(" | ");
      return (
        <span className="font-bold text-[#181611] dark:text-white">
          {prefix}
          {suffix ? (
            <>
              {" | "}
              <span className="underline">{suffix}</span>
            </>
          ) : null}
        </span>
      );
    };

    const formatLine = (line: string, idx: number) => {
      const trimmedLine = line.trim();
      const quotedLineMatch = trimmedLine.match(/^"([^"]+)"$/);

      return (
        <span key={idx} className="block">
          {quotedLineMatch ? formatHeading(quotedLineMatch[1]) : trimmedLine}
        </span>
      );
    };

    const quotedHeadingPattern = /^"([^"]+)"\s*([\s\S]*)$/;
    const quotedMatch = item.match(quotedHeadingPattern);

    if (quotedMatch) {
      const heading = quotedMatch[1];
      const remainder = quotedMatch[2]?.trim() ?? "";
      const lines = remainder
        ? remainder
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean)
        : [];

      return (
        <>
          {formatHeading(heading)}
          {lines.length > 0 ? (
            <>
              <br />
              {lines.map((line, idx) => formatLine(line, idx))}
            </>
          ) : null}
        </>
      );
    }

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
          <span className="font-bold text-[#181611] dark:text-gray-100">
            {month} {year}
          </span>
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
      topic: "Urine Leakage: Regain Your Confidence",
      quote: "You deserve to live without embarrassment.",
      benefit: "Gentle regenerative treatments help you laugh, exercise, and live freely again.",
      title: "Solanki, Smit Bharat. Regenerative Synergy: Combining Platelet-rich Plasma with Transcutaneous Temperature-controlled Radiofrequency for Enhanced Treatment of Stress Urinary Incontinence in Peri- and Postmenopausal Women. Journal of Mid-life Health 16(2):p 179-185, Apr–Jun 2025.",
      doi: "10.4103/jmh.jmh_34_25",
      pdfPath: "/pdfs/publication-1.pdf"
    },
    {
      id: 2,
      topic: "Overactive Bladder: Take Back Control",
      quote: "Your bladder should not control your life.",
      benefit: "Non-invasive therapies restore calm and comfort.",
      title: "Efficacy of Transcutaneous Temperature-controlled Radiofrequency for Overactive Bladder.",
      citation: "IUGA Scientific Meeting 2024. Int Urogynecol J (2024). https://doi.org/10.1007/s00192-024-05892-3",
      pdfPath: "/pdfs/publication-2.pdf"
    },
    {
      id: 3,
      topic: "Vaginal Rejuvenation: Comfort, Health & Confidence",
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
      topic: "Painful Intercourse & Vaginismus: Gentle Healing",
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
      year: 2025,
      items: [
        "\"Guest Faculty | 112th AMASI Skill Course & FMAS Examination, Parul Institute of Medical Sciences and Research, Baroda\"",
        "\"Oral Presentation | 50th Annual Meeting IUGA-EUGA 2025, Barcelona, Spain\"\nPelvic Floor Muscle Training with Biofeedback in Postpartum POP",
        "\"Poster | 50th Annual Meeting IUGA-EUGA 2025, Barcelona\"\nBladder Neck Mobility Assessment in SUI Using Transperineal Ultrasonography",
        "\"Invited Session | Fertility Update, BOGS\"\nEndometrial Microbiome in Fertility - New Frontiers",
        "\"Faculty | ICS-EUS 2025, Abu Dhabi\"\nPoster: Diode Laser Therapy for Vaginal Rejuvenation - Prospective Study\nOral Presentation (Best in Category Award - Female Sexual Dysfunction): Botulinum Toxin for Refractory Vaginismus - RCT",
        "\"Faculty | 5th Congress of International Society of Uterus Transplantation 2025, Antalya, Turkey\"\n\"Posters\"\n1. Establishing a Uterus Transplant Program in India\n2. Dual Laparoscopic-Assisted Uterus Retrieval from Living Donors\n3. Comprehensive Perioperative Protocol in Uterus Transplantation\n4. Immunosuppressive Strategy in Uterus Transplantation\n\"Oral Presentations\"\n5. Early Recipient Outcomes after Dual Living Donor Uterus Transplantation\n6. Ethical Challenges in Living Donor Uterus Transplantation under NOTTO Framework"
      ]
    },
    {
      year: 2024,
      items: [
        "\"Faculty | FEFFA Annual Conference 2024, Medanta, Gurugram\"\nCase discussion: Hiding Under the Sheets - Sexual Pain",
        "\"Abstract Poster | IUGA 49th Annual Meeting 2024, Singapore\"\nEfficacy of Transcutaneous Temperature-Controlled Radiofrequency for Overactive Bladder",
        "\"Invited Lecture | WWWCON 2024, Baroda (FOGSI National Conference)\"\nTTCRF in Overactive Bladder",
        "\"Podium Presentation | DiaCare Con 2024, Ahmedabad\"\nEmpowering Maternal Health - Preventing GDM from Becoming Chronic\n(In collaboration with Vcare Denmark)",
        "\"Session Chair | 34th Annual Conference of ISOT 2024, Ahmedabad\"\nUterine Transplant Development Worldwide\nSpeaker: Dr. Stefan G. Tullius",
        "\"Faculty | 44th Congress of the Société Internationale d'Urologie SIU 2024, New Delhi\"\nTraining Workshop",
        "\"Faculty Presentation | West Zone- Indian Menopause Society WZ-IMSCON 2024, Udaipur\"\nAlternative Therapy for Stress Urinary Incontinence"
      ]
    },
    {
      year: 2023,
      items: [
        "\"Faculty | 65th All India Congress of Obstetrics & Gynaecology AICOG 2023, Kolkata\"\nPanel discussion on Male Subfertility",
        "\"Video Presentation | 18th AAGL International Congress, Mumbai\"\nLaparoscopic Excision of Rudimentary Uterine Horn\n(\"Unravelling Uterine Issues and Beyond\", IAGE-FOGSI supported)",
        "\"Poster Presentation | IUGA 48th Annual Meeting- The Hague, The Netherlands\"\nTTCRF: Groundbreaking Technology - Female SUI Can Be Treated Non-Invasively with Vulvovaginal Rejuvenation?",
        "\"Moderator | IMS West Zonal Conference 2023, Surat\"\nPanel: Complications of Urogynecological Surgeries",
        "\"Invited Talk | 33rd Annual Conference of ISOT 2023, Kolkata\"\nCurrent Status, Challenges and Future of Uterus Transplant in India\nChairperson: Dr. Stefan G. Tullius",
        "\"Video Presentation (YAG Category) | APAGE Annual Congress 2023, Singapore\"\nLaparoscopic Rudimentary Uterine Horn Excision in Fertility",
        "\"National Contributor | NOTTO Transplant Manual 2023\"\nChapter contribution on Uterus Transplantation\n(NOTTO, DGHS, Ministry of Health & Family Welfare, Government of India)",
        "\"Podium Presentation | ESAG 7th World Congress 2023, London\"\nTTCRF in Overactive Bladder"
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
                From fertility solutions to bladder control, vaginal health, and safe surgeries, every treatment is designed to restore
                your confidence, comfort, and wellbeing.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="/appointment"
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
