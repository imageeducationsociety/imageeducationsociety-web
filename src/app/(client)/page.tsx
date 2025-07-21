import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Difference from "@/components/difference/Difference";
import Hero from "@/components/hero/Hero";
import Gallery from "@/components/imageGallery/Gallery";
import Maintenance from "@/components/maintenance/Maintenance";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";

export default function Home() {
  // Check if website is in maintenance mode
  if (process.env.NEXT_PUBLIC_WEBSITE_MAINTENANCE === "true") {
    return <Maintenance />;
  }

  return (
    <>
      {/*  <Hero />
      <About />
      <Difference />
      <Gallery />
      <Services />
      <Team />
      <Contact /> */}
      <Maintenance />
    </>
  );
}
