export default function TreatmentOptionsSection() {
  const treatments = [
    {
      title: "Vaginal Rejuvenation",
      description: "Laser treatment to restore vaginal tissue health, improve elasticity, and enhance natural lubrication. Ideal for addressing dryness, laxity, and discomfort.",
      icon: "spa",
      color: "bg-[#8FA392]/10 text-[#8FA392]",
      features: [
        "Improves tissue tone and elasticity",
        "Enhances natural lubrication",
        "Reduces dryness and discomfort"
      ]
    },
    {
      title: "Stress Urinary Incontinence Treatment",
      description: "Non-surgical laser treatment to strengthen pelvic floor muscles and improve bladder control. Effective for mild to moderate stress urinary incontinence.",
      icon: "water_drop",
      color: "bg-[#f4c025]/10 text-[#f4c025]",
      features: [
        "Strengthens pelvic floor",
        "Improves bladder control",
        "No surgery required"
      ]
    },
    {
      title: "Labiaplasty",
      description: "Surgical procedure to reshape or reduce the labia minora for functional or aesthetic reasons. Performed with precision to maintain natural appearance and sensitivity.",
      icon: "healing",
      color: "bg-[#C07766]/10 text-[#C07766]",
      features: [
        "Addresses discomfort or asymmetry",
        "Minimally invasive technique",
        "Preserves natural function"
      ]
    },
    {
      title: "Vaginoplasty",
      description: "Surgical procedure to tighten the vaginal canal, addressing concerns related to laxity following childbirth or aging. Restores tightness and improves sexual satisfaction.",
      icon: "medical_services",
      color: "bg-[#8FA392]/10 text-[#8FA392]",
      features: [
        "Restores vaginal tightness",
        "Improves sexual function",
        "Minimally invasive approach"
      ]
    },
    {
      title: "Clitoral Hood Reduction",
      description: "Surgical procedure to reduce excess tissue covering the clitoris, improving both appearance and sensitivity. Performed with careful attention to preserve all function.",
      icon: "auto_awesome",
      color: "bg-[#f4c025]/10 text-[#f4c025]",
      features: [
        "Enhances sensitivity",
        "Improves aesthetic appearance",
        "Preserves all function"
      ]
    },
    {
      title: "G-Spot Augmentation",
      description: "Non-surgical treatment using hyaluronic acid fillers to enhance the G-spot area, potentially improving sexual sensation and satisfaction.",
      icon: "favorite",
      color: "bg-[#C07766]/10 text-[#C07766]",
      features: [
        "Non-surgical approach",
        "Minimal downtime",
        "Safe and effective"
      ]
    }
    // TODO: Add more treatment options from single_source_of_truth.md if available
    // Current treatments use placeholder descriptions - need to verify against document
  ];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Comprehensive Aesthetic Gynecology Treatments
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {/* TODO: Add comprehensive treatment options description from single_source_of_truth.md */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300"
            >
              <div className={`size-16 ${treatment.color} rounded-full flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined text-4xl">{treatment.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                {treatment.title}
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 mb-6 leading-relaxed">
                {treatment.description}
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                {treatment.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



