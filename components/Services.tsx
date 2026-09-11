import { clientServices, freelanceWorkflow } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

const serviceThemes = [
  { border: "hover:border-cyan-400/60", shadow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]", badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300", dot: "bg-cyan-400" },
  { border: "hover:border-purple-400/60", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", badge: "bg-purple-500/15 border-purple-500/30 text-purple-300", dot: "bg-purple-400" },
  { border: "hover:border-blue-400/60", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", badge: "bg-blue-500/15 border-blue-500/30 text-blue-300", dot: "bg-blue-400" },
  { border: "hover:border-emerald-400/60", shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300", dot: "bg-emerald-400" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="01" title="What We Build for Clients" />
      <p className="mt-4 max-w-[68ch] text-base sm:text-lg leading-relaxed text-slate-300">
        Whether you need an MVP launched rapidly, a high-converting web platform, or custom AI automations integrated into your workflow, <span className="font-semibold text-white">VT Tech Lab</span> delivers end-to-end excellence.
      </p>

      {/* Services Grid */}
      <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2">
        {clientServices.map((service, idx) => {
          const theme = serviceThemes[idx % serviceThemes.length];
          return (
            <div
              key={service.title}
              className={`glass-card group relative flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${theme.border} ${theme.shadow}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold ${theme.badge}`}>
                    SERVICE 0{idx + 1}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor] animate-pulse`}></span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Deliverables & Expertise:
                </span>
                <ul className="mt-3 grid grid-cols-2 gap-2.5 font-sans text-xs text-slate-200">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Freelance Delivery Process */}
      <div className="glass-card mt-16 p-8 sm:p-10 border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-indigo-950/40">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="inline-block rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-0.5 font-mono text-xs font-bold text-purple-300">
              PROVEN SPRINT WORKFLOW
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-white">
              Transparent, Fast & Predictable Delivery
            </h3>
          </div>
          <a
            href="#contact"
            className="glow-btn self-start rounded-full px-5 py-2 text-xs font-bold text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:scale-105 sm:self-auto"
          >
            Get a Quote →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {freelanceWorkflow.map((step, idx) => (
            <div key={step.step} className="relative flex flex-col rounded-xl border border-white/10 bg-slate-950/60 p-5">
              <span className="text-3xl font-black text-cyan-400/80 drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                {step.step}
              </span>
              <h4 className="mt-2 text-base font-bold text-white">
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

