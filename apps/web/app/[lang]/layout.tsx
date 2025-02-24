import type { Metadata } from "next";
import { PT_Sans, Nunito } from "next/font/google";
import "../globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Locale } from "@/lib/i18n/types";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-nunito",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Jose Mejia | Full Stack Developer",
  description:
    "Digital solutions and cloud-based applications with Next.js, React, and Node.js. With 8+ years of expertise in modern JavaScript frameworks, scalable architectures, and high-performance web experiences.",
  openGraph: {
    images: "/profile.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${ptSans.variable} ${nunito.variable} relative flex min-h-screen flex-col font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main className="relative flex flex-1 flex-col text-foreground dark:text-foreground">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
