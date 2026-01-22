"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Global Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <header className="bg-[#FDFBF7]/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(45,42,38,0.05)] border-b border-[#E6E2D6]/50 transition-all duration-300">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
            {/* 1. Left: Logo */}
            <div className="flex-shrink min-w-0 max-w-[70%] sm:max-w-none">
              <Link href="/" className="flex items-center group">
                <h1 className="font-serif text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#2D2A26] tracking-tight group-hover:text-[#C07766] transition-colors truncate">
                  Dr. Smit Bharat Solanki
                </h1>
              </Link>
            </div>

            {/* 2. Center: Main Navigation */}
            <nav className="hidden xl:flex items-center h-full flex-1 justify-center">
              <ul className="flex items-center gap-1 h-full">
                {/* About */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-4 h-full outline-none">
                    About
                    <span className="material-symbols-outlined text-[16px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  <div className="dropdown-menu invisible opacity-0 absolute top-full left-0 w-56 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-[#E6E2D6] rounded-lg shadow-xl p-2">
                      <Link
                        href="/about"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                      >
                        <span className="material-symbols-outlined text-[#8DA399] text-lg">person</span>
                        <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">
                          About Dr. Smit
                        </span>
                      </Link>
                      <Link
                        href="/gallery"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                      >
                        <span className="material-symbols-outlined text-[#8DA399] text-lg">photo_library</span>
                        <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">
                          Gallery
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Services */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-4 h-full outline-none">
                    Services
                    <span className="material-symbols-outlined text-[16px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  <div className="dropdown-menu invisible opacity-0 absolute top-full left-0 w-72 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-[#E6E2D6] rounded-lg shadow-xl p-3">
                      <div className="space-y-1">
                        <Link
                          href="/fertility"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">science</span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">Fertility & IVF</p>
                            <p className="text-xs text-[#2D2A26]/60">IVF, IUI & Fertility Treatments</p>
                          </div>
                        </Link>
                        <Link
                          href="/laparoscopy-robotic-surgery"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">precision_manufacturing</span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">Laparoscopy & Robotic Surgery</p>
                            <p className="text-xs text-[#2D2A26]/60">Minimally Invasive Procedures</p>
                          </div>
                        </Link>
                        <Link
                          href="/expertise/aesthetic-gynecology"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">spa</span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">Aesthetic Gynecology</p>
                            <p className="text-xs text-[#2D2A26]/60">Non-surgical & Surgical Options</p>
                          </div>
                        </Link>
                        <Link
                          href="/urogynecology"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">healing</span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">Urogynecology</p>
                            <p className="text-xs text-[#2D2A26]/60">Pelvic Floor & Urinary Health</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Clinics */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-4 h-full outline-none">
                    Clinics
                    <span className="material-symbols-outlined text-[16px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  <div className="dropdown-menu invisible opacity-0 absolute top-full left-0 w-64 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-[#E6E2D6] rounded-lg shadow-xl p-3">
                      <div className="space-y-1">
                        <Link
                          href="/clinics"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">local_hospital</span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">All Clinics</span>
                        </Link>
                        <div className="h-px bg-[#E6E2D6] my-2"></div>
                        <Link
                          href="/clinics/parul-sevashram"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">favorite</span>
                          <div>
                            <p className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Parul Sevashram Hospital</p>
                            <p className="text-xs text-[#2D2A26]/60">Vadodara • IVF Services</p>
                          </div>
                        </Link>
                        <Link
                          href="/clinics/parth"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">precision_manufacturing</span>
                          <div>
                            <p className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Parth Hospital</p>
                            <p className="text-xs text-[#2D2A26]/60">Ahmedabad • Robotic Surgery</p>
                          </div>
                        </Link>
                        <Link
                          href="/clinics/satyam"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">local_hospital</span>
                          <div>
                            <p className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Satyam Hospital</p>
                            <p className="text-xs text-[#2D2A26]/60">Vadodara • Multi-Specialty</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Resources */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-4 h-full outline-none">
                    Resources
                    <span className="material-symbols-outlined text-[16px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  <div className="dropdown-menu invisible opacity-0 absolute top-full left-0 w-64 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-[#E6E2D6] rounded-lg shadow-xl p-3">
                      <div className="space-y-1">
                        <Link
                          href="/testimonials"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">volunteer_activism</span>
                          <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Testimonials</span>
                        </Link>
                        <Link
                          href="/faqs"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">help</span>
                          <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">FAQs</span>
                        </Link>
                        <Link
                          href="/papers"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">description</span>
                          <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Papers & Achievements</span>
                        </Link>
                        <Link
                          href="/patient-support/support-circle"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] text-lg">chat</span>
                          <span className="text-sm font-medium text-[#2D2A26] group-hover/item:text-[#C07766]">Support Circle</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </nav>

            {/* 3. Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
              {/* CTA Button */}
              <Link href="/appointment" className="hidden sm:block">
                <button className="group flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#f4c025] to-[#dba915] hover:from-[#dba915] hover:to-[#f4c025] text-white rounded-full h-8 sm:h-9 md:h-10 lg:h-11 px-3 sm:px-4 md:px-5 lg:px-6 shadow-md hover:shadow-lg hover:shadow-[#f4c025]/20 transition-all duration-300 transform hover:-translate-y-0.5 touch-manipulation">
                  <span className="material-symbols-outlined text-sm sm:text-base md:text-lg lg:text-[20px]">calendar_month</span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">Schedule Appointment</span>
                </button>
              </Link>

              {/* Mobile Menu Button (Visible on small screens) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#E6E2D6] text-[#2D2A26] shadow-sm hover:bg-[#F5F2EA] active:bg-[#C07766] active:text-white transition-colors touch-manipulation"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl md:text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-14 sm:top-16 md:top-18 lg:top-20 bottom-0 bg-white/95 backdrop-blur-md z-40 overflow-y-auto overscroll-contain">
          <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 lg:py-6 space-y-2 sm:space-y-3 md:space-y-4 pb-8 sm:pb-10">
            {/* About */}
            <div>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all"
              >
                <span className="material-symbols-outlined text-[#8DA399]">person</span>
                <span className="text-base font-medium text-[#2D2A26]">About Dr. Smit</span>
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all"
              >
                <span className="material-symbols-outlined text-[#8DA399]">photo_library</span>
                <span className="text-base font-medium text-[#2D2A26]">Gallery</span>
              </Link>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-bold text-[#C07766] uppercase tracking-wider px-3 mb-2">Services</p>
              <div className="space-y-1">
                <Link href="/fertility" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">science</span>
                  <span className="text-sm text-[#2D2A26]">Fertility & IVF</span>
                </Link>
                <Link href="/laparoscopy-robotic-surgery" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">precision_manufacturing</span>
                  <span className="text-sm text-[#2D2A26]">Laparoscopy & Robotic Surgery</span>
                </Link>
                <Link href="/expertise/aesthetic-gynecology" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">spa</span>
                  <span className="text-sm text-[#2D2A26]">Aesthetic Gynecology</span>
                </Link>
                <Link href="/urogynecology" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">healing</span>
                  <span className="text-sm text-[#2D2A26]">Urogynecology</span>
                </Link>
              </div>
            </div>

            {/* Clinics */}
            <div>
              <p className="text-xs font-bold text-[#C07766] uppercase tracking-wider px-3 mb-2">Clinics</p>
              <div className="space-y-1">
                <Link href="/clinics" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">local_hospital</span>
                  <span className="text-sm text-[#2D2A26]">All Clinics</span>
                </Link>
                <Link href="/clinics/parul-sevashram" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="text-sm text-[#2D2A26] pl-8">Parul Sevashram Hospital</span>
                </Link>
                <Link href="/clinics/parth" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="text-sm text-[#2D2A26] pl-8">Parth Hospital</span>
                </Link>
                <Link href="/clinics/satyam" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="text-sm text-[#2D2A26] pl-8">Satyam Hospital</span>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <p className="text-xs font-bold text-[#C07766] uppercase tracking-wider px-3 mb-2">Resources</p>
              <div className="space-y-1">
                <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">volunteer_activism</span>
                  <span className="text-sm text-[#2D2A26]">Testimonials</span>
                </Link>
                <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">help</span>
                  <span className="text-sm text-[#2D2A26]">FAQs</span>
                </Link>
                <Link href="/papers" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">description</span>
                  <span className="text-sm text-[#2D2A26]">Papers & Achievements</span>
                </Link>
                <Link href="/patient-support/support-circle" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F2EA] transition-all">
                  <span className="material-symbols-outlined text-[#8DA399] text-lg">chat</span>
                  <span className="text-sm text-[#2D2A26]">Support Circle</span>
                </Link>
              </div>
            </div>

            {/* Appointment */}
            <div className="pt-4 border-t border-[#E6E2D6]">
              <Link
                href="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F2EA] hover:bg-[#E8EFED] transition-all"
              >
                <span className="material-symbols-outlined text-[#C07766]">calendar_month</span>
                <span className="text-base font-semibold text-[#2D2A26]">Schedule Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-14 sm:h-16 md:h-18 lg:h-20"></div>
    </>
  );
}
