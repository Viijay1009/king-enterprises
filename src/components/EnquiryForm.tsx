"use client";

import { useState } from "react";
import { locations, materials, primaryPhone } from "@/content/site";

const materialOptions = [...materials.map((m) => m.short), "Mixed or other"];
const quantityOptions = ["Under 1 tonne", "1 to 5 tonnes", "Over 5 tonnes", "Not sure"];
const frequencyOptions = ["One-off", "Weekly", "Monthly", "As needed"];

type Fields = {
  name: string;
  company: string;
  phone: string;
  message: string;
};

const empty: Fields = { name: "", company: "", phone: "", message: "" };

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) errors.name = "Enter your name so we know who to ask for.";
  if (!f.company.trim()) errors.company = "Enter your company or plant name.";
  if (!/^[+\d][\d\s-]{9,}$/.test(f.phone.trim())) errors.phone = "Enter a phone number with at least 10 digits.";
  return errors;
}

const inputClass =
  "mt-1.5 block w-full min-h-12 rounded-lg border border-steel-200 bg-paper px-3.5 text-base text-navy-950 transition-colors duration-150 placeholder:text-steel-500 hover:border-steel-400 focus:border-navy-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800/20 aria-[invalid=true]:border-red-700";

// A chip is a real checkbox or radio, visually replaced, so keyboard and screen readers work as normal.
function Chip({
  type,
  name,
  label,
  checked,
  onChange,
}: {
  type: "checkbox" | "radio";
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="press relative cursor-pointer">
      <input type={type} name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="flex min-h-11 items-center gap-2 rounded-full border border-steel-200 bg-white px-4 text-[15px] font-medium text-navy-900 transition-colors duration-150 peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold-500 hover:border-navy-800">
        {checked && (
          <svg aria-hidden viewBox="0 0 16 16" className="chip-check size-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
          </svg>
        )}
        {label}
      </span>
    </label>
  );
}

function ChipGroup({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-navy-900">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [picked, setPicked] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [frequency, setFrequency] = useState("");
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [sent, setSent] = useState<"email" | "whatsapp" | null>(null);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const toggle = (m: string) => setPicked((p) => (p.includes(m) ? p.filter((x) => x !== m) : [...p, m]));

  const compose = () =>
    [
      `Name: ${fields.name}`,
      `Company: ${fields.company}`,
      `Phone: ${fields.phone}`,
      `Material: ${picked.join(", ") || "Not specified"}`,
      `Approx. quantity: ${quantity || "Not specified"}`,
      `How often: ${frequency || "Not specified"}`,
      "",
      fields.message,
    ].join("\n");

  const submit = (channel: "email" | "whatsapp") => {
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`enq-${first}`)?.focus();
      return;
    }
    if (channel === "email") {
      const subject = `Scrap pickup enquiry from ${fields.company}`;
      window.location.href = `mailto:${locations.factory.email}?cc=${locations.office.email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
    } else {
      window.open(`https://wa.me/91${primaryPhone}?text=${encodeURIComponent(compose())}`, "_blank", "noopener");
    }
    setSent(channel);
  };

  const field = (key: keyof Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`enq-${key}`} className="text-sm font-semibold text-navy-900">
        {label}
      </label>
      <input
        id={`enq-${key}`}
        value={fields[key]}
        onChange={set(key)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `enq-${key}-error` : undefined}
        className={inputClass}
        {...props}
      />
      {errors[key] && (
        <p id={`enq-${key}-error`} className="mt-1.5 text-sm text-red-700">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        submit("email");
      }}
    >
      <div className="space-y-7 p-6 sm:p-8">
        <ChipGroup legend="What needs clearing? Pick any that apply">
          {materialOptions.map((m) => (
            <Chip key={m} type="checkbox" name="material" label={m} checked={picked.includes(m)} onChange={() => toggle(m)} />
          ))}
        </ChipGroup>

        <div className="grid gap-7 xl:grid-cols-2">
          <ChipGroup legend="Roughly how much?">
            {quantityOptions.map((q) => (
              <Chip key={q} type="radio" name="quantity" label={q} checked={quantity === q} onChange={() => setQuantity(q)} />
            ))}
          </ChipGroup>
          <ChipGroup legend="How often?">
            {frequencyOptions.map((q) => (
              <Chip key={q} type="radio" name="frequency" label={q} checked={frequency === q} onChange={() => setFrequency(q)} />
            ))}
          </ChipGroup>
        </div>
      </div>

      <div className="grid gap-5 border-t border-dashed border-steel-200 p-6 sm:grid-cols-2 sm:p-8">
        {field("name", "Your name", { autoComplete: "name" })}
        {field("company", "Company or plant", { autoComplete: "organization" })}
        <div className="sm:col-span-2">{field("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel" })}</div>
        <div className="sm:col-span-2">
          <label htmlFor="enq-message" className="text-sm font-semibold text-navy-900">
            Anything else we should know (optional)
          </label>
          <textarea
            id="enq-message"
            rows={3}
            value={fields.message}
            onChange={set("message")}
            className={`${inputClass} py-3`}
            placeholder="Plant location, pickup timing, access for lorries"
          />
        </div>
      </div>

      <div aria-live="polite">
        {sent && (
          <div className="sent-panel m-6 mt-0 flex items-start gap-4 rounded-xl bg-leaf-600/10 p-5 ring-1 ring-leaf-600/30 sm:m-8 sm:mt-0">
            <svg aria-hidden viewBox="0 0 32 32" className="size-8 shrink-0">
              <circle cx="16" cy="16" r="15" fill="var(--color-leaf-600)" />
              <path className="sent-tick" d="M9.5 16.5 14 21l8.5-9.5" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
            </svg>
            <p className="text-[15px] leading-relaxed text-navy-950">
              {sent === "email"
                ? "Your email app has opened with the enquiry filled in. Press send there to reach our team."
                : "WhatsApp has opened in a new tab with your enquiry. Press send there to reach our factory team."}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 rounded-b-2xl bg-steel-100 p-6 sm:flex-row sm:items-center sm:p-8">
        <button
          type="submit"
          className="press inline-flex min-h-12 items-center justify-center rounded-md bg-navy-800 px-6 font-semibold text-white hover:bg-navy-700"
        >
          Send enquiry by email
        </button>
        <button
          type="button"
          onClick={() => submit("whatsapp")}
          className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-leaf-700 px-6 font-semibold text-white hover:bg-leaf-800"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
          </svg>
          Send on WhatsApp
        </button>
        <p className="text-sm text-steel-600 sm:ml-auto sm:max-w-[22ch]">Opens your email app or WhatsApp, ready to send.</p>
      </div>

    </form>
  );
}
