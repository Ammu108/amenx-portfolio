import { SKILLS } from "@/src/lib/constant";

export default function CoreProficiencies() {
  return (
    <section id="skills" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-55"
      />

      <div className="mx-auto w-full max-w-7xl px-4 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-cyan-300">
              Core Proficiencies
            </span>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Skills that ship clean interfaces and scalable products.
            </h2>
            <p className="text-base leading-relaxed text-white/60 md:text-lg">
              My toolkit covers modern frontend development, design systems, and
              practical backend integration to move from idea to production
              quickly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f1f]/70 p-3  md:p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#7B61FF]/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-[#00E5FF]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white">
                      {skill.name}
                    </p>
                    <p className="text-sm leading-relaxed text-white/55">
                      {skill.subtitle}
                    </p>
                  </div>
                  <span className="rounded-xl border border-white/15 bg-white/5 p-2.5">
                    <Icon className={`h-5 w-5 ${skill.color}`} stroke={1.8} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
