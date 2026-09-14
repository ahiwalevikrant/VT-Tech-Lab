import Image from "next/image";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading title="Start a Project" />

      <div className="mt-10 studio-card p-8 sm:p-12 border border-slate-200/90 dark:border-cyan-500/30">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
            Available for Q3 &bull; Direct Founder Delivery
          </div>

          <h3 className="mt-5 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Let&apos;s build your next intelligent product.
          </h3>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Rapid sprints, fixed milestone pricing, and direct communication. Response time within 4 hours.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 dark:bg-emerald-500 px-6 py-3 text-sm sm:text-base font-bold text-white dark:text-slate-950 shadow-md transition-all hover:bg-emerald-700 dark:hover:bg-emerald-400 min-h-[44px]"
            >
              <span>💬 WhatsApp</span>
              <span>↗</span>
            </a>

            <a
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20VT%20Tech%20Lab`}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold min-h-[44px]"
            >
              <span>✉ {profile.email}</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold min-h-[44px] dark:border-white/15"
            >
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 sm:mt-24 border-t border-slate-200 dark:border-white/[0.08] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 shrink-0">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab"
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-bold text-slate-950 dark:text-white">
            © {new Date().getFullYear()} {profile.firm}
          </span>
          <span>&bull;</span>
          <span>{profile.location}</span>
        </div>

        <p className="font-mono text-xs">
          Engineered for Performance &amp; Speed
        </p>
      </footer>
    </section>
  );
}




