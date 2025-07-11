import type { Metadata, Viewport } from "next";
import { domine, roboto } from "./fonts";
import "./scss/globals.scss";
import { client } from "@/sanity/lib/client";
import { BRAND_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/header/Header";
import { BRAND_QUERYResult } from "@/sanity/types";
import ReactLenis from "lenis/react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

async function getBrandData() {
  try {
    const brand = await client.fetch<BRAND_QUERYResult>(BRAND_QUERY);
    return brand;
  } catch (error) {
    console.error("Error fetching brand data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const brand: BRAND_QUERYResult | null = await getBrandData();

  return {
    title: brand?.title || "Image Education Society",
    description:
      brand?.description ||
      "Image Education Society is a non-profit organization that provides education and training to the community.",
    keywords: brand?.keywords || [],
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
