import { buildMetadata } from "@/lib/seo";
import AppointmentPageClient from "./AppointmentPageClient";

export const metadata = buildMetadata({
  title: "Book Appointment",
  description:
    "Schedule a consultation with Dr. Smit Bharat Solanki across Vadodara and Ahmedabad clinics. Book your appointment online or via WhatsApp.",
  path: "/appointment",
  keywords: [
    "book appointment",
    "gynecologist appointment",
    "Dr. Smit Bharat Solanki",
    "Vadodara gynecologist",
    "Ahmedabad gynecologist",
    "women's health consultation",
  ],
});

export default function AppointmentPage() {
  return <AppointmentPageClient />;
}
