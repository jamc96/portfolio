import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/navigation-bar';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jose Mejia | Full Stack Developer',
  description:
    'Digital solutions and cloud-based applications with Next.js, React, and Node.js. With 8+ years of expertise in modern JavaScript frameworks, scalable architectures, and high-performance web experiences.',
  openGraph: {
    images: '/profile.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex flex-col min-h-screen`}
      >
        <NavigationBar />
        <main className='flex-1 bg-black flex flex-col items-center justify-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
