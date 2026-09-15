import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tymur Tereshchenko | Software & Infrastructure Consultancy",
  description:
    "Senior software engineering and IT infrastructure consultancy in Vienna, specialising in high-load systems, payments, mobile applications, and connected hardware.",
  keywords: [
    "software engineering Vienna",
    "systems integration",
    "payment infrastructure",
    "mobile development",
    "IT consultancy Austria",
  ],
  openGraph: {
    title: "High-Performance Software Engineering",
    description:
      "Scalable software, payment infrastructure, and enterprise systems integration.",
    type: "website",
    locale: "en_AT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
