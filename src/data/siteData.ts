/**
 * Single Source of Truth - Dr. Smit Bharat Solanki Website Data
 * 
 * This file contains all website content data. Update this file to change
 * content across the entire website.
 */

// ============================================================================
// TYPES
// ============================================================================

export interface DoctorProfile {
  name: string;
  credentials: string[];
  currentPosition: {
    title: string;
    department: string;
    hospital: string;
    institution: string;
    university: string;
    location: string;
  };
  specializations: string[];
  tagline: string;
  philosophy: string[];
  mission: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  location?: string;
  description?: string;
  thesis?: {
    title: string;
    description: string;
  };
}

export interface Certification {
  title: string;
  year: string;
  institution: string;
  location?: string;
}

export interface ClinicalExperience {
  position: string;
  department: string;
  institution: string;
  location: string;
  period: string;
  focus?: string[];
}

export interface Hospital {
  name: string;
  slug: string;
  city: string;
  description: string;
  features: string[];
  tagline?: string;
  mapLink?: string;
  timing?: string;
  schedule?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
  conditions?: string[];
  considerations?: string[];
  note?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  locations: string[];
  consultationNote: string;
}

export interface Testimonial {
  name: string;
  age: number;
  treatment: string;
  quote: string;
  fullStory: string;
  rating?: number;
  image?: string;
}

// ============================================================================
// DOCTOR PROFILE
// ============================================================================

export const doctorProfile: DoctorProfile = {
  name: "Dr Smit Bharat Solanki",
  credentials: [
    "M.B.B.S.",
    "M.S. (OBGYN)",
    "F.R.M.",
    "FMAS",
    "M.B.A. (Healthcare management)"
  ],
  currentPosition: {
    title: "Program Director",
    department: "Reproductive Medicine and IVF Services",
    hospital: "Parul Sevashram Hospital",
    institution: "Parul Institute of Medical Sciences and Research",
    university: "Parul University",
    location: "Vadodara"
  },
  specializations: [
    "Robotic and Laparoscopic Gynec Surgeon",
    "Endometriosis Surgeon"
  ],
  tagline: "Where Compassion Meets Advanced Women's Care",
  philosophy: [
    "With a gentle heart and a surgeon's precision, a space where healing begins for women of substance",
    "Compassion, and sensitivity, gynaecological concerns are deeply understood with respectful care.",
    "Internationally accepted advanced robotic surgery systems like da Vinci Si System ensure top of the line surgical standards",
    "Advanced gynaecological solutions tailored to each woman's unique needs.",
    "Care is delivered with a perfect balance of innovation and warmth through robotic and laparoscopic surgery",
    "From robotic and laparoscopic surgery to reproductive medicine, fertility preservation, aesthetic gynaecology, and uro-gynaecology,",
    "Trusted by thousands of women in Gujarat and globally",
    "Dr. Smit Bharat Solanki is committed to restoring health, confidence, and quality of life-one woman at a time."
  ],
  mission: "Begin your journey to compassionate, world-class women's care with Dr Smit Bharat Solanki"
};

// ============================================================================
// EDUCATION & TRAINING
// ============================================================================

export const education: Education[] = [
  {
    degree: "M.B.B.S.",
    period: "2005–2010",
    institution: "Smt. NHL Municipal Medical College",
    location: "Ahmedabad"
  },
  {
    degree: "Rotatory Internship",
    period: "2010–2011",
    institution: "V.S. Hospital",
    location: "Ahmedabad",
    description: "Comprehensive hands-on training across medical and surgical specialties."
  },
  {
    degree: "MS Obstetrics & Gynaecology",
    period: "2012 – 2015",
    institution: "V.S. Hospital",
    location: "Ahmedabad",
    thesis: {
      title: "Role of Diagnostic Hysteroscopy in the Management of Infertility",
      description: "A strong academic foundation in infertility evaluation and minimally invasive techniques."
    }
  }
];

export const certifications: Certification[] = [
  {
    title: "FOGSI Certified Course in Basic Obstetric Ultrasound",
    year: "2016",
    institution: "CeMAST",
    location: "Mumbai"
  },
  {
    title: "Operative Techniques in Gynaecological Endoscopy",
    year: "2017",
    institution: "Paul P.G. Hospital",
    location: "Kochi"
  },
  {
    title: "FOGSI Certified Fellowship in Advanced Gynaecological Laparoscopy",
    year: "2017",
    institution: "Sumiran Hospital & Radhe Endoscopy Centre",
    location: "Under Dr. Mehul Sukhadiya"
  },
  {
    title: "MRCOG Part 1",
    year: "2018",
    institution: "Royal College of Obstetricians & Gynaecologists",
    location: "London, UK"
  }
];

export const clinicalExperience: ClinicalExperience[] = [
  {
    position: "Clinical Fellow",
    department: "Reproductive Medicine & Surgery",
    institution: "High-Risk Obstetrics & Reproductive Medicine Department, IKDRC",
    location: "Ahmedabad",
    period: "2019–2020",
    focus: [
      "Fertility-enhancing procedures",
      "High-risk obstetrics",
      "Advanced reproductive surgery"
    ]
  },
  {
    position: "Senior Resident",
    department: "Reproductive Medicine & Surgery",
    institution: "IKDRC",
    location: "Ahmedabad",
    period: "2020–2021"
  },
  {
    position: "Assistant Professor",
    department: "Reproductive Medicine & Surgery",
    institution: "IKDRC",
    location: "Ahmedabad",
    period: "2021–2025",
    focus: [
      "Patient care",
      "Teaching",
      "Research",
      "Surgical training"
    ]
  },
  {
    position: "Program director and clinical lead in Reproductive medicine and IVF services",
    department: "Reproductive Medicine and IVF Services",
    institution: "Parul Sevashram Hospital, Parul Institute of Medical Sciences & Research, Parul University",
    location: "Vadodara",
    period: "January 2026–Present"
  }
];

export const professionalSummary = "Dr. Smit Bharat Solanki brings together rigorous academic training, advanced surgical expertise, and years of dedicated clinical experience in reproductive medicine and gynaecology. This journey reflects a commitment to international standards of care, continuous learning, and compassionate practice.";

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const contactInfo: ContactInfo = {
  phone: "+919712982198",
  email: "drsmitbharat@gmail.com",
  locations: ["Ahmedabad", "Vadodara"],
  consultationNote: "For Consultations at Vadodara & Ahmedabad schedule your appointments now!"
};

export const consultationMessage = {
  heading: "Dr Smit Bharat Solanki - A Commitment to Global Standards & Local Trust",
  description: "With training aligned to international guidelines and extensive experience in premier institutions, Dr. Smit Bharat Solanki is trusted by patients from Vadodara, Ahmedabad, and beyond. Every consultation reflects a blend of scientific excellence, clinical precision, and compassionate care.",
  philosophy: "Dr Smit Bharat Solanki's believes that surgery should do more than treat the problem. It should allow you to heal faster, feel safer, and return to your life with confidence.",
  tagline: "A calm mind heals faster. Let us help you recover with care, safety, and confidence."
};

// ============================================================================
// HOSPITALS & LOCATIONS
// ============================================================================

export const hospitals: Hospital[] = [
  {
    name: "Parth Hospital",
    slug: "parth",
    city: "Ahmedabad",
    description: "Parth Hospital is committed to providing accessible, advanced, and compassionate gynaecological care for women—today and for the future. Services at Parth Hospital combine modern surgical techniques which includes DaVinci robotic surgical system with a woman-centric approach, ensuring personalized treatment plans, Minimally invasive surgical options and privacy, comfort, and continuity of care. With cutting-edge technology, experienced clinicians, and a patient-first philosophy, Parth Hospital continues to set new benchmarks in surgical excellence. Parth Hospital, Ahmedabad believes in precision in surgery & compassion in care is dedicated to delivering carefree healing, faster recovery, and better quality of life for every patient.",
    features: [
      "Personalized treatment plans",
      "Minimally invasive surgical options",
      "Privacy, comfort, and continuity of care",
      "DaVinci robotic surgical system",
      "Cutting-edge technology",
      "Patient-first philosophy"
    ],
    tagline: "Precision in Surgery. Compassion in Care",
    mapLink: "https://maps.app.goo.gl/B5Q8pyjJwgajL5zY8", // From existing code
    timing: "Evening OPDs: 6-8 PM",
    schedule: "Evening appointments"
  },
  {
    name: "Parul Sevashram Hospital",
    slug: "parul-sevashram",
    city: "Vadodara",
    description: "Parul Sevashram Hospital is a 1100 bed NABH, NABL and NABH Digital accredited multi-specialty & super specialty hospital affiliated to Parul Institute of Medical Sciences & Research. Parul Sevashram Hospital is a leading & established comprehensive fertility and reproductive medicine services in Central Gujarat. Parul Sevashram Hospital believes in patient-centric care with a vision of ethical and evidence-based diagnosis. Managed by Parul University, the state-of-the-art IVF laboratory at Parul Sevashram Hospital offers cutting-edge surgical and medical techniques to deliver outstanding outcomes.",
    features: [
      "1100 bed NABH, NABL and NABH Digital accredited",
      "Multi-specialty & super specialty hospital",
      "Comprehensive fertility and reproductive medicine services",
      "State-of-the-art IVF laboratory",
      "Patient-centric care",
      "Ethical and evidence-based diagnosis"
    ],
    mapLink: "https://maps.app.goo.gl/ErunpD3mjQmR9mnQ7", // From existing code
    timing: "Daily Day OPDs",
    schedule: "Daily"
  },
  {
    name: "Satyam Hospital",
    slug: "satyam",
    city: "Vadodara",
    description: "Satyam Hospital, Chhani, Vadodara. The 50-Bedded multi-speciality Hospital in Vadodara bring together essential medical services under one roof advanced diagnostic systems, and doctors across core specialties and result-oriented treatment. The multi-speciality hospital is focussed on delivering personal attention and medical support that works. Satyam Multi-speciality Hospital operates as a unit of Parul Sevashram Hospital- a trusted name in Gujarat's healthcare landscape. This affiliation brings credibility, ethical practice, and clinical strength to Satyam Hospital.",
    features: [
      "50-Bedded multi-speciality hospital",
      "Advanced diagnostic systems",
      "Result-oriented treatment",
      "Personal attention and medical support",
      "Operates as a unit of Parul Sevashram Hospital"
    ],
    mapLink: "https://maps.app.goo.gl/QXr9YgMurJym8A9s5", // From existing code
    timing: "Alternate Day OPDs",
    schedule: "Alternate days"
  }
];

export const hospitalDescriptions = {
  parulSevashram: {
    full: "Parul Sevashram Hospital (Affiliated to Medical Sciences & Research, managed and owned by Parul University) is NABH, NABL and NABH Digital Accredited multispecialty & super specialty hospital. Established with a vision to achieve the goal of \"Health for all\", the efforts are directed towards providing healthcare excellence to our patients focussing on quality, accessibility, affordability and standards of health care. Hospital offers the most advanced procedures to treatments for everyday ailments & bring relief to patients from all walks of life. We have state-of-the-art technology and cutting-edge surgical and medical techniques to deliver outstanding outcomes."
  },
  parth: {
    heading: "Comprehensive & Compassionate Gynaecological Care",
    description: "Parth Hospital is committed to providing accessible, advanced, and compassionate gynaecological care for women—today and for the future. Our services combine modern surgical techniques which includes DaVinci robotic surgical system with a woman-centric approach, ensuring:",
    features: [
      "Personalized treatment plans",
      "Minimally invasive surgical options",
      "Privacy, comfort, and continuity of care"
    ],
    tagline: "Care That Is Accessible, Safe, and Future-Ready",
    closing: "With cutting-edge technology, experienced clinicians, and a patient-first philosophy, Parth Hospital continues to set new benchmarks in surgical excellence. We are dedicated to delivering carefree healing, faster recovery, and better quality of life for every patient.",
    finalTagline: "Parth Hospital, Ahmedabad Precision in Surgery. Compassion in Care"
  }
};

// ============================================================================
// SERVICES & SPECIALIZATIONS
// ============================================================================

export const services: Service[] = [
  {
    id: "robotic-laparoscopic",
    title: "Robotic & Laparoscopic Surgery",
    description: "Advanced 'keyhole' surgeries done through very small cuts instead of large incisions.",
    benefits: [
      "Laparoscopic surgery uses a camera and fine instruments guided by the surgeon's hands.",
      "Robotic surgery uses robotic arms controlled by the surgeon for greater precision.",
      "Less pain after surgery",
      "Minimal scarring",
      "Faster recovery and earlier return to normal life",
      "Lower risk of complications compared to open surgery"
    ]
  },
  {
    id: "reproductive-medicine",
    title: "Reproductive Medicine & Surgery",
    description: "Identifies the root cause of reproductive problems and offers personalised medical or surgical solutions to improve fertility and overall reproductive health. Reproductive medicine through IVF-ART (In Vitro Fertilisation-Assisted Reproductive Technology) procedures addresses hormonal health, ovulation, fertility, and reproductive organs, while surgery addresses structural problems in conditions like",
    conditions: [
      "Irregular periods",
      "PCOS",
      "Endometriosis",
      "Fibroids",
      "Blocked fallopian tubes",
      "Unexplained infertility"
    ]
  },
  {
    id: "fertility-preservation",
    title: "Fertility Preservation & Fertility Enhancement Surgery",
    description: "Women with a desire to experience motherhood, this care helps women protect or improve their ability to conceive, now or in the future.",
    considerations: [
      "Fertility preservation may be considered if:",
      "Pregnancy is planned later in life",
      "Cancer treatment or surgery may affect fertility",
      "There is reduced ovarian reserve"
    ],
    note: "Fertility enhancement surgery may help when: Fibroids distort the uterus, Endometriosis affects fertility, Uterine abnormalities. These options give women choice, control, and reassurance, allowing them to plan motherhood without compromising health or timing."
  },
  {
    id: "aesthetic-gynecology",
    title: "Aesthetic & Cosmetic Gynaecology",
    description: "Addresses functional discomfort as well as emotional well-being, not just appearance.",
    conditions: [
      "Vaginal laxity – a feeling of looseness after childbirth or with ageing",
      "Labiaplasty concerns – discomfort, irritation, or self-consciousness due to enlarged or asymmetrical labia",
      "Dyspareunia (pain during intercourse) – affecting intimacy and quality of life",
      "Vaginismus",
      "SUI Stress Urinary Incontinence",
      "Dryness in Vagina",
      "Overactive Bladder"
    ],
    note: "These concerns are real and common, and treatment is about restoring comfort, confidence, and sexual well-being, not cosmetic perfection."
  },
  {
    id: "uro-gynecology",
    title: "Uro-Gynaecology",
    description: "Uro-gynaecology focuses on bladder, bowel, and pelvic floor problems that many women silently endure.",
    conditions: [
      "Urine leakage during coughing or exercise",
      "Frequent or urgent urination",
      "Pelvic organ prolapse (feeling of something \"coming down\")",
      "Difficulty emptying the bladder"
    ],
    note: "These conditions can affect daily activities, social confidence, sleep, and dignity. Early evaluation allows effective treatment often without major surgery."
  }
];

// ============================================================================
// FAQS
// ============================================================================

export const faqs: FAQ[] = [
  {
    category: "Laparoscopic Hysterectomy",
    question: "What Is Laparoscopic Hysterectomy?",
    answer: "Laparoscopic hysterectomy is a minimally invasive surgery done through very small incisions. Compared to open surgery, it usually means: Less pain, Smaller scars, Faster healing, Quicker return to normal life"
  },
  {
    category: "Laparoscopic Hysterectomy",
    question: "What is Enhanced Recovery After Surgery (ERAS)?",
    answer: "Dr Smit Bharat Solanki routinely follow a modern approach called Enhanced Recovery After Surgery (ERAS). Instead of: Long hours of fasting, Strong pain injections, Staying in bed for days - We focus on: Better pain control, Early walking, Early eating, Short and safe hospital stay. The goal is simple: help your body recover naturally and faster - without increasing risk."
  },
  {
    category: "Laparoscopic Hysterectomy",
    question: "Is This Approach Safe and Proven?",
    answer: "Yes. Dr Smit Bharat Solanki published a medical study involving 56 women who underwent laparoscopic hysterectomy under care across different hospitals. The results were reassuring: All patients walked within 6 hours, All started eating within 6 hours, All went home within 24 hours, No complications were observed."
  },
  {
    category: "Laparoscopic Hysterectomy",
    question: "How Is Dr Smit Bharat Solanki's Approach Different?",
    answer: "Minimal use of strong pain medicines, Encouragement of early movement, Early, comfortable feeding, Short hospital stay-only when it is safe. Every patient is discharged only when she is comfortable, walking, eating, and medically stable."
  },
  {
    category: "Laparoscopic Hysterectomy",
    question: "Is Early Discharge Really Safe?",
    answer: "Yes. You are never rushed home. Discharge happens only after careful medical evaluation, and you are given clear guidance and support for recovery at home."
  },
  {
    category: "Laparoscopic Hysterectomy",
    question: "Who Can Benefit from This Approach?",
    answer: "Women undergoing laparoscopic hysterectomy for: Fibroids, Heavy or irregular bleeding, Adenomyosis, Chronic pelvic pain"
  }
];

export const hysterectomyContent = {
  heading: "Laparoscopic Hysterectomy",
  tagline: "Faster Recovery. Less Pain. More Confidence.",
  introduction: "For many women, the word hysterectomy brings worry: Will it be painful? Will I be in the hospital for many days? How long will recovery take? These concerns are completely natural. The good news is, surgery has evolved. With modern laparoscopic (keyhole) surgery and a carefully planned recovery program, hysterectomy today can be much safer, gentler, and faster to recover from. If you are considering hysterectomy and have fears or questions, know that you are not alone- and modern, gentle options are available."
};

// PRP/TTCRF FAQ for Aesthetic Gynecology
export const prpTTCRFFaqs: FAQ[] = [
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "What is stress urinary incontinence?",
    answer: "It is leakage of urine during physical pressure such as coughing, sneezing, laughing, or exercise."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Why does it worsen after menopause?",
    answer: "Loss of estrogen weakens pelvic floor muscles and supporting tissues."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "What is radiofrequency treatment?",
    answer: "It is a non-surgical therapy using controlled heat to tighten and strengthen vaginal and peri-urethral tissues."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "What is PRP?",
    answer: "PRP is prepared from your own blood and contains growth factors that help tissue healing and regeneration."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Why combine PRP with radiofrequency?",
    answer: "Radiofrequency tightens tissues, while PRP helps them heal and regenerate."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "What benefits were seen in the study?",
    answer: "Better bladder control, improved test results, better quality of life, and higher patient satisfaction."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Is the treatment safe?",
    answer: "Yes. Complication rates were very low and similar in both groups."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Is it a surgery?",
    answer: "No. It is a minimally invasive outpatient procedure."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Who can benefit from this?",
    answer: "Peri- and postmenopausal women with stress urinary incontinence who did not improve with exercises."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Can it replace surgery?",
    answer: "In many women with mild to moderate symptoms, it may delay or avoid surgery."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "Does age matter?",
    answer: "Benefits were seen in women both below and above 60 years of age."
  },
  {
    category: "Aesthetic Gynecology - PRP/TTCRF",
    question: "How long do results last?",
    answer: "The study showed benefits lasting at least 12 months."
  }
];

export const prpTTCRFContent = {
  title: "NEW HOPE FOR STRESS URINARY INCONTINENCE",
  subtitle: "Patient FAQ & Study Spotlight",
  studyTitle: "Regenerative Synergy: Combining Platelet-rich Plasma with Transcutaneous Temperature-controlled Radiofrequency for Enhanced Treatment of Stress Urinary Incontinence in Peri- and Postmenopausal Women.",
  summary: "Stress urinary incontinence (SUI) is leakage of urine during coughing, laughing, sneezing, or physical activity. It affects many peri- and postmenopausal women and significantly reduces quality of life. This randomized clinical study compared: 1. Radiofrequency treatment alone, 2. Radiofrequency combined with Platelet-Rich Plasma (PRP). Women who received PRP with radiofrequency experienced significantly better bladder control, stronger urethral support, better quality of life, and higher satisfaction, without increased complications.",
  meaning: "Stress urinary incontinence is not a normal part of aging. Modern regenerative treatments can restore comfort, confidence, and quality of life."
};

// 3D Laparoscopy FAQ
export const laparoscopy3DFaqContent = {
  title: "Is 3D Laparoscopic Surgery Better for Hysterectomy?",
  subtitle: "What Women Should Know Before Surgery",
  introduction: "Hysterectomy is one of the most common gynecological surgeries performed worldwide. Today, most hysterectomies are done using laparoscopy, which allows surgery through small keyhole incisions with faster recovery and less pain. But did you know that laparoscopy itself has evolved? A recent clinical study published in Annals of Saudi Medicine (2025) evaluated whether 3D high-definition laparoscopy offers better results than conventional 2D laparoscopy — especially in women with higher body weight. The results are encouraging.",
  whatIs3D: "Traditional laparoscopy shows surgeons a flat 2D image. 3D laparoscopy provides: Depth perception, Better hand-eye coordination, Clearer visualization of tissues, More accurate suturing and bleeding control. It is similar to the difference between watching a movie in 2D versus 3D.",
  whyWeightMatters: "Women with higher BMI often face: Reduced surgical visibility, More bleeding risk, Longer operating time, Greater technical difficulty. This makes surgical precision extremely important.",
  studyFindings: "We compared 60 women undergoing total laparoscopic hysterectomy: 30 with 3D HD laparoscopy, 30 with conventional 2D laparoscopy. Women were grouped by body mass index. Key Findings: Women operated with 3D laparoscopy had: Shorter surgery time, Faster vaginal vault suturing, Less blood loss, Smaller drop in hemoglobin, Fewer trocar (port) incisions, Similar or lower complication rates. These benefits were most pronounced in overweight and obese women.",
  patientBenefits: "1. Less Blood Loss - Better visualization allows surgeons to identify and control bleeding earlier. 2. Shorter Surgery - Less anesthesia time means safer surgery and quicker recovery. 3. Smaller Incisions - Fewer ports may mean less pain and better cosmetic outcome. 4. Better Precision - Suturing is more accurate with 3D depth perception. 5. Safer for Higher BMI Patients - 3D technology helps overcome visualization challenges in obese patients.",
  safety: "Yes. The study showed no increase in complications compared to 2D laparoscopy. Complication rates were low in both groups.",
  vsRobotic: "3D laparoscopy offers many visual advantages of robotic systems without the high cost, making it more accessible in many hospitals.",
  whoBenefits: "3D laparoscopy is especially useful for: Overweight and obese women, Complex hysterectomies, Patients desiring minimally invasive surgery, Hospitals without robotic platforms",
  recovery: "While recovery still depends on individual healing, improved surgical precision often supports: Less pain, Faster mobilization, Lower risk of bleeding complications",
  message: "Technology does not replace surgeon skill — but it enhances it. 3D laparoscopy allows surgeons to operate with greater confidence, accuracy, and safety.",
  limitations: "This study was retrospective and had a modest sample size. Larger multicenter studies are needed. However, results strongly support the benefit of 3D laparoscopy.",
  finalMessage: "If you are planning a hysterectomy, ask your surgeon: What laparoscopic system will be used? Is 3D laparoscopy available? What is best for my body type and condition? Your awareness empowers your care.",
  doctorsNote: "Modern gynecological surgery is not just about removing disease — it is about restoring comfort, confidence, and quality of life with the safest technology available."
};

// 1470-nm Laser FAQ for Aesthetic Gynecology
export const laser1470FaqContent = {
  title: "VAGINAL REJUVENATION WITH 1470-NM LASER",
  subtitle: "What Every Woman Should Know",
  introduction: "Many women experience vaginal dryness, looseness, discomfort, or reduced sexual satisfaction after childbirth, with aging, or after menopause. These changes are common — but they are not something you must silently accept. Modern medical science now offers safe, non-surgical solutions to restore vaginal health and confidence. One such solution is 1470-nm laser vaginal therapy, which was scientifically studied in our recent clinical research.",
  whyChanges: "Vaginal tissues change due to: Childbirth, Hormonal changes, Menopause, Aging, Reduced collagen and blood supply. These changes can cause vaginal laxity, dryness, burning, pain during intimacy, and reduced sexual satisfaction.",
  whatIsTreatment: "This treatment uses a special medical laser that gently delivers controlled heat to vaginal tissues. This heat stimulates collagen production, improves blood circulation, strengthens tissue structure, and restores elasticity and thickness. The procedure is: Non-surgical, Outpatient, Quick (15–20 minutes), No anesthesia, Minimal discomfort",
  studyFindings: "In a study of 120 women aged 25–65 years: Physical Improvements: Vaginal wall thickness increased by 35%, Collagen density improved by 42%, Blood vessel formation increased by 50%. Sexual Health Improvements: 28% improvement in sexual function scores, Better lubrication, Better comfort, Better satisfaction, Reduced pain. 92% of women reported improved sexual satisfaction.",
  safety: "95% of women had no side effects. Only mild temporary discomfort was reported in a few patients. No serious complications were observed.",
  howItWorks: "The laser activates natural healing pathways that increase collagen genes, improve blood vessel growth, and trigger tissue regeneration. This means the laser does not only improve symptoms — it repairs vaginal tissue.",
  whoBenefits: "Women with vaginal looseness, dryness, discomfort, reduced sexual satisfaction, post-menopausal changes, or post-childbirth changes may benefit. It is especially useful for women who want non-surgical and hormone-free options.",
  sessions: "Most women require 3 to 5 sessions spaced 3 to 4 weeks apart.",
  finalMessage: "Vaginal health is part of overall women's health. Feeling comfortable, confident, and pain-free is not a luxury — it is your right."
};

// Thin Endometrium FAQ for IVF
export const thinEndometriumFaqContent = {
  title: "Thin Endometrium in IVF: Why It Matters and What New Research Brings",
  introduction: "For many women undergoing IVF, hearing the words \"your endometrium is thin\" can be deeply stressful. You may wonder: Will my embryo implant? Does this mean IVF will fail? Are there any solutions? The good news is — thin endometrium is not the end of your IVF journey. Modern research is opening new possibilities for women who previously had limited options.",
  whatIs: "The endometrium is the inner lining of the uterus where the embryo implants. For successful implantation, it should usually be: At least 7–8 mm thick, with good blood supply. When it remains thin despite treatment, implantation becomes difficult.",
  whyThin: "Common causes include: Previous uterine surgeries or curettage, Infections (endometritis, tuberculosis), Poor blood flow, Hormonal imbalance, Repeated IVF failures, Long-term estrogen resistance. In many women, the lining simply does not respond well to routine hormone therapy.",
  whyAffects: "A thin lining means: Poor blood supply to the embryo, Less nourishment, Reduced implantation signals, Higher chances of implantation failure. Even good-quality embryos may fail to implant if the uterine lining is not receptive.",
  studyFocus: "Our study focused on women with: Repeated IVF failures, Persistently thin endometrium, Poor response to conventional hormonal treatment. These are women who often feel hopeless after multiple unsuccessful cycles.",
  newApproach: "Instead of only increasing hormones, the study focused on improving the uterine environment itself by enhancing: Blood flow, Tissue regeneration, Endometrial receptivity, Cellular healing. The goal was not just thickness — but endometrial quality.",
  improvements: "Women in the study showed: Increase in endometrial thickness, Better blood flow on Doppler scans, Improved endometrial pattern, Higher implantation potential, Better pregnancy outcomes compared to previous failed cycles. This suggests that thin endometrium can be treated, not just measured.",
  whatMeans: "If you have thin endometrium, it does NOT mean: Your uterus is useless, Pregnancy is impossible, IVF will never work. It simply means your uterus needs regenerative support, not just hormones.",
  shift: "Old approach: Only increase estrogen dose. New approach: Improve tissue health, blood supply, and regeneration. This is a major shift in reproductive medicine.",
  whoBenefits: "This research is especially helpful for: Women with repeated implantation failure, Women with thin endometrium <7 mm, Women with poor Doppler blood flow, Women with scarred or damaged lining, Women preparing for embryo transfer",
  emotionalMessage: "Thin endometrium is not a failure of your body. It is simply a signal that your uterus needs healing, not punishment with more hormones.",
  patientQuestions: "If you have thin endometrium, ask your fertility specialist: Why is my lining thin? Is blood flow adequate? Are regenerative treatments suitable for me? Should we focus on quality, not only thickness?",
  finalMessage: "Modern fertility treatment is moving from forcing the uterus to healing the uterus. Thin endometrium is no longer a dead end — it is a treatable challenge."
};

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const testimonials: Testimonial[] = [
  {
    name: "Shobhna",
    age: 36,
    treatment: "Infertility & IVF Success",
    quote: "If you have been trying for years and losing hope, please don't give up.",
    fullStory: "After seven years of infertility and three failed IVF cycles elsewhere, I was emotionally exhausted when I reached Dr. Smit Bharat Solanki. Instead of rushing into another IVF, he took time to find the real cause. My fibroid was identified and removed through laparoscopic surgery with great precision.\n\nWhat touched me most was not just his skill, but his clarity and confidence. After my recovery, I underwent IVF again under his guidance and this time, it worked.\n\nToday, I look back at that phase with gratitude instead of pain. If you are struggling with infertility, Dr. Smit gives you not just treatment, but renewed belief.",
    rating: 5
  },
  {
    name: "Shatakshi",
    age: 21,
    treatment: "Hysteroscopic Fibroid Surgery",
    quote: "I was terrified of surgery until I met Dr. Smit.",
    fullStory: "At just 21, I was suffering from extremely heavy periods due to a large fibroid. Many doctors advised open or laparoscopic surgery, which scared me deeply.\n\nDr. Smit Bharat Solanki gave me a different option hysteroscopic surgery, done without any cut on my abdomen. The procedure was completed as a day-care surgery, and I was back to normal life very quickly.\n\nMy periods became normal, my confidence returned, and today I am settled in the USA, living a healthy and happy life. I will always be grateful to Dr. Smit for choosing the safest and least invasive path for me.",
    rating: 5
  },
  {
    name: "Pushpa",
    age: 56,
    treatment: "Urinary Incontinence (Urogynecology)",
    quote: "Dr. Smit didn't just treat my problem he gave me my life back.",
    fullStory: "After two failed surgeries elsewhere, I had almost accepted that urinary leakage was something I had to live with. It affected my confidence, my social life, and even simple daily activities.\n\nDr. Smit Bharat Solanki listened patiently and carefully evaluated my condition. He performed laparoscopic Burch colposuspension, and the change was remarkable.\n\nToday, I live freely without fear or embarrassment. If you are silently suffering from urinary problems, I truly believe Dr. Smit can help you the way he helped me.",
    rating: 5
  },
  {
    name: "Roma",
    age: 38,
    treatment: "Robotic Hysterectomy (Cashless & Fast Recovery)",
    quote: "I was home in 24 hours and pain free.",
    fullStory: "I was dealing with heavy bleeding due to adenomyosis, and since my family was complete, Dr. Smit advised robotic hysterectomy. He explained everything clearly, including my cashless insurance coverage.\n\nThe surgery was smooth, the recovery was comfortable, and I was discharged within 24 hours. Today, my quality of life has completely changed.\n\nIf you are considering advanced surgery and want the best care with minimum discomfort, Dr. Smit Bharat Solanki is someone you can trust completely.",
    rating: 5
  },
  {
    name: "Harini",
    age: 30,
    treatment: "Endometriosis, Pain & Infertility",
    quote: "For the first time in years, I am pain-free and hopeful again.",
    fullStory: "I had been living with chronic pelvic pain and infertility due to chocolate cysts. Dr. Smit explained my condition clearly and performed fertility-enhancing laparoscopic surgery.\n\nThe surgery was minimally invasive, my recovery was smooth, and my pain reduced drastically. Most importantly, I now feel confident about my chances of becoming a mother.\n\nIf you are dealing with endometriosis or infertility, Dr. Smit offers not just expertise—but real compassion.",
    rating: 5
  },
  {
    name: "Jayshree",
    age: 45,
    treatment: "Non-Surgical Vaginal Rejuvenation",
    quote: "A gentle solution that truly worked.",
    fullStory: "I was troubled by urine leakage during coughing and exercise but didn't want surgery. Dr. Smit suggested laser vaginal rejuvenation. The sessions were short, painless, and easy to fit into my routine.\n\nAfter completing the treatment, my symptoms improved significantly. I feel confident and comfortable again.\n\nIf you are looking for a modern, non-surgical solution, I highly recommend consulting Dr. Smit Bharat Solanki.",
    rating: 5
  },
  {
    name: "Rupa",
    age: 41,
    treatment: "Advanced Laparoscopic Surgery for Adenomyosis",
    quote: "What I feared became one of the smoothest surgeries of my life.",
    fullStory: "I was told that my hysterectomy might require an abdominal cut and even a gastro surgeon on standby. I was terrified.\n\nDr. Smit Bharat Solanki reassured me and planned a completely laparoscopic approach. My uterus was removed vaginally without any abdominal incision. My recovery was smooth and stress-free.\n\nIf you want expert hands, calm guidance, and the most advanced minimally invasive care, Dr. Smit is the doctor to trust.",
    rating: 5
  }
];

export const testimonialsNote = "All patient identities have been anonymized to maintain confidentiality";

// ============================================================================
// IVF INJECTIONS INFORMATION
// ============================================================================

export const ivfInjectionsInfo = {
  title: "Understanding IVF Injections – What Couples Really Need to Know",
  introduction: "When you start IVF, one of the first things you notice is the number of injections. These injections are not just routine - they decide how many eggs are produced and how healthy those eggs are.\n\nThink of these injections as fuel for the ovaries. Better fuel helps the ovaries produce more eggs and better-quality eggs.",
  types: {
    heading: "There are two main types of this fuel:",
    options: [
      {
        name: "rFSH",
        description: "a modern, highly purified hormone"
      },
      {
        name: "hMG",
        description: "an older, mixed hormone preparation"
      }
    ],
    note: "Both are used worldwide. The big question is: Which one gives better results for the effort, cost, and emotional strain you go through?"
  },
  studyOverview: {
    heading: "What did the study really look at?",
    description: "Doctors studied 300 women with similar age and fertility potential and compared:",
    comparisons: [
      "How many eggs were produced",
      "How many good-quality embryos were formed",
      "How much medicine was needed",
      "How much money was spent for each usable embryo"
    ],
    note: "This is important because one good embryo is what ultimately leads to pregnancy not just more injections or more eggs."
  },
  findings: {
    heading: "What did the study find?",
    rFSH: {
      title: "rFSH produced better results",
      description: "Women who received rFSH:",
      benefits: [
        "Produced more eggs",
        "Made more top-quality embryos"
      ],
      outcomes: [
        "A successful transfer",
        "Extra embryos for freezing",
        "Avoiding repeat IVF cycles"
      ]
    },
    efficiency: {
      title: "rFSH needed fewer injections to get results",
      description: "Even though rFSH costs more per injection, it works more efficiently.",
      comparison: {
        insteadOf: "Taking many injections to get one good embryo",
        with: "Fewer injections were needed to make each good embryo"
      },
      benefits: [
        "Less discomfort",
        "Less emotional stress",
        "Less risk of side effects"
      ]
    },
    economy: {
      title: "rFSH was actually more economical",
      description: "This is the most important part for couples.\n\nEven though one rFSH injection costs more, the cost per good embryo was lower.",
      why: "Because:",
      reasons: [
        "More high-quality embryos were created",
        "Fewer cycles were needed",
        "Fewer repeat treatments were required"
      ],
      quote: "A cheaper injection that gives poor embryos can end up being far more expensive."
    }
  },
  whyItMatters: {
    heading: "Why this matters to you as a couple",
    description: "IVF is not just medical - it is emotional, physical, and financial.\n\nEvery failed cycle means:",
    failedCycleCosts: [
      "More injections",
      "More waiting",
      "More heartbreak",
      "More expense"
    ],
    benefits: {
      description: "Using the right hormone from the start increases the chance that:",
      outcomes: [
        "The first cycle works",
        "Or you have frozen embryos for future attempts"
      ],
      savings: [
        "Time",
        "Money",
        "Emotional energy"
      ]
    }
  },
  personalization: {
    heading: "Does this mean rFSH is right for everyone?",
    answer: "Not always.",
    description: "Some women respond well to hMG. Others need rFSH.\nYour doctor looks at:",
    factors: [
      "Age",
      "Ovarian reserve",
      "Past IVF response",
      "Hormone levels"
    ],
    note: "The best IVF plan is personalized, not one-size-fits-all."
  },
  takeaway: {
    heading: "The simple takeaway for couples",
    wrongQuestion: "When choosing IVF injections, do not ask: \"Which is cheaper per vial?\"",
    rightQuestion: "Please ask: \"Which gives me the best chance to get a healthy embryo and a baby?\"",
    conclusion: "Because in IVF:\nThe goal is not fewer injections - it is fewer failed cycles.\n\nAnd that is what this study helps doctors choose more wisely for you."
  }
};

// ============================================================================
// EXPORT ALL DATA
// ============================================================================

export const siteData = {
  doctorProfile,
  education,
  certifications,
  clinicalExperience,
  professionalSummary,
  contactInfo,
  consultationMessage,
  hospitals,
  hospitalDescriptions,
  services,
  faqs,
  hysterectomyContent,
  prpTTCRFFaqs,
  prpTTCRFContent,
  laparoscopy3DFaqContent,
  laser1470FaqContent,
  thinEndometriumFaqContent,
  testimonials,
  testimonialsNote,
  ivfInjectionsInfo
};

export default siteData;
