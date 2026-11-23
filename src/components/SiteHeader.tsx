"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { formatPhone, primaryPhone } from "@/content/site";

const nav = [
  { href: "/#about", label: "About us" },
  { href: "/#business", label: "Our business" },
  { href: "/#network", label: "Network" },
  { href: "/business", label: "Business & future" },
  { href: "/business#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Both pages end with the contact section; stay on the current one when it has it.
  const links = nav.map((item) =>
    item.label === "Contact" && pathname === "/" ? { ...item, href: "/#contact" } : item,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_var(--color-steel-200)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="King Enterprises home">
          <Image
            src="/brand/logo.png"
            alt="King Enterprises"
            width={720}
            height={283}
            preload
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-navy-900">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="relative py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-200 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${primaryPhone}`}
            className="press hidden min-h-11 items-center rounded-md bg-navy-800 px-4 text-sm font-semibold text-white hover:bg-navy-700 sm:inline-flex"
          >
            Call {formatPhone(primaryPhone)}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="press inline-flex size-11 items-center justify-center rounded-md text-navy-900 hover:bg-steel-100 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-steel-200 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ul className="flex flex-col">
            {links.map((item, i) => (
              <li
                key={item.href}
                className="hero-rise"
                style={{ "--i": i * 0.4, animationDuration: "360ms", animationDelay: `${i * 30}ms` } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="flex min-h-12 items-center border-b border-steel-100 text-base font-medium text-navy-900 aria-[current=page]:font-bold aria-[current=page]:text-navy-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:+91${primaryPhone}`}
            className="press mt-4 mb-2 flex min-h-12 items-center justify-center rounded-md bg-navy-800 font-semibold text-white sm:hidden"
          >
            Call {formatPhone(primaryPhone)}
          </a>
        </nav>
      </div>
    </header>
  );
}
