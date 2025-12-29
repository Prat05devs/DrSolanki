export default function FemifineLaserSection() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
            Advanced Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            Femifine™ Laser System: Revolutionary Non-Surgical Treatment
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            The Femifine™ laser system represents a breakthrough in non-surgical intimate wellness, 
            using focused thermal energy to stimulate natural healing and tissue rejuvenation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">
              How Femifine™ Works
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
              The Femifine™ system uses fractional CO2 laser technology to deliver controlled thermal 
              energy to the vaginal tissue. This gentle heating process stimulates the body's natural 
              collagen production, improves blood circulation, and promotes tissue regeneration.
            </p>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
              The treatment is performed in-office, requires no anesthesia, and takes approximately 
              15-30 minutes. Most patients describe the sensation as warm and comfortable, with 
              minimal to no discomfort.
            </p>
            <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-[#8FA392]/20">
              <h4 className="font-bold text-[#181611] dark:text-white mb-3 text-lg">Key Benefits:</h4>
              <ul className="space-y-2 text-[#8a8060] dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8FA392] text-sm mt-0.5">check</span>
                  <span>Stimulates natural collagen production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8FA392] text-sm mt-0.5">check</span>
                  <span>Improves tissue elasticity and moisture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8FA392] text-sm mt-0.5">check</span>
                  <span>Enhances blood flow and circulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8FA392] text-sm mt-0.5">check</span>
                  <span>No downtime - resume activities immediately</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Femifine laser system"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



