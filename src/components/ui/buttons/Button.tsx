"use client";

import { ReactNode } from "react";
import "./style.scss";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import Link from "next/link";

const Button = ({
  children,
  onClick,
  type = "button",
  scrollToId,
  offset = -100,
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?:
    | "button"
    | "submit"
    | "reset"
    | "scroll_button"
    | "scroll_link"
    | "next_link";
  scrollToId?: string;
  offset?: number;
  href?: string;
}) => {
  const scrollTo = useLenisScrollTo();
  if (type === "scroll_button") {
    return (
      <button
        id="Button"
        className="scroll_button"
        onClick={() => {
          scrollTo(scrollToId || "", {
            duration: 0.5,
            easing: "easeInOut",
            offset: offset,
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
          scrollTo(scrollToId || "", {
            duration: 0.5,
            easing: "easeInOut",
            offset: offset,
          });
        }}
      >
        {children}
      </button>
    );
  }

  if (type === "next_link") {
    return (
      <Link id="Button" className="next_link" href={href || "/"}>
        {children}
      </Link>
    );
  }
  return (
    <button id="Button" className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
