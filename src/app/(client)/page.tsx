import About from "@/components/about/About";
import Difference from "@/components/difference/Difference";
import Hero from "@/components/hero/Hero";
import Gallery from "@/components/imageGallery/Gallery";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Difference />
      <Gallery />
      <Services />
    </>
  );
}
