import { Resend } from "resend";

type RequestBody = {
  name?: string;
  email?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  company?: string;
  consent?: boolean;
};

const emailRegex = /^\S+@\S+\.\S+$/;
const DEFAULT_CONTACT_TO = "oladegafuwad7@gmail.com";
const DEFAULT_CONTACT_FROM = "Fuwad Portfolio <onboarding@resend.dev>";

function isDevEnvironment() {
  return process.env.NODE_ENV !== "production";
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const contactTo =
    process.env.CONTACT_TO ??
    process.env.RESEND_CONTACT_TO ??
    DEFAULT_CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM ?? DEFAULT_CONTACT_FROM;

  return { apiKey, contactTo, contactFrom };
}

async function sendWithResend(
  resend: Resend,
  payload: Parameters<Resend["emails"]["send"]>[0],
) {
  const { data, error } = await resend.emails.send(payload);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { apiKey, contactTo, contactFrom } = getEmailConfig();
  const isDev = isDevEnvironment();

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "Email service not configured.",
        details: isDev ? "Missing: RESEND_API_KEY" : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  let payload: RequestBody;
  try {
    payload = (await request.json()) as RequestBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {
    name = "",
    email = "",
    subject = "Portfolio Inquiry",
    projectType = "General",
    budget = "",
    message = "",
    company = "",
    consent = false,
  } = payload;

  if (company.trim()) {
    return new Response(JSON.stringify({ error: "Spam detected." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!consent) {
    return new Response(JSON.stringify({ error: "Consent is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!name.trim() || name.trim().length < 2) {
    return new Response(JSON.stringify({ error: "Name is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Valid email is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!subject.trim()) {
    return new Response(JSON.stringify({ error: "Subject is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!message.trim() || message.trim().length < 20 || message.length > 3000) {
    return new Response(
      JSON.stringify({
        error: "Message must be between 20 and 3000 characters.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const resend = new Resend(apiKey);

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Project Type: ${projectType}`,
    budget ? `Budget: ${budget}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendWithResend(resend, {
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `New inquiry: ${subject} (${projectType})`,
      text: details,
    });

    try {
      await sendWithResend(resend, {
        from: contactFrom,
        to: email,
        subject: "Thanks for reaching out!",
        text: `Hi ${name.split(" ")[0] || "there"},\n\nThanks for contacting me about ${projectType}. I received your message and will get back to you within 24–48 hours.\n\nBest,\nFuwad Oladega`,
      });
    } catch (autoReplyError) {
      if (isDev) {
        console.warn("Contact form sent, but auto-reply failed:", autoReplyError);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
        details: isDev ? String(error) : undefined,
        message: isDev ? errorMessage : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
