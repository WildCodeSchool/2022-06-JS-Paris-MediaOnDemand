import { useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return { width };
};
