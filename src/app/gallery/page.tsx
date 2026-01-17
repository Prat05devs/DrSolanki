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
    src: "/gallery/img1.jpeg",
    alt: "International Conference",
    title: "An inspiring interaction with the pioneers of uterus transplant",
    description: "With Prof Dr. Mats Branstrom and Prof Dr. Stefan Tullius at Turkiye"
  },
  {
    src: "/gallery/img5.jpeg",
    alt: "International Conference",
    title: "An inspiring interaction with the pioneers of uterus transplant",
    description: "With Prof Dr. Mats Branstrom and Prof Dr. Stefan Tullius at Turkiye"
  },
  {
    src: "/gallery/img2.jpeg",
    alt: "Robotic Surgery Care Team",
    title: "Robotic Surgery Care Team",
    description: "A highly trained robotic surgery team committed to safe, precise, and faster recovery surgeries."
  },
  {
    src: "/gallery/img3.jpeg",
    alt: "International Meeting",
    title: "Dinner Table Conversation",
    description: "Connecting with global leaders in urogynecology and pelvic health at ICS-EUS 2025."
  },
  {
    src: "/gallery/img4.jpeg",
    alt: "International Conference",
    title: "International Conference Award",
    description: "Recognition for excellent work in womens health at an international conference ICS- EUS 2025, Abu Dhabi."
  },
  {
    src: "/gallery/img6.jpeg",
    alt: "International Conference",
    title: "Asia Pacific Association of Gynec-endoscopy 2023",
    description: "Dr Smit Bharat Solanki joined leading endoscopy surgeons during Asia Pacific Association of Gynec-endoscopy 2023, held in Singapore."
  },
  {
    src: "/gallery/img7.jpeg",
    alt: "International Conference",
    title: "Global Academic Platform – IUGA 2023, Netherlands",
    description: "Sharing clinical insights at the 48th Annual Meeting of the International Urogynecological Association."
  },
  {
    src: "/gallery/img8.jpeg",
    alt: "International Conference",
    title: "India’s voice in the global uterus transplantation dialogue — ISUTx 2025 at Antalya, Turkiye",
    description: "India’s voice in the global uterus transplantation dialogue — ISUTx 2025 at Antalya, Turkiye"
  },
  {
    src: "/gallery/img9.jpeg",
    alt: "International Conference",
    title: "Dr Smit Bharat Solanki Representing India at the International Podium – IUGA Annual Meeting 2025, Barcelona, Spain",
    description: "Dr Smit Bharat Solanki presenting his work at International Podium of Annual Meeting of IUGA, 2025 in Barcelona, Spain"
  },
  {
    src: "/gallery/img10.jpeg",
    alt: "International Conference",
    title: "Dr Smit Bharat Solanki Representing India at the International Podium – IUGA Annual Meeting 2025, Barcelona, Spain",
    description: "Dr Smit Bharat Solanki presenting his work at International Podium of Annual Meeting of IUGA, 2025 in Barcelona, Spain"
  },
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
