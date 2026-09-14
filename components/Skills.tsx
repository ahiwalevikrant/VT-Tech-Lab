import { skillCategories } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl">
        <SectionHeading title="Technology Stack" />
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          Core tools and frameworks powering our AI pipelines and web systems.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.name}
            className="studio-card p-5 sm:p-6"
          >
            <h3 className="text-base font-bold text-slate-950 dark:text-white border-b border-slate-100 dark:border-white/[0.06] pb-3 font-mono">
              {cat.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100/90 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] px-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ title }: { title: string; index?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
      <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(2,132,199,0.4)] dark:shadow-[0_0_12px_#00F0FF]"></span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}




