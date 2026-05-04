"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDownloadFile } from "@/src/lib/download-hook";

// ─── Tech Badge ───────────────────────────────────────────────────────────────
type TechBadgeProps = {
  name: string;
  delay?: number;
};

function TechBadge({ name, delay = 0 }: TechBadgeProps) {
  return (
    <span
      className="px-3 py-1 rounded-full border border-white/8 text-white/50 text-xs font-mono tracking-wide hover:border-[#7B61FF]/40 hover:text-white/70 transition-all duration-300 cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  const stack = [
    "React",
    "Next.js 15",
    "TypeScript",
    "Tailwind v4",
    "Node.js",
    "Expo",
    "Figma",
  ];

  const { download } = useDownloadFile();

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.28),transparent_36%),radial-gradient(circle_at_20%_25%,rgba(0,229,255,0.18),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(255,107,186,0.16),transparent_28%),linear-gradient(180deg,#060612_0%,#07081a_42%,#04040c_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 58%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-128 w-lg -translate-x-1/2 rounded-full bg-[#7B61FF]/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#00E5FF]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-[#FF6BBA]/10 blur-[120px]"
      />
      <div className="relative z-10 max-w-4xl mx-auto w-full px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-8">
          {/* Headline */}
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-5xl md:text-2xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              From{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B61FF] via-[#00E5FF] to-[#FF6BBA]">
                IDEA
              </span>{" "}
              to <br className="hidden xl:block" />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B61FF] via-[#00E5FF] to-[#FF6BBA]">
                Interface
              </span>{" "}
              experiences.
            </h1>
          </div>

          {/* Sub-copy */}
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl font-light text-center">
            Full-stack web developer obsessed with turning complex ideas into beautiful,
            performant interfaces — from pixel to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#experience"
              className="group relative px-7 py-2.5 md:py-3.5 rounded-xl text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #7B61FF, #5B3FDE)",
                boxShadow: "0 0 40px rgba(123,97,255,0.3)",
              }}
            >
              <span className="relative z-10">View my work</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Button
              variant="outline"
              size="xl"
              onClick={() => download("/amenx-resume.pdf", "resume.pdf")}
              className="px-7 py-3.5 rounded-xl text-sm font-medium text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2 pt-2 justify-center">
            {stack.map((t, i) => (
              <TechBadge key={t} name={t} delay={i * 60} />
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 pt-4 border-t border-white/5 flex-wrap">
            {[
              { n: "1+", label: "Years exp." },
              { n: "3", label: "Projects shipped" },
              { n: "98%", label: "Client satisfaction" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col text-center">
                <span className="text-2xl font-bold text-white tracking-tight">{n}</span>
                <span className="text-xs text-white/50 font-light">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
