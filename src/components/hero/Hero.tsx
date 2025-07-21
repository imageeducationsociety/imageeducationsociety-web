import { sanityFetch } from "@/sanity/lib/client";
import "./style.scss";
import { HERO_QUERYResult } from "@/sanity/types";
import { HERO_QUERY } from "@/sanity/lib/queries";
import Button from "../ui/buttons/Button";
import HeroGallery from "./heroGallery/HeroGallery";

async function getHeroData() {
  try {
    const hero = await sanityFetch({
      query: HERO_QUERY,
      revalidate: 10,
    });
    return hero;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}

const Hero = async () => {
  const hero: HERO_QUERYResult | null = await getHeroData();

  if (!hero)
    return (
      <section id="Hero">
        <div className="hero_header"></div>
      </section>
    );

  return (
    <section id="Hero">
      <div className="hero_header">
        <h1>{hero?.title}</h1>
        <p>{hero?.subtitle}</p>
        <Button type="scroll_button" scrollToId="Contact">
          Contact Us
        </Button>
      </div>
      <HeroGallery />
    </section>
  );
};

export default Hero;
