"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, Check, Download, Mail, Send } from "lucide-react";

import LinkedInIcon from "@/components/icons/LinkedInIcon";

import { site } from "@/data/site";
import CopyButton from "@/components/ui/CopyButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FieldName = keyof Values;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Please add your name.";

  if (!values.email.trim()) {
    errors.email = "Please add your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That doesn't look like a valid email address.";
  }

  if (!values.subject.trim()) errors.subject = "Please add a subject.";

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "A little more detail would help — at least a sentence or two.";
  }

  return errors;
}

const inputBase =
  "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-[0.9375rem] text-ink-900 placeholder:text-mist-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/25";

export default function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    subject: subjectRef,
    message: messageRef,
  };

  const focusField = (field: FieldName) => fieldRefs[field].current?.focus();

  const update = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const composeBody = (v: Values) =>
    `Name: ${v.name}\nEmail: ${v.email}\n\n${v.message}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as FieldName[])[0];
    if (firstInvalid) {
      focusField(firstInvalid);
      setAnnouncement("The form has errors. Please check the highlighted fields.");
      return;
    }

    const subject = values.subject.trim();
    const body = composeBody(values);

    // This site has no backend. The message is handed to the visitor's own
    // mail application, with a full manual fallback shown immediately below.
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setAnnouncement(
      `Opening your email application. If it does not open, copy the message and send it to ${site.email}.`,
    );
    window.location.href = href;
  };

  const composedText = sent
    ? `To: ${site.email}\nSubject: ${values.subject.trim()}\n\n${composeBody(values)}`
    : "";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-mist-200 bg-brand-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={
              <span id="contact-heading">
                Tell me what you need{" "}
                <em className="font-display font-normal italic text-brand-700">handled</em>.
              </span>
            }
            description="A paragraph about your business and the tasks eating your week is plenty to start with. I usually reply within one working day."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-14">
          {/* ------------------------------------------------------------ Form */}
          <Reveal className="min-w-0">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-mist-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-ink-800">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    ref={nameRef}
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    placeholder="Jane Smith"
                    className={`${inputBase} ${
                      errors.name ? "border-red-500" : "border-mist-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-700">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-ink-800">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    ref={emailRef}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    placeholder="jane@company.com"
                    className={`${inputBase} ${
                      errors.email ? "border-red-500" : "border-mist-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-700">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="block text-sm font-medium text-ink-800">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  ref={subjectRef}
                  type="text"
                  name="subject"
                  required
                  value={values.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  placeholder="Social media support for a small business"
                  className={`${inputBase} ${
                    errors.subject ? "border-red-500" : "border-mist-300 focus:border-brand-500"
                  }`}
                />
                {errors.subject ? (
                  <p id="contact-subject-error" className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-700">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-sm font-medium text-ink-800">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  ref={messageRef}
                  name="message"
                  rows={6}
                  required
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  placeholder="A short description of your business, what you need support with, and roughly how many hours a week you have in mind."
                  className={`${inputBase} resize-y ${
                    errors.message ? "border-red-500" : "border-mist-300 focus:border-brand-500"
                  }`}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-700">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send message
                </button>

                <p className="max-w-xs text-[0.75rem] leading-relaxed text-mist-500">
                  This site has no backend. Sending opens your own email app with everything
                  filled in.
                </p>
              </div>

              <span role="status" aria-live="polite" className="sr-only">
                {announcement}
              </span>

              {/* --------------------------------------------------- Fallback */}
              {sent ? (
                <div className="mt-7 rounded-xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-[0.9375rem] font-semibold text-ink-900">
                    <Check className="h-4 w-4 text-brand-700" aria-hidden="true" />
                    Your email app should be opening
                  </h3>

                  <p className="mt-2 text-[0.875rem] leading-relaxed text-mist-600">
                    Nothing was sent from this website — there is no server behind it. If your
                    mail application did not open, copy the message below and send it to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-brand-800 underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                    .
                  </p>

                  <div className="mt-4 rounded-lg border border-brand-200 bg-white p-4">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mist-500">
                      Subject
                    </p>
                    <p className="mt-1 text-[0.875rem] text-ink-900">{values.subject.trim()}</p>

                    <p className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mist-500">
                      Message
                    </p>
                    <pre className="mt-1 max-h-56 overflow-auto whitespace-pre-wrap font-sans text-[0.875rem] leading-relaxed text-ink-800">
                      {composeBody(values)}
                    </pre>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <CopyButton
                      value={composedText}
                      label="Copy message"
                      className="border-brand-300 bg-white text-brand-800 hover:bg-brand-100"
                    />
                    <CopyButton
                      value={site.email}
                      label="Copy email address"
                      className="border-brand-300 bg-white text-brand-800 hover:bg-brand-100"
                    />
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-brand-800 transition-colors hover:bg-brand-100"
                    >
                      Open email app again
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ) : null}
            </form>
          </Reveal>

          {/* ------------------------------------------------------- Sidebar */}
          <Reveal delay={80}>
            <div className="rounded-2xl border border-brand-200 bg-white p-6 sm:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                Direct
              </h3>

              <ul className="mt-5 space-y-4">
                <li className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex min-w-0 items-center gap-2.5 text-[0.9375rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    <span className="truncate">{site.email}</span>
                  </a>
                  <CopyButton
                    value={site.email}
                    label="Copy"
                    className="shrink-0 border-mist-200 text-mist-600 hover:border-ink-900 hover:text-ink-900"
                  />
                </li>

                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg px-1 py-1 text-[0.9375rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedInIcon className="h-4 w-4 shrink-0 text-brand-600" />
                      LinkedIn profile
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-mist-400" aria-hidden="true" />
                  </a>
                </li>

                {site.resumeUrl ? (
                  <li>
                    <a
                      href={site.resumeUrl}
                      download
                      className="flex items-center justify-between gap-3 rounded-lg px-1 py-1 text-[0.9375rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                    >
                      <span className="flex items-center gap-2.5">
                        <Download className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                        Download résumé
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-mist-400" aria-hidden="true" />
                    </a>
                  </li>
                ) : null}
              </ul>

              {site.availability.enabled ? (
                <div className="mt-7 border-t border-mist-200 pt-5">
                  <p className="flex items-center gap-2 text-[0.8125rem] font-medium text-ink-800">
                    <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
                    {site.availability.label}
                  </p>
                  {site.availability.detail ? (
                    <p className="mt-1.5 pl-4 text-[0.8125rem] text-mist-500">
                      {site.availability.detail}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <p className="mt-6 text-[0.8125rem] leading-relaxed text-mist-500">
                Prefer a form-free start? An email with a couple of sentences about your week is
                genuinely enough.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
