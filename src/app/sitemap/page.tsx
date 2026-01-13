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
      title: "1. Home / First Page",
      links: [
        {
          path: "/",
          label: "Home"
        }
      ]
    },
    {
      title: "2. About Dr. Smit Bharat Solanki",
      links: [
        {
          path: "/about",
          label: "About Dr. Smit Bharat Solanki"
        },
        {
          path: "/expertise/dr-smit",
          label: "Detailed Profile (Alternative Link)"
        }
      ]
    },
    {
      title: "3. Clinics / Hospitals",
      links: [
        {
          path: "/clinics",
          label: "All Clinics & Hospitals"
        },
        {
          path: "/clinics/parul-sevashram",
          label: "Parul Sevashram Hospital (IVF)"
        },
        {
          path: "/clinics/parth",
          label: "Parth Hospital (Robotic)"
        },
        {
          path: "/clinics/satyam",
          label: "Satyam Hospital"
        }
      ]
    },
    {
      title: "4. Fertility Page",
      links: [
        {
          path: "/fertility",
          label: "Fertility Treatments Overview"
        },
        {
          path: "/expertise/ivf-iui",
          label: "IVF & IUI Services (Detailed)"
        }
      ]
    },
    {
      title: "5. Laparoscopy & Robotic Surgery",
      links: [
        {
          path: "/laparoscopy-robotic-surgery",
          label: "Laparoscopy & Robotic Surgery Overview"
        }
      ]
    },
    {
      title: "6. Aesthetic Gynecology",
      links: [
        {
          path: "/expertise/aesthetic-gynecology",
          label: "Aesthetic Gynecology"
        }
      ]
    },
    {
      title: "7. Urogynecology",
      links: [
        {
          path: "/urogynecology",
          label: "Urogynecology"
        }
      ]
    },
    {
      title: "8. Testimonials",
      links: [
        {
          path: "/testimonials",
          label: "Patient Testimonials"
        },
        {
          path: "/patient-support/stories",
          label: "Stories of Hope (Alternative Link)"
        }
      ]
    },
    {
      title: "Support Circle",
      links: [
        {
          path: "/patient-support/support-circle",
          label: "The Support Circle - Direct Doctor Communication"
        }
      ]
    },
    {
      title: "9. FAQs",
      links: [
        {
          path: "/faqs",
          label: "Frequently Asked Questions"
        },
        {
          path: "/patient-support/faqs",
          label: "FAQs (Alternative Link)"
        }
      ]
    },
    {
      title: "10. Papers / Achievements",
      links: [
        {
          path: "/papers",
          label: "Papers & Achievements"
        },
        {
          path: "/research-insights",
          label: "Research & Insights (Alternative Link)"
        }
      ]
    },
    {
      title: "Contact & Appointment",
      links: [
        {
          path: "/contact",
          label: "Contact Us"
        },
        {
          path: "/appointment",
          label: "Book Appointment"
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
