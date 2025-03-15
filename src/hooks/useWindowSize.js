import { useState, useEffect, useCallback } from "react";

// Debounce function to limit the rate at which a function can fire
const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};

export const useWindowSize = (debounceMs = 250) => {
  // Initialize with server-safe values
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    isMobile: typeof window !== "undefined" ? window.innerWidth <= 768 : false,
    isTablet: typeof window !== "undefined" 
      ? window.innerWidth > 768 && window.innerWidth <= 1024 
      : false,
    isDesktop: typeof window !== "undefined" ? window.innerWidth > 1024 : false,
    isPortrait: typeof window !== "undefined" 
      ? window.innerHeight > window.innerWidth 
      : false,
  });

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    setWindowSize({
      width,
      height,
      isMobile: width <= 768,
      isTablet: width > 768 && width <= 1024,
      isDesktop: width > 1024,
      isPortrait: height > width,
    });
  }, []);

  useEffect(() => {
    // Create a debounced version of handleResize
    const debouncedHandleResize = debounce(handleResize, debounceMs);

    // Add event listener with the debounced handler
    window.addEventListener("resize", debouncedHandleResize);
    window.addEventListener("orientationchange", debouncedHandleResize);

    // Initial size calculation
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      window.removeEventListener("orientationchange", debouncedHandleResize);
    };
  }, [handleResize, debounceMs]);

  return windowSize;
};
