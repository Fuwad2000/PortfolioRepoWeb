export const config = {
  runtime: "nodejs",
};

type Body = {
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

async function sendEmail(
  apiKey: string,
  from: string,
  to: string | string[],
  subjectLine: string,
  content: string,
  replyTo?: string,
) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: subjectLine,
      text: content,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  const data = await resp.json().catch(() => ({}));

  if (!resp.ok) {
    throw new Error(
      `Resend error ${resp.status}: ${data.error?.message || JSON.stringify(data)}`,
    );
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo =
    process.env.CONTACT_TO ||
    process.env.RESEND_CONTACT_TO ||
    DEFAULT_CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM || DEFAULT_CONTACT_FROM;
  const isDev = isDevEnvironment();

  if (!apiKey) {
    return res.status(500).json({
      error: "Email service not configured.",
      details: isDev ? "Missing: RESEND_API_KEY" : undefined,
    });
  }

  let body: Body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body." });
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
  } = body || {};

  if (company.trim()) {
    return res.status(400).json({ error: "Spam detected." });
  }

  if (!consent) {
    return res.status(400).json({ error: "Consent is required." });
  }

  if (!name.trim() || name.trim().length < 2) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required." });
  }

  if (!subject.trim()) {
    return res.status(400).json({ error: "Subject is required." });
  }

  if (!message.trim() || message.trim().length < 20 || message.length > 3000) {
    return res
      .status(400)
      .json({ error: "Message must be between 20 and 3000 characters." });
  }

  const text = [
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
    await sendEmail(
      apiKey,
      contactFrom,
      contactTo,
      `New inquiry: ${subject} (${projectType})`,
      text,
      email,
    );

    try {
      await sendEmail(
        apiKey,
        contactFrom,
        email,
        "Thanks for reaching out!",
        `Hi ${name.split(" ")[0] || "there"},\n\nThanks for contacting me about ${projectType}. I received your message and will get back to you within 24–48 hours.\n\nBest,\nFuwad Oladega`,
      );
    } catch (autoReplyError) {
      if (isDev) {
        console.warn("Contact form sent, but auto-reply failed:", autoReplyError);
      }
    }

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (isDev) console.error("Resend API error:", err);

    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
      message: isDev ? message : undefined,
    });
  }
}
