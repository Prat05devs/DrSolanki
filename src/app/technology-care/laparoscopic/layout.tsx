import { Lexend, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-lexend",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-tech",
});

export const metadata: Metadata = {
  title: "Laparoscopic Surgery - Dr. Smit Bharat Solanki | Golden Hour Healing",
  description: "Minimally invasive solutions for gynecological conditions, ensuring a quicker return to your everyday life.",
};

export default function LaparoscopicLayout({
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
