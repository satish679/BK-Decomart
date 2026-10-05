import React, { useRef, useState, useEffect, useCallback } from "react";
import { assetUrl } from "@/lib/site";

const TOTAL_FRAMES = 212;

function getFrameUrl(index) {
  return assetUrl(
    `ezgif-716facaecf4613de-jpg/frame_${String(index + 1).padStart(4, "0")}.jpg`
  );
}

export default function CinematicHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const animFrameRef = useRef(null);

  const [, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const drawFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    let img = images[frameIdx];

    // Fallback to nearest loaded image if current frame is not yet ready
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = images[frameIdx - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = images[frameIdx + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const scale = Math.max(canvasWidth / img.naturalWidth, canvasHeight / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvasWidth - w) / 2;
    const y = (canvasHeight - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  }, []);

  useEffect(() => {
    const imgs = new Array(TOTAL_FRAMES);
    let isMounted = true;
    let loaded = 0;

    const loadFrame = (i, priority = "auto") => {
      if (imgs[i]) return imgs[i];
      const img = new Image();
      if (priority === "high") {
        img.fetchPriority = "high";
      }
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (!isMounted) return;
        loaded++;
        if (loaded === 1 || (i === 0 && currentFrameRef.current === 0)) {
          resizeCanvas();
          drawFrame(currentFrameRef.current);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        loaded++;
      };
      imgs[i] = img;
      return img;
    };

    // 1. High priority: first frames
    for (let i = 0; i < 15; i++) {
      loadFrame(i, "high");
    }
    // 2. High priority: distributed keyframes across entire 0..211 range so scrubbing always works
    for (let i = 15; i < TOTAL_FRAMES; i += 4) {
      loadFrame(i, "high");
    }
    // 3. High priority: the tail frames (195..211) so the final sequence always finishes
    for (let i = Math.max(0, TOTAL_FRAMES - 20); i < TOTAL_FRAMES; i++) {
      loadFrame(i, "high");
    }

    // 4. Fill in all remaining intermediate frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      loadFrame(i, "auto");
    }

    imagesRef.current = imgs;
    resizeCanvas();
    drawFrame(0);

    const handleResize = () => {
      resizeCanvas();
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame, resizeCanvas]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = Math.max(0, Math.min(scrollableDistance, -rect.top)) / scrollableDistance;

      // Accelerate progress slightly so all 212 frames finish by 85% of scroll,
      // and frame 212 is held steadily for the remaining 15% before section transitions
      const animProgress = Math.min(1, Math.max(0, rawProgress / 0.85));
      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(animProgress * (TOTAL_FRAMES - 1)))
      );

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(() => {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        setScrollProgress(rawProgress);
        drawFrame(targetFrame);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawFrame]);

  const heroOpacity = Math.max(0, 1 - scrollProgress * 5.0);
  const heroTranslateY = scrollProgress * -40;

  return (
    <section
      ref={containerRef}
      className="scroll-container relative w-full bg-[#faf7f2]"
      style={{ height: "350vh" }}
      data-testid="cinematic-hero"
    >
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        <div className="absolute inset-0 bg-[#faf8f5]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]/30 pointer-events-none" />

        {/* Hero Title Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none transition-transform duration-75"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
          }}
        >
          <div className="max-w-3xl sm:max-w-4xl mx-auto px-6 py-7 sm:px-12 sm:py-9 rounded-2xl bg-[#faf8f5]/80 backdrop-blur-md border border-[#e8ded2]/70 shadow-[0_4px_30px_rgba(30,25,21,0.06)] flex flex-col items-center">
            <span className="overline mb-3 sm:mb-5 text-xs sm:text-sm font-semibold tracking-[0.24em] text-primary">
              <span className="hairline" /> Since 1995 · Madurai <span className="hairline" />
            </span>
            <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] text-matte font-serif font-bold tracking-tight">
              Come, Let's <span className="font-serif-italic text-primary">Dressup</span> Your Home.
            </h1>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-charcoal/90 max-w-xl font-normal leading-relaxed">
              Curtains, architectural window blinds, designer wallpapers, rugs and mattresses hand-tailored to the millimeter.
            </p>
          </div>
        </div>

        {/* Subtle Bottom Sequence Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/10 z-30">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-75"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
          />
        </div>
      </div>
    </section>
  );
}
