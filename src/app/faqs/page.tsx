import { redirect } from "next/navigation";

// Redirect /faqs to /patient-support/faqs (FAQs page)
export default function FAQPage() {
  redirect("/patient-support/faqs");
}
