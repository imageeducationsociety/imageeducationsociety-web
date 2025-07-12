"use client";

import { HERO_GALLERY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { HERO_GALLERY_QUERYResult } from "@/sanity/types";
import { useEffect, useState } from "react";
import OptImage from "@/components/commmon/OptImage";
import "./style.scss";

const DesktopHeroGallery = () => {
  const [hero, setHero] = useState<HERO_GALLERY_QUERYResult | null>(null);

  const getHero = async () => {
    try {
      const data =
        await client.fetch<HERO_GALLERY_QUERYResult>(HERO_GALLERY_QUERY);
      setHero(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHero();
  }, []);

  return (
    <div id="DesktopHeroGallery">
      {hero &&
        hero.gallery &&
        hero.gallery.map((item) => (
          <div className="slider-item" key={item.title}>
            {item.image && item.title && (
              <OptImage image={item.image} alt={item.title} sizes="card" />
            )}
            <div className="img_bg" />
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DesktopHeroGallery;
