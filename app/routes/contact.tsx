import { useMemo, useState } from "react";
import { Mail, Linkedin, Github, FileDown, Clock, Send } from "lucide-react";
import Toast, { type ToastVariant } from "~/component/Toast";

const EMAIL = "oladegafuwad7@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/fuwad-oladega/";
const GITHUB = "https://github.com/Fuwad2000";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  company: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type ToastState = { message: string; variant: ToastVariant } | null;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
  company: "",
};

const emailRegex = /^\S+@\S+\.\S+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (values.company.trim()) {
    errors.company = "Please leave this field empty.";
  }

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  } else if (values.message.trim().length > 3000) {
    errors.message = "Message must be under 3000 characters.";
  }

  if (!values.consent) {
    errors.consent = "Please consent to being contacted.";
  }

  return errors;
}

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Fuwad Oladega",
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    "TITLE:Cloud & Software Developer",
    `URL:${LINKEDIN}`,
    `URL:${GITHUB}`,
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Fuwad_Oladega.vcf";
  anchor.click();

  URL.revokeObjectURL(url);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Fuwad Oladega",
      url: "https://degaz.dev/contact",
      mainEntity: {
        "@type": "Person",
        name: "Fuwad Oladega",
        email: EMAIL,
        sameAs: [LINKEDIN, GITHUB],
        jobTitle: "Cloud & Software Developer",
      },
    }),
    []
  );

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const showToast = (message: string, variant: ToastVariant) => {
    setToast({ message, variant });
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          projectType: "General",
          budget: "",
          consent: form.consent,
          company: form.company,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const errorMsg = data.error || "Unable to send message right now.";
        const details = data.details ? ` (${data.details})` : "";
        const message = data.message ? ` ${data.message}` : "";
        throw new Error(`${errorMsg}${details}${message}`);
      }

      showToast(
        "Thanks for reaching out! I'll reply within 24–48 hours.",
        "success"
      );
      resetForm();
    } catch (error) {
      console.error(error);
      showToast(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="overflow-hidden rounded-3xl border border-(--border) bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)] px-6 py-8 shadow-[0_25px_70px_-35px_rgba(16,185,129,0.45)] backdrop-blur-xl">
          <header className="space-y-4">
            <p
              className="text-sm uppercase tracking-[0.35em]"
              style={{ color: "var(--textMuted)" }}
            >
              Contact
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--textPrimary)" }}
            >
              Let’s Connect
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--textSecondary)" }}
            >
              Whether you’re exploring a new project, hiring for a team, or
              looking for mentorship, I respond quickly and thoughtfully—usually
              within 24–48 hours.
            </p>
          </header>
        </section>

        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="space-y-6">
            <article className="rounded-2xl border border-(--border) bg-(--surface) px-5 py-6 shadow-[0_25px_70px_-45px_rgba(16,185,129,0.55)] backdrop-blur-xl">
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--textPrimary)" }}
              >
                Quick Channels
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--textSecondary)" }}
              >
                Prefer a direct touchpoint? Use any of the trusted channels
                below or download my contact card.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`}
                  className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-glow"
                  style={{ color: "var(--textPrimary)" }}
                >
                  <Mail className="h-5 w-5" aria-hidden />
                  <div>
                    <span className="text-sm font-semibold">Email</span>
                    <p
                      className="text-xs"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      {EMAIL}
                    </p>
                  </div>
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-glow"
                  style={{ color: "var(--textPrimary)" }}
                >
                  <Linkedin className="h-5 w-5" aria-hidden />
                  <div>
                    <span className="text-sm font-semibold">LinkedIn</span>
                    <p
                      className="text-xs"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      /fuwad-oladega
                    </p>
                  </div>
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-glow"
                  style={{ color: "var(--textPrimary)" }}
                >
                  <Github className="h-5 w-5" aria-hidden />
                  <div>
                    <span className="text-sm font-semibold">GitHub</span>
                    <p
                      className="text-xs"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      @Fuwad2000
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={downloadVCard}
                  className="flex w-full items-center justify-between rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-glow"
                  style={{ color: "var(--textPrimary)" }}
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="h-5 w-5" aria-hidden />
                    Download vCard
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--textSecondary)" }}
                  >
                    .vcf
                  </span>
                </button>
                <div
                  className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 text-sm"
                  style={{ color: "var(--textSecondary)" }}
                >
                  <Clock className="h-5 w-5" aria-hidden />
                  <div>
                    <p
                      className="font-medium"
                      style={{ color: "var(--textPrimary)" }}
                    >
                      Response Time
                    </p>
                    <p className="text-xs">Typically within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </article>
          </aside>

          <section className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-(--border) bg-(--surface) px-6 py-8 shadow-glow"
              noValidate
            >
              <fieldset className="grid gap-6" disabled={isSubmitting}>
                <legend className="sr-only">Send me a message</legend>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label
                    className="flex flex-col gap-2 text-sm font-medium"
                    style={{ color: "var(--textPrimary)" }}
                  >
                    Full name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(event) => setField("name", event.target.value)}
                      placeholder="Your full name"
                      minLength={2}
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="rounded-xl border border-(--border) bg-transparent px-4 py-3 text-base text-(--textPrimary) placeholder:text-(--textMuted) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
                    />
                    {errors.name && (
                      <span id="name-error" className="text-xs text-red-400">
                        {errors.name}
                      </span>
                    )}
                  </label>

                  <label
                    className="flex flex-col gap-2 text-sm font-medium"
                    style={{ color: "var(--textPrimary)" }}
                  >
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(event) =>
                        setField("email", event.target.value)
                      }
                      placeholder="you@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className="rounded-xl border border-(--border) bg-transparent px-4 py-3 text-base text-(--textPrimary) placeholder:text-(--textMuted) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
                    />
                    {errors.email && (
                      <span id="email-error" className="text-xs text-red-400">
                        {errors.email}
                      </span>
                    )}
                  </label>
                </div>

                <label
                  className="flex flex-col gap-2 text-sm font-medium"
                  style={{ color: "var(--textPrimary)" }}
                >
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={(event) =>
                      setField("subject", event.target.value)
                    }
                    placeholder="How can I help you?"
                    required
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className="rounded-xl border border-(--border) bg-transparent px-4 py-3 text-base text-(--textPrimary) placeholder:text-(--textMuted) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
                  />
                  {errors.subject && (
                    <span id="subject-error" className="text-xs text-red-400">
                      {errors.subject}
                    </span>
                  )}
                </label>

                <label
                  className="flex flex-col gap-2 text-sm font-medium"
                  style={{ color: "var(--textPrimary)" }}
                >
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(event) =>
                      setField("message", event.target.value)
                    }
                    placeholder="Tell me about your goals, timelines, and context."
                    minLength={20}
                    maxLength={3000}
                    required
                    rows={7}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="rounded-xl border border-(--border) bg-transparent px-4 py-3 text-base text-(--textPrimary) placeholder:text-(--textMuted) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
                  />
                  {errors.message && (
                    <span id="message-error" className="text-xs text-red-400">
                      {errors.message}
                    </span>
                  )}
                </label>

                <div className="hidden">
                  <label>
                    Company
                    <input
                      type="text"
                      name="company"
                      aria-hidden="true"
                      tabIndex={-1}
                      value={form.company}
                      onChange={(event) =>
                        setField("company", event.target.value)
                      }
                    />
                  </label>
                  {errors.company && (
                    <span className="text-xs text-red-400">
                      {errors.company}
                    </span>
                  )}
                </div>

                <label
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--textSecondary)" }}
                >
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(event) =>
                      setField("consent", event.target.checked)
                    }
                    required
                    aria-invalid={Boolean(errors.consent)}
                    className="mt-1 h-4 w-4 rounded border border-(--border) bg-transparent text-(--accent) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
                  />
                  <span>
                    I agree to be contacted about this inquiry and understand my
                    details will be handled responsibly.
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-red-400">{errors.consent}</span>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl btn-accent px-5 py-3 font-semibold shadow-glow transition hover:-translate-y-0.5 disabled:opacity-60"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  <Send className="h-4 w-4" aria-hidden />
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {toast && (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onDismiss={() => setToast(null)}
        />
      )}
    </main>
  );
}
