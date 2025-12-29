import Footer from "@/components/global/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Stethoscope } from "lucide-react";

export default function EndometriosisPage() {
  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
                Endometriosis
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-6">
                Understanding Endometriosis
              </h1>
              <p className="text-lg text-[#2D2A26]/70 max-w-2xl mx-auto">
                A condition where tissue similar to the uterine lining grows outside the uterus, causing pain and potential fertility issues.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#2D2A26]/5 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-[#2D2A26] mb-4">Advanced Treatment</h2>
              <p className="text-[#2D2A26]/70 mb-6">
                Dr. Smit Bharat Solanki uses advanced robotic excision techniques to completely remove 
                endometriosis while preserving healthy tissue and fertility.
              </p>
              <Link
                href="/expertise/robotic-surgery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
              >
                Learn About Robotic Surgery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[#2D2A26] font-semibold rounded-xl border-2 border-[#2D2A26]/10 hover:border-[#C07766]/30 transition-all"
              >
                <Stethoscope className="w-5 h-5 text-[#C07766]" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

