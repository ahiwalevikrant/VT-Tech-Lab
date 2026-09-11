"use client";

import { useState } from "react";
import Image from "next/image";
import { profile, clientProjects } from "@/lib/content";

const showcaseModes = [
  { id: "ai", label: "🤖 AI & MCP", fullLabel: "🤖 AI & MCP Skills", color: "purple" },
  { id: "apps", label: "🚀 Client Apps", fullLabel: "🚀 Client Web Apps", color: "cyan" },
  { id: "systems", label: "⚡ GitHub Stack", fullLabel: "⚡ GitHub Systems", color: "indigo" },
];

const aiDemos = [
  {
    tag: "AI Action Plan",
    fullTag: "Business AI Implementation",
    query: "How can my business implement actionable AI without getting lost in hype?",
    model: "Groq LPU // 480 t/s",
    answer:
      "We design step-by-step AI implementation action plans: 1) Audit manual workflows, 2) Connect private data via RAG & ChromaDB, 3) Deploy custom WhatsApp/Telegram customer triage bots, and 4) Upskill your staff for immediate productivity gains.",
  },
  {
    tag: "MCP Skills",
    fullTag: "MCP Skills & Tool Calling",
    query: "Can you build custom Model Context Protocol (MCP) skills for our internal tools?",
    model: "Claude Code // Antigravity Agent",
    answer:
      "Yes! We build and connect MCP servers that empower AI assistants (Claude Code, Google Antigravity, Codex) to safely query private databases, invoke custom business APIs, execute code, and automate repetitive multi-step operations.",
  },
  {
    tag: "Open Models",
    fullTag: "Open Models & High Speed",
    query: "Why choose OpenRouter, Groq, and Ollama over standard closed APIs?",
    model: "Groq LPU + Ollama Local",
    answer:
      "OpenRouter gives multi-model flexibility, Groq delivers sub-second LPUs for real-time customer chatbots, and Ollama provides 100% private, on-premise open weights with zero cloud data leaks and massive cost savings.",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "apps" | "systems">("ai");
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedAiIndex, setSelectedAiIndex] = useState(0);

  const activeProject = clientProjects[selectedClientIndex];
  const activeAiDemo = aiDemos[selectedAiIndex];

  return (
    <section id="top" className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 md:pb-24 pt-4 sm:pt-8 md:pt-12 overflow-hidden">
      {/* Soothing Ambient Neural Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-[300px] sm:h-[480px] w-[300px] sm:w-[480px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px]"></div>
      <div className="pointer-events-none absolute top-36 right-4 sm:right-12 -z-10 h-[280px] sm:h-[420px] w-[280px] sm:w-[420px] rounded-full bg-indigo-500/08 blur-[100px] sm:blur-[140px]"></div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] xl:gap-14 items-center">
        {/* Left Column: Value Proposition & Brand Banner */}
        <div className="flex flex-col justify-center">
          
          {/* Prominent Logo & Robotic Telemetry Banner */}
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-3 sm:gap-5">
            <div className="relative h-16 w-20 sm:h-22 sm:w-26 md:h-26 md:w-30 shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="/VT-tech-lab-icon.png"
                alt="VT Tech Lab Logo"
                width={120}
                height={100}
                className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                priority
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/40 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-mono font-semibold text-sky-300 shadow-[0_0_12px_rgba(14,165,233,0.15)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] animate-pulse"></span>
                <span>VT TECH LAB // AI &amp; SOFTWARE STUDIO</span>
              </div>
              <p className="mt-1 font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                AI-Centric Development &bull; MCP Skills &bull; Cloud Systems
              </p>
            </div>
          </div>

          {/* Bold Eye-Soothing Headline */}
          <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-[3.15rem]">
            We Engineer <span className="text-gradient-vibrant">AI-Centric Systems</span>, <span className="text-gradient-cyan">MCP Workflows</span> &amp; High-Impact Web Apps.
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 max-w-[65ch]">
            Supercharging product delivery with <strong>AI assistant coding</strong> (Claude Code, Google Antigravity, Codex) and <strong>learning by doing</strong>. We build custom MCP skills, guide businesses through practical AI implementation actions, and deploy fast open-model architectures (Groq, OpenRouter, Ollama) with modern UX by Snitch design standards.
          </p>

          {/* Feature Badges Row */}
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium">
            <span className="rounded-lg bg-sky-500/10 border border-sky-500/25 px-2.5 sm:px-3 py-1 text-sky-300 flex items-center gap-1.5">
              <span>⚡</span> Claude Code &amp; Antigravity
            </span>
            <span className="rounded-lg bg-indigo-500/10 border border-indigo-500/25 px-2.5 sm:px-3 py-1 text-indigo-300 flex items-center gap-1.5">
              <span>🔌</span> Model Context Protocol (MCP)
            </span>
            <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/25 px-2.5 sm:px-3 py-1 text-emerald-300 flex items-center gap-1.5">
              <span>🚀</span> Groq, OpenRouter &amp; Ollama
            </span>
            <span className="rounded-lg bg-slate-800/80 border border-slate-700/60 px-2.5 sm:px-3 py-1 text-slate-300 flex items-center gap-1.5">
              <span>🎨</span> UX by Snitch &amp; Next.js 16
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-105 text-center"
            >
              <span>🚀 Start AI Project / Consultation</span>
              <span className="text-xs font-mono">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/20 bg-slate-900/60 px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-sky-200 text-center"
            >
              <span>Explore Client &amp; GitHub Work</span>
            </a>
          </div>

          {/* Trust Highlights & Telemetry Metrics */}
          <div className="mt-6 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-800/80 pt-4 sm:pt-6">
            <div className="border-r border-slate-800/80 pr-1 sm:pr-3">
              <span className="text-lg sm:text-2xl md:text-3xl font-black text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                10x
              </span>
              <p className="mt-0.5 font-mono text-[10px] sm:text-xs font-medium text-slate-400">AI CODING SPEED</p>
            </div>
            <div className="border-r border-slate-800/80 pr-1 sm:pr-3">
              <span className="text-lg sm:text-2xl md:text-3xl font-black text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.3)]">
                MCP &amp; RAG
              </span>
              <p className="mt-0.5 font-mono text-[10px] sm:text-xs font-medium text-slate-400">AGENT WORKFLOWS</p>
            </div>
            <div>
              <span className="text-lg sm:text-2xl md:text-3xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                Actionable
              </span>
              <p className="mt-0.5 font-mono text-[10px] sm:text-xs font-medium text-slate-400">BUSINESS ROADMAPS</p>
            </div>
          </div>
        </div>

        {/* Right Column: Robotic AI Cockpit */}
        <div className="flex flex-col justify-center">
          <div className="glass-card relative overflow-hidden p-4 sm:p-6 md:p-7 shadow-2xl">
            {/* Top Bar with HUD Telemetry */}
            <div className="flex items-center justify-between border-b border-sky-500/15 pb-3 sm:pb-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Image
                  src="/VT-tech-lab-transparent.png"
                  alt="VT"
                  width={28}
                  height={28}
                  className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider">
                  VT_AI_COCKPIT // RUNTIME
                </span>
              </div>
              <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 shadow-[0_0_8px_rgba(16,185,129,0.15)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            {/* Showcase Tabs */}
            <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-1 sm:gap-2 rounded-lg bg-slate-950/80 p-1 sm:p-1.5 border border-slate-800">
              {showcaseModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id as any)}
                  className={`rounded-md py-1.5 sm:py-2 px-1 text-[10px] sm:text-xs font-mono font-semibold text-center transition-all duration-200 truncate ${
                    activeTab === mode.id
                      ? "bg-sky-500/20 border border-sky-400/40 text-sky-200 shadow-[0_0_12px_rgba(14,165,233,0.2)]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="sm:hidden">{mode.label}</span>
                  <span className="hidden sm:inline">{mode.fullLabel}</span>
                </button>
              ))}
            </div>

            {/* TAB 1: AI, MCP & Models */}
            {activeTab === "ai" && (
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                <div className="glass-panel p-3.5 sm:p-5">
                  <div className="flex items-center justify-between border-b border-sky-500/15 pb-2.5 sm:pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-md bg-indigo-500/20 border border-indigo-400/30 text-[10px] sm:text-[11px] font-mono font-bold text-indigo-300">
                        AI
                      </div>
                      <span className="text-xs font-semibold text-slate-200">
                        {activeAiDemo.fullTag}
                      </span>
                    </div>
                    <span className="rounded bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-indigo-300">
                      {activeAiDemo.model}
                    </span>
                  </div>

                  {/* Interactive AI Query Selector */}
                  <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {aiDemos.map((demo, idx) => (
                      <button
                        key={demo.tag}
                        onClick={() => setSelectedAiIndex(idx)}
                        className={`rounded-md px-2 sm:px-2.5 py-1 text-[10px] font-mono font-medium transition-all whitespace-nowrap ${
                          selectedAiIndex === idx
                            ? "bg-sky-500/20 border border-sky-400/50 text-sky-200 shadow-[0_0_8px_rgba(14,165,233,0.2)]"
                            : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {demo.tag}
                      </button>
                    ))}
                  </div>

                  {/* Query Preview */}
                  <div className="mt-3 space-y-2.5 sm:space-y-3 font-sans text-xs">
                    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 sm:p-3">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-sky-400 tracking-wider">
                        // QUERY INPUT:
                      </span>
                      <p className="mt-1 font-medium text-slate-200 text-xs sm:text-sm">&quot;{activeAiDemo.query}&quot;</p>
                    </div>

                    <div className="rounded-lg border border-indigo-500/25 bg-indigo-950/20 p-3 sm:p-3.5 shadow-[0_0_15px_rgba(99,102,241,0.08)]">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono font-semibold text-indigo-300">
                        <span>// ACTIONABLE AI BLUEPRINT:</span>
                        <span className="text-emerald-400 font-bold">READY</span>
                      </div>
                      <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-slate-200">
                        {activeAiDemo.answer}
                      </p>
                    </div>
                  </div>

                  {/* Tooling Tags */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                    {["Claude Code", "Google Antigravity", "Codex", "MCP Skills", "Groq LPU", "Ollama", "OpenRouter"].map((t) => (
                      <span
                        key={t}
                        className="rounded border border-slate-800 bg-slate-900/90 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono text-sky-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Live Client Apps */}
            {activeTab === "apps" && (
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    // SELECT CLIENT BUILD:
                  </span>
                  <div className="flex gap-1.5 sm:gap-2">
                    {clientProjects.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedClientIndex(idx)}
                        className={`rounded-md px-2.5 sm:px-3 py-1 font-mono text-xs font-bold transition-all ${
                          selectedClientIndex === idx
                            ? "bg-sky-500/20 border border-sky-400 text-sky-200 shadow-[0_0_8px_rgba(14,165,233,0.3)]"
                            : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Card */}
                <div className="glass-panel p-3.5 sm:p-5 transition-all">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block rounded bg-sky-500/10 border border-sky-500/25 px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-sky-300">
                        {activeProject.category}
                      </span>
                      <h3 className="mt-1.5 sm:mt-2 text-sm sm:text-base md:text-lg font-bold text-slate-100">
                        {activeProject.name}
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-indigo-300">
                        Client: {activeProject.client}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-slate-300">
                    {activeProject.summary}
                  </p>

                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                    {activeProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-sky-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-t border-slate-800 pt-3 sm:pt-4">
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      {activeProject.highlight}
                    </span>
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                    >
                      <span>Live Site</span>
                      <span className="font-mono">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: GitHub & Systems */}
            {activeTab === "systems" && (
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                <div className="glass-panel p-3.5 sm:p-5">
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-sky-300">
                    // FEATURED GITHUB &amp; SYSTEMS
                  </h4>
                  <p className="mt-1 text-[10px] sm:text-xs text-slate-300">
                    Production engines with AI biometrics, Groq LPUs, and enterprise microservices.
                  </p>

                  <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3 text-xs">
                    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2 sm:p-3">
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-sky-400 uppercase">Biometrics &amp; Java</span>
                      <p className="mt-0.5 font-bold text-slate-100 text-[11px] sm:text-sm">HabitProof Engine</p>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">ArcFace + Spring Boot</span>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2 sm:p-3">
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-indigo-400 uppercase">AI Job Kanban</span>
                      <p className="mt-0.5 font-bold text-slate-100 text-[11px] sm:text-sm">AI Job Tracker</p>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">Groq + OpenRouter</span>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2 sm:p-3">
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-sky-400 uppercase">Telegram AI Tutor</span>
                      <p className="mt-0.5 font-bold text-slate-100 text-[11px] sm:text-sm">CBSE-Bot (RAG)</p>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">ChromaDB + LangChain</span>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2 sm:p-3">
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-emerald-400 uppercase">Event Streaming</span>
                      <p className="mt-0.5 font-bold text-slate-100 text-[11px] sm:text-sm">Kafka Microservices</p>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">Java 21 + Ollama</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Telemetry Trust Bar */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-1.5 font-mono text-[10px] sm:text-xs font-medium text-slate-400 border-t border-slate-800/60 pt-2.5">
              <span className="flex items-center gap-1.5 text-sky-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38BDF8]"></span>
                Learning by Doing &bull; Direct Founder Delivery
              </span>
              <span className="text-slate-500">[ MILESTONE_SCOPED ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



