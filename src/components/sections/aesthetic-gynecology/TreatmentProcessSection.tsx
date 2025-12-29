export default function TreatmentProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive evaluation of your concerns, medical history, and goals. We'll discuss treatment options, expected outcomes, and answer all your questions in a private, comfortable setting.",
      icon: "person"
    },
    {
      step: "2",
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan tailored to your specific needs and goals. We'll explain the procedure, recovery expectations, and any necessary preparations.",
      icon: "calendar_month"
    },
    {
      step: "3",
      title: "Treatment Session",
      description: "Your treatment is performed in our comfortable, private treatment room. Most non-surgical treatments take 15-30 minutes and require no anesthesia. You can return to normal activities immediately.",
      icon: "spa"
    },
    {
      step: "4",
      title: "Recovery & Results",
      description: "Minimal to no downtime for most treatments. Results typically begin to appear within a few weeks and continue to improve over several months as your body's natural healing processes take effect.",
      icon: "trending_up"
    },
    {
      step: "5",
      title: "Follow-Up Care",
      description: "Regular follow-up appointments to monitor your progress and ensure optimal results. Additional treatments may be recommended based on your individual response and goals.",
      icon: "monitor_heart"
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Your Treatment Journey
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Understanding the process helps you feel prepared and confident about your treatment experience.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start bg-[#f8f8f5] dark:bg-[#221e10] rounded-2xl p-8 border border-[#e5dddc] hover:shadow-lg transition-all">
              <div className="flex-shrink-0 size-16 bg-[#8FA392] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="material-symbols-outlined text-3xl text-[#8FA392]">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-[#181611] dark:text-white">{item.title}</h3>
                </div>
                <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



