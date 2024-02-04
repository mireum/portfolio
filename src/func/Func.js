import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 0, delay = 0) => {
  // React Hooks must be called in the exact same order in every component render. 에러 발생
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration} ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
