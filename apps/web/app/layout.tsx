import type { Metadata } from "next";
import { PT_Sans, Nunito } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Jose Mejia | Senior Full Stack Developer",
  description:
    "Digital solutions and cloud-based applications with Next.js, React, and Node.js. With 8+ years of expertise in modern JavaScript frameworks, scalable architectures, and high-performance web experiences.",
  openGraph: {
    images: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
