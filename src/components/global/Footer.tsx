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
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Technology
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Treatments
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Dr. Smit Bharat Solanki's Profile
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  International
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Stories of Hope
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#f4c025]">
              Patient Hub
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Education Hub
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Pre/Post-Op Guide
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Share Your Story
                </a>
              </li>
              <li>
                <a
                  className="text-[#edfcf9] hover:text-[#f4c025] hover:pl-2 transition-all duration-300 flex items-center group"
                  href="#"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 group-hover:mr-1 transition-all duration-300 text-[#f4c025]">
                    •
                  </span>{" "}
                  Your Private Replies
                </a>
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
                href="tel:+919876543210"
              >
                <span className="material-symbols-outlined text-[#f4c025] group-hover:text-white transition-colors">
                  call
                </span>
                <span className="font-medium tracking-wide">+91-98765 43210</span>
              </a>
              <a
                className="flex items-center gap-3 text-[#edfcf9] hover:text-[#f4c025] transition-colors group"
                href="mailto:info@drsmitsolanki.com"
              >
                <span className="material-symbols-outlined text-[#f4c025] group-hover:text-white transition-colors">
                  mail
                </span>
                <span className="font-medium tracking-wide">info@drsmitsolanki.com</span>
              </a>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#dcfce7] hover:bg-white text-[#166534] py-3 px-4 rounded-xl transition-all duration-300 w-full md:w-auto font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Chat Now on WhatsApp</span>
            </button>
            <div className="flex flex-col gap-4 mt-2 border-l-2 border-white/20 pl-4">
              <div className="flex gap-2 items-start">
                <div>
                  <p className="font-bold text-white text-sm">Parth Hospital</p>
                  <p className="text-xs text-[#edfcf9]/70 mt-0.5">Evening OPDs: 6-8 PM</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div>
                  <p className="font-bold text-white text-sm">Parul Sevashram Hospital</p>
                  <p className="text-xs text-[#edfcf9]/70 mt-0.5">Daily Day OPDs</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div>
                  <p className="font-bold text-white text-sm">Satyam Hospital</p>
                  <p className="text-xs text-[#edfcf9]/70 mt-0.5">Alternate Day OPDs</p>
                </div>
              </div>
              <a
                className="text-xs font-bold text-[#f4c025] hover:text-white transition-colors uppercase tracking-wide"
                href="/contact"
              >
                View Full Contact Page →
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-12">
          <div className="bg-[#005a63] rounded-xl p-8 md:p-10 relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4c025]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 border-4 border-[#006D77] shadow-md">
                  <img
                    alt="Comforting hands gesture"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxUfb5-OF4jGIxg8MmCAoAOZ8h_aMhwaFLs4WR3eAxGOXU0ffmnw2O30pSwzzVO-_UoeElMSezTl-ex1sYKIASxU6VCr6Px7ie7L3rNDJVqbbrpLSj1jcXD4NvXWSK7m2JBsPybt-ulK3W26-awGpvF33GivWcFH1dAkxJfUje_zgDunA-WqPIzjD66M-2ccjQPT2JGejVY7GzfU4SOTeAB2_D7Kgflvf3i76q10VnXPr38Yj8S8HApy3_dRBv5imHZ84HQfB5yA"
                  />
                </div>
                <div className="max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    Ready to Begin Your Healing Journey?
                  </h2>
                  <p className="text-[#edfcf9]/80 text-base">
                    Book a confidential consultation today. Experience care tailored to your needs.
                  </p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#f4c025] to-[#e0b020] hover:to-[#d9a010] text-[#181611] font-bold text-base py-3.5 px-8 rounded-xl shadow-lg shadow-[#f4c025]/20 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Book Appointment</span>
              </button>
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
            <a 
              href="/sitemap"
              className="hover:text-white transition-colors relative group"
            >
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </a>
          </div>
          <p className="opacity-60 text-xs">Website Designed &amp; Developed by DesignStudio</p>
        </div>
      </div>
    </footer>
  );
}
