import type { Metadata } from "next";
import localFont from "next/font/local";
import { bricolage, notoSansHebrew, rubikDirt } from "@/lib/fonts";
import "./globals.css";
import { ReduxProvider } from "@/providers/redux-provider";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${bricolage?.className || ""} ${
        notoSansHebrew?.className || ""
      } ${rubikDirt?.className || ""}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="min-h-screen flex flex-col">
            <header className="w-full py-4 px-6 border-b">
              <Header />
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
