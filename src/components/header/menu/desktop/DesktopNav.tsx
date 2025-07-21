import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import "./style.scss";
import { menu } from "@/components/db/nav.db";
import useResponsive from "@/hooks/useResponsive";

const DesktopNav = () => {
  const scrollTo = useLenisScrollTo();
  const { isMounted, isTablet, isLaptop, isDesktop } = useResponsive();

  if (!isMounted)
    return (
      <div id="DesktopNav">
        <button></button>
      </div>
    );

  return (
    <div id="DesktopNav">
      {menu.map((item) => (
        <button
          key={item.title}
          onClick={() => {
            scrollTo(item.href.id, {
              duration: item.href.duration,
              easing: "easeInOut",
              offset: isTablet ? -100 : isLaptop ? -80 : isDesktop ? -80 : -60,
            });
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default DesktopNav;
