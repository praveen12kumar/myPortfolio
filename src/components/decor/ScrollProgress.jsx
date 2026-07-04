import { useEffect, useRef } from "react";

const TRACK_HEIGHT = 128;
const DOT_SIZE = 8;

const ScrollProgress = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const travel = TRACK_HEIGHT - DOT_SIZE;

      if (dotRef.current) {
        dotRef.current.style.transform = `translateY(${progress * travel}px)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-[90] pointer-events-none"
      style={{ height: TRACK_HEIGHT }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-white/10" />
      <div
        ref={dotRef}
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
        style={{ width: DOT_SIZE, height: DOT_SIZE }}
      />
    </div>
  );
};

export default ScrollProgress;
