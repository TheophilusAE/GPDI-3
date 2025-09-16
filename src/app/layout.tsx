import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPDI Persadamas Banjarmasin - Gereja Pengharapan & Iman',
  description: 'Komunitas yang ramah di mana iman bertumbuh, harapan berkembang, dan kasih melimpah. Bergabunglah dengan kami dalam ibadah, persekutuan, dan pelayanan.',
  keywords: 'gereja, komunitas, iman, ibadah, persekutuan, kasih karunia, harapan, doa, studi alkitab, banjarmasin, gpd, persadamas',
  authors: [{ name: 'GPDI Persadamas Banjarmasin' }],
  openGraph: {
    title: 'GPDI Persadamas Banjarmasin - Gereja Pengharapan & Iman',
    description: 'Komunitas yang ramah di mana iman bertumbuh, harapan berkembang, dan kasih melimpah.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-32 bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}