import type { Metadata } from "next";
import { Lexend, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
        className={`${lexend.variable} ${playfair.variable} font-display antialiased overflow-x-hidden selection:bg-sage-light selection:text-text-dark bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
