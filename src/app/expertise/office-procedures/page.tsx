import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowRight, Building2, Stethoscope } from "lucide-react";

export default function OfficeProceduresPage() {
  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
                Office Procedures
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-6">
                In-Office Procedures
              </h1>
              <p className="text-lg text-[#2D2A26]/70 max-w-2xl mx-auto">
                Dr. Smit Bharat Solanki offers a range of minimally invasive office-based procedures 
                for convenient, same-day treatment options.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#2D2A26]/5 shadow-sm mb-8 text-left">
              <h2 className="text-2xl font-bold text-[#2D2A26] mb-4">Available Procedures</h2>
              <p className="text-[#2D2A26]/70 mb-6">
                Our office procedures are designed to provide effective treatment with minimal discomfort 
                and quick recovery times. These procedures are performed in our comfortable office setting 
                without the need for general anesthesia.
              </p>
              <p className="text-[#2D2A26]/70">
                For more information about specific procedures and to determine if an office procedure 
                is right for you, please schedule a consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
              >
                <Stethoscope className="w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#2D2A26] font-semibold rounded-xl border-2 border-[#2D2A26]/10 hover:border-[#C07766]/30 transition-all"
              >
                View All Expertise
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

