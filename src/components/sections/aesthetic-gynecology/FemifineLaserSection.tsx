import Image from "next/image";
import { laser1470FaqContent } from "@/data/siteData";

export default function FemifineLaserSection() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-10 bg-[#f8f8f5] dark:bg-[#221e10]">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
        <div className="text-center mb-16">
          <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
            Advanced Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
            {laser1470FaqContent.title}
          </h2>
          <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {laser1470FaqContent.introduction}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">
              Why These Changes Occur
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
              {laser1470FaqContent.whyChanges}
            </p>
            <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6 mt-8">
              What Is This Treatment?
            </h3>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
              {laser1470FaqContent.whatIsTreatment}
            </p>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed mb-6">
              {laser1470FaqContent.howItWorks}
            </p>
            <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-[#8FA392]/20">
              <h4 className="font-bold text-[#181611] dark:text-white mb-3 text-lg">Study Findings:</h4>
              <p className="text-[#8a8060] dark:text-gray-300 mb-4">
                {laser1470FaqContent.studyFindings}
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 mb-4">
                {laser1470FaqContent.safety}
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 mb-4">
                {laser1470FaqContent.sessions}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#8FA392]/10 to-transparent rounded-xl p-6 border border-[#8FA392]/20 mt-6">
              <h4 className="font-bold text-[#181611] dark:text-white mb-3 text-lg">Who Can Benefit:</h4>
              <p className="text-[#8a8060] dark:text-gray-300">
                {laser1470FaqContent.whoBenefits}
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Vaginal rejuvenation with 1470-nm laser"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMPk_Dd6bT5pLuAMKxbOOHCE8SjJmz-oshaqjHxL6yQZKGDQ4PMtCxZ4QLhPIUmULcMzxUiaPNnGNx7dU3zuaPiZ64-th7EBoPVunr9AHbeViSm_ZsYq8mOIAKWUA3La84LRqLwgi95M328YXXSHCOD5xjmB3bnjvfoRgeOPt2_ToX95joRuj4BPdIeeUGOEQCGvVw-zMRFR7f6gOXBxsRszEdlUCah3f8EjxhReUAdDYxsTIzE8FEqis9t3I2kwbUXfqEMfrYQ"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}



