import Footer from "@/components/global/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Stethoscope } from "lucide-react";

export default function PCOSPage() {
  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
                PCOS
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-6">
                Understanding PCOS
              </h1>
              <p className="text-lg text-[#2D2A26]/70 max-w-2xl mx-auto">
                Polycystic Ovary Syndrome is a hormonal disorder affecting women of reproductive age, 
                characterized by irregular periods and potential fertility challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#2D2A26]/5 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-[#2D2A26] mb-4">Holistic Management</h2>
              <p className="text-[#2D2A26]/70 mb-6">
                Dr. Smit Bharat Solanki provides comprehensive PCOS management, combining lifestyle modifications, 
                medical treatment, and fertility support to help you achieve hormonal balance and improve your quality of life.
              </p>
              <Link
                href="/expertise/ivf-iui"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
              >
                Learn About Fertility Treatments
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

