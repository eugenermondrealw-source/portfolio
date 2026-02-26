import type { Metadata } from "next";

// Import Google_Sans_Flex
import { Google_Sans_Flex } from "next/font/google";

// Internal Components
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";

// Global Styles
import "./globals.css";
import { ThemeProvider } from "next-themes";
import BackToTop from "@/components/atoms/BackToTop/BackToTop";

// Configure the font
const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
  title: "Eugene | Frontend Developer Portfolio",
  description: "Frontend Developer specializing in React, Next.js, and Atomic Design. Explore my projects and professional experience.",
  metadataBase: new URL("https://eugenermondrealw-source.github.io"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PrimaryNavLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  
  const FooterNavLinks: { label: string; href: string; target: "_blank" | "_self" }[] = [
    { label: "GitHub", href: "https://github.com", target: "_blank" },
    { label: "LinkedIn", href: "https://linkedin.com", target: "_blank" },
    { label: "Twitter", href: "https://twitter.com", target: "_blank"}
  ];

  return (
    <html lang="en" className={googleSansFlex.variable} suppressHydrationWarning>
      {/* Apply the font class to the body */}
      <body className={`${googleSansFlex.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header content="Maze" links={PrimaryNavLinks} />
          <main className="max-w-5xl mx-auto px-6 py-12 text-base">
            {children}
          </main>
          <Footer content={`© ${new Date().getFullYear()} Maze`} links={FooterNavLinks} />
        </ThemeProvider>
        <BackToTop />
      </body>
    </html>
  );
}
