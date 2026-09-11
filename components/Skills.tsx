import { skillGroups } from "@/lib/content";

const groupColors = [
  { border: "hover:border-cyan-400/50", title: "text-cyan-400", dot: "text-cyan-400" },
  { border: "hover:border-purple-400/50", title: "text-purple-400", dot: "text-purple-400" },
  { border: "hover:border-blue-400/50", title: "text-blue-400", dot: "text-blue-400" },
  { border: "hover:border-emerald-400/50", title: "text-emerald-400", dot: "text-emerald-400" },
  { border: "hover:border-pink-400/50", title: "text-pink-400", dot: "text-pink-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="04" title="Technical Capabilities & Tooling" />
      <p className="mt-4 max-w-[68ch] text-base sm:text-lg leading-relaxed text-slate-300">
        Industry-leading technologies chosen for peak performance, scale, developer velocity, and bulletproof reliability.
      </p>

      <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => {
          const color = groupColors[idx % groupColors.length];
          return (
            <div
              key={group.label}
              className={`glass-card p-6 transition-all duration-300 ${color.border}`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className={`font-sans text-sm font-bold ${color.title}`}>
                  {group.label}
                </h3>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400">
                  {group.items.length} STACK
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className={`${color.dot} font-bold text-sm`}>▸</span>
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
    <div className="flex items-end justify-between border-b border-white/10 pb-4">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#00F0FF]"></span>
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-0.5 font-mono text-xs font-bold text-cyan-400">
        SECTION {index}
      </span>
    </div>
  );
}


