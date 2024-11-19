import {
  Bricolage_Grotesque,
  Noto_Sans_Hebrew,
  Rubik_Dirt,
  Londrina_Sketch,
} from "next/font/google";

export const londrinaSketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  display: "swap",
});

export const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
