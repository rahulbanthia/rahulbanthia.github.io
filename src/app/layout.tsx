import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Banthia — Engineering Manager & Full-Stack Architect",
  description:
    "Engineering Manager II at PeopleGrove. I drive technical strategy, architect scalable multi-tenant systems, and build high-performance engineering teams.",
  keywords: [
    "Engineering Manager",
    "Full-Stack Engineer",
    "React",
    "NestJS",
    "TypeScript",
    "PeopleGrove",
    "Rahul Banthia",
  ],
  authors: [{ name: "Rahul Banthia", url: "https://www.linkedin.com/in/rahul-banthia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rahul Banthia — Engineering Manager & Full-Stack Architect",
    description:
      "Engineering Manager II at PeopleGrove. Building scalable multi-tenant systems and high-performance engineering teams.",
    siteName: "Rahul Banthia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Banthia — Engineering Manager & Full-Stack Architect",
    description:
      "Engineering Manager II at PeopleGrove. Building scalable multi-tenant systems and high-performance engineering teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body
        style={{
          background: "var(--color-background)",
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
