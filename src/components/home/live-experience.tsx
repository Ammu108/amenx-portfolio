"use client";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function LiveExperience() {
  return (
    <div
      id="experience"
      className="relative isolate overflow-hidden text-white"
    >
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
          backgroundSize: "70px 70px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3 sm:mb-4">
                CURRENT PROFESSIONAL STATUS
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Live Experience
              </h2>
            </div>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="relative">
          {/* Main terminal container */}
          <div className="relative rounded-2xl bg-[#0d0f1f]/70 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl shadow-[#7B61FF]/10">
            {/* Terminal Header */}
            <div className="bg-white/3 border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-mono hidden sm:block">
                ROOT@AMENX:~/CURRENT_ENGAGEMENT
              </div>
              <div className="w-14"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Company Info */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Company Badge and Name */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Icon */}
                    <div className="relative shrink-0 aspect-square w-18 md:w-24 flex items-center justify-center">
                      <Image
                        src="/earnex-icon.png"
                        alt="company-icon"
                        fill
                        className="object-contain relative"
                      />
                    </div>

                    {/* Company Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-3xl md:text-3xl font-bold text-white sm:mb-1 wrap-break-word">
                        Earnex Rewards
                      </h3>
                      <p className="text-[#00E5FF] text-sm sm:text-base md:text-lg font-mono">
                        Frontend Developer
                      </p>
                      <Link
                        href="https://www.earnexrewards.com"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-mono underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.earnexrewards.com
                      </Link>
                    </div>
                  </div>

                  {/* Instance Details */}
                  <div className="bg-white/3 rounded-xl border border-white/10 p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm text-white/50 font-mono tracking-wider uppercase">
                        INSTANCE DETAILS
                      </h4>
                      <div className="flex items-center gap-2 bg-[#00E5FF]/10 px-2 sm:px-3 py-1 rounded-md border border-[#00E5FF]/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
                        </span>
                        <span className="text-[#00E5FF] text-[10px] sm:text-xs font-mono font-semibold">
                          LIVE
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {/* Duration */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                        <span className="text-white/50 text-xs sm:text-sm">
                          Duration
                        </span>
                        <span className="text-white/80 text-sm sm:text-base font-mono">
                          June 2025 — Present
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-white/10"></div>

                      {/* Environment */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                        <span className="text-white/50 text-xs sm:text-sm">
                          Environment
                        </span>
                        <span className="text-white/80 text-sm sm:text-base font-mono">
                          Startup SaaS
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-white/10"></div>

                      {/* Tech Stack */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <span className="text-white/50 text-xs sm:text-sm shrink-0">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                          <span className="text-[#a78bfa] text-xs sm:text-sm font-mono bg-[#7B61FF]/10 px-2 py-1 rounded border border-[#7B61FF]/20">
                            React Native
                          </span>
                          <span className="text-[#a78bfa] text-xs sm:text-sm font-mono bg-[#7B61FF]/10 px-2 py-1 rounded border border-[#7B61FF]/20">
                            Next.Js
                          </span>
                          <span className="text-[#a78bfa] text-xs sm:text-sm font-mono bg-[#7B61FF]/10 px-2 py-1 rounded border border-[#7B61FF]/20">
                            PostgreSQL
                          </span>
                          <span className="text-[#a78bfa] text-xs sm:text-sm font-mono bg-[#7B61FF]/10 px-2 py-1 rounded border border-[#7B61FF]/20">
                            Expo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Responsibilities */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-2 h-2 bg-[#00E5FF] rounded-full"></div>
                    <h4 className="text-xs sm:text-sm text-[#00E5FF] font-mono tracking-wider uppercase">
                      KEY RESPONSIBILITIES & IMPACT METRICS
                    </h4>
                  </div>

                  {/* Responsibility Items */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Item 1 */}
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center mt-0.5">
                        <IconCheck className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                          Architecting and developing the core frontend platform
                          powering Earnex Rewards ecosystem.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center mt-0.5">
                        <IconCheck className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                          Built scalable UI architecture using Next.js App
                          Router with performance-first rendering strategies
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center mt-0.5">
                        <IconCheck className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                          Collaborating directly with product and backend teams
                          in a fast-iteration startup environment.
                        </p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center mt-0.5">
                        <IconCheck className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                          Reduced page load time by{" "}
                          <span className="text-[#00E5FF] font-bold">~45%</span>{" "}
                          through code splitting, optimized assets, and caching
                          strategies.
                        </p>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center mt-0.5">
                        <IconCheck className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                          Shipping production features end-to-end from design to
                          deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-white/3 border-t border-white/10 px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between text-xs font-mono">
              <div className="text-white/50 flex items-center gap-2 sm:gap-4">
                <span className="hidden sm:inline">L: 52</span>
                <span className="hidden sm:inline">C: 128</span>
                <span className="hidden sm:inline">UTF-8</span>
              </div>
              <div className="text-[#00E5FF] text-[10px] sm:text-xs">
                process_finished_with_exit_code_0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
