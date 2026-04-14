"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDownloadFile } from "@/lib/download-hook";

// ─── Code Snippet Decoration ─────────────────────────────────────────────────
function CodeCard() {
  const lines = [
    {
      indent: 0,
      tokens: [
        { t: "const", c: "#7B61FF" },
        { t: " developer = {", c: "#e2e8f0" },
      ],
    },
    {
      indent: 1,
      tokens: [
        { t: "name:", c: "#00E5FF" },
        { t: " 'AmenX',", c: "#a78bfa" },
      ],
    },
    {
      indent: 1,
      tokens: [
        { t: "passion:", c: "#00E5FF" },
        { t: " 'Turning Ideas into Reality',", c: "#a78bfa" },
      ],
    },
    {
      indent: 1,
      tokens: [
        { t: "stack:", c: "#00E5FF" },
        { t: " [", c: "#e2e8f0" },
        { t: "'React'", c: "#a78bfa" },
        { t: ", ", c: "#e2e8f0" },
        { t: "'NextJs'", c: "#a78bfa" },
        { t: "],", c: "#e2e8f0" },
      ],
    },
    {
      indent: 1,
      tokens: [
        { t: "available:", c: "#00E5FF" },
        { t: " ", c: "#e2e8f0" },
        { t: "true", c: "#FF6BBA" },
      ],
    },
    { indent: 0, tokens: [{ t: "}", c: "#e2e8f0" }] },
  ];

  return (
    <div className="relative w-full max-w-sm">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-[#7B61FF]/10 rounded-3xl blur-2xl" />

      <div className="relative bg-[#0D0D1F] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-white/20 text-xs font-mono">
            developer.js
          </span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-sm leading-7">
          {lines.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: tok.c }}>
                  {tok.t}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Blinking cursor */}
        <div className="px-5 pb-4 font-mono text-sm">
          <span className="text-[#7B61FF] animate-pulse">▌</span>
        </div>
      </div>
    </div>
  );
}

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Expo",
    "Figma",
  ];

  const { download } = useDownloadFile();

  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center justify-between min-h-[calc(100vh-80px)]">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-8">
            {/* Status pill */}
            <div className="flex items-center gap-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
              </span>
              <span className="text-[#00E5FF] text-xs font-mono tracking-widest uppercase">
                Open to opportunities
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
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
            <p className="text-white/50 text-lg leading-relaxed max-w-md font-light">
              Full-stack web developer obsessed with turning complex ideas into
              beautiful, performant interfaces — from pixel to production.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
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
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((t, i) => (
                <TechBadge key={t} name={t} delay={i * 60} />
              ))}
            </div>

            {/* Stats row */}
            <div
              className="flex items-center gap-8 pt-4 border-t border-white/5"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 0.5s",
              }}
            >
              {[
                { n: "1+", label: "Years exp." },
                { n: "3", label: "Projects shipped" },
                { n: "98%", label: "Client satisfaction" },
              ].map(({ n, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {n}
                  </span>
                  <span className="text-xs text-white/50 font-light">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-8">
            <CodeCard />

            {/* Floating accent badges */}
            <div className="flex items-center gap-3">
              {["TypeScript", "Next.js 15", "Tailwind v4"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-[#0D0D1F] border border-white/8 text-white/50 text-xs font-mono hover:border-[#7B61FF]/40 hover:text-white/80 transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
