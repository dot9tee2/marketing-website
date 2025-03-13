import { useState, useEffect, useCallback } from "react";

export const useWindowSize = (debounceMs = 250) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    isMobile: typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth <= 768,
    });
  }, []);

  useEffect(() => {
    let timeoutId = null;

    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, debounceMs);
    };

    window.addEventListener("resize", debouncedHandleResize);

    // Initial size
    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleResize, debounceMs]);

  return windowSize;
};
