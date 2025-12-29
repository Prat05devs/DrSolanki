import Footer from "@/components/global/Footer";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Stethoscope } from "lucide-react";

export default function ConditionsPage() {
  const conditions = [
    {
      name: "Uterine Fibroids",
      description: "Non-cancerous growths in the uterus that can cause heavy bleeding, pelvic pain, and pressure. Fibroids affect many women and can impact fertility and quality of life.",
      symptoms: ["Heavy or prolonged periods", "Pelvic pressure or pain", "Frequent urination", "Difficulty emptying bladder", "Constipation", "Back or leg pain"],
      link: "/conditions/fibroids",
      icon: "🔴"
    },
    {
      name: "Endometriosis",
      description: "A condition where tissue similar to the uterine lining grows outside the uterus, causing pain, inflammation, and potential fertility issues.",
      symptoms: ["Painful periods (dysmenorrhea)", "Chronic pelvic pain", "Pain during intercourse", "Infertility", "Heavy menstrual bleeding", "Fatigue"],
      link: "/conditions/endometriosis",
      icon: "💚"
    },
    {
      name: "PCOS (Polycystic Ovary Syndrome)",
      description: "A hormonal disorder affecting women of reproductive age, characterized by irregular periods, excess androgen levels, and polycystic ovaries.",
      symptoms: ["Irregular or missed periods", "Weight gain", "Excess hair growth (hirsutism)", "Acne", "Thinning hair", "Darkening of skin"],
      link: "/conditions/pcos",
      icon: "⚖️"
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
              Conditions We Treat
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2D2A26] mb-6">
              Specialized Care for Complex<br />
              <span className="text-[#C07766]">Gynecological Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2A26]/70 max-w-3xl mx-auto leading-relaxed">
              Dr. Smit Bharat Solanki provides expert diagnosis and advanced treatment options for a wide range 
              of gynecological conditions. With cutting-edge robotic surgery and personalized care, we help 
              women regain their health and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {conditions.map((condition, idx) => (
              <Link
                key={idx}
                href={condition.link}
                className="group block h-full p-8 rounded-2xl bg-white border border-[#2D2A26]/5 hover:border-[#C07766]/30 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{condition.icon}</div>
                <h2 className="text-2xl font-bold text-[#2D2A26] mb-3 group-hover:text-[#C07766] transition-colors">
                  {condition.name}
                </h2>
                <p className="text-[#2D2A26]/70 mb-6 leading-relaxed">
                  {condition.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-[#2D2A26]/80 mb-2">Common Symptoms:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {condition.symptoms.slice(0, 4).map((symptom, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#2D2A26]/60">
                        <CheckCircle2 className="w-4 h-4 text-[#8DA399] flex-shrink-0" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                    {condition.symptoms.length > 4 && (
                      <p className="text-xs text-[#2D2A26]/50 italic">
                        +{condition.symptoms.length - 4} more symptoms
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-[#C07766] font-semibold group-hover:gap-2 transition-all">
                  Learn more about {condition.name}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-2xl border border-[#2D2A26]/5 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#C07766]/10 flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-[#C07766]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2A26] mb-2">
                  Not Sure Which Condition You Have?
                </h3>
                <p className="text-[#2D2A26]/70 mb-4 max-w-md">
                  Schedule a consultation with Dr. Smit Bharat Solanki for a comprehensive evaluation 
                  and personalized treatment plan.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

