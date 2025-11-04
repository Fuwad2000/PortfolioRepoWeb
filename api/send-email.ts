// /api/send-email.ts
export const config = {
  runtime: "nodejs", // ensure Node, not Edge
};

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  company?: string; // honeypot
};

const emailRegex = /^\S+@\S+\.\S+$/;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const CONTACT_TO = process.env.CONTACT_TO || process.env.RESEND_CONTACT_TO;
  const CONTACT_FROM =
    process.env.CONTACT_FROM || "Fuwad Portfolio <onboarding@resend.dev>";
  const API_KEY = process.env.RESEND_API_KEY;

  const isDev = process.env.VERCEL_ENV !== "production";
  if (!API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    const missing = [
      !API_KEY && "RESEND_API_KEY",
      !CONTACT_TO && "CONTACT_TO/RESEND_CONTACT_TO",
      !CONTACT_FROM && "CONTACT_FROM",
    ].filter(Boolean);
    return res.status(500).json({
      error: "Email service not configured.",
      details: isDev ? `Missing: ${missing.join(", ")}` : undefined,
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
  } = body || {};

  // anti-bot
  if (company.trim()) {
    return res.status(400).json({ error: "Spam detected." });
  }
  if (!name.trim() || name.trim().length < 2) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required." });
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

  // helper to send email via Resend REST
  async function sendEmail(
    to: string | string[],
    subjectLine: string,
    content: string
  ) {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to,
        subject: subjectLine,
        text: content,
      }),
    });
    if (!resp.ok) {
      const data = await resp.json().catch(() => ({}));
      throw new Error(
        `Resend error ${resp.status}: ${data.error?.message || JSON.stringify(data)}`
      );
    }
  }

  try {
    await sendEmail(
      CONTACT_TO,
      `New inquiry: ${subject} (${projectType})`,
      text
    );
    await sendEmail(
      email,
      "Thanks for reaching out!",
      `Hi ${name.split(" ")[0] || "there"},\n\nThanks for contacting me about ${projectType}. I received your message and will get back to you within 24–48 hours.\n\nBest,\nFuwad Oladega`
    );
    return res.status(200).json({ success: true });
  } catch (err: any) {
    if (isDev) console.error("Resend API error:", err);
    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
      message: isDev ? err?.message : undefined,
    });
  }
}
