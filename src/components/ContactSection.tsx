import { EnquiryForm } from "@/components/EnquiryForm";
import { contacts, email, formatPhone, locations, primaryPhone } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2 className="display text-5xl text-navy-900 sm:text-6xl lg:col-span-5 lg:text-7xl">Let&rsquo;s create value together</h2>
          <p className="max-w-[56ch] text-lg leading-relaxed text-steel-600 lg:col-span-7">
            Looking for an industrial scrap business partner? Connect with King Enterprises for business enquiries,
            industrial partnerships and commercial opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="rounded-2xl bg-white shadow-[0_30px_60px_-40px_rgb(6_22_49/0.45)] ring-1 ring-steel-200 lg:col-span-8">
            <EnquiryForm />
          </div>

          <aside className="flex flex-col rounded-2xl bg-navy-900 p-6 text-white sm:p-8 lg:col-span-4">
            <h3 className="display text-4xl">Prefer to talk?</h3>
            <p className="mt-2 text-steel-200">Call our contact persons directly.</p>

            <ul className="mt-7 space-y-3">
              {contacts.map((c) => (
                <li key={c.phone}>
                  <a
                    href={`tel:+91${c.phone}`}
                    className="press group flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3.5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-gold-500"
                  >
                    <span>
                      <span className="display block text-3xl tabular-nums">{formatPhone(c.phone)}</span>
                      <span className="text-sm text-steel-200">
                        {c.who}, {c.where.toLowerCase()}
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

            <dl className="mt-7 border-t border-white/10 pt-6 text-[15px]">
              <dt className="text-sm text-steel-400">Email</dt>
              <dd className="mt-0.5">
                <a href={`mailto:${email}`} className="font-semibold wrap-anywhere text-gold-300 hover:underline">
                  {email}
                </a>
              </dd>
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
  );
}
