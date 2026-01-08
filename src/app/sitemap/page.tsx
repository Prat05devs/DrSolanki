import Link from "next/link";
import Footer from "@/components/global/Footer";

interface SitemapSection {
  title: string;
  links: {
    path: string;
    label: string;
  }[];
}

export default function SitemapPage() {
  const sitemapSections: SitemapSection[] = [
    {
      title: "Home",
      links: [
        {
          path: "/",
          label: "Home"
        }
      ]
    },
    {
      title: "Conditions & Solutions",
      links: [
        {
          path: "/conditions",
          label: "All Conditions"
        },
        {
          path: "/conditions/fibroids",
          label: "Uterine Fibroids"
        },
        {
          path: "/conditions/endometriosis",
          label: "Endometriosis"
        },
        {
          path: "/conditions/pcos",
          label: "PCOS"
        }
      ]
    },
    {
      title: "Our Expertise",
      links: [
        {
          path: "/expertise",
          label: "All Expertise"
        },
        {
          path: "/expertise/dr-smit",
          label: "Meet Dr. Smit Bharat Solanki"
        },
        {
          path: "/expertise/robotic-surgery",
          label: "Robotic Surgery"
        },
        {
          path: "/expertise/ivf-iui",
          label: "IVF & IUI Services"
        },
        {
          path: "/expertise/uterus-transplant",
          label: "Uterus Transplant"
        },
        {
          path: "/expertise/aesthetic-gynecology",
          label: "Aesthetic Gynecology"
        },
        {
          path: "/expertise/office-procedures",
          label: "Office Procedures"
        }
      ]
    },
    {
      title: "Technology & Care",
      links: [
        {
          path: "/technology-care",
          label: "Technology Overview"
        },
        {
          path: "/technology-care/hysteroscopy",
          label: "Hysteroscopy"
        },
        {
          path: "/technology-care/laparoscopic",
          label: "Laparoscopic Procedures"
        }
      ]
    },
    {
      title: "Patient Support",
      links: [
        {
          path: "/patient-support",
          label: "Patient Support Hub"
        },
        {
          path: "/patient-support/support-circle",
          label: "The Support Circle"
        },
        {
          path: "/patient-support/stories",
          label: "Stories of Hope"
        },
        {
          path: "/patient-support/faqs",
          label: "FAQs"
        },
        {
          path: "/patient-support/international",
          label: "International Patients"
        },
        {
          path: "/patient-support/education",
          label: "Education Hub"
        }
      ]
    },
    {
      title: "Research & Insights",
      links: [
        {
          path: "/research-insights",
          label: "Research & Insights"
        }
      ]
    },
    {
      title: "Contact",
      links: [
        {
          path: "/contact",
          label: "Contact Us"
        },
        {
          path: "/contact/international",
          label: "International Contact"
        }
      ]
    }
  ];

  return (
    <main className="flex flex-col w-full bg-[#FDFBF7] min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 sm:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4">
            Site Map
          </h1>
          <p className="text-lg text-[#2D2A26]/70">
            Navigate to any page on our website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 px-4 sm:px-10 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {sitemapSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-2xl font-bold text-[#2D2A26] mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.path}
                        className="text-[#2D2A26] hover:text-[#C07766] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
