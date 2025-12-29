export default function WhoCanBenefitSection() {
  const benefits = [
    {
      title: "Post-Childbirth Concerns",
      description: "Women experiencing changes in vaginal tightness, dryness, or function following childbirth",
      icon: "pregnancy"
    },
    {
      title: "Menopausal Changes",
      description: "Addressing vaginal dryness, thinning, and discomfort associated with hormonal changes",
      icon: "elderly"
    },
    {
      title: "Stress Urinary Incontinence",
      description: "Mild to moderate urinary leakage during activities like coughing, sneezing, or exercise",
      icon: "water_drop"
    },
    {
      title: "Aesthetic Concerns",
      description: "Women seeking to improve the appearance or address asymmetry of intimate structures",
      icon: "spa"
    },
    {
      title: "Functional Discomfort",
      description: "Addressing physical discomfort during daily activities or intimacy",
      icon: "healing"
    },
    {
      title: "Desire for Enhancement",
      description: "Women seeking to enhance intimate wellness and overall confidence",
      icon: "favorite"
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
            Who Can Benefit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Is Aesthetic Gynecology Right for You?
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Aesthetic gynecology treatments can benefit women at various stages of life who are 
            experiencing concerns related to intimate health, function, or appearance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-[#e5dddc] hover:shadow-xl transition-all"
            >
              <div className="size-14 bg-[#8FA392]/10 text-[#8FA392] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



