import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Stories of Hope: Patient Journeys | Dr. Smit Bharat Solanki',
  description: 'Explore inspiring real-life experiences of healing, strength, and renewed life at Dr. Smit Bharat Solanki\'s Sanctuary.',
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
