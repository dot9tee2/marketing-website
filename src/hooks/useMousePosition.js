import { useState, useEffect, useCallback } from "react";

export const useMousePosition = (throttleMs = 16) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e.touches ? e.touches[0] : e;

    setPosition((prev) => ({
      x: prev.x + (clientX - prev.x) * 0.15,
      y: prev.y + (clientY - prev.y) * 0.15,
    }));

    setIsMoving(true);

    // Reset moving state after animation
    setTimeout(() => setIsMoving(false), 100);
  }, []);

  useEffect(() => {
    let rafId;
    let lastUpdate = 0;

    const animatePosition = (timestamp) => {
      if (timestamp - lastUpdate >= throttleMs) {
        lastUpdate = timestamp;
      }
      rafId = requestAnimationFrame(animatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleMouseMove, throttleMs]);

  return { position, isMoving };
};
