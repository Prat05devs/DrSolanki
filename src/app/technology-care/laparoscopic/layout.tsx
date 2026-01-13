import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laparoscopic Surgery - Dr. Smit Bharat Solanki | Golden Hour Healing",
  description: "Minimally invasive solutions for gynecological conditions, ensuring a quicker return to your everyday life.",
};

export default function LaparoscopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
