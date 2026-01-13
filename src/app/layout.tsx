import { Source_Sans_3, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";

// Body Font: Source Sans 3 (Regular, Medium, SemiBold)
// Note: Source Sans Pro was deprecated in favor of Source Sans 3
// Typography guidelines: weights 400-600, line-height 1.6-1.75
const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Title Font: Playfair Display (Bold, ExtraBold, Black)
// Typography guidelines: weights 700-900, line-height 1.1-1.2, letter-spacing 0 to -0.01em
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dr. Smit Bharat Solanki - Digital Health Sanctuary",
  description: "Welcome to a sanctuary where advanced robotics meets the gentle touch of care. A safe haven for your most intimate health journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sourceSansPro.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden selection:bg-sage-light selection:text-text-dark bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
