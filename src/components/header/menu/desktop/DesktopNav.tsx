import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import "./style.scss";
import { menu } from "@/components/db/nav.db";

const DesktopNav = () => {
  const scrollTo = useLenisScrollTo();

  return (
    <div id="DesktopNav">
      {menu.map((item) => (
        <button
          key={item.title}
          onClick={() => {
            scrollTo(item.href.id, {
              duration: item.href.duration,
              easing: "easeInOut",
              offset: -60,
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
