import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "./useWindowSize";

// Animation variants for Framer Motion
export const scrollAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { isMobile } = useWindowSize();

  // Default options - more sensitive on mobile
  const defaultOptions = {
    threshold: isMobile ? 0.01 : 0.15,
    rootMargin: isMobile ? "0px" : "-50px",
    triggerOnce: true,
  };

  // Merge default options with provided options
  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);

        // If triggerOnce is true, disconnect the observer after triggering
        if (mergedOptions.triggerOnce) {
          observer.disconnect();
        }
      } else if (!mergedOptions.triggerOnce) {
        // Only reset visibility if we're not using triggerOnce
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: mergedOptions.threshold,
      rootMargin: mergedOptions.rootMargin,
    });

    observer.observe(currentRef);

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
