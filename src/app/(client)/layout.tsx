import type { Metadata, Viewport } from "next";
import "./scss/globals.scss";
import { sanityFetch } from "@/sanity/lib/client";
import { BRAND_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/header/Header";
import { BRAND_QUERYResult } from "@/sanity/types";
import ReactLenis from "lenis/react";
import Footer from "@/components/footer/Footer";
import { ToastProvider } from "@/context/toastContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

async function getBrandData() {
  try {
    const brand = await sanityFetch({
      query: BRAND_QUERY,
      revalidate: 10,
    });
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

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <ToastProvider>
        <Header />
        <main className="main_container">{children}</main>
        <Footer />
      </ToastProvider>
    </ReactLenis>
  );
}
