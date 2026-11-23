"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { customers, hubs, yard } from "@/content/site";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function CorridorMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [selected, setSelected] = useState(hubs[0].id);
  const [preview, setPreview] = useState<string | null>(null);
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const active = preview ?? selected;
  const activeHub = hubs.find((h) => h.id === active)!;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hoverProps = (id: string) => ({
    onMouseEnter: () => setPreview(id),
    onMouseLeave: () => setPreview(null),
  });

  return (
    <div ref={ref} data-inview={inView} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <figure className="map-paper relative self-start overflow-hidden rounded-2xl bg-navy-900 p-3 ring-1 ring-white/10 sm:p-6 lg:sticky lg:top-28 lg:col-span-7">
        <svg
          viewBox="-40 30 880 440"
          className="h-auto w-full"
          role="group"
          aria-label="Schematic map of King Enterprises' industrial network around the Kiloy facility"
        >
          {/* NH 48, the Chennai–Bengaluru highway through Sriperumbudur */}
          <path
            d="M0 262 C 180 250, 360 236, 470 226 S 700 200, 800 188"
            fill="none"
            stroke="var(--color-navy-700)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M0 262 C 180 250, 360 236, 470 226 S 700 200, 800 188"
            fill="none"
            stroke="var(--color-navy-950)"
            strokeWidth="1.5"
            strokeDasharray="10 10"
          />
          <text x="24" y="242" className="fill-steel-400 text-[13px] font-medium">
            NH 48 to Bengaluru
          </text>
          <text x="776" y="172" textAnchor="end" className="fill-steel-400 text-[13px] font-medium max-sm:hidden">
            Chennai
          </text>

          {hubs.map((hub, i) => {
            const isActive = active === hub.id;
            return (
              <path
                key={hub.id}
                d={hub.route}
                pathLength={1}
                fill="none"
                className="route"
                stroke={isActive ? "var(--color-gold-400)" : "var(--color-gold-500)"}
                strokeWidth={isActive ? 4.5 : 2.5}
                strokeLinecap="round"
                opacity={isActive ? 1 : 0.4}
                style={{ transitionDelay: inView ? `${200 + i * 140}ms, 0ms, 0ms` : undefined }}
              />
            );
          })}

          {/* A load travelling the selected route */}
          {inView && !reduceMotion && (
            <circle key={active} r="6" fill="var(--color-gold-300)" stroke="var(--color-navy-950)" strokeWidth="2">
              <animateMotion dur="2.6s" repeatCount="indefinite" path={activeHub.route} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
            </circle>
          )}

          {hubs.map((hub, i) => {
            const count = customers.filter((c) => c.hub === hub.id).length;
            const isActive = active === hub.id;
            const left = hub.labelSide === "left";
            return (
              <g
                key={hub.id}
                role="button"
                tabIndex={0}
                aria-pressed={selected === hub.id}
                aria-label={`${hub.name}: ${count} customer${count > 1 ? "s" : ""}`}
                {...hoverProps(hub.id)}
                onFocus={() => setPreview(hub.id)}
                onBlur={() => setPreview(null)}
                onClick={() => setSelected(hub.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(hub.id);
                  }
                }}
                className="cursor-pointer outline-none [&:focus-visible_.pin-ring]:stroke-gold-300"
              >
                <circle cx={hub.x} cy={hub.y} r="30" fill="transparent" />
                <g className="pin-fade" style={{ transitionDelay: inView ? `${700 + i * 140}ms` : undefined }}>
                  <circle
                    className="pin-ring transition-[r] duration-200"
                    cx={hub.x}
                    cy={hub.y}
                    r={isActive ? 22 : 0}
                    fill="none"
                    stroke="var(--color-gold-500)"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                  />
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={isActive ? 14 : 11}
                    className="transition-[r] duration-200"
                    fill={isActive ? "var(--color-gold-500)" : "var(--color-navy-950)"}
                    stroke="var(--color-gold-400)"
                    strokeWidth="3"
                  />
                  <text
                    x={hub.x}
                    y={hub.y + 4.5}
                    textAnchor="middle"
                    className={`pointer-events-none text-[12px] font-bold ${isActive ? "fill-navy-950" : "fill-white"}`}
                  >
                    {count}
                  </text>
                  {/* Beside the pin on larger screens; centred above it on phones, where side labels would clip */}
                  <text
                    x={left ? hub.x - 24 : hub.x + 24}
                    y={hub.y + 6}
                    textAnchor={left ? "end" : "start"}
                    className={`text-[17px] font-semibold transition-colors duration-200 max-sm:hidden ${
                      isActive ? "fill-gold-300" : "fill-white"
                    }`}
                  >
                    {hub.name}
                  </text>
                  <text
                    x={hub.x}
                    y={hub.y - 26}
                    textAnchor="middle"
                    className={`text-[24px] font-semibold transition-colors duration-200 sm:hidden ${
                      isActive ? "fill-gold-300" : "fill-white"
                    }`}
                  >
                    {hub.name}
                  </text>
                </g>
              </g>
            );
          })}

          {/* The yard */}
          <g>
            <circle cx={yard.x} cy={yard.y} r="26" fill="var(--color-gold-500)" opacity="0.16" />
            <rect
              x={yard.x - 11}
              y={yard.y - 11}
              width="22"
              height="22"
              rx="3"
              transform={`rotate(45 ${yard.x} ${yard.y})`}
              fill="var(--color-gold-500)"
              stroke="var(--color-navy-950)"
              strokeWidth="2"
            />
            <text x={yard.x - 26} y={yard.y - 46} textAnchor="end" className="fill-white text-[16px] font-bold max-sm:text-[22px]">
              Our facility, Kiloy
            </text>
            <text x={yard.x - 26} y={yard.y - 28} textAnchor="end" className="fill-steel-400 text-[13px]">
              Sriperumbudur
            </text>
          </g>
        </svg>

        <figcaption className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-sm text-steel-200">
          <span className="flex items-center gap-2">
            <span aria-hidden className="size-3 rotate-45 rounded-[2px] bg-gold-500" />
            Our facility
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="size-3.5 rounded-full border-2 border-gold-400 bg-navy-950" />
            Customer sites
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-6 rounded-full bg-navy-700" />
            NH 48
          </span>
          <span className="text-steel-400 sm:ml-auto">Schematic, not to scale</span>
        </figcaption>
      </figure>

      <div className="lg:col-span-5">
        <p className="text-sm text-steel-400" aria-live="polite">
          Showing <span className="font-semibold text-gold-300">{activeHub.name}</span>. Select a location or a
          customer.
        </p>
        <ul className="mt-4 grid gap-3">
          {customers.map((c) => {
            const hub = hubs.find((h) => h.id === c.hub)!;
            const isActive = c.hub === active;
            return (
              <li key={c.name}>
                <button
                  type="button"
                  aria-pressed={c.hub === selected}
                  onClick={() => setSelected(c.hub)}
                  {...hoverProps(c.hub)}
                  className={`press flex w-full items-center gap-4 rounded-xl p-3.5 text-left ring-1 transition-[background-color,box-shadow,opacity] duration-200 ${
                    isActive
                      ? "bg-white/10 ring-gold-500"
                      : "bg-white/[0.03] opacity-60 ring-white/10 hover:opacity-100"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`display grid size-12 shrink-0 place-items-center rounded-lg text-xl transition-colors duration-200 ${
                      isActive ? "bg-gold-500 text-navy-950" : "bg-navy-800 text-gold-400"
                    }`}
                  >
                    {initials(c.name)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold leading-snug text-white">{c.name}</span>
                    <span className="block text-sm text-steel-200">{c.work}</span>
                    <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-steel-400 sm:hidden">
                      <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 text-gold-400" fill="currentColor">
                        <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z" />
                      </svg>
                      {hub.name}
                    </span>
                  </span>
                  <span className="hidden shrink-0 items-center gap-1 rounded-full bg-navy-950/60 px-2.5 py-1 text-xs font-semibold text-steel-200 sm:flex">
                    <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 text-gold-400" fill="currentColor">
                      <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z" />
                    </svg>
                    {hub.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
