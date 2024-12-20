"use client";

import Image from "next/image";
import { PDFButton } from "@/components/ui/pdf-button";

export function Header() {
  return (
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
              <span className="logo-77">77</span>
              <span className="logo-ef">ef</span>
            </span>
            <span className="text-sm text-muted-foreground mt-1 font-bricolage font-[800]">
              by Eran Friedman
            </span>
            {/* Tooltip */}
            <div className="absolute hidden group-hover:block top-full mt-2 p-4 bg-white border rounded-lg shadow-lg w-[calc(100vw-2rem)] md:w-80 text-right z-50 transition-opacity duration-200 right-0">
              <div className="space-y-2 text-sm">
                <p className="font-[800] text-base mb-2 font-['Bricolage_Grotesque'] text-black">
                  Human Creativity utilizing AI Toolbox
                </p>
                <p className="text-muted-foreground">
                  סטודיו אסטרטגיה ומוצר המתמחה בשילוב יצירתיות אנושית עם ארגז
                  כלי AI מתקדם
                </p>
                <p className="text-muted-foreground">
                  מובילים את הגל הבא של טרנספורמציה דיגיטלית - טרנספורמציית
                  אינטליגנציה מבוססת AI
                </p>
                <p className="text-muted-foreground">
                  מתמחים בפיתוח מותגים, מוצרים, GTM ובניית כלים חדשניים המעצבים
                  את העתיד בכל תעשייה
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
  );
}
