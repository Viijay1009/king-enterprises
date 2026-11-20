import Image from "next/image";
import { company, formatPhone, locations, primaryPhone } from "@/content/site";

const links = [
  { href: "#materials", label: "What we collect" },
  { href: "#process", label: "How a pickup works" },
  { href: "#customers", label: "Who we clear scrap for" },
  { href: "#datasheet", label: "Company details" },
  { href: "#contact", label: "Request a pickup" },
];

const tagline = ["Reduce.", "Recycle.", "Recreate."];

const heading = "text-sm font-semibold text-white";
const link = "transition-colors duration-150 hover:text-white";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-200">
      {/* The brand's own tagline, in the hero's stencil cut, closes the page */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <p className="stencil flex flex-wrap gap-x-[0.25em] text-[3.6rem] text-white sm:text-[5.5rem] lg:text-[7.2rem] xl:text-[8.6rem]">
          {tagline.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
        <div aria-hidden className="mt-8 h-1 w-24 bg-gold-500" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="rounded-lg bg-white p-2">
              <Image src="/brand/mark.png" alt="" width={160} height={165} className="h-12 w-auto" />
            </span>
            <p className="display text-3xl text-white uppercase">King Enterprises</p>
          </div>
          <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed">
            Industrial scrap collection and recycling for automotive plants on the Sriperumbudur–Oragadam corridor,
            since {company.established}. A group company of {company.group}.
          </p>
          <a
            href="#contact"
            className="press mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-6 font-semibold text-navy-950 hover:bg-gold-400"
          >
            Request a pickup
          </a>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className={heading}>On this page</p>
          <ul className="mt-4 space-y-1 text-[15px]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`${link} inline-flex min-h-9 items-center`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className={heading}>Visit us</p>
          <div className="mt-4 space-y-5 text-[15px] leading-relaxed">
            {[locations.factory, locations.office].map((loc) => (
              <address key={loc.label} className="not-italic">
                <span className="block text-sm text-gold-400">{loc.label}</span>
                {loc.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className={heading}>Talk to us</p>
          <ul className="mt-4 space-y-1 text-[15px]">
            {[...locations.factory.phones, ...locations.office.phones].map((p) => (
              <li key={p}>
                <a href={`tel:+91${p}`} className={`${link} display inline-flex min-h-9 items-center text-2xl text-white tabular-nums hover:text-gold-300`}>
                  {formatPhone(p)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 text-[15px]">
            {[locations.factory.email, locations.office.email].map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className={`${link} wrap-anywhere`}>
                  {e}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/91${primaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link} inline-flex min-h-9 items-center gap-2 font-semibold text-leaf-400`}
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-steel-400">Monday to Saturday, two shifts</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-steel-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 King Enterprises, Sriperumbudur</p>
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>GSTIN {company.gst}</span>
            <span>MSME {company.msme}</span>
          </p>
          <a
            href="#top"
            className="press group inline-flex min-h-11 items-center gap-2 self-start rounded-md border border-white/15 px-4 font-semibold text-white hover:border-gold-500 md:self-auto"
          >
            Back to top
            <svg aria-hidden viewBox="0 0 16 16" className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 13V3M4 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
