import { experience, education } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="05" title="Enterprise Track Record" />
      <p className="mt-4 max-w-[68ch] text-base sm:text-lg leading-relaxed text-slate-300">
        High-scale production background in enterprise healthtech, automated commission reconciliation, and CRM modules.
      </p>

      <div className="mt-10 sm:mt-12 space-y-6">
        {experience.map((role) => (
          <div
            key={`${role.company}-${role.period}`}
            className="glass-card p-6 sm:p-8 transition-all duration-300 hover:border-cyan-400/50"
          >
            <div className="grid gap-6 md:grid-cols-[260px_1fr] md:gap-10">
              <div>
                <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
                  {role.period}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{role.role}</h3>
                <p className="mt-1 font-sans text-sm font-semibold text-purple-400">{role.company}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card mt-8 p-6 sm:p-8">
        <div className="grid gap-3 md:grid-cols-[260px_1fr] md:gap-10">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-0.5 font-mono text-xs text-slate-300">
              {education.period}
            </span>
            <h3 className="mt-2 text-base font-bold text-white">{education.degree}</h3>
          </div>
          <p className="text-sm text-slate-300 self-center">
            {education.school}, {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}


