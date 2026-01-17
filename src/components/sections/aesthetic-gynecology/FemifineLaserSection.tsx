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
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                alt="Medency RAPIDO medical laser system"
                className="w-full h-full object-cover"
                src="/astheticGyno.png"
                width={800}
                height={600}
              />
            </div>
            <div className="mt-6 bg-white dark:bg-white/5 rounded-2xl p-6 border border-[#8FA392]/20 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-[#8FA392] dark:text-[#8FA392] font-bold">
                Medency RAPIDO
              </p>
              <h4 className="text-xl font-bold text-[#181611] dark:text-white mt-2">
                Medical Laser System
              </h4>
              <div className="mt-4 grid gap-3 text-sm sm:text-base text-[#8a8060] dark:text-gray-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Code</span>
                  <span>LADER 005.2</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Wavelength/power</span>
                  <span>1470nm @8W</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Frequency</span>
                  <span>Up to 25 kHz</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Pulse mode</span>
                  <span>Continuous - Multiple Single</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Pulse range</span>
                  <span>20µs up to 2s</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Medical/Laser class</span>
                  <span>IIB / 4</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-[#181611] dark:text-white">Dimensions/Weight</span>
                  <span>205x130x50mm</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#8a8060] dark:text-gray-300">
                Medency RAPIDO is a medical device with CE trademark. In accordance with current EEC
                Directives for Medical Device, all Medency products are MADE IN ITALY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



