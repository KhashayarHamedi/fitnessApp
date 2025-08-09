import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string(),
  age: z.number(),
  country: z.string(),
  city: z.string(),
  language: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  contactMethod: z.string(),
  goals: z.array(z.string()),
  fitnessLevel: z.string(),
  experience: z.string(),
  medical: z.string().optional(),
  workSchedule: z.string(),
  family: z.string().optional(),
  availability: z.string(),
  motivation: z.string(),
  challenges: z.string(),
  support: z.string(),
  story: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    const html = renderHtmlEmail(data);

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env as Record<string, string | undefined>;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === "true",
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      // Send to coach
      await transporter.sendMail({
        from: SMTP_FROM,
        to: "officialkhashayar@gmail.com",
        subject: `New Coaching Application — ${data.name} (${data.country}, ${data.city})`,
        html,
      });
      // Auto-reply
      await transporter.sendMail({
        from: SMTP_FROM,
        to: data.email,
        subject: "Your application was received — Fit Mit Kash",
        html: renderUserReceipt(data.name),
      });
    } else {
      // No SMTP configured; log only (dev)
      console.log("Application received (no SMTP configured)", data);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false, error: e?.message ?? "Invalid" }), { status: 400 });
  }
}

function renderHtmlEmail(d: z.infer<typeof schema>) {
  const section = (title: string, content: string) => `<tr><td style="padding:8px 0;font-weight:600">${title}</td></tr><tr><td style="padding:0 0 12px 0;color:#444">${content}</td></tr>`;
  const goals = d.goals.join(", ");
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Inter,Arial,sans-serif;max-width:720px;margin:0 auto">
    <tr><td style="padding:16px 0"><h2 style="margin:0;color:#111">New Coaching Application</h2></td></tr>
    ${section("Applicant", `${d.name}, ${d.age}`)}
    ${section("Location", `${d.city}, ${d.country} • Language: ${d.language}`)}
    ${section("Contact", `Email: ${d.email} • Phone: ${d.phone ?? "-"} • Preferred: ${d.contactMethod}`)}
    ${section("Goals", goals)}
    ${section("Fitness level", d.fitnessLevel)}
    ${section("Experience", d.experience)}
    ${section("Medical", d.medical ?? "-")}
    ${section("Work schedule", d.workSchedule)}
    ${section("Family", d.family ?? "-")}
    ${section("Availability", d.availability)}
    ${section("Motivation", d.motivation)}
    ${section("Challenges", d.challenges)}
    ${section("Support needs", d.support)}
    ${section("Story", d.story)}
  </table>`;
}

function renderUserReceipt(name: string) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Inter,Arial,sans-serif;max-width:720px;margin:0 auto">
    <tr><td style="padding:16px 0"><h2 style="margin:0;color:#111">Thank you, ${name}!</h2></td></tr>
    <tr><td style="color:#444">Your application was received. Kash will review it and contact you within 24 hours with next steps.</td></tr>
  </table>`;
}


