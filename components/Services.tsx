import { clientServices, aiImplementationRoadmap } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-3xl">
        <SectionHeading title="Services &amp; Capabilities" />
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          From autonomous AI agent workflows and custom MCP tools to fast Next.js SaaS platforms.
        </p>
      </div>

      {/* 4 Core Services Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {clientServices.map((service) => (
          <div
            key={service.title}
            className="studio-card p-6 sm:p-8 transition-all hover:border-sky-400/60 dark:hover:border-cyan-500/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-sky-600 dark:text-cyan-400">
                {service.number}
              </span>
              <span className="h-2 w-2 rounded-full bg-sky-500 dark:bg-cyan-400"></span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              {service.title}
            </h3>
            
            <p className="mt-2.5 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100/80 dark:bg-white/[0.05] px-3 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Minimal AI Action Roadmap */}
      <div id="roadmap" className="mt-20 sm:mt-28">
        <div className="studio-card p-6 sm:p-10 border border-slate-200/90 dark:border-cyan-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-wider">
                Execution Framework
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                How We Ship AI
              </h3>
            </div>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold self-start sm:self-auto !min-h-0"
            >
              Start Sprint →
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiImplementationRoadmap.map((step) => (
              <div
                key={step.step}
                className="studio-panel p-5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-cyan-400 font-mono">
                    {step.step}
                  </span>
                  <span className="rounded-md bg-slate-100 dark:bg-white/10 px-2 py-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-bold">
                    {step.phase}
                  </span>
                </div>
                <h4 className="mt-3 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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

