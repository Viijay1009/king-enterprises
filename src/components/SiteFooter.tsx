import Image from "next/image";
import Link from "next/link";
import { company, contacts, email, formatPhone, locations, primaryPhone } from "@/content/site";

const groups = [
  {
    title: "Home",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/#business", label: "Our business" },
      { href: "/#network", label: "Industrial network" },
      { href: "/#leadership", label: "Leadership" },
    ],
  },
  {
    title: "Business & future",
    links: [
      { href: "/business#approach", label: "Business approach" },
      { href: "/business#infrastructure", label: "Infrastructure" },
      { href: "/business#vision", label: "Future vision" },
      { href: "/business#why", label: "Why King Enterprises" },
      { href: "/business#contact", label: "Contact us" },
    ],
  },
];

const heading = "text-sm font-semibold text-white";
const link = "transition-colors duration-150 hover:text-white";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-200">
      {/* The company's own line, in the hero's headline face, closes every page */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <p className="headline max-w-[18ch] text-[2.5rem] text-balance text-white sm:text-[4rem] lg:text-[5.2rem]">
          {company.tagline}
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
            Industrial scrap trading, scrap management and recycling solutions from Sriperumbudur, Tamil Nadu, since{" "}
            {company.established}.
          </p>
          <Link
            href="/business#contact"
            className="press mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-6 font-semibold text-navy-950 hover:bg-gold-400"
          >
            Contact us
          </Link>
        </div>

        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title} className="lg:col-span-2">
            <p className={heading}>{g.title}</p>
            <ul className="mt-4 space-y-1 text-[15px]">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`${link} inline-flex min-h-9 items-center`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 lg:col-span-4">
          <p className={heading}>Talk to us</p>
          <ul className="mt-4 grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map((c) => (
              <li key={c.phone}>
                <a href={`tel:+91${c.phone}`} className={`${link} group inline-flex min-h-9 items-baseline gap-3`}>
                  <span className="display text-2xl text-white tabular-nums group-hover:text-gold-300">
                    {formatPhone(c.phone)}
                  </span>
                  <span className="text-sm text-steel-400">{c.who}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 text-[15px]">
            <li>
              <a href={`mailto:${email}`} className={`${link} wrap-anywhere`}>
                {email}
              </a>
            </li>
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
          <p className="mt-4 text-sm leading-relaxed text-steel-400">
            {locations.factory.lines[0]}, {locations.factory.lines[1]}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-steel-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>© King Enterprises. All rights reserved.</span>
            <Link href="/privacy" className={`${link} inline-flex min-h-11 items-center underline underline-offset-4`}>
              Privacy policy
            </Link>
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>GSTIN {company.gst}</span>
            <span>MSME {company.msme}</span>
          </p>
          <a
            href="#main"
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
