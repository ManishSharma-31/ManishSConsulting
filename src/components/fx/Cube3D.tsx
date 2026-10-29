const FACES = ["rotateY(0deg)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(270deg)", "rotateX(90deg)", "rotateX(-90deg)"];

/** Pure-CSS 3D artifact: a slowly turning wireframe cube nested in a smaller counter-rotating one. Decorative, desktop only. */
export function Cube3D() {
  return (
    <div aria-hidden className="pointer-events-none absolute right-[9%] top-1/2 hidden -translate-y-1/2 lg:block" style={{ perspective: 900 }}>
      <div className="cube">
        {FACES.map((f) => (
          <span key={f} className="cube-face" style={{ transform: `${f} translateZ(80px)` }} />
        ))}
        <div className="cube cube-inner">
          {FACES.map((f) => (
            <span key={f} className="cube-face cube-face-amber" style={{ transform: `${f} translateZ(32px)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
