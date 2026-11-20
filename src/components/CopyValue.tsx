"use client";

import { useEffect, useState } from "react";

export function CopyValue({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 1800);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`press inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm font-semibold transition-colors duration-200 ${
        state === "copied"
          ? "border-leaf-600 bg-leaf-600 text-white"
          : "border-steel-200 text-navy-800 hover:border-navy-800"
      }`}
    >
      <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        {state === "copied" ? (
          <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" />
            <path d="M3 10.5V3.5A1.5 1.5 0 0 1 4.5 2h6" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : "Copy"}
        <span className="sr-only"> {label}</span>
      </span>
    </button>
  );
}
