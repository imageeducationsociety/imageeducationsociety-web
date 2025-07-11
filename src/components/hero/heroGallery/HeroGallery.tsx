"use client";

import useResponsive from "@/hooks/useResponsive";
import MobileHeroGallery from "./mobile/MobileHeroGallery";
import DesktopHeroGallery from "./desktop/DesktopHeroGallery";

const HeroGallery = () => {
  const { isMounted, isMobile } = useResponsive();

  if (!isMounted) return null;

  return (
    <div id="HeroGallery">
      {isMobile ? <MobileHeroGallery /> : <DesktopHeroGallery />}
    </div>
  );
};

export default HeroGallery;
