"use client";

import Footer from "@/components/global/Footer";
import {
  HeroSection,
  WhyChooseSection,
  SpecializationsSection,
  TechnologySection,
  TestimonialsSection,
  ConditionsSection,
  AppointmentCTA
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <SpecializationsSection />
      <TechnologySection />
      <TestimonialsSection />
      <ConditionsSection />
      <AppointmentCTA />
      <Footer />
    </>
  );
}
