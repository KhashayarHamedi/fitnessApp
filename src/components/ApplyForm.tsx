"use client";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  age: z.coerce.number().min(12).max(100),
  country: z.string().min(2),
  city: z.string().min(2),
  language: z.string().min(2),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone").optional().or(z.literal("")),
  contactMethod: z.enum(["email", "whatsapp", "telegram", "phone"]).default("email"),
  goals: z.array(z.string()).min(1, "Select at least one goal"),
  fitnessLevel: z.string().min(1),
  experience: z.string().min(1),
  medical: z.string().optional().or(z.literal("")),
  workSchedule: z.string().min(1),
  family: z.string().optional().or(z.literal("")),
  availability: z.string().min(1),
  motivation: z.string().min(5),
  challenges: z.string().min(5),
  support: z.string().min(3),
  story: z.string().min(10),
  hp_field: z.string().optional(), // honeypot
});

export type ApplyFormValues = z.infer<typeof schema>;

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplyFormValues>({ resolver: zodResolver(schema) as any, defaultValues: { goals: [] } });

  const onSubmit: SubmitHandler<ApplyFormValues> = async (data) => {
    if (data.hp_field) return; // bot
    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div id="apply" className="rounded-2xl glass p-6">
      <h2 className="mb-2 text-2xl font-semibold">Start Your Application</h2>
      <p className="mb-6 text-white/70">Applications are reviewed personally by Kash. Limited spots each month.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" {...register("hp_field")} className="hidden" aria-hidden="true" tabIndex={-1} />

        <Field label="Full Name" error={errors.name?.message}>
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Age" error={errors.age?.message}>
          <input type="number" className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="28" {...register("age", { valueAsNumber: true })} />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Germany" {...register("country")} />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Berlin" {...register("city")} />
        </Field>
        <Field label="Preferred Language" error={errors.language?.message}>
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="English" {...register("language")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="you@example.com" {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone as any}>
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="+49..." {...register("phone")} />
        </Field>
        <Field label="Preferred Contact Method" error={errors.contactMethod?.message}>
          <select className="w-full rounded-md border border-white/10 bg-black/40 p-3" {...register("contactMethod")}>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
            <option value="phone">Phone</option>
          </select>
        </Field>

        <div className="md:col-span-2">
          <div className="mb-2 text-sm text-white/80">Goals (select all that apply) <span className="text-[--color-accent]">{errors.goals?.message}</span></div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              "Weight loss",
              "Muscle gain",
              "Mental health",
              "Life coaching",
              "Injury recovery",
            ].map((g) => (
              <label key={g} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm">
                <input type="checkbox" value={g} {...register("goals")} />
                {g}
              </label>
            ))}
          </div>
        </div>

        <Field label="Current fitness level" error={errors.fitnessLevel?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Beginner / Intermediate / Advanced" {...register("fitnessLevel")} />
        </Field>
        <Field label="Previous experience" error={errors.experience?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Sports, coaching, programs you've tried" {...register("experience")} />
        </Field>
        <Field label="Medical conditions" error={errors.medical?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Injuries, limitations, medications (optional)" {...register("medical")} />
        </Field>
        <Field label="Work schedule" error={errors.workSchedule?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Typical weekly hours" {...register("workSchedule")} />
        </Field>
        <Field label="Family situation" error={errors.family?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="Household responsibilities (optional)" {...register("family")} />
        </Field>
        <Field label="Available time for training" error={errors.availability?.message} className="md:col-span-2">
          <input className="w-full rounded-md border border-white/10 bg-black/40 p-3" placeholder="e.g., 3x/week 45 minutes" {...register("availability")} />
        </Field>
        <Field label="What drives you?" error={errors.motivation?.message} className="md:col-span-2">
          <textarea className="w-full rounded-md border border-white/10 bg-black/40 p-3" rows={3} placeholder="Tell me what motivates you" {...register("motivation")} />
        </Field>
        <Field label="Biggest challenges" error={errors.challenges?.message} className="md:col-span-2">
          <textarea className="w-full rounded-md border border-white/10 bg-black/40 p-3" rows={3} placeholder="What's held you back?" {...register("challenges")} />
        </Field>
        <Field label="Support needs" error={errors.support?.message} className="md:col-span-2">
          <textarea className="w-full rounded-md border border-white/10 bg-black/40 p-3" rows={3} placeholder="What type of accountability do you prefer?" {...register("support")} />
        </Field>
        <Field label="Tell me your story — what brought you here?" error={errors.story?.message} className="md:col-span-2">
          <textarea className="w-full rounded-md border border-white/10 bg-black/40 p-3" rows={5} placeholder="Your story" {...register("story")} />
        </Field>

        <div className="md:col-span-2 mt-2 flex items-center justify-between">
          <div className="text-xs text-white/60">Secure & confidential • You’ll get a confirmation email</div>
          <button type="submit" className="btn-primary btn-neon">{status === "submitting" ? "Submitting..." : "Submit Application"}</button>
        </div>
      </form>

      {status === "success" && (
        <div className="mt-4 rounded-md border border-white/10 bg-white/[0.06] p-4 text-sm text-white/90">
          Application submitted! Check your email for next steps. Thank you! Kash will review your application and contact you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          Something went wrong. Please try again, or email officialkhashayar@gmail.com.
        </div>
      )}
      <div className="mt-6">
        <FAQ />
      </div>
    </div>
  );
}

function Field({ label, error, className, children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <div className="mb-1 text-sm text-white/80">{label}</div>
      {children}
      {error && <div className="mt-1 text-xs text-red-300">{error}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="mb-3 text-sm uppercase tracking-wider text-white/60">Application FAQ</div>
      <details className="group">
        <summary className="cursor-pointer list-none text-white/90">How long until I hear back?</summary>
        <div className="mt-1 text-sm text-white/70">Within 24 hours, often sooner.</div>
      </details>
      <details className="group mt-2">
        <summary className="cursor-pointer list-none text-white/90">What happens after I apply?</summary>
        <div className="mt-1 text-sm text-white/70">Kash personally reviews your application, then emails you to schedule a brief consultation. Custom programs are designed after your consultation.</div>
      </details>
      <details className="group mt-2">
        <summary className="cursor-pointer list-none text-white/90">Are spots limited?</summary>
        <div className="mt-1 text-sm text-white/70">Yes. Limited spots are available each month to protect quality and attention.</div>
      </details>
    </div>
  );
}


