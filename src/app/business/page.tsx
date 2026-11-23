import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { CopyValue } from "@/components/CopyValue";
import { ImageSlot } from "@/components/ImageSlot";
import { InView } from "@/components/InView";
import { MaterialRing } from "@/components/MaterialRing";
import { approach, businessSeo, infrastructure, reasons, workforce } from "@/content/site";

export const metadata: Metadata = {
  title: businessSeo.title,
  description: businessSeo.description,
  alternates: { canonical: "/business" },
  openGraph: { url: "/business", title: businessSeo.title, description: businessSeo.description },
  twitter: { title: businessSeo.title, description: businessSeo.description },
};

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

const headline = ["Industrial scrap.", "Commercial value.", "Sustainable opportunities."];

const sections = [
  { href: "#approach", label: "Business approach" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#vision", label: "Future vision" },
  { href: "#why", label: "Why King Enterprises" },
  { href: "#contact", label: "Contact" },
];

const workforceColors = ["bg-navy-800", "bg-gold-500", "bg-leaf-600", "bg-steel-400"];

const icons: Record<(typeof approach)[number]["icon"], React.ReactNode> = {
  handshake: (
    <>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2 2 0 0 0-2.8 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a3.6 3.6 0 0 1 4.3-.6l.4.2a3 3 0 0 0 2 .3L21 6" />
      <path d="m21 15-2 2M3 6l1.6.5a3 3 0 0 0 2 0L9 5.5M3 14l5 5a1.4 1.4 0 0 0 2-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M8.5 11.5l2 2 3.5-4" />
    </>
  ),
  gears: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 20c-.5-9 5-15 15-15 .5 10-5 15.5-14 15" />
      <path d="M5 20 14 11" />
    </>
  ),
};

export default function BusinessPage() {
  return (
    <main id="main">
      {/* Page header: the same sprayed headline as the home hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="hero-settle absolute inset-0 -z-20">
          <ImageSlot
            id="material-packaging"
            tone="dark"
            preload
            sizes="100vw"
            className="h-full w-full"
            captionClassName="hidden"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-navy-950)_0%,color-mix(in_srgb,var(--color-navy-950)_90%,transparent)_45%,color-mix(in_srgb,var(--color-navy-950)_45%,transparent)_100%)] max-lg:bg-[color-mix(in_srgb,var(--color-navy-950)_82%,transparent)]"
        />

        <div className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24">
          <nav aria-label="Breadcrumb" className="hero-rise text-sm text-steel-400" style={delay(0)}>
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-steel-200">
                Our business &amp; future
              </li>
            </ol>
          </nav>
          <h1 className="mt-4">
            <span className="hero-rise display block text-3xl text-gold-400 sm:text-4xl" style={delay(1)}>
              Our business &amp; future
            </span>
            <span className="headline mt-5 block text-[2.6rem] sm:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.4rem]">
              {headline.map((line, i) => (
                <span key={line} className={`hero-spray block ${i === headline.length - 1 ? "headline-outline" : ""}`} style={delay(i + 1)}>
                  {line}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <nav aria-label="On this page" className="hero-rise border-t border-white/15 bg-navy-950/60 backdrop-blur-sm" style={delay(7)}>
          <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-1 px-4 py-3 sm:px-6 lg:px-8">
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="group flex min-h-11 items-center gap-2.5 text-[15px] font-medium text-steel-200 hover:text-white">
                  <span aria-hidden className="size-1.5 rotate-45 bg-gold-500 transition-transform duration-200 group-hover:scale-150" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Business approach */}
      <section id="approach" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:text-7xl">Our business approach</h2>
              <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-steel-600">
                At King Enterprises, we see opportunities in the industrial scrap sector through material sourcing,
                trading and resource recovery.
              </p>
            </div>
          </div>
          <ul className="divide-y divide-dashed divide-steel-200 border-y border-steel-200 lg:col-span-7">
            {approach.map((a) => (
              <li key={a.text} className="group flex items-center gap-5 py-6 sm:gap-7 sm:py-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-[background-color,color,transform] duration-200 ease-[var(--ease-out-quint)] group-hover:-rotate-6 group-hover:bg-gold-500 group-hover:text-navy-950 sm:size-16">
                  <svg aria-hidden viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[a.icon]}
                  </svg>
                </span>
                <p className="display text-[1.75rem] leading-[1.05] text-navy-950 sm:text-[2.1rem]">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">Our infrastructure</h2>
            <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
              King Enterprises operates from its facility in Sriperumbudur, Tamil Nadu. These details are as recorded in
              our supplier registration, and you can copy any registration number straight into your vendor system.
            </p>
          </div>

          <figure className="relative mt-12 overflow-hidden rounded-2xl lg:mt-16">
            <ImageSlot id="facility-press" sizes="100vw" className="aspect-[4/3] w-full sm:aspect-[21/9]" />
            <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-navy-950 px-5 py-4 text-white sm:absolute sm:top-5 sm:left-5 sm:rounded-xl sm:bg-navy-950/90 sm:backdrop-blur-sm">
              <span className="display text-3xl text-gold-400">1.5 acres</span>
              <span className="text-sm text-steel-200">factory facility at Kiloy Village, Sriperumbudur</span>
            </figcaption>
          </figure>

          <article
            aria-label="King Enterprises infrastructure"
            className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-40px_rgb(6_22_49/0.45)] ring-1 ring-steel-200 max-sm:mt-6 sm:mx-6 sm:-mt-20 lg:mx-12 lg:-mt-28"
          >
            <header className="flex flex-wrap items-center justify-between gap-6 bg-navy-900 px-6 py-6 text-white sm:px-10">
              <div className="flex items-center gap-4">
                <span className="rounded-lg bg-white p-1.5">
                  <Image src="/brand/mark.png" alt="" width={160} height={165} className="h-11 w-auto" />
                </span>
                <div>
                  <p className="display text-3xl uppercase">King Enterprises</p>
                  <p className="text-sm text-steel-200">Facility profile</p>
                </div>
              </div>
              <p className="text-sm text-steel-200 sm:text-right">
                Industrial scrap trading and recycling
                <br />
                Sriperumbudur, Kancheepuram District
              </p>
            </header>

            <div className="grid divide-y divide-steel-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {infrastructure.map((group) => (
                <section key={group.title} className="px-6 py-8 sm:px-10 lg:px-8 xl:px-10">
                  <h3 className="flex items-center gap-2.5 text-sm font-semibold text-steel-600">
                    <span aria-hidden className="size-2 rotate-45 bg-gold-500" />
                    {group.title}
                  </h3>
                  <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {group.facts.map((f) => (
                      <div key={f.term}>
                        <dt className="text-sm text-steel-600">{f.term}</dt>
                        {f.copy ? (
                          <dd className="mt-1 flex items-center justify-between gap-3">
                            <span className="min-w-0 font-semibold tracking-wide wrap-anywhere text-navy-950 tabular-nums">
                              {f.value}
                            </span>
                            <CopyValue value={f.value} label={f.term} />
                          </dd>
                        ) : (
                          <dd className="mt-0.5">
                            <span className="display block text-3xl text-navy-950">{f.value}</span>
                            {f.note && <span className="mt-0.5 block text-[15px] text-steel-600">{f.note}</span>}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>

            <InView className="grid gap-6 border-t border-steel-200 px-6 py-8 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10" threshold={0.5}>
              <div className="lg:col-span-3">
                <p className="display text-5xl text-navy-950">{workforce.reduce((n, w) => n + w.count, 0)} people</p>
                <p className="mt-1 text-[15px] text-steel-600">In dedicated operational teams</p>
              </div>
              <div className="lg:col-span-9">
                <div
                  role="img"
                  aria-label={`Workforce: ${workforce.map((w) => `${w.count} ${w.label.toLowerCase()}`).join(", ")}`}
                  className="flex h-4 gap-1 overflow-hidden rounded-full"
                >
                  {workforce.map((w, i) => (
                    <span
                      key={w.label}
                      className={`team-bar ${workforceColors[i]}`}
                      style={{ flexGrow: w.count, flexBasis: 0, "--i": i } as React.CSSProperties}
                    />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-2 text-[15px]" aria-hidden>
                  {workforce.map((w, i) => (
                    <li key={w.label} className="flex items-center gap-2">
                      <span className={`size-3 rounded-sm ${workforceColors[i]}`} />
                      <span className="font-semibold text-navy-950 tabular-nums">{w.count}</span>
                      <span className="text-steel-600">{w.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </InView>

            <footer className="flex flex-col gap-4 bg-steel-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p className="max-w-[60ch] text-[15px] leading-relaxed text-navy-900">
                Need certificate copies or our completed supplier registration form? We send them on request.
              </p>
              <a
                href="#contact"
                className="press inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-navy-800 px-6 font-semibold text-white hover:bg-navy-700"
              >
                Request documents
              </a>
            </footer>
          </article>
        </div>
      </section>

      {/* Future vision */}
      <section id="vision" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="map-paper pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl">Building a sustainable recycling future</h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-steel-200">
                Our future vision is to develop a recycling material plant with the capability to handle twelve types
                of recyclable materials. We aim to explore opportunities in industrial material recovery, recycling and
                sustainable resource utilisation.
              </p>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-steel-200">
                Through planned investments and business development, King Enterprises aspires to create a stronger
                presence in the recycling industry.
              </p>
            </div>
            <InView className="lg:col-span-6" threshold={0.45}>
              <MaterialRing />
            </InView>
          </div>

          <figure className="mt-16 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:mt-20">
            <ImageSlot id="vision-plant" tone="dark" sizes="100vw" className="aspect-[16/9] w-full sm:aspect-[21/9]" />
            <figcaption className="bg-navy-900 px-5 py-4 text-sm text-steel-200">
              Concept of the planned King Enterprises recycling material plant.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why King Enterprises */}
      <section id="why" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:text-7xl">Why King Enterprises?</h2>
              <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-steel-600">
                What partners can count on when they work with us.
              </p>
              <a
                href="#contact"
                className="press mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-6 font-semibold text-navy-950 hover:bg-gold-400"
              >
                Start a conversation
              </a>
            </div>
          </div>
          <InView className="lg:col-span-7" threshold={0.25}>
            <ul className="divide-y divide-dashed divide-steel-200 border-y border-steel-200">
              {reasons.map((r, i) => (
                <li key={r} className="flex items-center gap-5 py-5 sm:py-6">
                  <svg aria-hidden viewBox="0 0 32 32" className="size-9 shrink-0">
                    <circle className="why-dot" cx="16" cy="16" r="15" fill="var(--color-navy-900)" style={delay(i)} />
                    <path
                      className="why-tick"
                      d="M9.5 16.5 14 21l8.5-9.5"
                      fill="none"
                      stroke="var(--color-gold-400)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      style={delay(i)}
                    />
                  </svg>
                  <p className="display text-[1.7rem] leading-[1.05] text-navy-950 sm:text-[2rem]">{r}</p>
                </li>
              ))}
            </ul>
          </InView>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
