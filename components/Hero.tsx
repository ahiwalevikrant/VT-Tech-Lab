"use client";

import { useState } from "react";
import Image from "next/image";
import { profile, clientProjects } from "@/lib/content";

const showcaseModes = [
  { id: "ai", label: "🤖 AI, MCP & Models", color: "purple" },
  { id: "apps", label: "🚀 Client Web Apps", color: "cyan" },
  { id: "systems", label: "⚡ GitHub & Architecture", color: "indigo" },
];

const aiDemos = [
  {
    tag: "Business AI Implementation",
    query: "How can my business implement actionable AI without getting lost in hype?",
    model: "Groq (Llama 3 70B • 480 tokens/sec)",
    answer:
      "We design step-by-step AI implementation action plans: 1) Audit manual workflows, 2) Connect private data via RAG & ChromaDB, 3) Deploy custom WhatsApp/Telegram customer triage bots, and 4) Upskill your staff for immediate productivity gains.",
  },
  {
    tag: "MCP Skills & Tool Calling",
    query: "Can you build custom Model Context Protocol (MCP) skills for our internal tools?",
    model: "Claude Code / Antigravity Agent MCP",
    answer:
      "Yes! We build and connect MCP servers that empower AI assistants (Claude Code, Google Antigravity, Codex) to safely query private databases, invoke custom business APIs, execute code, and automate repetitive multi-step operations.",
  },
  {
    tag: "Open Models & High Speed",
    query: "Why choose OpenRouter, Groq, and Ollama over standard closed APIs?",
    model: "OpenRouter & Ollama Local",
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
    <section id="top" className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-6 sm:pt-12 md:pt-16">
      {/* Vibrant Ambient Glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 -z-10 h-[350px] sm:h-[550px] w-[350px] sm:w-[550px] rounded-full bg-cyan-500/20 blur-[110px] sm:blur-[140px]"></div>
      <div className="pointer-events-none absolute top-40 right-4 sm:right-10 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-purple-600/20 blur-[110px] sm:blur-[140px]"></div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] xl:gap-14 items-center">
        {/* Left Column: Bold Value Proposition & Brand Banner */}
        <div className="flex flex-col justify-center">
          
          {/* Prominent Logo & Brand Banner */}
          <div className="mb-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="relative h-20 w-24 sm:h-24 sm:w-28 md:h-28 md:w-32 shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="/VT-tech-lab-icon.png"
                alt="VT Tech Lab Big Logo"
                width={128}
                height={110}
                className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.9)]"
                priority
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-4 py-1.5 text-xs font-extrabold text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] animate-pulse"></span>
                <span>VT TECH LAB &bull; AI & SOFTWARE STUDIO</span>
              </div>
              <p className="mt-1.5 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-200 uppercase">
                AI-Centric Development &bull; MCP &bull; Cloud Engineering
              </p>
            </div>
          </div>

          {/* Bold Vibrant Headline */}
          <h1 className="text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-[3.25rem]">
            We Engineer <span className="text-gradient-vibrant">AI-Centric Systems</span>, <span className="text-gradient-cyan">MCP Workflows</span> & High-Impact Web Apps.
          </h1>

          {/* Subtitle with key requested points */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-[65ch]">
            Supercharging product delivery with <strong>AI assistant coding</strong> (Claude Code, Google Antigravity, Codex) and <strong>learning by doing</strong>. We build custom MCP skills, guide businesses through practical AI implementation actions, and deploy fast open-model architectures (Groq, OpenRouter, Ollama) with modern UX by Snitch design standards.
          </p>

          {/* Feature Badges Row */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-cyan-300 flex items-center gap-1.5">
              <span>⚡</span> Claude Code & Antigravity
            </span>
            <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-purple-300 flex items-center gap-1.5">
              <span>🔌</span> Model Context Protocol (MCP)
            </span>
            <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-emerald-300 flex items-center gap-1.5">
              <span>🚀</span> Groq, OpenRouter & Ollama
            </span>
            <span className="rounded-full bg-pink-500/15 border border-pink-500/30 px-3 py-1 text-pink-300 flex items-center gap-1.5">
              <span>🎨</span> UX by Snitch & Next.js 16
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="glow-btn inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-105"
            >
              <span>🚀 Start AI Project / Consultation</span>
              <span className="text-xs">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <span>Explore Client & GitHub Work</span>
            </a>
          </div>

          {/* Trust Highlights & Metrics */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4 border-t border-white/10 pt-6">
            <div className="border-r border-white/10 pr-2 sm:pr-3">
              <span className="text-xl sm:text-3xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                10x
              </span>
              <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-slate-300">AI Coding Velocity</p>
            </div>
            <div className="border-r border-white/10 pr-2 sm:pr-3">
              <span className="text-xl sm:text-3xl font-black text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                MCP & RAG
              </span>
              <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-slate-300">Agent Integrations</p>
            </div>
            <div>
              <span className="text-xl sm:text-3xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                Actionable
              </span>
              <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-slate-300">Business AI Roadmaps</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Showcase Cockpit */}
        <div className="flex flex-col justify-center">
          <div className="glass-card relative overflow-hidden p-5 sm:p-7 shadow-2xl">
            {/* Top Bar with Branding */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/VT-tech-lab-transparent.png"
                  alt="VT"
                  width={32}
                  height={32}
                  className="drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]"
                />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  VT TECH LAB AI COCKPIT
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE LAB ONLINE
              </span>
            </div>

            {/* Showcase Tabs */}
            <div className="mt-5 grid grid-cols-3 gap-1.5 sm:gap-2 rounded-xl bg-slate-950/70 p-1.5 border border-white/10">
              {showcaseModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id as any)}
                  className={`rounded-lg py-2 px-1 text-[11px] sm:text-xs font-bold text-center transition-all duration-200 ${
                    activeTab === mode.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            {/* TAB 1: AI, MCP & Models */}
            {activeTab === "ai" && (
              <div className="mt-5 space-y-4">
                <div className="glass-panel p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-[11px] font-bold text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        AI
                      </div>
                      <span className="text-xs font-bold text-white">
                        {activeAiDemo.tag}
                      </span>
                    </div>
                    <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-300">
                      {activeAiDemo.model}
                    </span>
                  </div>

                  {/* Interactive AI Query Selector */}
                  <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
                    {aiDemos.map((demo, idx) => (
                      <button
                        key={demo.tag}
                        onClick={() => setSelectedAiIndex(idx)}
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold transition-all whitespace-nowrap ${
                          selectedAiIndex === idx
                            ? "bg-purple-500/30 border border-purple-400 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                            : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {demo.tag}
                      </button>
                    ))}
                  </div>

                  {/* Query Preview */}
                  <div className="mt-3 space-y-3 font-sans text-xs">
                    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3">
                      <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">
                        Business / Engineering Need:
                      </span>
                      <p className="mt-1 font-medium text-white">&quot;{activeAiDemo.query}&quot;</p>
                    </div>

                    <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-3.5 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                      <div className="flex items-center justify-between text-[10px] font-bold text-purple-300">
                        <span>ACTIONABLE AI BLUEPRINT:</span>
                        <span className="text-emerald-400">PROVEN ROI</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-100">
                        {activeAiDemo.answer}
                      </p>
                    </div>
                  </div>

                  {/* Tooling Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Claude Code", "Google Antigravity", "Codex", "MCP Skills", "Groq LPU", "Ollama", "OpenRouter"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-slate-900/80 px-2 py-0.5 text-[10px] font-mono text-cyan-300"
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
              <div className="mt-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Select Client Project:
                  </span>
                  <div className="flex gap-1.5 sm:gap-2">
                    {clientProjects.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedClientIndex(idx)}
                        className={`rounded-lg px-2.5 sm:px-3 py-1 font-mono text-xs font-bold transition-all ${
                          selectedClientIndex === idx
                            ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                            : "bg-slate-900 border border-white/10 text-slate-400 hover:border-cyan-400/50 hover:text-white"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Card */}
                <div className="glass-panel p-4 sm:p-5 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-full bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
                        {activeProject.category}
                      </span>
                      <h3 className="mt-2 text-base sm:text-lg font-bold text-white">
                        {activeProject.name}
                      </h3>
                      <p className="text-xs font-medium text-purple-300">
                        Client: {activeProject.client}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {activeProject.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {activeProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-slate-900/80 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      {activeProject.highlight}
                    </span>
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    >
                      <span>Live Site</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: GitHub & Systems */}
            {activeTab === "systems" && (
              <div className="mt-5 space-y-4">
                <div className="glass-panel p-4 sm:p-5">
                  <h4 className="text-xs sm:text-sm font-bold text-cyan-300">
                    FEATURED OPEN GITHUB & ENTERPRISE BUILDS
                  </h4>
                  <p className="mt-1 text-[11px] sm:text-xs text-slate-300">
                    Hands-on production engines built with AI biometrics, Groq LPUs, and enterprise microservices.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-2.5 sm:p-3">
                      <span className="text-[9px] sm:text-[10px] font-bold text-cyan-400 uppercase">Biometrics & Java</span>
                      <p className="mt-1 font-bold text-white text-xs sm:text-sm">HabitProof Engine</p>
                      <span className="text-[10px] text-slate-400">ArcFace + Spring Boot 3.3</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-2.5 sm:p-3">
                      <span className="text-[9px] sm:text-[10px] font-bold text-purple-400 uppercase">AI Job Kanban</span>
                      <p className="mt-1 font-bold text-white text-xs sm:text-sm">AI Job Tracker</p>
                      <span className="text-[10px] text-slate-400">Groq + OpenRouter + Next.js</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-2.5 sm:p-3">
                      <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase">Telegram AI Tutor</span>
                      <p className="mt-1 font-bold text-white text-xs sm:text-sm">CBSE-Bot (RAG)</p>
                      <span className="text-[10px] text-slate-400">ChromaDB + LangChain</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-2.5 sm:p-3">
                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase">Enterprise Streaming</span>
                      <p className="mt-1 font-bold text-white text-xs sm:text-sm">Kafka Microservices</p>
                      <span className="text-[10px] text-slate-400">Java 21 + Ollama (Llama 3)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Trust Bar */}
            <div className="mt-4 flex items-center justify-between font-sans text-[11px] sm:text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 sm:gap-2 text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]"></span>
                Learning by Doing &bull; Direct Founder Delivery
              </span>
              <span>Fixed Milestone Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



