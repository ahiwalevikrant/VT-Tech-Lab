import { experience, education } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
      <SectionHeading title="Enterprise Track Record" />
      <p className="mt-3.5 sm:mt-4 max-w-[68ch] text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        High-scale production background in enterprise healthtech, automated commission reconciliation, and CRM modules.
      </p>

      <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
        {experience.map((role) => (
          <div
            key={`${role.company}-${role.period}`}
            className="glass-card p-5 sm:p-7 md:p-8 transition-all duration-300 hover:border-sky-400/50 dark:hover:border-cyan-400/50"
          >
            <div className="grid gap-4 sm:gap-6 md:grid-cols-[240px_1fr] md:gap-10">
              <div>
                <span className="rounded-full bg-sky-50 dark:bg-cyan-500/15 border border-sky-200 dark:border-cyan-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[11px] sm:text-xs font-bold text-sky-700 dark:text-cyan-300">
                  {role.period}
                </span>
                <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl font-bold text-slate-950 dark:text-white">{role.role}</h3>
                <p className="mt-0.5 sm:mt-1 font-sans text-xs sm:text-sm font-semibold text-sky-700 dark:text-purple-400">{role.company}</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                    <span className="text-sky-600 dark:text-cyan-400 font-bold mt-0.5">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card mt-6 sm:mt-8 p-5 sm:p-7 md:p-8">
        <div className="grid gap-2 sm:gap-3 md:grid-cols-[240px_1fr] md:gap-10">
          <div>
            <span className="rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 px-2.5 sm:px-3 py-0.5 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-semibold">
              {education.period}
            </span>
            <h3 className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold text-slate-950 dark:text-white">{education.degree}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 self-center">
            {education.school}, {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}


