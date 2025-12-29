import Footer from "@/components/global/Footer";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, HelpCircle, Globe, Users } from "lucide-react";

export default function PatientSupportPage() {
  const supportResources = [
    {
      title: "The Support Circle",
      description: "A safe haven for healing. Resources and guidance for partners and families through the journey of care.",
      icon: Heart,
      link: "/patient-support/support-circle",
      color: "from-[#C07766] to-[#8DA399]"
    },
    {
      title: "Stories of Hope",
      description: "Inspiring real-life experiences of healing, strength, and renewed life. Patient journeys that inspire.",
      icon: Users,
      link: "/patient-support/stories",
      color: "from-[#f4c025] to-[#dba915]"
    },
    {
      title: "Education Hub",
      description: "Comprehensive educational resources to help you understand your condition and treatment options.",
      icon: BookOpen,
      link: "/patient-support/education",
      color: "from-[#8DA399] to-[#6B8E7A]"
    },
    {
      title: "FAQs",
      description: "Find clear, compassionate answers to common queries and essential resources for your health journey.",
      icon: HelpCircle,
      link: "/patient-support/faqs",
      color: "from-[#df4320] to-[#b93518]"
    },
    {
      title: "International Patients",
      description: "World-class care for our international patients, with compassionate support every step of the way.",
      icon: Globe,
      link: "/patient-support/international",
      color: "from-[#8FA392] to-[#6B8E7A]"
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FDFBF7] via-white to-[#E4EFE9]/30">
        <div className="container mx-auto px-6 max-w-7xl w-full py-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#C07766]/10 text-[#C07766] text-sm font-semibold mb-4">
              Patient Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2D2A26] mb-6">
              Your Journey,<br />
              <span className="text-[#C07766]">Our Support</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2A26]/70 max-w-3xl mx-auto leading-relaxed">
              At Dr. Smit Bharat Solanki's practice, we believe healing extends beyond medical treatment. 
              We provide comprehensive support resources to guide you and your loved ones through every step of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportResources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.link}
                className="group block h-full p-8 rounded-2xl bg-white border border-[#2D2A26]/5 hover:border-[#C07766]/30 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D2A26] mb-3 group-hover:text-[#C07766] transition-colors">
                  {resource.title}
                </h2>
                <p className="text-[#2D2A26]/70 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center text-[#C07766] font-semibold group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-[#2D2A26]/5 shadow-sm">
              <h3 className="text-xl font-bold text-[#2D2A26] mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-[#2D2A26]/70 mb-6">
                Our team is here to help. Reach out for support, questions, or to schedule an appointment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07766] hover:bg-[#C07766]/90 text-white font-semibold rounded-xl transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#2D2A26]/5 shadow-sm">
              <h3 className="text-xl font-bold text-[#2D2A26] mb-4">
                Your Health, Your Journey
              </h3>
              <p className="text-[#2D2A26]/70 mb-6">
                We understand that every patient's journey is unique. Our support resources are designed to 
                provide clarity, comfort, and confidence at every step.
              </p>
              <Link
                href="/expertise/dr-smit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[#2D2A26] font-semibold rounded-xl border-2 border-[#2D2A26]/10 hover:border-[#C07766]/30 transition-all"
              >
                Meet Dr. Smit Bharat Solanki
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

