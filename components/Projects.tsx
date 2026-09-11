import { clientProjects, featuredProjects } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="02" title="Client Case Studies & Production Apps" />
      <p className="mt-4 max-w-[68ch] text-base sm:text-lg leading-relaxed text-slate-300">
        Real client products shipped and operating live. Designed with modern UX by Snitch principles, optimized for conversion, SEO, and lightning performance.
      </p>

      {/* Client Projects List */}
      <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8">
        {clientProjects.map((project, idx) => (
          <div
            key={project.id}
            className="glass-card group relative block p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]"
          >
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
                    CLIENT 0{idx + 1}
                  </span>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    LIVE IN PRODUCTION
                  </span>
                  <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                  {project.name}
                </h3>
                
                <p className="mt-1.5 font-sans text-sm font-semibold text-cyan-400">
                  Client: {project.client}
                </p>

                <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-slate-900/90 px-3 py-1 font-mono text-xs font-medium text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1.5 font-sans text-xs font-semibold text-cyan-300">
                  <span className="text-cyan-400">🚀 Impact:</span>
                  <span>{project.highlight}</span>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end justify-between gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-105"
                >
                  <span>Launch Live App</span>
                  <span className="text-sm">↗</span>
                </a>
                <span className="font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors">
                  {project.linkLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured AI & Open GitHub Systems */}
      <div id="solutions" className="mt-24">
        <SectionHeading index="03" title="Featured AI Systems & Open GitHub Projects" />
        <p className="mt-4 max-w-[72ch] text-lg leading-relaxed text-slate-300">
          Hands-on implementations in <span className="text-white font-semibold">AI facial biometrics</span>, <span className="text-cyan-300 font-semibold">Groq & OpenRouter job intelligence</span>, <span className="text-purple-300 font-semibold">NCERT Science RAG tutors</span>, and <span className="text-emerald-300 font-semibold">event-driven enterprise backends</span>.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 px-3 py-1 font-mono text-xs font-bold text-purple-300">
                    {project.tag}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#A855F7] animate-pulse"></span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
                  {project.name}
                </h3>

                <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-300">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-cyan-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
                    >
                      <span>📂 View on GitHub</span>
                      <span>↗</span>
                    </a>
                    {project.githubUiUrl && (
                      <a
                        href={project.githubUiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-1.5 font-mono text-xs font-semibold text-purple-300 transition-all hover:border-purple-400 hover:text-white"
                      >
                        <span>🎨 Frontend UI Repo</span>
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



