// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'VitrumCurve - Vidrios Curvos y Color',
  description: 'Especialistas en vidrios curvos, colores y diseños personalizados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className={`${dmSans.variable} min-h-screen bg-[#0F172A] font-sans antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}