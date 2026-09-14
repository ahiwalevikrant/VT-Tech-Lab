import { clientProjects, featuredProjects } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Client Section */}
      <div className="max-w-3xl">
        <SectionHeading title="Production Client Work" />
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          Selected web applications deployed and live in production.
        </p>
      </div>

      {/* Client Projects */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {clientProjects.map((project) => (
          <div
            key={project.id}
            className="studio-card flex flex-col justify-between p-6 sm:p-7 transition-all hover:border-sky-400/60 dark:hover:border-cyan-500/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="badge-pill bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                  Live
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                {project.name}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {project.client.split(",")[0]}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-4 py-1.5 text-xs font-bold inline-flex items-center gap-1.5 !min-h-0"
              >
                <span>Demo</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Featured AI & Open Systems */}
      <div id="systems" className="mt-20 sm:mt-28">
        <div className="max-w-3xl">
          <SectionHeading title="AI Systems &amp; Open Source" />
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Biometric verification, sub-second Groq inference, and RAG pipelines.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="studio-card flex flex-col justify-between p-6 sm:p-7 transition-all hover:border-sky-400/60 dark:hover:border-indigo-500/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="badge-pill bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 text-xs font-semibold">
                    {project.tag}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-950 dark:text-white tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-300 hover:underline inline-flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




