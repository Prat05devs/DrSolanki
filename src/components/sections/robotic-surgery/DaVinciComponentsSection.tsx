export default function DaVinciComponentsSection() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#df4320] dark:text-[#df4320] font-bold tracking-widest uppercase text-sm">
            Technology Deep Dive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Understanding the Da Vinci® Surgical System
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            The Da Vinci system is a sophisticated robotic platform that enhances surgical outcomes through 
            improved precision, control, and visualization. Here's how each component works together to 
            deliver superior surgical results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Surgeon Console */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
            <div className="size-16 bg-[#df4320]/10 text-[#df4320] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl">desktop_windows</span>
            </div>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
              Surgeon Console
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed mb-4">
              This is where Dr. Smit Bharat Solanki sits during the operation, controlling the robotic instruments using 
              intuitive, hand-operated controls. The console provides:
            </p>
            <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>High-definition 3D visualization with enhanced depth perception</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Magnified views of the surgical site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Intuitive controls that translate hand movements to precise robotic actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Ergonomic design for comfort during long procedures</span>
              </li>
            </ul>
          </div>

          {/* Patient-Side Cart */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
            <div className="size-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
            </div>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
              Patient-Side Cart
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed mb-4">
              Positioned next to the patient, this cart houses the robotic arms that perform the surgery. 
              The advanced system features:
            </p>
            <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Multiple robotic arms with advanced articulation capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>360-degree rotation and bending beyond human wrist range</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Precision instruments that minimize tissue trauma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Adaptable positioning for various patient anatomies</span>
              </li>
            </ul>
          </div>

          {/* Integrated Vision System */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
            <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-4">
              Integrated Vision System
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed mb-4">
              The advanced imaging technology that provides unparalleled visualization during surgery, 
              including:
            </p>
            <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>High-definition 3D imaging with crystal-clear depth perception</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Up to 10x magnification for detailed visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Firefly imaging with ICG for real-time anatomical insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Enhanced identification of vital structures and blood vessels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Surgical Instruments */}
        <div className="bg-white dark:bg-white/5 rounded-2xl p-8 md:p-12 shadow-xl border border-[#e5dddc] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-16 bg-[#df4320]/10 text-[#df4320] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">build</span>
            </div>
            <h3 className="text-3xl font-bold text-[#181611] dark:text-white">
              Advanced Surgical Instruments & Techniques
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-[#181611] dark:text-white mb-3 text-lg">Innovative Suture Cut Needle Driver</h4>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                This specialized instrument simplifies suturing by minimizing instrument exchanges during 
                surgery. This efficiency helps maintain focus and precision throughout the procedure, 
                reducing surgical time while improving outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#181611] dark:text-white mb-3 text-lg">Smart Compression Stapling</h4>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                The system features intelligent stapling technology that ensures consistent staple formation 
                regardless of tissue thickness. This reliability promotes safe surgical outcomes and reduces 
                the risk of complications.
              </p>
            </div>
          </div>
        </div>

        {/* Robotic Setup & Precision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-14 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">settings</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Strategic Setup & Port Placement</h3>
            </div>
            <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed mb-4">
              Effective robotic surgery requires meticulous pre-operative planning. Strategic port placement 
              is customized based on each patient's unique anatomy and the complexity of the procedure. 
              This careful preparation ensures:
            </p>
            <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Optimal exposure of the surgical site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Safe and efficient instrument movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Minimized risk of complications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Enhanced surgical workflow through efficient docking techniques</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc]">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-14 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white">Adaptability & Collaboration</h3>
            </div>
            <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed mb-4">
              The Da Vinci system is designed to accommodate various anatomical variations through careful 
              pre-operative planning. The system's adaptability ensures:
            </p>
            <ul className="space-y-2 text-sm text-[#8a8060] dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Effective maneuvering even with different patient anatomies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Seamless collaboration between surgical team members</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Enhanced precision through team-based docking and setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8F9E8B] text-sm mt-0.5">check</span>
                <span>Continuous advancement through mentorship and collaboration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Future Advancements */}
        <div className="mt-12 bg-gradient-to-br from-[#df4320]/10 to-[#D4AF37]/10 rounded-2xl p-8 md:p-12 border border-[#df4320]/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-16 bg-[#df4320]/20 text-[#df4320] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#181611] dark:text-white mb-2">
                Next-Generation Technology
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300">
                Looking toward the future of robotic surgery
              </p>
            </div>
          </div>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-4">
            The evolution of robotic surgery continues with next-generation systems like the Da Vinci DV5 
            and SP platforms. These advanced systems emphasize improved integration, enhanced adaptability, 
            and even greater surgical precision. Dr. Smit Bharat Solanki stays at the forefront of these technological 
            advancements, ensuring patients receive access to the most advanced surgical care available.
          </p>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
            Our commitment to excellence extends beyond technology—we believe in the power of mentorship 
            and collaboration among surgical teams. This collaborative approach ensures continuous 
            improvement in robotic surgical techniques and outcomes, benefiting every patient we serve.
          </p>
        </div>
      </div>
    </section>
  );
}

