import { redirect } from "next/navigation";

// Redirect /papers to /research-insights (Papers/Achievements page)
export default function PapersPage() {
  redirect("/research-insights");
}
