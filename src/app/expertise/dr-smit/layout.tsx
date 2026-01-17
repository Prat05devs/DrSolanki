import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Dr. Smit Bharat Solanki",
  description:
    "Learn about Dr. Smit Bharat Solanki’s expertise, credentials, awards, and commitment to compassionate women’s healthcare.",
  path: "/expertise/dr-smit",
  keywords: [
    "Dr. Smit Bharat Solanki",
    "gynecologist",
    "robotic surgeon",
    "IVF specialist",
    "women's health expert",
  ],
});

export default function DrSmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
