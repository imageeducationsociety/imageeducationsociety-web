"use client";
import useResponsive from "@/hooks/useResponsive";
import MobileNav from "./mobile/MobileNav";
import DesktopNav from "./desktop/DesktopNav";

const Nav = () => {
  const { isMounted, isMobile } = useResponsive();

  if (!isMounted) return null;

  return <nav id="Nav">{isMobile ? <MobileNav /> : <DesktopNav />}</nav>;
};

export default Nav;
