import { useState, useEffect, useCallback } from "react";

export const useMousePosition = (throttleMs = 16) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = useCallback((e) => {
    // Check if it's a touch event and if it exists
    if (e.touches && e.touches.length > 0) {
      const { clientX, clientY } = e.touches[0];
      setPosition({
        x: clientX,
        y: clientY,
      });
    } else if (!e.touches) {
      // Regular mouse event
      const { clientX, clientY } = e;
      setPosition({
        x: clientX,
        y: clientY,
      });
    }

    setIsMoving(true);

    // Reset moving state after animation
    setTimeout(() => setIsMoving(false), 100);
  }, []);

  useEffect(() => {
    // For desktop
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // For mobile - add touchstart to initialize position immediately
    window.addEventListener("touchstart", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, [handleMouseMove, throttleMs]);

  return { position, isMoving };
};
