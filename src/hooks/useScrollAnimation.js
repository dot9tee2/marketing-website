import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;
  
  const { isMobile } = useWindowSize();
  
  // Use a lower threshold on mobile devices for better performance
  const mobileThreshold = isMobile ? 0.05 : threshold;
  // Use a larger root margin on mobile to trigger animations earlier
  const mobileRootMargin = isMobile ? "10px" : rootMargin;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement || (triggerOnce && hasAnimated.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            hasAnimated.current = true;
            observer.unobserve(currentElement);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: mobileThreshold,
        root,
        rootMargin: mobileRootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [mobileThreshold, root, mobileRootMargin, triggerOnce, isMobile]);

  return [elementRef, isVisible];
};

// Animation variants for Framer Motion
export const scrollAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
