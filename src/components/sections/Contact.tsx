import { useState } from "react";
import type { FormEvent } from "react";
import clsx from "clsx";
import { Mail, MapPin, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { services } from "../../data/services";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  zip: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  zip: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const phonePattern = /^[\d\s()+.-]{7,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const zipPattern = /^\d{5}(-\d{4})?$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please select the service you need.";
  }

  if (!values.zip.trim()) {
    errors.zip = "Please enter your ZIP code.";
  } else if (!zipPattern.test(values.zip.trim())) {
    errors.zip = "Please enter a valid 5-digit ZIP code.";
  }

  return errors;
}

function fieldClasses(hasError?: string) {
  return clsx(
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500",
    hasError ? "border-accent-600" : "border-ink-200"
  );
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // NOTE: This demo form does not submit to a backend. The brief
      // loading state below is just UI feedback — wire this up to your
      // form handler, CRM, or email service (e.g. an API route,
      // Formspree, or a serverless function), and let that call drive
      // isSubmitting/submitted instead of this timeout.
      setSubmitted(false);
      setIsSubmitting(true);
      window.setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setValues(initialValues);
      }, 650);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title={siteConfig.cta.sectionHeading}
            description={siteConfig.cta.sectionDescription}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6 rounded-2xl border border-ink-100 bg-ink-50 p-7">
              <ContactRow icon={Phone} label="Phone">
                <a href={siteConfig.contact.phoneHref} className="hover:text-brand-700">
                  {siteConfig.contact.phone}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-700">
                  {siteConfig.contact.email}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Address">
                {siteConfig.contact.address}
              </ContactRow>
              <ContactRow icon={Clock} label="Business Hours">
                <ul className="space-y-1.5">
                  {siteConfig.contact.hours.map((h) => (
                    <li key={h.day} className="flex flex-col">
                      <span>{h.day}</span>
                      <span className="font-semibold text-brand-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </ContactRow>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-800"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                Thanks! Your request has been received. We'll be in touch shortly.
              </div>
            )}

            <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange("name")}
                  className={fieldClasses(errors.name)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Jane Smith"
                />
              </Field>

              <Field label="Phone" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  className={fieldClasses(errors.phone)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="(555) 010-0123"
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  className={fieldClasses(errors.email)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="jane@example.com"
                />
              </Field>

              <Field label="ZIP Code" htmlFor="zip" error={errors.zip}>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  value={values.zip}
                  onChange={handleChange("zip")}
                  className={fieldClasses(errors.zip)}
                  aria-invalid={Boolean(errors.zip)}
                  aria-describedby={errors.zip ? "zip-error" : undefined}
                  placeholder="00000"
                />
              </Field>

              <Field label="Service Needed" htmlFor="service" error={errors.service} className="sm:col-span-2">
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  onChange={handleChange("service")}
                  className={fieldClasses(errors.service)}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name.toLowerCase().replace(/\s+/g, "-")}>
                      {s.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </Field>

              <Field label="Message" htmlFor="message" error={errors.message} className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange("message")}
                  className={fieldClasses()}
                  placeholder="Tell us a bit about your project…"
                />
              </Field>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : undefined
                  }
                >
                  {isSubmitting ? "Sending…" : siteConfig.cta.contactSection}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-[var(--shadow-card)]">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="text-sm text-ink-700">
        <p className="font-bold text-brand-900">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-brand-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-semibold text-accent-700">
          {error}
        </p>
      )}
    </div>
  );
}
