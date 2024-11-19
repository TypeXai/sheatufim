import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  bricolage,
  notoSansHebrew,
  rubikDirt,
  sixtyfour,
  londrinaSketch,
} from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "הצעת מחיר - יוזמת המודעות",
  description: "הצעת מחיר לפיתוח אתר אינטרנט ומחולל תמונות AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${bricolage.className} ${notoSansHebrew.className} ${rubikDirt.className} ${sixtyfour.className} ${londrinaSketch.className}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full py-4 px-6 border-b">
          <Header />
        </header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
