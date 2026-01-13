export default function ProceduresSection() {
  const procedures = [
    {
      title: "Robotic Myomectomy",
      description: "Removal of uterine fibroids while preserving the uterus and fertility. Robotic myomectomy allows for precise removal of even large or multiple fibroids with minimal blood loss and faster recovery compared to open surgery.",
      icon: "healing",
      color: "from-[#df4320]/10 to-transparent",
      borderColor: "border-[#df4320]/20",
      bgColor: "bg-[#df4320]",
      features: [
        "Preserves fertility and uterus",
        "Effective for large or multiple fibroids",
        "Minimal scarring and faster recovery"
      ]
    },
    {
      title: "Robotic Hysterectomy",
      description: "Minimally invasive removal of the uterus for various conditions including fibroids, endometriosis, or cancer. Robotic approach offers superior visualization and precision for complex cases.",
      icon: "medical_services",
      color: "from-[#D4AF37]/10 to-transparent",
      borderColor: "border-[#D4AF37]/20",
      bgColor: "bg-[#D4AF37]",
      textColor: "text-[#181611]",
      features: [
        "Total, subtotal, or radical options",
        "Preserves ovaries when possible",
        "Ideal for complex or large uteri"
      ]
    },
    {
      title: "Robotic Endometriosis Excision",
      description: "Precise removal of endometriosis lesions from pelvic organs. The robotic system's enhanced visualization and dexterity allow for complete excision of deep infiltrating endometriosis while preserving healthy tissue.",
      icon: "cut",
      color: "from-[#8DA399]/10 to-transparent",
      borderColor: "border-[#8DA399]/20",
      bgColor: "bg-[#8DA399]",
      features: [
        "Complete lesion removal",
        "Preserves fertility potential",
        "Effective for deep infiltrating disease"
      ]
    },
    {
      title: "Robotic Sacrocolpopexy",
      description: "Repair of pelvic organ prolapse using mesh to support the vaginal vault. Robotic approach provides excellent visualization and precision for this complex reconstructive procedure.",
      icon: "support",
      color: "from-[#df4320]/10 to-transparent",
      borderColor: "border-[#df4320]/20",
      bgColor: "bg-[#df4320]",
      features: [
        "Durable long-term results",
        "Preserves vaginal function",
        "Minimally invasive approach"
      ]
    },
    {
      title: "Robotic Ovarian Cystectomy",
      description: "Precise removal of ovarian cysts while preserving healthy ovarian tissue. Essential for maintaining fertility and hormonal function, especially in younger patients.",
      icon: "egg",
      color: "from-[#D4AF37]/10 to-transparent",
      borderColor: "border-[#D4AF37]/20",
      bgColor: "bg-[#D4AF37]",
      textColor: "text-[#181611]",
      features: [
        "Ovarian tissue preservation",
        "Fertility-sparing approach",
        "Minimal impact on ovarian function"
      ]
    },
    {
      title: "Robotic Tubal Reanastomosis",
      description: "Reversal of tubal ligation to restore fertility. The precision of robotic surgery allows for meticulous reconnection of fallopian tubes, maximizing the chances of natural conception.",
      icon: "pregnancy",
      color: "from-[#8DA399]/10 to-transparent",
      borderColor: "border-[#8DA399]/20",
      bgColor: "bg-[#8DA399]",
      features: [
        "High success rates for reversal",
        "Restores natural fertility",
        "Precise microsurgical technique"
      ]
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#df4320] dark:text-[#df4320] font-bold tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Robotic Procedures We Perform
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {/* TODO: Add comprehensive robotic procedures overview from single_source_of_truth.md */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {procedures.map((procedure, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${procedure.color} rounded-2xl p-8 border ${procedure.borderColor} hover:shadow-xl transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`size-14 ${procedure.bgColor} rounded-full flex items-center justify-center ${procedure.textColor || "text-white"}`}>
                  <span className="material-symbols-outlined text-3xl">{procedure.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white">{procedure.title}</h3>
              </div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-4">
                {procedure.description}
              </p>
              <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
                {procedure.features.map((feature, fIdx) => (
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

