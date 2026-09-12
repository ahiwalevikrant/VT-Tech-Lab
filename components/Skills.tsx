import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-4xl">
        <SectionHeading index="04" title="AI Capabilities, Tooling & Tech Stack" />
        <p className="mt-6 text-xl sm:text-2xl text-slate-200 leading-snug font-normal">
          Engineered with agentic AI assistants (<span className="text-cyan-300 font-semibold">Claude Code, Antigravity, Codex</span>), <span className="text-purple-300 font-semibold">MCP protocols</span>, high-speed open models (<span className="text-emerald-300 font-semibold">Groq, OpenRouter, Ollama</span>), and enterprise cloud backends.
        </p>
      </div>

      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <div
            key={group.label}
            className="studio-card p-8 sm:p-9 transition-all hover:border-cyan-500/40"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {group.label}
              </h3>
              <span className="rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 font-mono text-xs text-slate-300 font-bold">
                {group.items.length} Tech
              </span>
            </div>
            <ul className="mt-5 space-y-3.5 text-base sm:text-lg text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">▸</span>
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
      <div className="flex items-center gap-3.5">
        <span className="flex h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F0FF]"></span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      <span className="badge-pill bg-white/[0.04] text-slate-300 border border-white/[0.08] font-mono text-xs sm:text-sm font-bold self-start sm:self-auto">
        SECTION 0{index}
      </span>
    </div>
  );
}



