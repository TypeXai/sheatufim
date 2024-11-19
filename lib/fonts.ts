import {
  Bricolage_Grotesque,
  Noto_Sans_Hebrew,
  Rubik_Dirt,
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "800"],
});

export const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  display: "swap",
  weight: ["400", "700", "800"],
});

export const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
