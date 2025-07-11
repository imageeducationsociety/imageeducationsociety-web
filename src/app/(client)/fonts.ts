import { Roboto, Domine } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const domine = Domine({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-domine",
});
