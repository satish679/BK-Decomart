import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const TOTAL_FRAMES = 212;

function getFrameUrl(index) {
  return `/ezgif-716facaecf4613de-jpg/frame_${String(index + 1).padStart(4, "0")}.jpg`;
}

export default function CinematicHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const animFrameRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
    const imgs = [];
    let isMounted = true;
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (!isMounted) return;
        loaded++;
        if (loaded % 15 === 0 || loaded === TOTAL_FRAMES || loaded === 1) {
          setLoadedCount(loaded);
        }
        if (loaded === 1 || (i === 0 && currentFrameRef.current === 0)) {
          resizeCanvas();
          drawFrame(currentFrameRef.current);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        loaded++;
        if (loaded % 15 === 0 || loaded === TOTAL_FRAMES || loaded === 1) {
          setLoadedCount(loaded);
        }
      };
      imgs.push(img);
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
      if (isPlaying) return;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(scrollableDistance, -rect.top)) / scrollableDistance;
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(() => {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        setScrollProgress(progress);
        drawFrame(targetFrame);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawFrame, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    } else {
      setIsPlaying(true);
      autoplayIntervalRef.current = setInterval(() => {
        let next = currentFrameRef.current + 1;
        if (next >= TOTAL_FRAMES) next = 0;
        currentFrameRef.current = next;
        setCurrentFrame(next);
        setScrollProgress(next / (TOTAL_FRAMES - 1));
        drawFrame(next);
      }, 1000 / 30);
    }
  };

  useEffect(() => {
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, []);

  const restart = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }
    currentFrameRef.current = 0;
    setCurrentFrame(0);
    setScrollProgress(0);
    drawFrame(0);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroOpacity = Math.max(0, 1 - scrollProgress * 5.5);
  const heroTranslateY = scrollProgress * -40;

  return (
    <section
      ref={containerRef}
      className="scroll-container relative w-full bg-[#faf7f2]"
      style={{ height: "450vh" }}
      data-testid="cinematic-hero"
    >
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-transparent to-[#faf7f2]/30 pointer-events-none" />

        {/* Hero Title Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none transition-transform duration-75"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
          }}
        >
          <span className="overline mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-[0.24em] text-matte/80">
            <span className="hairline" /> Since 1995 · Madurai <span className="hairline" />
          </span>
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.08] text-matte">
            Come, Let's <span className="font-serif-italic text-walnut">Dressup</span> Your Home.
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-charcoal/80 max-w-xl font-light leading-relaxed">
            Curtains, architectural window blinds, designer wallpapers, rugs and mattresses hand-tailored to the millimeter.
          </p>
        </div>

        {/* Video Player Floating Controls */}
        <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-30 flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-linen/80 shadow-soft">
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-full hover:bg-black/5 transition-colors text-matte focus:outline-none"
            title={isPlaying ? "Pause Sequence" : "Auto-play Sequence"}
            aria-label={isPlaying ? "Pause Sequence" : "Auto-play Sequence"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={restart}
            className="p-1.5 rounded-full hover:bg-black/5 transition-colors text-matte/60 hover:text-matte focus:outline-none"
            title="Restart Sequence"
            aria-label="Restart Sequence"
          >
            <RotateCcw size={14} />
          </button>
          <div className="h-3 w-px bg-black/15" />
          <div className="px-1 text-[0.68rem] font-mono tracking-wider text-matte">
            <span className="text-primary font-bold">{String(currentFrame + 1).padStart(3, "0")}</span>
            <span className="text-matte/40"> / {TOTAL_FRAMES}</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-linen/80 text-matte text-[0.7rem] uppercase tracking-widest font-mono shadow-md"
          style={{
            opacity: scrollProgress > 0.08 && scrollProgress < 0.92 ? 1 : 0,
            transform: `translate(-50%, ${scrollProgress > 0.08 && scrollProgress < 0.92 ? "0" : "10px"})`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Scroll to explore sequence</span>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-ivory text-[0.72rem] font-medium uppercase tracking-wider shadow-lg"
          style={{
            opacity: scrollProgress >= 0.92 ? 1 : 0,
            transform: `translate(-50%, ${scrollProgress >= 0.92 ? "0" : "10px"})`,
          }}
        >
          <span>Our Story Next ↓</span>
        </div>

        {/* Bottom Sequence Progress Bar */}
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
