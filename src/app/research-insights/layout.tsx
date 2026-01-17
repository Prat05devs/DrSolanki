import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Research Insights & Publications",
  description:
    "Research publications, academic contributions, and conference presentations by Dr. Smit Bharat Solanki.",
  path: "/research-insights",
  keywords: [
    "research publications",
    "medical research",
    "conference presentations",
    "gynecology research",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function ResearchInsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
