import { redirect } from "next/navigation";

// Redirect /fertility to /expertise/ivf-iui (Fertility page)
export default function FertilityPage() {
  redirect("/expertise/ivf-iui");
}
