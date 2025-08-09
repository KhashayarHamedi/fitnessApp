export default function Home() {
  return (
    <main>
      <section className="container min-h-screen grid place-items-center">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
            Premium Coaching
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            Fit Mit Kash
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/70">
            Elite strength and conditioning with minimalist structure. Built for
            clarity, consistency, and results.
          </p>
          <div className="flex items-center gap-3">
            <a href="#apply" className="btn-primary">
              Apply for Coaching
            </a>
            <a href="#programs" className="btn-ghost">
              View Programs
            </a>
          </div>
        </div>
      </section>

      <section id="programs" className="container py-24 border-t border-white/10">
        <div className="grid gap-8 md:grid-cols-3">
          {["Strength", "Mobility", "Nutrition"].map((title) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-white/70 text-sm">
                Structured blocks with progressive overload, clear cues, and
                weekly accountability.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="container py-24 border-t border-white/10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Apply for Coaching</h2>
          <p className="text-white/70 mb-6">
            Limited 1:1 spots. Tell me about your goals, training history, and
            constraints. I’ll reply within 24–48h.
          </p>
          <a href="mailto:coach@fitmitkash.com" className="btn-primary">
            coach@fitmitkash.com
          </a>
        </div>
      </section>
    </main>
  );
}
