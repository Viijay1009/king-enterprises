// Twelve arcs, one per type of recyclable material the planned plant will handle.
// Inside an <InView>, each arc draws in turn (see .ring-seg in globals.css).
const SEGMENTS = 12;
const C = 160;
const R = 132;
const GAP = 4; // degrees between arcs

const point = (deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return `${(C + R * Math.cos(rad)).toFixed(2)} ${(C + R * Math.sin(rad)).toFixed(2)}`;
};

const arcs = Array.from({ length: SEGMENTS }, (_, i) => {
  const start = i * (360 / SEGMENTS) + GAP / 2;
  const end = (i + 1) * (360 / SEGMENTS) - GAP / 2;
  return `M ${point(start)} A ${R} ${R} 0 0 1 ${point(end)}`;
});

export function MaterialRing() {
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]">
      <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Planned capacity: twelve types of recyclable material">
        {arcs.map((d) => (
          <path key={`track-${d}`} d={d} fill="none" stroke="var(--color-navy-800)" strokeWidth="26" />
        ))}
        {arcs.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            fill="none"
            stroke="var(--color-gold-500)"
            strokeWidth="26"
            className="ring-seg"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </svg>
      <figcaption className="absolute inset-0 grid place-content-center text-center">
        <span className="ring-count headline block text-[7rem] leading-none text-white sm:text-[8.5rem]">12</span>
        <span className="mx-auto mt-1 block max-w-[13ch] text-[15px] leading-snug text-steel-200">
          types of recyclable material
        </span>
      </figcaption>
    </figure>
  );
}
