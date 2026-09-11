import { clientServices, aiImplementationRoadmap } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

const serviceThemes = [
  { border: "hover:border-cyan-400/60", shadow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]", badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300", dot: "bg-cyan-400" },
  { border: "hover:border-purple-400/60", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", badge: "bg-purple-500/15 border-purple-500/30 text-purple-300", dot: "bg-purple-400" },
  { border: "hover:border-emerald-400/60", shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300", dot: "bg-emerald-400" },
  { border: "hover:border-blue-400/60", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", badge: "bg-blue-500/15 border-blue-500/30 text-blue-300", dot: "bg-blue-400" },
  { border: "hover:border-pink-400/60", shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]", badge: "bg-pink-500/15 border-pink-500/30 text-pink-300", dot: "bg-pink-400" },
  { border: "hover:border-indigo-400/60", shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]", badge: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300", dot: "bg-indigo-400" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
      <SectionHeading index="01" title="What We Build & Deliver for Clients" />
      <p className="mt-3.5 sm:mt-4 max-w-[72ch] text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
        From <span className="font-semibold text-slate-100">AI-centric development</span> (Claude Code, Google Antigravity, Codex) and custom <span className="font-semibold text-sky-300">MCP skill integrations</span> to high-converting web apps (UX by Snitch) and <span className="font-semibold text-indigo-300">actionable business AI implementation</span>.
      </p>

      {/* Services Grid */}
      <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clientServices.map((service, idx) => {
          return (
            <div
              key={service.title}
              className="glass-card group relative flex flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:border-sky-400/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-sky-500/20 bg-sky-950/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-sky-300">
                    [ SYS_0{idx + 1} // CAPABILITY ]
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] animate-pulse"></span>
                </div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-slate-100 transition-colors group-hover:text-sky-300">
                  {service.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {service.desc}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 border-t border-slate-800/80 pt-3.5 sm:pt-4">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  // CORE DELIVERABLES:
                </span>
                <ul className="mt-2 space-y-1.5 font-sans text-xs text-slate-300">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono text-xs mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Business Implementation & Sprint Framework */}
      <div className="glass-card mt-10 sm:mt-16 p-5 sm:p-8 md:p-10 border-sky-500/20 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-indigo-950/40 shadow-[0_0_30px_rgba(14,165,233,0.08)]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-indigo-500/10 border border-indigo-500/30 px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              [ BUSINESS_AI_ACTION_BLUEPRINT ]
            </div>
            <h3 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-100">
              How We Guide Businesses into Practical AI Implementation
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-[70ch]">
              We eliminate AI confusion and hype. Our 4-step action roadmap equips your business with real, production-ready AI tools, custom MCP skills, and empowered internal teams.
            </p>
          </div>
          <a
            href="#contact"
            className="glow-btn self-start rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-semibold shadow-[0_0_18px_rgba(14,165,233,0.3)] transition-all hover:scale-105 sm:self-auto shrink-0"
          >
            Request AI Blueprint →
          </a>
        </div>

        <div className="mt-6 sm:mt-10 grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiImplementationRoadmap.map((step) => (
            <div key={step.step} className="relative flex flex-col rounded-lg border border-slate-800 bg-slate-950/80 p-4 sm:p-5 transition-all hover:border-sky-400/40">
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-mono font-bold text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.3)]">
                  {step.step}
                </span>
                <span className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-indigo-300">
                  {step.phase}
                </span>
              </div>
              <h4 className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-bold text-slate-200">
                {step.title}
              </h4>
              <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


