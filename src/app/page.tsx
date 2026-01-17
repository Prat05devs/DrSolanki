import Footer from "@/components/global/Footer";
import { buildMetadata } from "@/lib/seo";
import {
  HeroSection,
  WhyChooseSection,
  SpecializationsSection,
  TechnologySection,
  TestimonialsSection,
  ConditionsSection,
  AppointmentCTA
} from "@/components/sections/home";

export const metadata = buildMetadata({
  title: "Dr. Smit Bharat Solanki - Women's Healthcare in Vadodara & Ahmedabad",
  description:
    "Compassionate women's healthcare with advanced gynecology, IVF, robotic surgery, aesthetic gynecology, and urogynecology services.",
  path: "/",
  keywords: [
    "Dr. Smit Bharat Solanki",
    "gynecologist in Vadodara",
    "gynecologist in Ahmedabad",
    "women's health",
    "IVF",
    "robotic surgery",
    "aesthetic gynecology",
    "urogynecology",
  ],
});

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
