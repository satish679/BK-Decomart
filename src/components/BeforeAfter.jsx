import React, { useState, useRef, useCallback, useEffect } from "react";
import LuxImg from "./LuxImg";
import { assetUrl } from "@/lib/site";

export default function BeforeAfter({
  beforeSrc = "before.png",
  afterSrc = "after.png",
  beforeName = "before",
  afterName = "after",
  className = "",
}) {
  const resolvedBefore = beforeSrc ? assetUrl(beforeSrc) : null;
  const resolvedAfter = afterSrc ? assetUrl(afterSrc) : null;
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`ba-wrap relative overflow-hidden select-none cursor-ew-resize rounded-sm ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      <div className="w-full h-full">
        {resolvedAfter ? (
          <img src={resolvedAfter} alt="After Transformation" className="w-full h-full object-cover" />
        ) : (
          <LuxImg name={afterName} alt="After" className="w-full h-full object-cover" />
        )}
      </div>

      <div
        className="ba-after absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        {resolvedBefore ? (
          <img src={resolvedBefore} alt="Before Transformation" className="w-full h-full object-cover" />
        ) : (
          <LuxImg name={beforeName} alt="Before" className="w-full h-full object-cover" />
        )}
      </div>

      <div
        className="ba-handle absolute top-0 bottom-0 w-0.5 bg-champagne pointer-events-none z-30"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-champagne text-matte shadow-deep flex items-center justify-center text-xs font-bold font-mono">
          ⇄
        </div>
      </div>

      <span className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-ivory bg-matte/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-sm z-20">
        Before
      </span>
      <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-matte bg-champagne px-2.5 sm:px-3 py-1 rounded-sm font-medium z-20">
        After
      </span>
    </div>
  );
}
