import { Resend } from "resend";

type RequestBody = {
  name?: string;
  email?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  company?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO = process.env.CONTACT_TO ?? process.env.RESEND_CONTACT_TO;
const CONTACT_FROM =
  process.env.CONTACT_FROM ?? "Fuwad Portfolio <no-reply@yourdomain.com>";

const emailRegex = /^\S+@\S+\.\S+$/;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!CONTACT_TO || !CONTACT_FROM || !process.env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Email service not configured." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let payload: RequestBody;
  try {
    payload = (await req.json()) as RequestBody;
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
  } = payload;

  if (company.trim()) {
    return new Response(JSON.stringify({ error: "Spam detected." }), {
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

  if (!message.trim() || message.trim().length < 20 || message.length > 3000) {
    return new Response(
      JSON.stringify({
        error: "Message must be between 20 and 3000 characters.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
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

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: `New inquiry: ${subject} (${projectType})`,
      text: details,
    });

    await resend.emails.send({
      from: CONTACT_FROM,
      to: email,
      subject: "Thanks for reaching out!",
      text: `Hi ${name.split(" ")[0] || "there"},\n\nThanks for contacting me about ${projectType}. I received your message and will get back to you within 24–48 hours.\n\nBest,\nFuwad Oladega`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export const config = {
  runtime: "edge",
};
