import { BRAND_QUERY } from "@/sanity/lib/queries";
import "./style.scss";
import { sanityFetch } from "@/sanity/lib/client";
import { BRAND_QUERYResult } from "@/sanity/types";
import Button from "../ui/buttons/Button";
import Logo from "../logo/Logo";
import Link from "next/link";
import { Mail } from "lucide-react";
import { menu } from "../db/nav.db";

async function getBrandData() {
  try {
    const brand = await sanityFetch({
      query: BRAND_QUERY,
      revalidate: 10,
    });
    return brand;
  } catch (error) {
    console.error("Error fetching brand data:", error);
    return null;
  }
}

const Footer = async () => {
  const brand: BRAND_QUERYResult | null = await getBrandData();

  if (!brand)
    return (
      <footer id="Footer">
        <div className="footer_title_container"></div>
      </footer>
    );

  return (
    <footer id="Footer">
      <div className="footer_top">
        <div className="footer_title_container">
          <Button type="next_link" href="/">
            {brand && <Logo brand={brand} type="light" />}
          </Button>
          <p>{brand.footer_description}</p>
          <Link className="email_link" href={`mailto:${brand.email}`}>
            <Mail />
            {brand.email}
          </Link>
        </div>
        <div className="footer_links_container">
          {menu.map((item) => (
            <Button
              key={item.title}
              type="scroll_link"
              scrollToId={item.href.id}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="footer_copyright_container">
        <p>{brand.copyright}</p>
        <p>
          Design & Developed by{" "}
          <Link href="https://thecirclstudio.com/" target="_blank">
            the circl studio
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
