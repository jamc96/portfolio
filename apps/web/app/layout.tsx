import Footer from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';
import type { Metadata } from 'next';
import { Nunito, PT_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-nunito',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
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
        className={`${ptSans.variable} ${nunito.variable} antialiased relative flex flex-col min-h-screen font-body`}
      >
        <NavigationBar />
        <main className='relative flex-1 flex flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
