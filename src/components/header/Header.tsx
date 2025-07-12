import "./style.scss";
import Nav from "./menu/Nav";
import Logo from "./menu/Logo";
import Button from "../ui/buttons/Button";
import { sanityFetch } from "@/sanity/lib/client";
import { BRAND_QUERYResult } from "@/sanity/types";
import { BRAND_QUERY } from "@/sanity/lib/queries";

const Header = async () => {
  const brand: BRAND_QUERYResult | null = await sanityFetch({
    query: BRAND_QUERY,
    revalidate: 10,
  });

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
