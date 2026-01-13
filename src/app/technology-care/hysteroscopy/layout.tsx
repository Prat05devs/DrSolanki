import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hysteroscopy | Dr. Smit Bharat Solanki - Golden Hour Healing",
  description: "A precise, minimally invasive procedure for diagnosing and treating conditions within the uterus, delivered with Dr. Smit Bharat Solanki's compassionate expertise.",
};

export default function HysteroscopyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
