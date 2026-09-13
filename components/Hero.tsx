"use client";

import { useState } from "react";
import Image from "next/image";
import { profile, clientProjects } from "@/lib/content";

const showcaseModes = [
  { id: "ai", label: "AI & MCP Engine", icon: "✨" },
  { id: "apps", label: "Client Production", icon: "🚀" },
  { id: "systems", label: "GitHub Systems", icon: "⚡" },
];

const aiCapabilities = [
  {
    title: "AI Assistant Coding",
    tool: "Claude Code • Antigravity • Codex",
    detail: "10x engineering velocity with automated agentic coding loops and rapid learning-by-doing sprints.",
    badge: "10x Velocity",
    badgeColor: "text-sky-700 dark:text-cyan-400 bg-sky-50 dark:bg-cyan-500/10 border-sky-200 dark:border-cyan-500/20",
  },
  {
    title: "Model Context Protocol (MCP)",
    tool: "Custom MCP Tool Servers",
    detail: "Bridging autonomous AI assistants to private enterprise databases, APIs, and custom tools.",
    badge: "Tool Calling",
    badgeColor: "text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
  },
  {
    title: "High-Speed Open Models",
    tool: "Groq (500 t/s) • OpenRouter • Ollama",
    detail: "Sub-second Groq inference, smart multi-model routing, and local zero-leak Ollama weights.",
    badge: "Sub-Second LPU",
    badgeColor: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
  },
  {
    title: "Actionable AI Blueprints",
    tool: "Discovery to Team Handover",
    detail: "Empowering businesses with custom AI workflow automation, RAG knowledge bases, and team training.",
    badge: "Action Blueprint",
    badgeColor: "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "apps" | "systems">("ai");
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const activeProject = clientProjects[selectedClientIndex];

  return (
    <section id="top" className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 md:pt-28 pb-20 sm:pb-32">
      {/* Hero Header Block */}
      <div className="mx-auto max-w-5xl text-center">
        {/* Subtle Announcement Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-300 dark:border-cyan-500/30 bg-sky-50 dark:bg-cyan-500/10 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-sky-800 dark:text-cyan-300 shadow-[0_2px_14px_rgba(2,132,199,0.12)] dark:shadow-[0_0_30px_rgba(0,240,255,0.25)] backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-pulse"></span>
          <span>AI-Centric Development &bull; MCP Skills &bull; High-Velocity Web</span>
        </div>

        {/* Hero Title */}
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.04]">
          Engineering intelligent <span className="text-gradient-cyan">AI systems</span> &amp; high-velocity <span className="text-gradient-emerald">web products</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-200 leading-snug max-w-4xl mx-auto font-normal">
          We combine <strong className="text-slate-900 dark:text-white font-bold">AI assistant coding</strong> (Claude Code, Antigravity, Codex) with full-stack mastery. Fast <em className="text-slate-800 dark:text-slate-200">&quot;learning by doing&quot;</em> MVPs, custom <strong className="text-slate-900 dark:text-white font-bold">MCP agent tools</strong>, and actionable <strong className="text-slate-900 dark:text-white font-bold">business AI roadmaps</strong>.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 text-base sm:text-lg font-bold shadow-xl min-h-[52px]"
          >
            <span>Start a Project with VT Tech Lab</span>
            <span>→</span>
          </a>
          <a
            href="#work"
            className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 text-base sm:text-lg font-semibold min-h-[52px] dark:border-white/15"
          >
            <span>View Client Case Studies</span>
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-y border-slate-200 dark:border-white/[0.08] py-8 sm:py-12 text-left">
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight">4+ Years</div>
            <div className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-bold tracking-wide uppercase">Tech Track Record</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-600 dark:text-cyan-400 tracking-tight">100%</div>
            <div className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-bold tracking-wide uppercase">Milestone Delivery</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">&lt; 4 Hours</div>
            <div className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-bold tracking-wide uppercase">Direct Response</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">End-to-End</div>
            <div className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-bold tracking-wide uppercase">Full-Stack &amp; AI</div>
          </div>
        </div>
      </div>

      {/* Interactive Studio Showcase */}
      <div className="mt-16 sm:mt-24 mx-auto max-w-5xl">
        <div className="studio-card p-6 sm:p-10 md:p-12">
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.08] pb-6">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-wider">
                Interactive Showcase
              </span>
              <h3 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Live Capabilities &amp; Stack
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 rounded-full bg-slate-100/90 dark:bg-white/[0.04] p-1.5 border border-slate-200/80 dark:border-white/[0.08] self-start sm:self-auto">
              {showcaseModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id as any)}
                  className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                    activeTab === mode.id
                      ? "bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-[0_2px_12px_rgba(2,132,199,0.3)] dark:shadow-[0_0_20px_rgba(0,240,255,0.45)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  <span className="mr-1.5">{mode.icon}</span>
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: AI & MCP Capabilities */}
          {activeTab === "ai" && (
            <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
              {aiCapabilities.map((item, i) => (
                <div
                  key={item.title}
                  className="studio-panel p-6 sm:p-8 transition-all hover:border-sky-400/50 dark:hover:border-cyan-500/40"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`badge-pill border text-xs sm:text-sm font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold">0{i + 1}</span>
                  </div>
                  <h4 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm font-mono text-sky-700 dark:text-cyan-300 font-semibold">
                    {item.tool}
                  </p>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: Live Client Apps */}
          {activeTab === "apps" && (
            <div className="mt-8 sm:mt-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                  Select Production Client Project:
                </span>
                <div className="flex gap-2.5">
                  {clientProjects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedClientIndex(idx)}
                      className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                        selectedClientIndex === idx
                          ? "bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md dark:shadow-[0_0_14px_rgba(0,240,255,0.35)]"
                          : "bg-white dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]"
                      }`}
                    >
                      {p.name.split("—")[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="studio-panel p-7 sm:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="badge-pill bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm font-semibold">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                        Live in Production
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                        {activeProject.category}
                      </span>
                    </div>
                    <h4 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                      {activeProject.name}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-sky-700 dark:text-cyan-300 font-mono">
                      Client: {activeProject.client}
                    </p>
                    <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-2xl">
                      {activeProject.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {activeProject.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-3.5 py-1 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-200 font-medium shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-3 pt-5 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-white/[0.08]">
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary rounded-full px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-lg min-h-[46px]"
                    >
                      <span>Launch App</span>
                      <span>↗</span>
                    </a>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                      {activeProject.linkLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GitHub Open Systems */}
          {activeTab === "systems" && (
            <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2">
              <div className="studio-panel p-6 sm:p-8">
                <span className="text-xs sm:text-sm font-mono font-bold text-sky-700 dark:text-cyan-400 uppercase tracking-wide">
                  Biometric Facial Proof Engine
                </span>
                <h4 className="mt-3 text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                  HabitProof Engine
                </h4>
                <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  ArcFace AI biometrics with Java 21 Spring Boot and MinIO containerized snapshots for habit verification.
                </p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">Spring Boot + Next.js</span>
                  <a
                    href="https://github.com/ahiwalevikrant/Habit-Proof"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-sky-600 dark:text-cyan-300 hover:text-sky-800 dark:hover:underline inline-flex items-center gap-1.5"
                  >
                    View Repo ↗
                  </a>
                </div>
              </div>

              <div className="studio-panel p-6 sm:p-8">
                <span className="text-xs sm:text-sm font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide">
                  Groq &amp; OpenRouter Intelligence
                </span>
                <h4 className="mt-3 text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                  AI Job Application Tracker
                </h4>
                <p className="mt-2.5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Local-first Kanban dashboard with sub-second Groq resume analysis and OpenRouter cover letter generation.
                </p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">React 19 + Groq API</span>
                  <a
                    href="https://github.com/ahiwalevikrant/ai-job-application-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:underline inline-flex items-center gap-1.5"
                  >
                    View Repo ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



