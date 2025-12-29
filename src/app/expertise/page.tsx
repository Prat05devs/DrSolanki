import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowRight, Person, Baby, FlaskConical, Bot, Sparkles, Verified, MeetingRoom } from "lucide-react";

export default function ExpertisePage() {
  const expertise = [
    {
      title: "Meet Dr. Smit Bharat Solanki",
      description: "Learn about Dr. Smit Bharat Solanki's qualifications, philosophy, and commitment to excellence in women's healthcare.",
      icon: Person,
      link: "/expertise/dr-smit",
      color: "from-[#C07766] to-[#8DA399]"
    },
    {
      title: "Uterus Transplant",
      description: "Advanced reproductive options for absolute uterine factor infertility. Pioneering work in uterus transplantation.",
      icon: Baby,
      link: "/expertise/uterus-transplant",
      color: "from-[#f4c025] to-[#dba915]"
    },
    {
      title: "IVF & IUI Services",
      description: "Comprehensive fertility treatments with high success rates. Personalized care for your fertility journey.",
      icon: FlaskConical,
      link: "/expertise/ivf-iui",
      color: "from-[#8DA399] to-[#6B8E7A]"
    },
    {
      title: "Robotic Surgery",
      description: "Da Vinci Robotic System for precision procedures. Minimally invasive surgery with faster recovery.",
      icon: Bot,
      link: "/expertise/robotic-surgery",
      color: "from-[#df4320] to-[#b93518]"
    },
    {
      title: "Aesthetic Gynecology",
      description: "Non-surgical aesthetic treatments using advanced laser technology. Restore confidence and enhance wellness.",
      icon: Sparkles,
      link: "/expertise/aesthetic-gynecology",
      color: "from-[#8FA392] to-[#6B8E7A]"
    },
    {
      title: "Research & Insights",
      description: "Scientific publications and research insights. Evidence-based care backed by peer-reviewed studies.",
      icon: Verified,
      link: "/research-insights",
      color: "from-[#C07766] to-[#8DA399]"
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2D2A26] mb-6">
              Comprehensive Women's<br />
              <span className="text-[#C07766]">Healthcare Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2A26]/70 max-w-3xl mx-auto leading-relaxed">
              Dr. Smit Bharat Solanki brings together advanced medical expertise, cutting-edge technology, 
              and compassionate care to provide comprehensive solutions for all aspects of women's reproductive health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="group block h-full p-8 rounded-2xl bg-white border border-[#2D2A26]/5 hover:border-[#C07766]/30 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D2A26] mb-3 group-hover:text-[#C07766] transition-colors">
                  {item.title}
                </h2>
                <p className="text-[#2D2A26]/70 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-[#C07766] font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-2xl border border-[#2D2A26]/5 shadow-sm max-w-2xl">
              <h3 className="text-2xl font-bold text-[#2D2A26]">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-[#2D2A26]/70">
                Schedule a consultation with Dr. Smit Bharat Solanki to discuss your specific needs and explore 
                the best treatment options for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

