const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Mangalmay Institute Of Management & Technology, Greater Noida",
    duration: "Aug 2023 - Present",
    detail:
      "Focused on software fundamentals, frontend engineering, and practical product development.",
    status: "Current",
  },
  {
    degree: "XII (CBSE)",
    institute: "Dayanand Vidya Mandir, G B Nagar - UP",
    duration: "Aug 2021 - May 2023",
    detail: "Scored 91% with a strong base in core analytical subjects.",
    status: "91%",
  },
];

const highlights = [
  "Frontend-focused BCA student building production-ready web interfaces.",
  "Hands-on with React, Next.js, JavaScript, Tailwind CSS, and Figma.",
  "Work experience delivering a responsive hospital management frontend.",
  "Strong interest in UI/UX systems and clean, scalable component design.",
];

export default function AboutSection() {
  return (
    <section id="education" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl px-4 grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-cyan-300">
              About + Academics
            </span>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Building modern products while pursuing a strong academic track.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              I am Aman Kumar, a frontend-focused developer while backend still
              learning. currently pursuing BCA in Greater Noida. I enjoy
              translating ideas into polished interfaces with fast performance,
              clear structure, and thoughtful user experience.
            </p>
          </div>

          <div className="space-y-5">
            {education.map((item) => (
              <article
                key={item.degree}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/5"
              >
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wide text-cyan-200">
                    {item.status}
                  </span>
                </div>
                <p className="relative z-10 mt-2 text-sm text-cyan-200/90">
                  {item.institute}
                </p>
                <p className="relative z-10 mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                  {item.duration}
                </p>
                <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/65">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d1c]/80 p-7 shadow-2xl shadow-[#7B61FF]/10">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#7B61FF]/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#00E5FF]/15 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/45">
                Profile Snapshot
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Aman Kumar
              </h3>
              <p className="mt-1 text-sm text-[#00E5FF]">
                Frontend Developer | React.js Specialist
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/2 p-5">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                  <p className="text-sm leading-relaxed text-white/70">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                  Current Program
                </p>
                <p className="mt-2 text-sm font-medium text-white">BCA</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                  Class XII
                </p>
                <p className="mt-2 text-sm font-medium text-white">91%</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
