import { useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import "./scrollup.css";

export default function ScrollUp() {
  const handleScroll = useCallback(() => {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollUp?.classList.add("display-scroll");
    } else {
      scrollUp?.classList.remove("display-scroll");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <a href="#" className="scrollup">
      <Icon icon="uil:arrow-up" className="scrollup__icon" />
    </a>
  );
}
