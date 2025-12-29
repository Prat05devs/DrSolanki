"use client";

import Footer from "@/components/global/Footer";
import HeroSection from "@/components/sections/dr-smit/HeroSection";
import PhilosophySection from "@/components/sections/dr-smit/PhilosophySection";
import CredentialsSection from "@/components/sections/dr-smit/CredentialsSection";
import ExpertiseShowcase from "@/components/sections/dr-smit/ExpertiseShowcase";
import AchievementsSection from "@/components/sections/dr-smit/AchievementsSection";
import GallerySection from "@/components/sections/dr-smit/GallerySection";
import ApproachSection from "@/components/sections/dr-smit/ApproachSection";
import StatsSection from "@/components/sections/dr-smit/StatsSection";
import CTASection from "@/components/sections/dr-smit/CTASection";

export default function DrSmitPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10] overflow-hidden">
      <HeroSection />
      <PhilosophySection />
      <CredentialsSection />
      <ExpertiseShowcase />
      <AchievementsSection />
      <GallerySection />
      <ApproachSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
