"use client";

import { stats } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 dark:border-cyan-500/30 bg-sky-50/80 dark:bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-sky-800 dark:text-cyan-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-sky-500 dark:bg-cyan-400 animate-pulse"></span>
          <span>AI Agents &bull; MCP Tooling &bull; Next.js 16</span>
        </div>

        {/* Hero Title */}
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
          Engineering intelligent <span className="text-gradient-cyan">AI systems</span> &amp; high-velocity <span className="text-gradient-emerald">web products</span>.
        </h1>

        {/* Minimal Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          We architect autonomous AI workflows, custom Model Context Protocol (MCP) agents, and modern full-stack web platforms at 10x engineering velocity.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold shadow-lg min-h-[48px]"
          >
            <span>Start a Project</span>
            <span>→</span>
          </a>
          <a
            href="#work"
            className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold min-h-[48px] dark:border-white/15"
          >
            <span>View Client Work</span>
          </a>
        </div>

        {/* Minimal Stats Strip */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-y border-slate-200/80 dark:border-white/[0.08] py-6 sm:py-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



