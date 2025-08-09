import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string(),
  age: z.number(),
  location: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  background: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: any;
    let files: { filename: string; content: Buffer; contentType?: string }[] = [];
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const raw: any = Object.fromEntries(form.entries());
      data = schema.parse({
        name: raw.name,
        age: Number(raw.age),
        location: raw.location,
        email: raw.email,
        phone: raw.phone,
        background: raw.background,
        message: raw.message,
      });
      const fileEntries = form.getAll("files") as File[];
      for (const f of fileEntries) {
        const arrayBuf = await f.arrayBuffer();
        files.push({ filename: f.name, content: Buffer.from(arrayBuf), contentType: f.type });
      }
    } else {
      const json = await req.json();
      data = schema.parse(json);
    }

    const html = `
    <table width="100%" cellspacing="0" cellpadding="0" style="font-family:Inter,Arial,sans-serif;max-width:720px;margin:0 auto">
      <tr><td style="padding:16px 0"><h2 style="margin:0;color:#111">New Consultation Request</h2></td></tr>
      <tr><td><strong>Name:</strong> ${data.name}</td></tr>
      <tr><td><strong>Age:</strong> ${data.age}</td></tr>
      <tr><td><strong>Location:</strong> ${data.location}</td></tr>
      <tr><td><strong>Email:</strong> ${data.email}</td></tr>
      <tr><td><strong>Phone:</strong> ${data.phone ?? "-"}</td></tr>
      <tr><td><strong>Background:</strong> ${data.background}</td></tr>
      <tr><td><strong>Message:</strong> ${data.message}</td></tr>
    </table>`;

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env as Record<string, string | undefined>;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === "true",
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transporter.sendMail({ from: SMTP_FROM, to: "officialkhashayar@gmail.com", subject: `Consultation — ${data.name} (${data.location})`, html, attachments: files });
      await transporter.sendMail({ from: SMTP_FROM, to: data.email, subject: "Consultation request received — Fit Mit Kash", html: `<p>Thanks ${data.name}, your consultation request is received. Kash will contact you within 24 hours.</p>` });
    } else {
      console.log("Consultation (no SMTP)", data);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message ?? "Invalid" }), { status: 400 });
  }
}


