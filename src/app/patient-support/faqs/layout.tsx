import { Lexend, Noto_Sans } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-lexend',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
});

export const metadata = {
  title: "FAQs & Resources | Dr. Smit Bharat Solanki's Sanctuary",
  description: 'Find clear, compassionate answers to common queries and essential resources for your health journey.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${lexend.variable} ${notoSans.variable}`}>
      {children}
    </div>
  );
}
