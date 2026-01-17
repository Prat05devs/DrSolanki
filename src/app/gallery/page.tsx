import Image from "next/image";
import Footer from "@/components/global/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Gallery of Dr. Smit Bharat Solanki at international conferences, meetings, and professional events.",
  path: "/gallery",
  keywords: [
    "Dr. Smit Bharat Solanki gallery",
    "medical conferences",
    "international meetings",
    "gynecology expert",
  ],
});

const galleryImages = [
  {
    src: "/gallery/01.jpg",
    alt: "Dr. Smit Bharat Solanki speaking at an international conference",
    title: "International Conference",
    description: "Keynote session and expert panel discussion"
  },
  {
    src: "/gallery/02.jpg",
    alt: "Dr. Smit Bharat Solanki at a global medical summit",
    title: "Global Medical Summit",
    description: "Sharing advancements in women’s health"
  },
  {
    src: "/gallery/03.jpg",
    alt: "Dr. Smit Bharat Solanki receiving recognition at a meeting",
    title: "Recognition & Honors",
    description: "Acknowledged for clinical leadership"
  },
  {
    src: "/gallery/04.jpg",
    alt: "Dr. Smit Bharat Solanki with peers at an international meeting",
    title: "International Meeting",
    description: "Collaborating with global experts"
  },
  {
    src: "/gallery/05.jpg",
    alt: "Dr. Smit Bharat Solanki presenting research findings",
    title: "Research Presentation",
    description: "Showcasing evidence-based outcomes"
  },
  {
    src: "/gallery/06.jpg",
    alt: "Dr. Smit Bharat Solanki at a professional conference",
    title: "Professional Conference",
    description: "Continuing education and knowledge exchange"
  }
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col w-full bg-[#fbfbf9] dark:bg-[#0f0e0a]">
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#5B3A33] mb-4">
              Dr. Smit in Focus
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#2D2A26] dark:text-white leading-[1.15] tracking-[-0.01em] mb-4">
              International Conferences & Meetings
            </h1>
            <p className="text-base sm:text-lg text-[#6b6358] dark:text-gray-300 leading-[1.7]">
              A curated visual journey of Dr. Smit Bharat Solanki’s presence at global conferences, academic meetings,
              and international medical collaborations.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, idx) => (
            <div
              key={`${image.src}-${idx}`}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-[#5B3A33]/10 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-[var(--font-playfair)] font-semibold text-[#2D2A26] dark:text-white mb-2 leading-[1.15] break-words">
                  {image.title}
                </h3>
                <p className="text-sm text-[#6b6358] dark:text-gray-300 leading-[1.7] break-words">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
