import Link from "next/link";
import { contactInfo } from "@/data/siteData";

export default function CTASection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#8FA392] to-[#6B8E7A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="layout-container flex h-full grow flex-col relative z-10">
        <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Restore Your Confidence, Enhance Your Wellness
            </h2>
            <p className="text-white/90 text-xl max-w-2xl">
              Take the first step towards improved intimate health and confidence. Schedule a private 
              consultation to discuss your concerns and explore treatment options tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#8FA392] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                Schedule Consultation
              </Link>
              <Link href={`tel:${contactInfo.phone}`} className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-300">
                <span className="material-symbols-outlined mr-2 text-2xl">call</span>
                Call Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



