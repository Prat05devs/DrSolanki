import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Support Circle Chatbot",
  description:
    "Instant answers to common questions about surgery, recovery, fertility, and women’s health through our interactive support chatbot.",
  path: "/patient-support/support-circle",
  keywords: [
    "patient support",
    "gynecology chatbot",
    "surgery questions",
    "fertility questions",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function SupportCircleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
