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
    <section id="services" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="01" title="What We Build & Deliver for Clients" />
      <p className="mt-4 max-w-[72ch] text-base sm:text-lg leading-relaxed text-slate-300">
        From <span className="font-semibold text-white">AI-centric development</span> (Claude Code, Google Antigravity, Codex) and custom <span className="font-semibold text-cyan-300">MCP skill integrations</span> to high-converting web apps (UX by Snitch) and <span className="font-semibold text-purple-300">actionable business AI implementation</span>.
      </p>

      {/* Services Grid */}
      <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clientServices.map((service, idx) => {
          const theme = serviceThemes[idx % serviceThemes.length];
          return (
            <div
              key={service.title}
              className={`glass-card group relative flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 ${theme.border} ${theme.shadow}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold ${theme.badge}`}>
                    SERVICE 0{idx + 1}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor] animate-pulse`}></span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Core Capabilities:
                </span>
                <ul className="mt-2.5 space-y-1.5 font-sans text-xs text-slate-200">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
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
      <div className="glass-card mt-16 p-8 sm:p-10 border-cyan-500/20 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-indigo-950/50 shadow-[0_0_40px_rgba(0,240,255,0.1)]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 border border-purple-500/30 px-3.5 py-1 font-mono text-xs font-bold text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
              BUSINESS AI ACTION BLUEPRINT
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              How We Guide Businesses into Practical AI Implementation
            </h3>
            <p className="mt-1 text-sm text-slate-300 max-w-[70ch]">
              We eliminate AI confusion and hype. Our 4-step action roadmap equips your business with real, production-ready AI tools, custom MCP skills, and empowered internal teams.
            </p>
          </div>
          <a
            href="#contact"
            className="glow-btn self-start rounded-full px-6 py-3 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-105 sm:self-auto shrink-0"
          >
            Request AI Blueprint →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiImplementationRoadmap.map((step) => (
            <div key={step.step} className="relative flex flex-col rounded-xl border border-white/10 bg-slate-950/70 p-5 transition-all hover:border-cyan-400/40">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-cyan-400/90 drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                  {step.step}
                </span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  {step.phase}
                </span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">
                {step.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


