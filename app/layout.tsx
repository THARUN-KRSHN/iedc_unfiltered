
import type { Metadata } from 'next';
import { DM_Sans, Anton } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Excom Unfiltered | IEDC CCE',
  description: 'Anonymous space to share appreciation, feedback, memories and confessions for the IEDC Excom 2024-2026.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${anton.variable} scroll-smooth`}>
      {/* Use inline style here just in case Tailwind fails */}
      <body className="font-sans antialiased text-brand-dark bg-brand-cream selection:bg-brand-yellow selection:text-brand-dark overflow-x-hidden min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
