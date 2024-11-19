"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FullProposalRtlCustomFonts() {
  return (
    <div
      dir="rtl"
      className="container mx-auto p-4 space-y-8 text-right font-['Noto_Sans_Hebrew']"
    >
      {/* Background Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-['Rubik_Dirt']">
            הצעת מחיר: פיתוח אתר מודעות ומחולל AI לשינוי תפיסת הזקנה בישראל
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">רקע הפרויקט</h3>
            <p className="mb-4 text-muted-foreground">
              קבוצת מודעות ביוזמת ישתנו עוסקת בשינוי תפיסות גילניות וצמצום הטיות
              לגבי הזיקנה והעלאת מודעות לתפיסת זיקנה מאוזנת ועדכנית. השותפים
              ביוזמה מבינים שתפיסות גילניות משפיעות על הזקנים עצמם ועל החברה
              ומהוות מכשול בפני הובלת שינויים חברתיים משמעותיים.
            </p>
            <p className="text-muted-foreground">
              המטרה היא שבירת פרדיגמות ומסגור מחדש של הזיקנה באופן שיקדם תפיסות
              חיוביות ויניע לפעולה ברמה האישית והמערכתית. הקבוצה פיתחה ארגז כלים
              הכולל הנחיות לייצוג מאוזן ועדכני של הזקנה, והפרויקט נועד להנגיש
              כלים אלו באמצעות פלטפורמה דיגיטלית חדשנית המשלבת טכנולוגיית AI.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Target Audience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold font-['Sixtyfour']">
            קהלי יעד ומטרות
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="audience-1">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                ארגוני הרשת
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  שימוש בשפה של המדריך בחומרים שיווקיים, בשיח מול עובדים
                  ומוטבים, ובתקשורת חוץ ארגונית.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience-2">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                אנשי שיווק
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  סוכני שינוי משמעותיים המייצרים תוכן בהתאם לסיפור החדש של
                  הזקנה.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience-3">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                ארגונים עסקיים
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  יצירת טרמינולוגיה חיובית ואופטימית לגבי פרישה בארגון, וובלת
                  שינוי השיח בתחום.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience-4">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                קהל רחב
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  הנגשת תוכן ומידע לציבור הרחב לקידום תפיסה מאוזנת ועדכנית של
                  הזקנה בישראל.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Platform Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold font-['Sixtyfour']">
            פלטפורמה דיגיטלית משולבת AI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                אתר תוכן מותאם אישית
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 pr-5">
                    <li>עיצוב ופיתוח מותאם לצרכי הפרויקט</li>
                    <li>תמיכה בריבוי שפות (עברית ואנגלית)</li>
                    <li>ממשק משתמש אינטואיטיבי ונגיש</li>
                    <li>תצוגת מדריך דו-רמתי (מקוצר ומורחב)</li>
                    <li>מערכת הצגת דוגמאות ומקרי בוחן</li>
                    <li>שילוב עם אתר המיני הקיים</li>
                    <li>תצוגת עקרונות ומדריכים</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                מחולל תמונות AI
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 pr-5">
                    <li>מנוע פרומפטים חכם עם הטמעת עקרונות הייצוג החיובי</li>
                    <li>אינטגרציה עם FLUX1.1 Pro API</li>
                    <li>מערכת סינון ובקרת איכות אוטומטית</li>
                    <li>ממשק ניהול גלריה חכם</li>
                    <li>מערכת תיוג וקטלוג תמונות</li>
                    <li>יכולות חיפוש מתקדמות</li>
                    <li>מערכת למידה והתאמה אישית</li>
                  </ul>
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      * גרסה ראשונית (v0) של מחולל התמונות. עלות השימוש (כ-0.05$
                      לתמונה) תחויב בנפרד על בסיס צריכה חודשית
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                מערכת ניהול תוכן (CMS) מבוססת Firebase
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">ניהול תוכן האתר</h4>
                    <ul className="list-disc list-inside space-y-2 pr-5">
                      <li>ניהל תכנים בעברית ואנגלית</li>
                      <li>עריכת מדריכים (גרסה מקוצרת ומורחבת)</li>
                      <li>ניהול דוגמאות ומקרי בוחן</li>
                      <li>העלאת ועריכת מדיה</li>
                      <li>ניהול תגיות ומטא-דאטה</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">ניהול מחולל ה-AI</h4>
                    <ul className="list-disc list-inside space-y-2 pr-5">
                      <li>ניהול פרומפטים וטמפלטים</li>
                      <li>הגדרת פרמטרים לייצוג חיובי</li>
                      <li>ניהול גלריית תמונות שנוצרו</li>
                      <li>מעקב אחר שימוש וצריכת API</li>
                      <li>ניהול הרשאות משתמשים</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">תשתית Firebase</h4>
                    <ul className="list-disc list-inside space-y-2 pr-5">
                      <li>אחסון מאובטח בענן</li>
                      <li>מערכת אימות והרשאות</li>
                      <li>בסיס נתונים בזמן אמת</li>
                      <li>גיבוי אוטומטי</li>
                      <li>אנליטיקס ומעקב ביצועים</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      * עלויות שיותי Firebase (אחסון, תעבורה וכו׳) כלולות במחיר
                      עד להיקף שימוש סביר. חריגה תתומחר בנפרד לפי תעריפי Google
                      Cloud.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-['Rubik_Dirt']">
                מערכות תומכות ואופטימיזציה
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 pr-5">
                  <li>עיצוב רספונסיבי ונגישות מלאה</li>
                  <li>אופטימיזציה למנועי חיפוש (SEO)</li>
                  <li>אבטחת מידע והגנת פרטיות</li>
                  <li>אנליטיקס ומעקב ביצועים</li>
                  <li>גיבוי ושחזור מידע</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <div className="mt-6 space-y-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      אתר תוכן מותאם אישית (כולל CMS)
                    </TableCell>
                    <TableCell className="text-left">27,365 ₪</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      מחולל תמונות AI
                    </TableCell>
                    <TableCell className="text-left">38,900 ₪</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      מערכות תומכות ואופטימיזציה
                    </TableCell>
                    <TableCell className="text-left">
                      <span className="line-through text-slate-400 ml-2">
                        13,975 ₪
                      </span>
                      6,987 ₪
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium font-bold">
                      סה&quot;כ פלטפורמה מלאה
                    </TableCell>
                    <TableCell className="text-left font-bold">
                      73,252 ₪
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="bg-blue-50 p-3 rounded-md space-y-2">
                <p className="text-sm text-muted-foreground">
                  * מערכת ניהול התוכן (CMS) מבוססת Firebase כלולה במחיר פיתוח
                  האתר
                </p>
                <p className="text-sm text-muted-foreground">
                  * הנחה של 50% על מערכות תומכות ואופטימיזציה
                </p>
              </div>
            </div>
          </Accordion>
        </CardContent>
      </Card>

      {/* Payment Schedule Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold font-['Sixtyfour']">
            לוח תשלומים ואבני דרך
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  מקדמה עם חתימת החוזה (35%)
                </TableCell>
                <TableCell className="text-left">25,638 ₪</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  השלמת אפיון מפורט ועיצוב ממשקים (20%)
                </TableCell>
                <TableCell className="text-left">14,650 ₪</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  פיתוח אתר ומערכת ניהול תוכן (20%)
                </TableCell>
                <TableCell className="text-left">14,650 ₪</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  השלמת פיתוח מחולל AI ואינטגרציה (15%)
                </TableCell>
                <TableCell className="text-left">10,988 ₪</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  השלמת בדיקות, הדרכה ועלייה לאוויר (10%)
                </TableCell>
                <TableCell className="text-left">7,326 ₪</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-bold">
                  סה&quot;כ
                </TableCell>
                <TableCell className="text-left font-bold">73,252 ₪</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="bg-blue-50 p-3 rounded-md mt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              * התשלומים יבוצעו בהתאם להשלמת אבני הדרך המוגדרות
            </p>
            <p className="text-sm text-muted-foreground">
              * לוח זמנים: נובמבר 2024 - 20 בינואר 2025
            </p>
            <p className="text-sm text-muted-foreground">
              * מועד מסירה סופי: 20 בינואר 2025
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Integrated AI and Footer Section */}
      <footer className="mt-16 -mx-4 -mb-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* ef77 Brand Section */}
            <div className="text-center mb-16">
              <div className="flex items-baseline justify-center gap-2 mb-8 relative group">
                <span className="font-['Rubik_Dirt'] font-[400] text-5xl text-slate-800 relative">
                  77
                  <span
                    className="absolute top-0 left-0 w-full h-full text-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-150 animate-pulse"
                    style={{ clipPath: "inset(50% 0 50%)" }}
                  >
                    77
                  </span>
                  <span
                    className="absolute top-0 left-0 w-full h-full text-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-150 animate-pulse"
                    style={{ clipPath: "inset(0 50% 0 50%)" }}
                  >
                    77
                  </span>
                </span>
                <span className="font-['Bricolage_Grotesque'] font-[800] text-5xl text-slate-800 relative">
                  ef
                  <span
                    className="absolute top-0 left-0 w-full h-full text-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-150 animate-pulse"
                    style={{ clipPath: "inset(50% 0 50%)" }}
                  >
                    ef
                  </span>
                  <span
                    className="absolute top-0 left-0 w-full h-full text-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-150 animate-pulse"
                    style={{ clipPath: "inset(0 50% 0 50%)" }}
                  >
                    ef
                  </span>
                </span>
              </div>
              <h3 className="text-xl font-['Bricolage_Grotesque'] font-[800] text-slate-800 mb-2">
                Creative Human Intelligence
              </h3>
              <h4 className="text-lg font-['Bricolage_Grotesque'] font-[600] text-slate-600 mb-4">
                Amplified by AI
              </h4>
              <p className="text-md text-slate-600 mb-12 max-w-2xl mx-auto">
                סטודיו לאסטרטגיה וקריאייטיב המניע מותגים וארגונים קדימה. משלבים
                חשיבה אסטרטגית עם קריאייטיב פורץ דרך, ומעצימים אותם באמצעות כלי
                AI מתקדמים.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
                  <h4 className="font-semibold text-slate-900">
                    אסטרטגיה וקריאייטיב
                  </h4>
                  <p className="text-slate-600 text-sm">
                    מעצבים אסטרטגיות מותג חדשניות ומייצרים קריאייטיב שמניע
                    לפעולה, בשילוב עם יכולות AI מתקדמות
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
                  <h4 className="font-semibold text-slate-900">מיתוג וזהות</h4>
                  <p className="text-slate-600 text-sm">
                    בונים מותגים חזקים ומבדלים, מפתחים שפה ויזואלית ייחודית,
                    ומייצרים חוויות מותג בלתי נשכחות
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
                  <h4 className="font-semibold text-slate-900">
                    פתרונות AI חכמים
                  </h4>
                  <p className="text-slate-600 text-sm">
                    מפתחים כלים וממשקי AI מתקדמים שמאיצים תהליכים יצירתיים
                    ומייצרים ערך עסקי מדיד
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center space-y-4 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-['Bricolage_Grotesque']">Tel Aviv</span>
                </div>
                <span className="text-slate-500 text-sm">
                  {new Date().toLocaleDateString("he-IL", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
