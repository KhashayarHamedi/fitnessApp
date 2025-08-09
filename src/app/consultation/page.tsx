"use client";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  age: z.coerce.number().min(12).max(100),
  location: z.string().min(2, "Where are you based?"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional().or(z.literal("")),
  background: z.string().min(2, "Tell me briefly about your background"),
  message: z.string().min(5, "How can I help?"),
  attachments: z
    .any()
    .refine((files) => !files || (files instanceof FileList && files.length <= 5), "Up to 5 files allowed")
    .optional(),
  hp_field: z.string().optional(),
});

type Values = z.infer<typeof schema>;

export default function ConsultationPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Values>({ resolver: zodResolver(schema) as any });

  const onSubmit: SubmitHandler<Values> = async (data) => {
    if (data.hp_field) return;
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (k === "attachments") return;
        // @ts-ignore
        formData.append(k, v ?? "");
      });
      const files = (data as any).attachments as FileList | undefined;
      if (files) Array.from(files).forEach((f) => formData.append("files", f));

      const res = await fetch("/api/consultation", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <main className="container py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-semibold">Book Your Consultation</h1>
        <p className="mb-6 text-white/70">Fill in a few details and I’ll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <input type="text" {...register("hp_field")} className="hidden" aria-hidden="true" tabIndex={-1} />
          <Field label="Full Name" error={errors.name?.message}><input className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("name")} /></Field>
          <Field label="Age" error={errors.age?.message}><input type="number" className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("age", { valueAsNumber: true })} /></Field>
          <Field label="Location (City, Country)" error={errors.location?.message}><input className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("location")} /></Field>
          <Field label="Email" error={errors.email?.message}><input type="email" className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("email")} /></Field>
          <Field label="Phone (optional)" error={errors.phone as any}><input className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("phone")} /></Field>
          <Field label="Background" error={errors.background?.message}><input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Training history, injuries, context" {...register("background")} /></Field>
          <Field label="Message" error={errors.message?.message}><textarea rows={5} className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="How can I help?" {...register("message")} /></Field>
          <Field label="Attach files/images (optional)" error={(errors as any).attachments?.message}>
            <input type="file" multiple accept="image/*,application/pdf" className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("attachments")} />
          </Field>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs text-white/60">Secure & confidential • You’ll get a confirmation email</div>
            <button type="submit" className="btn-primary btn-neon">{status === "submitting" ? "Submitting..." : "Submit"}</button>
          </div>
        </form>
        {status === "success" && (
          <div className="mt-4 rounded-md border border-white/10 bg-white/[0.06] p-4 text-sm text-white/90">Application submitted! Check your email for next steps. Kash will review and contact you within 24 hours.</div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">Something went wrong. Please try again, or email officialkhashayar@gmail.com.</div>
        )}
      </div>
    </main>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 text-sm text-white/80">{label}</div>
      {children}
      {error && <div className="mt-1 text-xs text-red-300">{error}</div>}
    </div>
  );
}


