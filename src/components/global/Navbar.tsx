"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Global Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <header className="bg-[#FDFBF7] shadow-[0_4px_20px_-2px_rgba(45,42,38,0.05)] border-b border-[#E6E2D6] transition-all duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
            {/* 1. Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <h1 className="font-serif text-lg font-bold text-[#2D2A26] tracking-tight group-hover:text-[#C07766] transition-colors">
                  Dr. Smit Bharat Solanki
                </h1>
              </Link>
            </div>

            {/* 2. Center: Main Navigation */}
            <nav className="hidden xl:flex items-center h-full flex-1 justify-center">
              <ul className="flex items-center gap-6 h-full">
                {/* Technology & Care (Mega Menu) */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-2 h-full outline-none">
                    Technology &amp; Care
                    <span className="material-symbols-outlined text-[18px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="dropdown-menu invisible opacity-0 absolute top-full -left-4 w-72 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#FDFBF7] border border-[#E6E2D6] rounded-2xl shadow-[0_10px_25px_-5px_rgba(45,42,38,0.1)] p-2 overflow-hidden">
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/technology-care"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] mt-0.5 group-hover/item:text-[#f4c025] transition-colors">
                            precision_manufacturing
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766] transition-colors">
                              Advanced Technology Overview
                            </p>
                            <p className="text-xs text-[#2D2A26]/60 mt-0.5">
                              State-of-the-art precision care
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/technology-care/hysteroscopy"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] mt-0.5 group-hover/item:text-[#f4c025] transition-colors">
                            travel_explore
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766] transition-colors">
                              Hysteroscopy
                            </p>
                            <p className="text-xs text-[#2D2A26]/60 mt-0.5">
                              Uterine insights &amp; diagnosis
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/technology-care/laparoscopic"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] mt-0.5 group-hover/item:text-[#f4c025] transition-colors">
                            monitor_heart
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766] transition-colors">
                              Laparoscopic Procedures
                            </p>
                            <p className="text-xs text-[#2D2A26]/60 mt-0.5">
                              Minimally invasive surgery
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Conditions & Solutions */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-2 h-full outline-none">
                    Conditions &amp; Solutions
                    <span className="material-symbols-outlined text-[18px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="dropdown-menu invisible opacity-0 absolute top-full -left-12 w-[480px] pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#FDFBF7] border border-[#E6E2D6] rounded-2xl shadow-[0_10px_25px_-5px_rgba(45,42,38,0.1)] p-4 overflow-hidden">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2 pb-2 mb-2 border-b border-[#E6E2D6]/50">
                          <span className="text-xs font-bold text-[#C07766] uppercase tracking-wider pl-2">
                            Common Conditions
                          </span>
                        </div>
                        <Link
                          href="/conditions/endometriosis"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8DA399] group-hover/item:bg-[#f4c025]"></div>
                          <span className="text-sm text-[#2D2A26] font-medium group-hover/item:text-[#C07766]">
                            Endometriosis
                          </span>
                        </Link>
                        <Link
                          href="/conditions/pcos"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8DA399] group-hover/item:bg-[#f4c025]"></div>
                          <span className="text-sm text-[#2D2A26] font-medium group-hover/item:text-[#C07766]">
                            PCOS
                          </span>
                        </Link>
                        <Link
                          href="/conditions/fibroids"
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8DA399] group-hover/item:bg-[#f4c025]"></div>
                          <span className="text-sm text-[#2D2A26] font-medium group-hover/item:text-[#C07766]">
                            Fibroids
                          </span>
                        </Link>
                        <div className="col-span-2 mt-2">
                          <Link
                            href="/conditions"
                            className="flex items-center justify-center p-2 rounded-lg bg-[#E8EFED]/50 hover:bg-[#E8EFED] text-xs font-bold text-[#8DA399] hover:text-[#C07766] transition-colors w-full"
                          >
                            View All Conditions
                            <span className="material-symbols-outlined text-[14px] ml-1">
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Our Expertise */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-2 h-full outline-none">
                    Our Expertise
                    <span className="material-symbols-outlined text-[18px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="dropdown-menu invisible opacity-0 absolute top-full -left-4 w-64 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#FDFBF7] border border-[#E6E2D6] rounded-2xl shadow-[0_10px_25px_-5px_rgba(45,42,38,0.1)] p-2 overflow-hidden">
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/expertise/dr-smit"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            person
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Meet Dr. Smit Bharat Solanki
                          </span>
                        </Link>
                        <Link
                          href="/expertise/uterus-transplant"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            child_care
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Uterus Transplant
                          </span>
                        </Link>
                        <Link
                          href="/expertise/ivf-iui"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            science
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            IVF &amp; IUI Services
                          </span>
                        </Link>
                        <Link
                          href="/expertise/robotic-surgery"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            precision_manufacturing
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Robotic Surgery
                          </span>
                        </Link>
                        <Link
                          href="/expertise/aesthetic-gynecology"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            spa
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Aesthetic Gynecology
                          </span>
                        </Link>
                        <div className="h-px bg-[#E6E2D6] mx-2 my-1"></div>
                        <Link
                          href="/research-insights"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            verified
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Research &amp; Insights
                          </span>
                        </Link>
                        <Link
                          href="/expertise/office-procedures"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <span className="material-symbols-outlined text-[#8DA399] group-hover/item:text-[#f4c025]">
                            meeting_room
                          </span>
                          <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                            Office Procedures
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Patient Support */}
                <li className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-2 h-full outline-none">
                    Patient Support
                    <span className="material-symbols-outlined text-[18px] opacity-60 group-hover:rotate-180 transition-transform duration-300">
                      keyboard_arrow_down
                    </span>
                  </button>
                  {/* Dropdown */}
                  <div className="dropdown-menu invisible opacity-0 absolute top-full right-0 w-72 pt-2 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#FDFBF7] border border-[#E6E2D6] rounded-2xl shadow-[0_10px_25px_-5px_rgba(45,42,38,0.1)] p-2 overflow-hidden">
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/patient-support/support-circle"
                          className="block p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-[#8DA399] text-[18px] group-hover/item:text-[#f4c025]">
                              favorite
                            </span>
                            <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                              The Support Circle
                            </span>
                          </div>
                          <p className="text-xs text-[#2D2A26]/60 pl-6">
                            For husbands &amp; parents
                          </p>
                        </Link>
                        <Link
                          href="/patient-support/stories"
                          className="block p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-[#8DA399] text-[18px] group-hover/item:text-[#f4c025]">
                              volunteer_activism
                            </span>
                            <span className="text-sm font-semibold text-[#2D2A26] group-hover/item:text-[#C07766]">
                              Stories of Hope
                            </span>
                          </div>
                          <p className="text-xs text-[#2D2A26]/60 pl-6">Patient journeys</p>
                        </Link>
                        <div className="h-px bg-[#E6E2D6] mx-2 my-1"></div>
                        <Link
                          href="/patient-support/education"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-[#C07766] transition-colors"
                        >
                          <span className="text-sm text-[#2D2A26] font-medium hover:text-[#C07766]">
                            Education Hub
                          </span>
                        </Link>
                        <Link
                          href="/patient-support/faqs"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-[#C07766] transition-colors"
                        >
                          <span className="text-sm text-[#2D2A26] font-medium hover:text-[#C07766]">
                            FAQs
                          </span>
                        </Link>
                        <Link
                          href="/patient-support/international"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:text-[#C07766] transition-colors"
                        >
                          <span className="text-sm text-[#2D2A26] font-medium hover:text-[#C07766]">
                            International Patients
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Contact */}
                <li className="h-full flex items-center">
                  <Link
                    href="/contact"
                    className="h-full flex items-center text-sm font-medium text-[#2D2A26] hover:text-[#C07766] transition-colors px-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* 3. Right: Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Language Toggle */}
              <div className="hidden sm:flex items-center bg-[#F5F2EA] border border-[#E6E2D6] rounded-full p-1 h-9">
                <button className="px-3 h-full rounded-full bg-white shadow-sm text-xs font-bold text-[#C07766] tracking-wide transition-all">
                  ENG
                </button>
                <button className="px-3 h-full rounded-full text-xs font-semibold text-[#2D2A26]/60 hover:text-[#2D2A26] transition-all">
                  HIN
                </button>
                <button className="px-3 h-full rounded-full text-xs font-semibold text-[#2D2A26]/60 hover:text-[#2D2A26] transition-all">
                  GUJ
                </button>
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <button className="group flex items-center gap-2 bg-gradient-to-r from-[#f4c025] to-[#dba915] hover:from-[#dba915] hover:to-[#f4c025] text-white rounded-full h-11 px-6 shadow-md hover:shadow-lg hover:shadow-[#f4c025]/20 transition-all duration-300 transform hover:-translate-y-0.5">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span className="text-sm font-bold tracking-wide">Book Appointment</span>
                </button>
              </Link>

              {/* Mobile Menu Button (Visible on small screens) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center size-10 rounded-full bg-[#F5F2EA] text-[#2D2A26] hover:bg-[#C07766] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
