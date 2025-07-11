"use client";

import { ReactNode } from "react";
import "./style.scss";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";

const Button = ({
  children,
  onClick,
  type = "button",
  id,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | "scroll_button" | "scroll_link";
  id?: string;
}) => {
  const scrollTo = useLenisScrollTo();
  if (type === "scroll_button") {
    return (
      <button
        id="Button"
        className="scroll_button"
        onClick={() => {
          scrollTo(id || "", {
            duration: 1000,
            easing: "easeInOut",
            offset: -60,
          });
        }}
      >
        {children}
      </button>
    );
  }
  if (type === "scroll_link") {
    return (
      <button
        id="Button"
        className="scroll_link"
        onClick={() => {
          scrollTo(id || "", {
            duration: 1000,
            easing: "easeInOut",
            offset: -60,
          });
        }}
      >
        {children}
      </button>
    );
  }
  return (
    <button id="Button" className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
