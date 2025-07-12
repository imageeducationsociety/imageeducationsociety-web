import type { Metadata, Viewport } from "next";
import { domine, roboto } from "./fonts";
import "./scss/globals.scss";
import { client } from "@/sanity/lib/client";
import Header from "@/components/header/Header";
import ReactLenis from "lenis/react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Image Education Society",
    description:
      "Image Education Society is a non-profit organization that provides education and training to the community.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${roboto.variable} ${domine.variable}`}>
          <Header />
          <main>{children}</main>
        </body>
      </ReactLenis>
    </html>
  );
}
