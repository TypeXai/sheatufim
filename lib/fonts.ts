import {
  Bricolage_Grotesque,
  Noto_Sans_Hebrew,
  Rubik_Dirt,
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
  preload: true,
});

export const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  display: "swap",
  weight: ["400", "700", "800"],
  preload: true,
});

export const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
