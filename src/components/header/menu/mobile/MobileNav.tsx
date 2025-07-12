"use client";

import "./style.scss";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menu } from "../data.db";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useLenisScrollTo();
  const lenis = useLenis();

  return (
    <div id="MobileNav">
      <button
        className="menu_btn"
        onClick={() => {
          setIsOpen(true);
          lenis?.stop();
        }}
      >
        <Menu strokeWidth={3} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mobile_nav_menu"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="nav_container"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="nav_header">
                <h2>Menu</h2>
                <button
                  className="close_btn"
                  onClick={() => {
                    setIsOpen(false);
                    lenis?.start();
                  }}
                >
                  <X strokeWidth={3} />
                </button>
              </div>
              <nav>
                {menu.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      setIsOpen(false);
                      lenis?.start();
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
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
