"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/content/site";

const icons: Record<(typeof steps)[number]["icon"], React.ReactNode> = {
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  lorry: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7z" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
  press: (
    <>
      <path d="M4 3h16M12 3v5M7 8h10v3H7zM5 15h14v6H5z" />
      <path d="M9 15v6M15 15v6" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 19H4.5a2 2 0 0 1-1.7-3l2.6-4.5M11 19h8.5a2 2 0 0 0 1.7-3l-1.4-2.4" />
      <path d="m14 16-3 3 3 3M8.5 7.5 11 3.2a2 2 0 0 1 3.4 0l2.4 4.2M5.5 8.6l3-1.1 1 3M17 11l-.2-3.5 3.2-.7" />
    </>
  ),
};

// Total drive time; station delays are spaced along it so each lights as the lorry arrives.
const DRIVE_MS = 1800;
const START_MS = 250;

export function PickupRoute() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-inview={inView} className="pickup-route relative">
      {/* Road: horizontal on desktop, vertical on smaller screens */}
      <div aria-hidden className="absolute top-8 bottom-8 left-8 w-1 -translate-x-1/2 lg:inset-x-[12.5%] lg:top-8 lg:bottom-auto lg:h-1 lg:w-auto lg:translate-x-0 lg:-translate-y-1/2">
        <div className="road-base absolute inset-0 rounded-full" />
        <div className="road-fill absolute inset-0 rounded-full bg-gold-500" />
        <div className="lorry-run absolute inset-0 hidden lg:block">
          <svg viewBox="0 0 56 32" className="absolute bottom-3 left-0 h-9 w-auto -translate-x-1/2">
            <rect x="2" y="4" width="32" height="18" rx="2" fill="var(--color-navy-800)" />
            <path d="M34 10h10l8 7v5H34z" fill="var(--color-navy-950)" />
            <path d="M37 12h6l5 4.5H37z" fill="var(--color-steel-200)" />
            <rect x="6" y="8" width="24" height="3" rx="1" fill="var(--color-gold-500)" />
            <circle cx="12" cy="25" r="4.5" fill="var(--color-navy-950)" stroke="var(--color-steel-200)" strokeWidth="2" />
            <circle cx="43" cy="25" r="4.5" fill="var(--color-navy-950)" stroke="var(--color-steel-200)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-0">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="grid grid-cols-[4rem_1fr] content-start gap-x-5 lg:grid-cols-1 lg:justify-items-center lg:px-5 lg:text-center"
          >
            <span
              className="station relative grid size-16 place-items-center rounded-full border-2"
              style={{ transitionDelay: inView ? `${START_MS + (i / (steps.length - 1)) * DRIVE_MS}ms` : undefined }}
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[s.icon]}
              </svg>
              <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-gold-500 text-xs font-bold text-navy-950">
                {i + 1}
              </span>
            </span>

            <div className="lg:mt-7">
              <p className="inline-block rounded-full bg-steel-100 px-3 py-1 text-sm font-semibold text-navy-800">
                {s.where}
              </p>
              <h3 className="display mt-3 text-3xl text-navy-950 sm:text-[2.1rem]">{s.title}</h3>
              <p className="mt-2 max-w-[34ch] leading-relaxed text-steel-600 lg:mx-auto">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
