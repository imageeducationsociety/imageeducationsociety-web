import "./style.scss";
import { BRAND_QUERYResult } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { BRAND_QUERY } from "@/sanity/lib/queries";
import Nav from "./menu/Nav";
import Logo from "./menu/Logo";
import Button from "../ui/buttons/Button";

const Header = async () => {
  const brand: BRAND_QUERYResult | null =
    await client.fetch<BRAND_QUERYResult>(BRAND_QUERY);

  return (
    <header id="Header">
      <div className="logo_conatiner">
        <Button type="scroll_link" id="Hero">
          {brand && <Logo brand={brand} />}
        </Button>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
