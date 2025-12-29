import { Playfair_Display, Manrope } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'International Patients | Dr. Smit Bharat Solanki',
  description: 'World-class care for our international patients, with compassionate support every step of the way.',
};

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
