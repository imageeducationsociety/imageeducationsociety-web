import { client } from "@/sanity/lib/client";
import "./style.scss";
import { HERO_QUERYResult } from "@/sanity/types";
import { HERO_QUERY } from "@/sanity/lib/queries";
import Button from "../ui/buttons/Button";

const Hero = async () => {
  const hero = await client.fetch<HERO_QUERYResult>(HERO_QUERY);
  return (
    <section id="Hero">
      <div className="hero_header">
        <h1>{hero?.title}</h1>
        <p>{hero?.subtitle}</p>
        <Button type="scroll_button" id="Contact">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
