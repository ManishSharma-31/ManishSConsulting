import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";

/**
 * Lightweight motion primitives. They are CSS/transform driven (no animation
 * library on the critical path) and never hide content in the server HTML, so
 * the page is readable the instant it paints and interactions stay at 60fps.
 */

const prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * Fades and lifts content in as it scrolls into view. Content already on screen
 * when it mounts is left alone (no flash, no waiting); only content below the
 * fold is armed, so first paint and route changes feel instant.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset["reveal"] = "hidden";
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        el.dataset["reveal"] = "shown";
        io.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal="shown" className={className} style={{ "--rd": `${delay}s`, "--ry": `${y}px` } as CSSProperties}>
      {children}
    </div>
  );
}

/** Headline that rises word by word using a pure CSS animation, so it runs from first paint. Plain text only. */
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i}>
          {i > 0 ? " " : ""}
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span className="word-rise inline-block" style={{ animationDelay: `${delay + i * 0.07}s` }}>
              {w}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}

/** 3D tilt on hover plus a cursor-following spotlight (see `.spotlight` in styles.css). Mouse only; one rAF per frame. */
export function TiltCard({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const raf = useRef(0);

  const onEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") rect.current = ref.current?.getBoundingClientRect() ?? null;
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const r = rect.current;
    if (e.pointerType !== "mouse" || !el || !r) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const px = (clientX - r.left) / r.width;
      const py = (clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      if (!prefersReducedMotion()) {
        el.style.transform = `perspective(1000px) rotateX(${(-(py - 0.5) * max * 2).toFixed(2)}deg) rotateY(${((px - 0.5) * max * 2).toFixed(2)}deg)`;
      }
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    rect.current = null;
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div ref={ref} onPointerEnter={onEnter} onPointerMove={onMove} onPointerLeave={onLeave} className={`spotlight tilt h-full ${className}`}>
      {children}
    </div>
  );
}

/** Pulls its child slightly toward the cursor. Mouse only. */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);
  return (
    <span
      ref={ref}
      className="magnetic inline-block"
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse" || prefersReducedMotion()) return;
        const { clientX, clientY } = e;
        cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          // Measured against the untranslated centre so the pull doesn't feed back into itself.
          const cx = r.left + r.width / 2 - (parseFloat(el.dataset["tx"] ?? "0") || 0);
          const cy = r.top + r.height / 2 - (parseFloat(el.dataset["ty"] ?? "0") || 0);
          const tx = (clientX - cx) * strength;
          const ty = (clientY - cy) * strength;
          el.dataset["tx"] = String(tx);
          el.dataset["ty"] = String(ty);
          el.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
        });
      }}
      onPointerLeave={() => {
        cancelAnimationFrame(raf.current);
        const el = ref.current;
        if (!el) return;
        el.dataset["tx"] = "0";
        el.dataset["ty"] = "0";
        el.style.transform = "";
      }}
    >
      {children}
    </span>
  );
}

/** Counts up the first number in `value` ("90%" -> 0..90%) once scrolled into view. Server HTML keeps the real figure. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\D*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  const [shown, setShown] = useState(match ? match[2]! : value);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const target = parseFloat(match[2]!);
    const decimals = match[2]!.includes(".") ? match[2]!.split(".")[1]!.length : 0;
    let raf = 0;
    setShown((0).toFixed(decimals));
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        setShown((target * (1 - Math.pow(1 - t, 4))).toFixed(decimals));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {match[1]}
      {shown}
      {match[3]}
    </span>
  );
}

/** Thin brand-colored reading progress bar. Scroll handler is passive and coalesced to one write per frame. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-brand" style={{ transform: "scaleX(0)" }} />;
}

/** Soft light that trails the cursor on desktop. Purely decorative, one transform write per frame. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      raf = 0;
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      ref.current.style.opacity = "1";
    };
    const move = (e: globalThis.PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="glow-lime pointer-events-none fixed left-0 top-0 z-0 hidden size-[500px] opacity-0 transition-[transform,opacity] duration-300 ease-out md:block"
    />
  );
}
