import Image from "next/image";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { company } from "@/content/site";

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

const headline = ["Industrial scrap trading.", "Sustainable resource recovery."];

const tag = [
  { term: "Based in", detail: "Sriperumbudur" },
  { term: "Facility", detail: "1.5 acres" },
  { term: "Workforce", detail: "72 people" },
  { term: "Shifts", detail: "Two" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex flex-col overflow-hidden bg-navy-950 text-white lg:min-h-[calc(100svh-5rem)]">
      {/* Full-bleed yard photo */}
      <div className="hero-settle absolute inset-0 -z-20 max-lg:bottom-auto max-lg:h-[24rem] sm:max-lg:h-[30rem]">
        <ImageSlot
          id="hero-yard"
          tone="dark"
          preload
          sizes="100vw"
          className="h-full w-full"
          imgClassName="object-[72%_center] lg:object-center"
          captionClassName="mt-auto ml-auto max-w-sm text-right items-end max-lg:hidden"
        />
      </div>
      {/* Legibility wash: solid navy behind the copy, opening to the photo on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-navy-950)_0%,color-mix(in_srgb,var(--color-navy-950)_92%,transparent)_40%,color-mix(in_srgb,var(--color-navy-950)_55%,transparent)_58%,color-mix(in_srgb,var(--color-navy-950)_12%,transparent)_76%,color-mix(in_srgb,var(--color-navy-950)_8%,transparent)_100%)] max-lg:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-navy-950)_10%,transparent)_0%,color-mix(in_srgb,var(--color-navy-950)_30%,transparent)_9rem,var(--color-navy-950)_23rem)] sm:max-lg:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-navy-950)_10%,transparent)_0%,color-mix(in_srgb,var(--color-navy-950)_30%,transparent)_12rem,var(--color-navy-950)_29rem)]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-56 pb-14 sm:px-6 sm:pt-72 lg:flex-1 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pt-20 lg:pb-10">
        <div className="lg:col-span-8">
          <h1 className="stencil text-[3.3rem] sm:text-[5.4rem] lg:text-[5.6rem] xl:text-[6.4rem]">
            {headline.map((line, i) => (
              <span key={line} className="hero-spray block text-balance" style={delay(i)}>
                {line}
              </span>
            ))}
          </h1>

          <p
            className="hero-rise mt-8 max-w-[54ch] text-lg leading-relaxed text-steel-200 sm:text-xl"
            style={delay(5)}
          >
            Building value through industrial scrap trading and recycling opportunities. We believe industrial scrap
            is not waste, but a valuable resource that can contribute to a more sustainable industrial future.
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={delay(6)}>
            <Link
              href="/business"
              className="press inline-flex min-h-13 items-center justify-center rounded-md bg-gold-500 px-7 text-[17px] font-bold text-navy-950 hover:bg-gold-400"
            >
              Explore our business
            </Link>
            <Link
              href="/business#contact"
              className="press inline-flex min-h-13 items-center justify-center rounded-md border border-white/35 px-7 text-[17px] font-semibold text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Bale tag: the label tied to every bale that leaves the yard */}
        <div className="flex justify-center lg:col-span-4 lg:self-end lg:justify-end">
          <div className="hero-hang relative w-full max-w-[22rem] lg:max-w-[17rem] [filter:drop-shadow(0_28px_36px_rgb(0_0_0/0.5))]">
            <svg
              aria-hidden
              viewBox="0 0 20 120"
              className="absolute bottom-[calc(100%-1.6rem)] left-1/2 h-16 w-5 -translate-x-1/2 max-lg:hidden"
            >
              <path d="M10 0 C 6 40, 14 80, 10 120" fill="none" stroke="var(--color-gold-400)" strokeWidth="2" />
            </svg>

            <article
              aria-label="King Enterprises at a glance"
              className="relative rounded-[0.9rem] bg-paper px-6 pt-10 pb-6 text-navy-950 lg:px-5 lg:pt-9 lg:pb-4 [clip-path:polygon(14%_0,86%_0,100%_9%,100%_100%,0_100%,0_9%)] sm:px-7"
            >
              <span
                aria-hidden
                className="absolute top-4 left-1/2 size-4 -translate-x-1/2 rounded-full bg-navy-950 ring-4 ring-steel-200"
              />
              <div className="flex items-center justify-between gap-4 border-b-2 border-navy-950 pb-4 lg:gap-3 lg:pb-3">
                <div>
                  <p className="display text-[1.9rem] uppercase lg:text-[1.45rem]">King Enterprises</p>
                  <p className="mt-1 text-sm text-steel-600 lg:text-xs">Industrial scrap and recycling</p>
                </div>
                <Image src="/brand/mark.png" alt="" width={160} height={165} className="h-12 w-auto shrink-0 lg:h-10" />
              </div>

              <dl className="divide-y divide-dashed divide-steel-200">
                {tag.map((row) => (
                  <div key={row.term} className="flex items-baseline justify-between gap-4 py-3 lg:py-2">
                    <dt className="text-sm text-steel-600">{row.term}</dt>
                    <dd className="display text-2xl tabular-nums lg:text-xl">{row.detail}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-2 flex items-end justify-between gap-4">
                <p className="text-xs leading-relaxed text-steel-600 lg:text-[11px]">
                  MSME {company.msme}
                  <br />
                  GSTIN {company.gst}
                </p>
                <span
                  aria-hidden
                  className="grid size-20 shrink-0 -rotate-12 lg:size-16 place-items-center rounded-full border-[3px] border-double border-gold-500 text-center text-gold-500"
                >
                  <span className="display text-[0.95rem] leading-none uppercase lg:text-[0.8rem]">
                    Est.
                    <br />
                    <span className="text-[1.6rem] lg:text-[1.3rem]">{company.established}</span>
                  </span>
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* What we do, in the company's own three words */}
      <div className="hero-rise border-t border-white/15 bg-navy-950/60 backdrop-blur-sm" style={delay(8)}>
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-5 sm:px-6 lg:px-8">
          {company.services.map((name) => (
            <li key={name} className="display flex items-center gap-2.5 text-xl tracking-wide uppercase">
              <span aria-hidden className="size-1.5 rotate-45 bg-gold-500" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
