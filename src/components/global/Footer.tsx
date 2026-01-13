import Link from "next/link";
import { contactInfo, hospitals } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#006D77] text-white border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16">
          <div className="lg:col-span-4 flex flex-col gap-6 pr-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-3xl font-bold tracking-tight font-[var(--font-playfair)]">
                Dr. Smit Bharat Solanki
              </h2>
              <p className="text-sm font-medium text-[#f4c025] uppercase tracking-wider">
                Compassion. Precision. Results.
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#edfcf9]/90 font-light">
              Restoring hope, redefining women's health with advanced robotics and heartfelt care. A sanctuary for
              your healing journey.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#faeec8] hover:bg-[#f4c025] hover:text-[#006D77] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </a>
              <a
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#faeec8] hover:bg-[#f4c025] hover:text-[#006D77] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#faeec8] hover:bg-[#f4c025] hover:text-[#006D77] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">business_center</span>
              </a>
              <a
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#faeec8] hover:bg-[#f4c025] hover:text-[#006D77] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#f4c025]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/expertise/dr-smit"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  About Dr. Smit
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/laparoscopy-robotic-surgery"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Robotic Surgery
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/fertility"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Fertility & IVF
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/expertise/aesthetic-gynecology"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Aesthetic Gynecology
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/urogynecology"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Urogynecology
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/clinics"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Our Clinics
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#f4c025]">
              Patient Hub
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/patient-support/support-circle#ask-your-questions"
                  scroll={true}
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-[#f4c025]">support_agent</span>
                    <span className="font-semibold">Interactive Chatbot</span>
                    <span className="px-1.5 py-0.5 bg-[#f4c025]/20 text-[#f4c025] text-[10px] font-bold uppercase rounded">New</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/patient-support/stories"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/patient-support/faqs"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/research-insights"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/papers"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Papers & Achievements
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="/testimonials"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#f4c025]">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                className="flex items-center gap-3 text-[#edfcf9] hover:text-[#f4c025] transition-colors group"
                href={`tel:${contactInfo.phone}`}
              >
                <span className="material-symbols-outlined text-[#f4c025] group-hover:text-white transition-colors">
                  call
                </span>
                <span className="font-medium tracking-wide">{contactInfo.phone}</span>
              </a>
              <a
                className="flex items-center gap-3 text-[#edfcf9] hover:text-[#f4c025] transition-colors group"
                href={`mailto:${contactInfo.email}`}
              >
                <span className="material-symbols-outlined text-[#f4c025] group-hover:text-white transition-colors">
                  mail
                </span>
                <span className="font-medium tracking-wide">{contactInfo.email}</span>
              </a>
            </div>
            <a
              href="https://wa.me/919712982198"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#dcfce7] hover:bg-white text-[#166534] py-3 px-4 rounded-xl transition-all duration-300 w-full md:w-auto font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Chat Now on WhatsApp</span>
            </a>
            <div className="flex flex-col gap-4 mt-2 border-l-2 border-white/20 pl-4">
              {hospitals.map((hospital, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <div>
                    <Link
                      href={`/clinics/${hospital.slug}`}
                      className="font-bold text-white text-sm hover:text-[#f4c025] transition-colors"
                    >
                      {hospital.name}
                    </Link>
                    <p className="text-xs text-[#edfcf9]/70 mt-0.5">{hospital.timing}</p>
                  </div>
                </div>
              ))}
              <Link
                className="text-xs font-bold text-[#f4c025] hover:text-white transition-colors uppercase tracking-wide"
                href="/contact"
              >
                View Full Contact Page →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Interactive Chatbot Feature - Prominently Displayed */}
        <div className="border-t border-white/10 py-8">
          <div className="bg-gradient-to-br from-[#f4c025] via-[#e0b020] to-[#d9a010] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_20px_60px_-10px_rgba(244,192,37,0.4)] border-2 border-white/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left flex-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border-4 border-white/30 shadow-lg">
                    <span className="material-symbols-outlined text-white text-4xl md:text-5xl">support_agent</span>
                  </div>
                  <div className="max-w-2xl">
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-[#181611] mb-3 leading-tight font-[var(--font-playfair)]">
                      Ask Your Questions Instantly
                    </h2>
                    <p className="text-[#181611]/90 text-lg md:text-xl font-medium leading-relaxed mb-4">
                      Get instant answers about surgery, recovery, fertility, and more. Our interactive chatbot guides partners and families through common questions—no typing required, just click and explore.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                      <div className="flex items-center gap-2 text-[#181611]/80 text-sm">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                        <span>Suggested Questions</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#181611]/80 text-sm">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                        <span>Instant Answers</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#181611]/80 text-sm">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/patient-support/support-circle#ask-your-questions"
                  className="bg-[#181611] hover:bg-[#2D2A26] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap flex items-center gap-3 group"
                  scroll={true}
                >
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">chat_bubble</span>
                  <span>Try Interactive Chatbot</span>
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#faeec8]/80">
          <p>© 2024 Dr. Smit Bharat Solanki. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="hover:text-white transition-colors relative group" href="#">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </a>
            <a className="hover:text-white transition-colors relative group" href="#">
              Terms &amp; Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </a>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors relative group"
            >
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <p className="opacity-60 text-xs">Website Designed &amp; Developed by Prateek @BasicTech</p>
        </div>
      </div>
    </footer>
  );
}
