import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "./useWindowSize";

// Animation variants for Framer Motion
export const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { isMobile } = useWindowSize();

  // Default options
  const defaultOptions = {
    threshold: isMobile ? 0.05 : 0.1,
    rootMargin: isMobile ? "10px" : "0px",
    triggerOnce: true,
  };

  // Merge default options with provided options
  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const currentRef = ref.current;

    // On mobile, we still use IntersectionObserver but with more sensitive settings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // If triggerOnce is true, disconnect the observer after triggering
            if (mergedOptions.triggerOnce) {
              observer.disconnect();
            }
          } else if (!mergedOptions.triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: mergedOptions.threshold,
        rootMargin: mergedOptions.rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [
    mergedOptions.threshold,
    mergedOptions.rootMargin,
    mergedOptions.triggerOnce,
  ]);

  return [ref, isVisible];
};
