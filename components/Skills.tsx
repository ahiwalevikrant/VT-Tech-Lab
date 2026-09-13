import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-4xl">
        <SectionHeading title="AI Capabilities, Tooling & Tech Stack" />
        <p className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-200 leading-snug font-normal">
          Engineered with agentic AI assistants (<span className="text-sky-700 dark:text-cyan-300 font-semibold">Claude Code, Antigravity, Codex</span>), <span className="text-purple-700 dark:text-purple-300 font-semibold">MCP protocols</span>, high-speed open models (<span className="text-emerald-700 dark:text-emerald-300 font-semibold">Groq, OpenRouter, Ollama</span>), and enterprise cloud backends.
        </p>
      </div>

      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <div
            key={group.label}
            className="studio-card p-8 sm:p-9 transition-all hover:border-sky-400/60 dark:hover:border-cyan-500/40"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {group.label}
              </h3>
              <span className="rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-3 py-1 font-mono text-xs text-slate-600 dark:text-slate-300 font-bold">
                {group.items.length} Tech
              </span>
            </div>
            <ul className="mt-5 space-y-3.5 text-base sm:text-lg text-slate-700 dark:text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-sky-600 dark:text-cyan-400 font-bold">▸</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ title, index }: { title: string; index?: string }) {
  return (
    <div className="flex items-center gap-3.5 border-b border-slate-200 dark:border-white/[0.08] pb-6">
      <span className="flex h-3.5 w-3.5 rounded-full bg-sky-500 dark:bg-cyan-400 shadow-[0_0_12px_rgba(2,132,199,0.45)] dark:shadow-[0_0_15px_#00F0FF]"></span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
}



