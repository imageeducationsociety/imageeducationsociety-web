"use client";

import "./style.scss";
import { BRAND_QUERYResult } from "@/sanity/types";
import { BRAND_QUERY } from "@/sanity/lib/queries";
import Nav from "./menu/Nav";
import Logo from "./menu/Logo";
import Button from "../ui/buttons/Button";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const Header = () => {
  const [brand, setBrand] = useState<BRAND_QUERYResult | null>(null);
  const fetchBrand = async () => {
    const result = await client.fetch<BRAND_QUERYResult | null>(BRAND_QUERY);
    setBrand(result);
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  // console.log(brand);

  if (!brand)
    return (
      <header id="Header">
        <div className="logo_conatiner"></div>
        <div className="gradient-blur">
          <div />
        </div>
      </header>
    );

  return (
    <header id="Header">
      <div className="logo_conatiner">
        <Button type="scroll_link" scrollToId="Hero">
          {brand && <Logo brand={brand} />}
        </Button>
      </div>
      <Nav />
      <div className="gradient-blur">
        <div />
      </div>
    </header>
  );
};

export default Header;
