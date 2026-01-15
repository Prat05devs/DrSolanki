export default function JourneySection() {
  const steps = [
    {
      step: "1",
      title: "Pre-Surgical Consultation",
      description: "Comprehensive evaluation including medical history review, physical examination, and discussion of your condition. We'll explain the robotic procedure, answer all your questions, and ensure you're an ideal candidate for robotic surgery.",
      icon: "person"
    },
    {
      step: "2",
      title: "Pre-Operative Preparation",
      description: "Pre-surgical testing and optimization of your health. Our team will provide detailed instructions for preparation, including dietary guidelines and medication management to ensure optimal surgical outcomes.",
      icon: "medical_information"
    },
    {
      step: "3",
      title: "Day of Surgery",
      description: "You'll be prepared for surgery with general anesthesia. The Da Vinci system is positioned, and Dr. Smit Bharat Solanki performs the procedure from the console, controlling the robotic arms with precision. The procedure typically takes 1-3 hours depending on complexity.",
      icon: "medical_services"
    },
    {
      step: "4",
      title: "Recovery & Discharge",
      description: "Most robotic procedures allow for same-day discharge or a short overnight stay. You'll receive detailed post-operative instructions, pain management guidance, and activity restrictions to ensure optimal healing.",
      icon: "home"
    },
    {
      step: "5",
      title: "Follow-Up Care",
      description: "Regular follow-up appointments to monitor your recovery. We'll assess healing, address any concerns, and guide you through your return to normal activities. Most patients resume light activities within days and full activities within 2-4 weeks.",
      icon: "monitor_heart"
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#df4320] dark:text-[#df4320] font-bold tracking-widest uppercase text-sm">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Your Robotic Surgery Journey
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Our approach follows Enhanced Recovery After Surgery (ERAS), focusing on better pain control, early walking and eating, and a
            short, safe hospital stay. Discharge happens only when you are comfortable, walking, eating, and medically stable, with clear
            guidance for recovery at home.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start bg-white dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-[#e5dddc] hover:shadow-xl transition-all">
              <div className="flex-shrink-0 size-16 bg-[#df4320] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="material-symbols-outlined text-3xl text-[#df4320]">{item.icon}</span>
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

