import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "./motion";

const Hero3D = lazy(() => import("./Hero3D"));

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  override render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Skip the heavy scene entirely where it would hurt more than help. */
function shouldSkip() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string }; deviceMemory?: number };
  return !!nav.connection?.saveData || /(^|-)2g$/.test(nav.connection?.effectiveType ?? "") || (nav.deviceMemory ?? 8) <= 2 || (navigator.hardwareConcurrency ?? 8) <= 2;
}

/**
 * Client-only hero 3D scene. It waits for the page to finish loading and the
 * browser to go idle (so it never competes with first paint or early scrolling),
 * pauses when scrolled off screen or the tab is hidden, and renders nothing when
 * WebGL is unavailable or the device/connection is constrained.
 */
export function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [lite, setLite] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (shouldSkip() || !hasWebGL()) return;
    setLite(window.innerWidth < 768);
    let cancelled = false;
    let idleId = 0;
    const start = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      if (ric) idleId = ric(() => !cancelled && setReady(true), { timeout: 2500 });
      else idleId = window.setTimeout(() => !cancelled && setReady(true), 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
      const cic = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
      if (cic) cic(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="animate-fade-in absolute inset-0">
      {ready && (
        <Boundary>
          <Suspense fallback={null}>
            <Hero3D active={visible} reduced={reduced} lite={lite} />
          </Suspense>
        </Boundary>
      )}
    </div>
  );
}
