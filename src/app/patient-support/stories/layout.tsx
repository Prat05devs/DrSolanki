import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Patient Stories & Testimonials",
  description:
    "Real patient stories of healing, strength, and outcomes across gynecology, fertility, and surgical care.",
  path: "/patient-support/stories",
  keywords: [
    "patient stories",
    "testimonials",
    "gynecology success stories",
    "IVF success",
    "Dr. Smit Bharat Solanki",
  ],
});

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
