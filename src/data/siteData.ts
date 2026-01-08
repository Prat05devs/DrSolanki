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
    position: "Program Director & Clinical Lead",
    department: "Reproductive Medicine & IVF Services",
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
  phone: "98XXXXXXX", // TODO: Update with actual phone number
  email: "abc@gmail.com", // TODO: Update with actual email
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
  hysterectomyContent
};

export default siteData;
