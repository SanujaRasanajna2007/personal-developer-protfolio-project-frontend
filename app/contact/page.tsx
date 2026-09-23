import ContactSection from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-surface pt-24 pb-16 text-[#dfe2ee]">
      <div className="mx-auto max-w-300 px-4 md:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-block rounded-full border border-white/10 bg-surface-container px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#4cd7f6]">
            // 03. GET IN TOUCH
          </div>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#dfe2ee] sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-[#4cd7f6]">together</span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-sm text-[#8e9ca0]">
            Have an internship opportunity, software project, or technical
            question? Reach out directly or dispatch a message below.
          </p>
        </div>

        <ContactSection />

        <div className="pt-10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold">
              // COMMON PROTOCOLS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#dfe2ee]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-5 shadow-lg space-y-2">
              <h3 className="font-heading text-sm font-bold text-[#dfe2ee]">
                What is your current availability?
              </h3>
              <p className="text-xs text-[#8e9ca0] leading-relaxed">
                Actively exploring 3-to-6-month internships and junior
                engineering placements. Flexible on start dates.
              </p>
            </div>

            <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-5 shadow-lg space-y-2">
              <h3 className="font-heading text-sm font-bold text-[#dfe2ee]">
                Do you work across timezones?
              </h3>
              <p className="text-xs text-[#8e9ca0] leading-relaxed">
                Yes. I adapt 4-5 hours of daily live overlap with US East Coast,
                European Central Time, and Australian standard hours.
              </p>
            </div>

            <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-5 shadow-lg space-y-2">
              <h3 className="font-heading text-sm font-bold text-[#dfe2ee]">
                What is your core tech stack?
              </h3>
              <p className="text-xs text-[#8e9ca0] leading-relaxed">
                TypeScript, Next.js, Python, Flask, Supabase PostgreSQL, Docker,
                and modern web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
