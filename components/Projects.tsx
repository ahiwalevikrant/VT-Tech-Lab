import { clientProjects, featuredProjects } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      {/* Client Section */}
      <div className="max-w-4xl">
        <SectionHeading title="Client Production Case Studies" />
        <p className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-200 leading-snug font-normal">
          Real client web applications shipped and operating live. Designed with modern <span className="text-slate-950 dark:text-white font-semibold">UX by Snitch</span> standards, optimized for conversion, SEO, and fast response times.
        </p>
      </div>

      {/* Client Projects List */}
      <div className="mt-16 space-y-8 sm:space-y-10">
        {clientProjects.map((project, idx) => (
          <div
            key={project.id}
            className="studio-card group relative p-8 sm:p-12 lg:p-14 transition-all hover:border-sky-400/60 dark:hover:border-cyan-500/40"
          >
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-pill bg-sky-50 dark:bg-cyan-500/10 text-sky-700 dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/20 text-xs sm:text-sm font-semibold">
                    Client 0{idx + 1}
                  </span>
                  <span className="badge-pill bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                    Live in Production
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                
                <p className="mt-2 text-sm sm:text-base font-semibold text-sky-700 dark:text-cyan-400 font-mono">
                  Client: {project.client}
                </p>

                <p className="mt-4 max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-200">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-4 py-1.5 font-mono text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-sky-200 dark:border-cyan-500/25 bg-sky-50 dark:bg-cyan-950/40 px-4 py-2 text-sm font-semibold text-sky-900 dark:text-cyan-200">
                  <span className="text-sky-700 dark:text-cyan-400 font-bold">Impact:</span>
                  <span>{project.highlight}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 border-t border-slate-200 dark:border-white/[0.08] pt-6 lg:border-none lg:pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-base font-bold w-full sm:w-auto text-center shadow-lg min-h-[48px]"
                >
                  <span>Launch Live App</span>
                  <span>↗</span>
                </a>
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
                  {project.linkLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured AI & Open Systems */}
      <div id="systems" className="mt-28 sm:mt-36">
        <div className="max-w-4xl">
          <SectionHeading title="Featured AI Systems & Open GitHub Repos" />
          <p className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-200 leading-snug font-normal">
            Hands-on implementations in <span className="text-slate-950 dark:text-white font-semibold">AI facial biometrics</span>, <span className="text-sky-700 dark:text-cyan-300 font-semibold">Groq & OpenRouter job intelligence</span>, <span className="text-purple-700 dark:text-purple-300 font-semibold">Science RAG tutors</span>, and <span className="text-emerald-700 dark:text-emerald-300 font-semibold">event-driven enterprise backends</span>.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="studio-card flex flex-col justify-between p-8 sm:p-10 transition-all hover:border-sky-400/60 dark:hover:border-indigo-500/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="badge-pill bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 text-xs sm:text-sm font-semibold">
                    {project.tag}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_#9333EA] animate-pulse"></span>
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                  {project.name}
                </h3>

                <ul className="mt-5 space-y-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-sky-600 dark:text-cyan-400 font-bold mt-0.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-200 dark:border-white/[0.08] pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-3.5 py-1 font-mono text-xs sm:text-sm text-slate-700 dark:text-cyan-200 font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-6 flex flex-wrap items-center gap-3.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-bold text-slate-800 dark:text-white min-h-[44px]"
                    >
                      <span>📂 View on GitHub</span>
                      <span>↗</span>
                    </a>
                    {project.githubUiUrl && (
                      <a
                        href={project.githubUiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 px-6 py-3 font-mono text-sm font-bold text-purple-700 dark:text-purple-300 transition-all hover:bg-purple-600 hover:text-white min-h-[44px]"
                      >
                        <span>🎨 Frontend Repo</span>
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



