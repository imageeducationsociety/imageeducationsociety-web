"use client";

import OptImage from "@/components/commmon/OptImage";
import useResponsive from "@/hooks/useResponsive";
import { BRAND_QUERYResult } from "@/sanity/types";

const Logo = ({ brand }: { brand: BRAND_QUERYResult }) => {
  const { isMounted, isMobile } = useResponsive();

  if (!isMounted) return null;

  return (
    <>
      {isMobile
        ? brand &&
          brand.logo &&
          brand.logo.logo_mobile && (
            <OptImage
              image={brand.logo.logo_mobile}
              alt={brand.title || "Logo"}
              className="logo"
              mode="contain"
              sizes="card"
            />
          )
        : brand &&
          brand.logo &&
          brand.logo.logo_desktop && (
            <OptImage
              image={brand.logo.logo_desktop}
              alt={brand.title || "Logo"}
              className="logo"
              mode="contain"
              sizes="card"
            />
          )}
    </>
  );
};

export default Logo;
