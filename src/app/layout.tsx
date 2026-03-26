import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "../lib/llenis-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmenX | Web Developer & Problem Solver",
  description:
    "AmenX is a full-stack web developer focused on building modern, scalable, and performance-driven web applications using clean code and real-world best practices.",
  openGraph: {
    description:
      "AmenX is a full-stack web developer focused on building modern, scalable, and performance-driven web applications using clean code and real-world best practices.",
    url: "https://amenx.me",
    siteName: "AmenX Portfolio",
    images: [
      {
        url: "https://amenx.me/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AmenX Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AmenX | Web Developer & Problem Solver",
    description:
      "AmenX is a full-stack web developer focused on building modern, scalable, and performance-driven web applications using clean code and real-world best practices.",
    images: ["https://amenx.me/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <LenisScroll />
      </body>
    </html>
  );
}
