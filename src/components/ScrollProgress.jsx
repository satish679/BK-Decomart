import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTotal = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollTotal > 0 ? (doc.scrollTop / scrollTotal) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[45] bg-transparent pointer-events-none"
      data-testid="scroll-progress"
    >
      <div
        className="h-full bg-champagne origin-left"
        style={{
          transform: `scaleX(${progress / 100})`,
          transition: "transform 0.15s linear",
        }}
      />
    </div>
  );
}
