// ScrollTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // haddii aad rabto in scroll-ku uu qurux badan noqdo
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
