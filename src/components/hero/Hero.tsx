import { client } from "@/sanity/lib/client";
import "./style.scss";
import { HERO_QUERYResult } from "@/sanity/types";
import { HERO_QUERY } from "@/sanity/lib/queries";
import Button from "../ui/buttons/Button";
import HeroGallery from "./heroGallery/HeroGallery";

const Hero = async () => {
  const hero = await client.fetch<HERO_QUERYResult>(HERO_QUERY);

  if (!hero) return null;

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
