import { Lexend, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-tech",
});

export const metadata: Metadata = {
  title: "Hysteroscopy | Dr. Smit Bharat Solanki - Golden Hour Healing",
  description: "A precise, minimally invasive procedure for diagnosing and treating conditions within the uterus, delivered with Dr. Smit Bharat Solanki's compassionate expertise.",
};

export default function HysteroscopyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${lexend.variable} ${playfair.variable} font-display bg-background-light`}>
      {children}
    </div>
  );
}
