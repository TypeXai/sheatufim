import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import {
  bricolage,
  notoSansHebrew,
  rubikDirt,
  sixtyfour,
  londrinaSketch,
} from "@/lib/fonts";
import "./globals.css";
import { PDFButton } from "@/components/ui/pdf-button";

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
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Image
                src="/logo-svg.svg"
                alt="שיתופים לוגו"
                width={150}
                height={50}
                priority
                className="h-auto"
              />
              <div className="flex flex-col items-center md:items-end gap-4 md:gap-6">
                <div className="flex flex-col items-end group relative">
                  <span className="text-4xl md:text-5xl text-black cursor-help flex items-baseline">
                    <span className="font-['Rubik_Dirt'] font-[400]">77</span>
                    <span
                      className="font-['Bricolage_Grotesque'] font-[800]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      ef
                    </span>
                  </span>
                  <span className="text-sm text-muted-foreground mt-1 font-['Bricolage_Grotesque'] font-[800]">
                    by Eran Friedman
                  </span>

                  <div className="absolute hidden group-hover:block top-full mt-2 p-4 bg-white border rounded-lg shadow-lg w-[calc(100vw-2rem)] md:w-80 text-right z-50 transition-opacity duration-200 right-0">
                    <div className="space-y-2 text-sm">
                      <p className="font-[800] text-base mb-2 font-['Bricolage_Grotesque'] text-black">
                        Human Creativity utilizing AI Toolbox
                      </p>
                      <p className="text-muted-foreground">
                        סטודיו אסטרטגיה ומוצר המתמחה בשילוב יצירתיות אנושית עם
                        ארגז כלי AI מתקדם
                      </p>
                      <p className="text-muted-foreground">
                        מובילים את הגל הבא של טרנספורמציה דיגיטלית -
                        טרנספורמציית אינטליגנציה מבוססת AI
                      </p>
                      <p className="text-muted-foreground">
                        מתמחים בפיתוח מותגים, מוצרים, GTM ובניית כלים חדשניים
                        המעצבים את העתיד בכל תעשייה
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 -mt-2 -ml-2 w-4 h-4 bg-white border-t border-r transform rotate-[-45deg]"></div>
                  </div>
                </div>
                <PDFButton
                  size="sm"
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
