import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs & Patient Resources",
  description:
    "Find clear, compassionate answers to common questions about gynecology, fertility, procedures, and patient care.",
  path: "/patient-support/faqs",
  keywords: [
    "gynecology FAQs",
    "patient questions",
    "fertility FAQs",
    "women's health FAQs",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
