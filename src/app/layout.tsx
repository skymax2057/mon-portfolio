import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/providers";
import { ParticleBackground } from "@/components/particle-background";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Développeur Full Stack spécialisé en Web, Mobile et Desktop. React, Next.js, TypeScript, React Native, Electron.",
  keywords: ["développeur", "full stack", "react", "next.js", "typescript", "mobile", "desktop"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "Développeur Full Stack spécialisé en Web, Mobile et Desktop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased cursor-none md:cursor-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <ParticleBackground />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
