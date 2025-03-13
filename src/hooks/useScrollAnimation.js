import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

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
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

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
