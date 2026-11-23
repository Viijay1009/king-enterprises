import type { Metadata } from "next";
import Link from "next/link";
import { company, email, formatPhone, locations } from "@/content/site";

const title = "Privacy Policy | King Enterprises";
const description =
  "How King Enterprises, Sriperumbudur, handles the personal information you share when you contact us or visit this website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title, description },
  twitter: { title, description },
};

const updated = "23 November 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        This website belongs to {company.name}, an industrial scrap business at {locations.factory.lines.join(", ")}.
        In this policy, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {company.name}.
      </p>
    ),
  },
  {
    heading: "What we collect",
    body: (
      <>
        <p>We only collect the information you choose to give us when you get in touch:</p>
        <ul>
          <li>your name, company and phone number</li>
          <li>what your enquiry is about and any message you write</li>
          <li>your email address or WhatsApp number, if you contact us that way</li>
        </ul>
        <p>
          The enquiry form on this website does not store anything. When you press send, it opens your own email app
          or WhatsApp with the message filled in, and nothing reaches us until you send it from there.
        </p>
      </>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <ul>
        <li>to reply to your enquiry and discuss business with you</li>
        <li>to arrange quotations, collections, sales and payments you agree to</li>
        <li>to keep the business records the law requires of us, such as GST invoices</li>
      </ul>
    ),
  },
  {
    heading: "Who we share it with",
    body: (
      <p>
        We do not sell or rent your information. We share it only with people who help us do the work you asked for,
        such as transporters for a collection, or when the law requires it. Email and WhatsApp messages are also
        handled by those services under their own privacy policies.
      </p>
    ),
  },
  {
    heading: "This website",
    body: (
      <>
        <p>
          We do not use advertising or tracking cookies. Our hosting provider, Vercel, measures page speed with
          anonymous data that does not identify you, and keeps standard server logs for security.
        </p>
        <p>
          The map on our contact section is provided by Google Maps, which may set its own cookies when it loads. See{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s privacy policy
          </a>{" "}
          for details.
        </p>
      </>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <p>
        We keep enquiry details for as long as we are discussing or doing business with you. Business and tax
        records are kept for the period the law requires, and then deleted.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        Under India&rsquo;s Digital Personal Data Protection Act, 2023, you can ask us what information we hold about
        you, ask us to correct it, or ask us to delete it where we no longer need to keep it. Email us at{" "}
        <a href={`mailto:${email}`}>{email}</a> and we will reply as soon as we can.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: <p>If we change this policy, we will update it on this page and change the date at the top.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-steel-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-steel-200">
                Privacy policy
              </li>
            </ol>
          </nav>
          <h1 className="headline mt-4 text-[2.6rem] sm:text-[4.2rem] lg:text-[4.8rem]">Privacy policy</h1>
          <p className="mt-5 text-steel-200">Last updated {updated}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[68ch]">
            <p className="text-xl leading-relaxed text-navy-950">
              This policy explains what personal information {company.name} receives when you contact us or visit
              this website, and how we look after it.
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="display text-3xl text-navy-900 sm:text-4xl">{s.heading}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-steel-600 [&_a]:font-semibold [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:decoration-navy-900 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_li]:marker:text-gold-500">
                    {s.body}
                  </div>
                </section>
              ))}

              <section className="rounded-2xl bg-white p-6 ring-1 ring-steel-200 sm:p-8">
                <h2 className="display text-3xl text-navy-900 sm:text-4xl">Contact us about privacy</h2>
                <p className="mt-4 text-lg leading-relaxed text-steel-600">
                  For any question or request about your information, contact {company.owner}, Owner.
                </p>
                <dl className="mt-5 grid gap-4 text-lg sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-steel-600">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold wrap-anywhere text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-navy-900"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-steel-600">Phone</dt>
                    <dd>
                      <a
                        href={`tel:+91${locations.office.phones[0]}`}
                        className="font-semibold text-navy-900 tabular-nums underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-navy-900"
                      >
                        {formatPhone(locations.office.phones[0])}
                      </a>
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
