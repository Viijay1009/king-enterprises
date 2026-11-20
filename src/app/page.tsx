import Image from "next/image";
import { CorridorMap } from "@/components/CorridorMap";
import { Hero } from "@/components/Hero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PickupRoute } from "@/components/PickupRoute";
import { CopyValue } from "@/components/CopyValue";
import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import {
  formatPhone,
  locations,
  materials,
  primaryPhone,
  profile,
  workforce,
} from "@/content/site";
import type { ImageId } from "@/content/images";

const workforceColors = ["bg-navy-800", "bg-gold-500", "bg-leaf-600", "bg-steel-400"];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold"
      >
        Skip to content
      </a>
      <StructuredData />
      <SiteHeader />

      <main id="main">
        <Hero />

        {/* Materials */}
        <section id="materials" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-4 lg:text-7xl">What we collect</h2>
              <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-8">
                Six kinds of scrap come off the press shops, moulding lines and assembly cells we serve. We keep each
                one separate from pickup to dispatch, so it can be recycled rather than dumped.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              {materials.map((m) => (
                <li
                  key={m.short}
                  className="material-card group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-steel-200"
                >
                  <div className="overflow-hidden">
                    <ImageSlot
                      id={m.image as ImageId}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="material-card-photo aspect-[4/3] w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="display text-3xl text-navy-950 sm:text-[2.1rem]">{m.title}</h3>
                    <p className="mt-2 mb-6 leading-relaxed text-steel-600">{m.body}</p>
                    <dl className="mt-auto space-y-3 border-t border-dashed border-steel-200 pt-5 text-[15px]">
                      <div>
                        <dt className="text-sm text-steel-600">Where it comes from</dt>
                        <dd className="font-medium text-navy-950">{m.sources}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-steel-600">How we handle it</dt>
                        <dd className="font-medium text-navy-950">{m.handling}</dd>
                      </div>
                    </dl>
                  </div>
                  <span aria-hidden className="material-card-bar absolute inset-x-0 bottom-0 h-1 bg-gold-500" />
                </li>
              ))}
            </ul>
            <p className="mt-10 text-base text-steel-600">
              Something not on the list?{" "}
              <a
                href={`tel:+91${primaryPhone}`}
                className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
              >
                Call {formatPhone(primaryPhone)}
              </a>{" "}
              and ask. If it comes off a production line, we can usually take it.
            </p>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="overflow-x-clip bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">How a pickup works</h2>
              <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
                One phone call starts it. From there we handle the collection and the sorting, and
                your scrap leaves the yard as material ready for recycling.
              </p>
            </div>

            <div className="mt-16 lg:mt-20">
              <PickupRoute />
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-12 lg:mt-24 lg:gap-8">
              <figure className="relative self-start overflow-hidden rounded-2xl md:col-span-7">
                <ImageSlot id="facility-press" sizes="(min-width: 768px) 55vw, 100vw" className="aspect-[4/3] w-full" />
                <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-navy-950 px-5 py-4 text-white sm:absolute sm:bottom-5 sm:left-5 sm:max-w-[calc(100%-2.5rem)] sm:rounded-xl sm:bg-navy-950/90 sm:backdrop-blur-sm">
                  <span className="display text-3xl text-gold-400">3 × 300 ton</span>
                  <span className="text-sm text-steel-200">presses compact sorted scrap into dense bales</span>
                </figcaption>
              </figure>
              <figure className="relative self-start overflow-hidden rounded-2xl md:col-span-5 md:mt-24">
                <ImageSlot id="facility-fleet" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/3] w-full" />
                <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-navy-950 px-5 py-4 text-white sm:absolute sm:bottom-5 sm:left-5 sm:max-w-[calc(100%-2.5rem)] sm:rounded-xl sm:bg-navy-950/90 sm:backdrop-blur-sm">
                  <span className="display text-3xl text-gold-400">7 lorries</span>
                  <span className="text-sm text-steel-200">of our own, so pickups do not depend on hired transport</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Customers */}
        <section id="customers" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <h2 className="display text-5xl sm:text-6xl lg:text-7xl">Who we clear scrap for</h2>
                <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-steel-200">
                  Automotive manufacturers and logistics firms along the Sriperumbudur–Oragadam industrial corridor
                  rely on our lorries to keep their scrap moving.
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-4 lg:col-span-5">
                {[
                  { value: "7", label: "customers on the corridor" },
                  { value: "4", label: "pickup locations" },
                  { value: "1 hr", label: "about the longest drive from our yard" },
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
              <p className="display text-3xl sm:text-4xl">Running a plant on this corridor?</p>
              <a
                href="#contact"
                className="press inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-navy-950 px-6 font-semibold text-white hover:bg-navy-800"
              >
                Request a pickup
              </a>
            </div>
          </div>
        </section>

        {/* Datasheet */}
        <section id="datasheet" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">Company details</h2>
              <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
                Everything your purchase team needs to register us as a supplier, on one sheet. Copy any registration
                number straight into your vendor system.
              </p>
            </div>

            <article
              aria-label="King Enterprises supplier profile"
              className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-40px_rgb(6_22_49/0.45)] ring-1 ring-steel-200 lg:mt-16"
            >
              <header className="flex flex-wrap items-center justify-between gap-6 bg-navy-900 px-6 py-6 text-white sm:px-10">
                <div className="flex items-center gap-4">
                  <span className="rounded-lg bg-white p-1.5">
                    <Image src="/brand/mark.png" alt="" width={160} height={165} className="h-11 w-auto" />
                  </span>
                  <div>
                    <p className="display text-3xl uppercase">King Enterprises</p>
                    <p className="text-sm text-steel-200">Supplier profile</p>
                  </div>
                </div>
                <p className="text-sm text-steel-200 sm:text-right">
                  Scrap collection and recycling
                  <br />
                  Sriperumbudur, Kancheepuram District
                </p>
              </header>

              <div className="grid divide-y divide-steel-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {profile.map((group) => (
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

              <div className="grid gap-6 border-t border-steel-200 px-6 py-8 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="display text-5xl text-navy-950">
                    {workforce.reduce((n, w) => n + w.count, 0)} people
                  </p>
                  <p className="mt-1 text-[15px] text-steel-600">Across two shifts at the yard</p>
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
                        className={workforceColors[i]}
                        style={{ flexGrow: w.count, flexBasis: 0 }}
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
              </div>

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

        {/* Vision */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <ImageSlot
              id="vision-plant"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/9] w-full rounded-xl lg:col-span-7"
            />
            <div className="lg:col-span-5">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:text-7xl">
                Next, our own recycling plant
              </h2>
              <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-steel-600">
                We are building toward a recycling material plant that handles twelve types of material under
                one roof. More of what we collect will leave as ready-to-use raw material, processed close to
                the plants that produced it.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">Request a pickup</h2>
              <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
                Tell us what needs clearing and we will come back with a pickup plan: how often we collect and when we can
                start. It takes about a minute.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
              <div className="rounded-2xl bg-white shadow-[0_30px_60px_-40px_rgb(6_22_49/0.45)] ring-1 ring-steel-200 lg:col-span-8">
                <EnquiryForm />
              </div>

              <aside className="flex flex-col rounded-2xl bg-navy-900 p-6 text-white sm:p-8 lg:col-span-4">
                <h3 className="display text-4xl">Prefer to talk?</h3>
                <p className="mt-2 text-steel-200">Speak to the factory team directly, Monday to Saturday.</p>

                <ul className="mt-7 space-y-3">
                  {[
                    { label: "Factory", who: "Sarath", phone: locations.factory.phones[0] },
                    { label: "Factory", who: "Maaran", phone: locations.factory.phones[1] },
                    { label: "Office", who: locations.office.contactPeople, phone: locations.office.phones[0] },
                  ].map((c) => (
                    <li key={c.phone}>
                      <a
                        href={`tel:+91${c.phone}`}
                        className="press group flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3.5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-gold-500"
                      >
                        <span>
                          <span className="display block text-3xl tabular-nums">{formatPhone(c.phone)}</span>
                          <span className="text-sm text-steel-200">
                            {c.who}, {c.label.toLowerCase()}
                          </span>
                        </span>
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 transition-transform duration-200 group-hover:scale-105">
                          <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                          </svg>
                          <span className="sr-only">Call</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <dl className="mt-7 space-y-4 border-t border-white/10 pt-6 text-[15px]">
                  <div>
                    <dt className="text-sm text-steel-400">Email</dt>
                    <dd className="mt-0.5 space-y-0.5">
                      {[locations.factory.email, locations.office.email].map((e) => (
                        <a key={e} href={`mailto:${e}`} className="block font-semibold wrap-anywhere text-gold-300 hover:underline">
                          {e}
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto pt-7">
                  <a
                    href={`https://wa.me/91${primaryPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press flex min-h-12 items-center justify-center gap-2 rounded-md bg-leaf-700 px-5 font-semibold text-white hover:bg-leaf-800"
                  >
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <p className="mt-4 rounded-lg bg-navy-950/50 px-4 py-3 text-sm leading-relaxed text-steel-200">
                    <span className="font-semibold text-white">Two shifts, Monday to Saturday.</span> The yard is closed on
                    Sundays.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-12 lg:gap-8">
              {[locations.factory, locations.office].map((loc) => (
                <address
                  key={loc.label}
                  className="flex flex-col rounded-2xl bg-white p-6 not-italic ring-1 ring-steel-200 sm:p-7 lg:col-span-4"
                >
                  <h3 className="flex items-center gap-2.5 text-sm font-semibold text-steel-600">
                    <span aria-hidden className="size-2 rotate-45 bg-gold-500" />
                    {loc.label}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-950">
                    {loc.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-5 text-sm font-semibold text-navy-800 hover:text-navy-950"
                  >
                    <svg aria-hidden viewBox="0 0 16 16" className="size-4 text-gold-500" fill="currentColor">
                      <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z" />
                    </svg>
                    <span className="underline decoration-gold-500 decoration-2 underline-offset-4">Open in Google Maps</span>
                  </a>
                </address>
              ))}
              <iframe
                title="Map of the King Enterprises factory at Kiloy Village, Sriperumbudur"
                src={`https://www.google.com/maps?q=${encodeURIComponent(locations.factory.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-2xl bg-steel-100 ring-1 ring-steel-200 md:col-span-2 lg:col-span-4 lg:h-full lg:min-h-64"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
