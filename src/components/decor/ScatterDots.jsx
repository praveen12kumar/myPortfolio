// Deterministic pseudo-random generator so the layout is stable across renders
function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const random = seededRandom(42);
const DOTS = Array.from({ length: 45 }, () => ({
  top: random() * 100,
  left: random() * 100,
  size: 2 + random() * 2,
  opacity: 0.08 + random() * 0.18,
}));

const ScatterDots = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {DOTS.map((dot, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ScatterDots;
