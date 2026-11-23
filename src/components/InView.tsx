"use client";

import { useEffect, useRef, useState } from "react";

// Sets data-inview="true" once the block scrolls into view, so CSS can play a one-off reveal.
export function InView({
  children,
  className,
  threshold = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
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
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} data-inview={inView} className={className}>
      {children}
    </div>
  );
}
