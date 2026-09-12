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
    <section id="services" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      {/* Section Header */}
      <div className="max-w-4xl">
        <SectionHeading index="01" title="Services & Capabilities" />
        <p className="mt-6 text-xl sm:text-2xl text-slate-200 leading-snug font-normal">
          From <span className="text-white font-semibold">AI assistant coding workflows</span> (Claude Code, Antigravity, Codex) and custom <span className="text-cyan-300 font-semibold">MCP tool skills</span> to high-converting web apps (<span className="text-purple-300 font-semibold">UX by Snitch</span>) and <span className="text-emerald-300 font-semibold">business AI implementation</span>.
        </p>
      </div>

      {/* 6-Card Services Grid */}
      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {clientServices.map((service, idx) => (
          <div
            key={service.title}
            className="studio-card flex flex-col justify-between p-8 sm:p-10 transition-all hover:border-cyan-500/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.08] text-lg font-mono font-bold text-cyan-300">
                  0{idx + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Key Deliverables
              </span>
              <ul className="mt-3.5 space-y-2.5 text-base text-slate-200">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* AI Business Implementation Action Framework */}
      <div id="roadmap" className="mt-28 sm:mt-36">
        <div className="studio-card p-8 sm:p-12 md:p-16 border-cyan-500/25 bg-gradient-to-br from-[#0F172A]/90 via-[#0D1222]/80 to-[#181830]/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="badge-pill bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs sm:text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Action-Oriented AI Roadmap
              </span>
              <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                How We Guide Businesses into Practical AI Implementation
              </h3>
              <p className="mt-4 text-lg sm:text-xl text-slate-200 leading-relaxed">
                We eliminate AI hype. Our 4-step action roadmap equips your business with real, production-ready AI tools, custom MCP skills, and empowered internal teams.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary self-start md:self-auto rounded-full px-8 py-4 text-base font-bold shrink-0 shadow-xl"
            >
              Request AI Action Blueprint →
            </a>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiImplementationRoadmap.map((step) => (
              <div
                key={step.step}
                className="studio-panel p-7 sm:p-8 transition-all hover:border-cyan-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-mono">
                    {step.step}
                  </span>
                  <span className="rounded-full bg-white/[0.05] px-3.5 py-1 text-xs font-mono text-indigo-300 font-bold border border-white/[0.08]">
                    {step.phase}
                  </span>
                </div>
                <h4 className="mt-5 text-lg sm:text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h4>
                <p className="mt-2 text-base text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
