import { redirect } from "next/navigation";

// Redirect /about to /expertise/dr-smit (About Dr. page)
export default function AboutPage() {
  redirect("/expertise/dr-smit");
}
