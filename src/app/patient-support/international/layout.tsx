import { Playfair_Display, Manrope } from "next/font/google";
import { buildMetadata } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = buildMetadata({
  title: "International Patients",
  description:
    "World-class women’s healthcare for international patients with coordinated support, travel guidance, and personalized care.",
  path: "/patient-support/international",
  keywords: [
    "international patients",
    "medical tourism",
    "gynecology India",
    "IVF India",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
