import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { CorridorMap } from "@/components/CorridorMap";
import { Hero } from "@/components/Hero";
import { ImageSlot } from "@/components/ImageSlot";
import { InView } from "@/components/InView";
import { StructuredData } from "@/components/StructuredData";
import { about, aboutMore, customers, glance, hubs, leaders, pillars } from "@/content/site";

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Home() {
  return (
    <main id="main">
      <StructuredData />
      <Hero />

      {/* About us */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:text-7xl">Who we are</h2>
              <p className="mt-7 max-w-[52ch] text-xl leading-relaxed text-navy-950 sm:text-[1.4rem]">{about}</p>
              <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-steel-600">{aboutMore}</p>
            </div>
            <figure className="relative self-start overflow-hidden rounded-2xl lg:col-span-5">
              <ImageSlot id="facility-fleet" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full lg:aspect-[5/4]" />
              <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-navy-950 px-5 py-4 text-white sm:absolute sm:bottom-5 sm:left-5 sm:max-w-[calc(100%-2.5rem)] sm:rounded-xl sm:bg-navy-950/90 sm:backdrop-blur-sm">
                <span className="display text-3xl text-gold-400">Since 2016</span>
                <span className="text-sm text-steel-200">serving the industrial sector from Sriperumbudur</span>
              </figcaption>
            </figure>
          </div>

          {/* Company at a glance: a ledger whose gold rules fill in as it arrives */}
          <InView className="mt-16 lg:mt-20" threshold={0.4}>
            <h3 className="flex items-center gap-2.5 text-sm font-semibold text-steel-600">
              <span aria-hidden className="size-2 rotate-45 bg-gold-500" />
              Company at a glance
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1fr_1.2fr_1fr_1fr_1.9fr_1fr] lg:gap-x-8">
              {glance.map((g, i) => (
                <div key={g.term} className={`relative pt-5 ${g.wide ? "max-md:col-span-2" : ""}`}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-steel-200" />
                  <span aria-hidden className="ledger-rule absolute inset-x-0 top-0 h-1 bg-gold-500" style={delay(i)} />
                  <dt className="text-sm text-steel-600">{g.term}</dt>
                  <dd className="mt-1">
                    <span className="display text-4xl text-navy-950 tabular-nums lg:text-[2.6rem]">{g.value}</span>
                    {g.unit && <span className="mt-0.5 block text-[15px] text-steel-600">{g.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-steel-600">Annual turnover as recorded in our supplier registration.</p>
          </InView>
        </div>
      </section>

      {/* Our business */}
      <section id="business" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-6 lg:text-7xl">
              Creating value from industrial scrap
            </h2>
            <p className="max-w-[52ch] text-lg leading-relaxed text-steel-600 lg:col-span-6">
              Our business covers four areas of work, from trading the scrap industry produces today to the recycling
              plant we are planning for tomorrow.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="material-card group relative flex flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-steel-200 sm:flex-row"
              >
                <div className="overflow-hidden sm:w-[42%] sm:shrink-0">
                  <ImageSlot
                    id={p.image}
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                    className="material-card-photo aspect-[16/10] w-full sm:aspect-auto sm:h-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {"planned" in p && (
                    <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-600/10 px-3 py-1 text-sm font-semibold text-leaf-800 ring-1 ring-leaf-600/25">
                      <span aria-hidden className="size-1.5 rounded-full bg-leaf-600" />
                      Planned
                    </span>
                  )}
                  <h3 className="display text-3xl text-navy-950 sm:text-[2.1rem]">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel-600">{p.body}</p>
                </div>
                <span aria-hidden className="material-card-bar absolute inset-x-0 bottom-0 h-1 bg-gold-500" />
              </li>
            ))}
          </ul>

          <p className="mt-10 text-base text-steel-600">
            How we work, the infrastructure behind it and where we are heading:{" "}
            <Link
              href="/business"
              className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-navy-900"
            >
              see our business and future
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Industrial network */}
      <section id="network" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl">Our industrial network</h2>
              <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-steel-200">
                Our business journey has involved relationships with industrial organisations and companies in the
                automotive and manufacturing ecosystem around Sriperumbudur.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-4 lg:col-span-5">
              {[
                { value: String(customers.length), label: "organisations in our network" },
                { value: String(hubs.length), label: "industrial hubs" },
                { value: "2016", label: "building relationships since" },
              ].map((f) => (
                <div key={f.label} className="border-l-2 border-gold-500 pl-4">
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="display block text-5xl text-white sm:text-6xl">{f.value}</span>
                    <span className="mt-1 block text-sm leading-snug text-steel-200">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14 lg:mt-16">
            <CorridorMap />
          </div>

          <div className="mt-14 flex flex-col gap-5 rounded-2xl bg-gold-500 px-6 py-6 text-navy-950 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="display text-3xl sm:text-4xl">Looking for an industrial scrap business partner?</p>
            <Link
              href="#contact"
              className="press inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-navy-950 px-6 font-semibold text-white hover:bg-navy-800"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">Leadership</h2>
            <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
              The people giving King Enterprises its direction and running its day-to-day operations.
            </p>
          </div>

          <InView className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8" threshold={0.35}>
            {leaders.map((l, i) => (
              <article
                key={l.name}
                className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-steel-200 sm:flex-row sm:items-start sm:p-8"
              >
                {/* The seal from the bale tag, stamped with each leader's initial */}
                <span
                  aria-hidden
                  className="stamp grid size-24 shrink-0 place-items-center rounded-full border-[3px] border-double border-gold-500 text-gold-500 sm:size-28"
                  style={delay(i)}
                >
                  <span className="display text-6xl sm:text-7xl">{l.name[0]}</span>
                </span>
                <div>
                  <h3 className="display text-5xl text-navy-950">{l.name}</h3>
                  <p className="mt-2 inline-block rounded-full bg-navy-900 px-3 py-1 text-sm font-semibold text-white">
                    {l.role}
                  </p>
                  <p className="mt-4 max-w-[44ch] leading-relaxed text-steel-600">{l.body}</p>
                </div>
              </article>
            ))}
          </InView>
        </div>
      </section>

      {/* Hand-off to page two */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-navy-900 text-white lg:grid-cols-12">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-6 lg:p-12">
              <h2 className="display text-5xl sm:text-6xl">Our business &amp; future</h2>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-steel-200">
                Our business approach, the facility and people behind it, and the recycling material plant we are
                working towards.
              </p>
              <div className="mt-8">
                <Link
                  href="/business"
                  className="press inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-6 font-semibold text-navy-950 hover:bg-gold-400"
                >
                  Explore our business
                </Link>
              </div>
            </div>
            <ImageSlot
              id="vision-plant"
              tone="dark"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/9] w-full lg:col-span-6 lg:aspect-auto lg:min-h-80"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
