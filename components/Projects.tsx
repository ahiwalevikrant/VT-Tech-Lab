import { clientProjects, featuredProjects } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
      <SectionHeading index="02" title="Client Case Studies & Production Apps" />
      <p className="mt-3.5 sm:mt-4 max-w-[68ch] text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
        Real client products shipped and operating live. Designed with modern UX by Snitch principles, optimized for conversion, SEO, and lightning performance.
      </p>

      {/* Client Projects List */}
      <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-8">
        {clientProjects.map((project, idx) => (
          <div
            key={project.id}
            className="glass-card group relative block p-5 sm:p-7 lg:p-10 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]"
          >
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="rounded-md bg-cyan-500/10 border border-cyan-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-semibold text-cyan-300">
                    [ CLIENT // 0{idx + 1} ]
                  </span>
                  <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    [ LIVE PRODUCTION ]
                  </span>
                  <span className="rounded-md bg-purple-500/10 border border-purple-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-medium text-purple-300">
                    [ {project.category} ]
                  </span>
                </div>

                <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white transition-colors group-hover:text-cyan-300">
                  {project.name}
                </h3>
                
                <p className="mt-1 font-mono text-xs sm:text-sm font-medium text-cyan-400/90">
                  // Client: {project.client}
                </p>

                <p className="mt-3 max-w-[70ch] text-xs sm:text-base leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/10 bg-slate-900/80 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-medium text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-3.5 sm:mt-5 inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-950/25 px-3 sm:px-3.5 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs font-semibold text-cyan-300">
                  <span className="text-cyan-400">⚡ Impact:</span>
                  <span>{project.highlight}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-3 sm:gap-4 border-t border-white/10 pt-4 lg:border-none lg:pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-sans text-xs font-bold text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <span>Launch Live App</span>
                  <span className="text-sm">↗</span>
                </a>
                <span className="font-mono text-[11px] sm:text-xs text-slate-400 hover:text-cyan-300 transition-colors">
                  {project.linkLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured AI & Open GitHub Systems */}
      <div id="solutions" className="mt-12 sm:mt-16 md:mt-24">
        <SectionHeading index="03" title="Featured AI Systems & Open GitHub Projects" />
        <p className="mt-3.5 sm:mt-4 max-w-[72ch] text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
          Hands-on implementations in <span className="text-white font-semibold">AI facial biometrics</span>, <span className="text-cyan-300 font-semibold">Groq & OpenRouter job intelligence</span>, <span className="text-purple-300 font-semibold">NCERT Science RAG tutors</span>, and <span className="text-emerald-300 font-semibold">event-driven enterprise backends</span>.
        </p>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card flex flex-col justify-between p-5 sm:p-7 md:p-8 transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-purple-500/15 border border-purple-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-semibold text-purple-300">
                    [ {project.tag} ]
                  </span>
                  <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#A855F7] animate-pulse"></span>
                </div>

                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {project.name}
                </h3>

                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-300 font-sans">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-cyan-400 font-mono text-xs mt-0.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 border-t border-white/10 pt-4 sm:pt-5">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/10 bg-slate-900/80 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] text-cyan-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3.5 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs font-medium text-white transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
                    >
                      <span>📂 [ View on GitHub ]</span>
                      <span>↗</span>
                    </a>
                    {project.githubUiUrl && (
                      <a
                        href={project.githubUiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-purple-500/30 bg-purple-950/20 px-3.5 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs font-medium text-purple-300 transition-all hover:border-purple-400 hover:text-white"
                      >
                        <span>🎨 [ Frontend UI Repo ]</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



