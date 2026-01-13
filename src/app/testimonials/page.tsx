import { redirect } from "next/navigation";

// Redirect /testimonials to /patient-support/stories (Testimonials page)
export default function TestimonialsPage() {
  redirect("/patient-support/stories");
}
