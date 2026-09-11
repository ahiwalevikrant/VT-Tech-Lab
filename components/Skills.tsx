import { skillGroups } from "@/lib/content";

const groupColors = [
  { border: "hover:border-cyan-400/50", title: "text-cyan-400", dot: "text-cyan-400" },
  { border: "hover:border-purple-400/50", title: "text-purple-400", dot: "text-purple-400" },
  { border: "hover:border-emerald-400/50", title: "text-emerald-400", dot: "text-emerald-400" },
  { border: "hover:border-blue-400/50", title: "text-blue-400", dot: "text-blue-400" },
  { border: "hover:border-pink-400/50", title: "text-pink-400", dot: "text-pink-400" },
  { border: "hover:border-indigo-400/50", title: "text-indigo-400", dot: "text-indigo-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
      <SectionHeading index="04" title="AI Capabilities, Tooling & Stack" />
      <p className="mt-3.5 sm:mt-4 max-w-[70ch] text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
        Engineered with agentic AI assistants (<span className="text-cyan-300 font-semibold">Claude Code, Antigravity, Codex</span>), <span className="text-purple-300 font-semibold">MCP protocols</span>, high-speed open models (<span className="text-emerald-300 font-semibold">Groq, OpenRouter, Ollama</span>), and enterprise-grade cloud stacks.
      </p>

      <div className="mt-8 sm:mt-12 grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => {
          const color = groupColors[idx % groupColors.length];
          return (
            <div
              key={group.label}
              className={`glass-card p-4 sm:p-6 transition-all duration-300 ${color.border}`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3">
                <h3 className={`font-mono text-xs sm:text-sm font-bold ${color.title}`}>
                  {group.label}
                </h3>
                <span className="rounded bg-white/5 border border-white/10 px-2 sm:px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-slate-400">
                  [ {group.items.length} STACK ]
                </span>
              </div>
              <ul className="mt-3 sm:mt-4 space-y-2 text-xs text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className={`${color.dot} font-mono text-xs`}>▸</span>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 border-b border-white/10 pb-3 sm:pb-4">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#00F0FF]"></span>
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
          {title}
        </h2>
      </div>
      <span className="self-start sm:self-auto shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 sm:px-3 py-0.5 font-mono text-[10px] sm:text-xs font-bold text-cyan-400">
        SECTION {index}
      </span>
    </div>
  );
}



