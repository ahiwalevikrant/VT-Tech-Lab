import Image from "next/image";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <SectionHeading index="05" title="Start an AI Project / Hire VT Tech Lab" />
      
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
        {/* Left Column: Direct Pitch & Action Buttons */}
        <div>
          <span className="badge-pill bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs sm:text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for New AI Projects &amp; Web Builds
          </span>

          <h3 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s build your next intelligent product.
          </h3>

          <p className="mt-6 max-w-2xl text-xl sm:text-2xl leading-snug text-slate-200 font-normal">
            Need an actionable business AI roadmap, custom MCP agent integration, or production-grade Next.js web platform? Transparent milestone pricing, rapid sprint delivery, and direct founder execution.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-9 py-4.5 text-base sm:text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105"
            >
              <span>💬 Chat on WhatsApp</span>
              <span>↗</span>
            </a>

            <a
              href={`mailto:${profile.email}?subject=AI%20Project%20Inquiry%20-%20VT%20Tech%20Lab`}
              className="btn-primary inline-flex items-center justify-center gap-3 rounded-full px-9 py-4.5 text-base sm:text-lg font-bold"
            >
              <span>✉ {profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="btn-ghost inline-flex items-center justify-center gap-3 rounded-full px-8 py-4.5 text-base sm:text-lg font-semibold"
            >
              <span>📞 {profile.phone}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-base text-slate-300">
            <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Direct founder response time: <strong className="text-white font-bold">Under 4 hours</strong>.</span>
          </div>
        </div>

        {/* Right Column: Studio Dossier Card */}
        <div className="studio-card p-8 sm:p-10">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <span className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Studio Dossier
            </span>
            <span className="badge-pill bg-white/[0.05] text-slate-300 border border-white/[0.08] text-xs font-bold">
              Verified Studio
            </span>
          </div>

          <dl className="mt-7 space-y-4 text-base sm:text-lg">
            <Row label="Studio" value={profile.firm} />
            <Row label="Lead Engineer" value={profile.name} />
            <Row label="Core Focus" value="AI-Centric Dev, MCP & Web Apps" />
            <Row label="AI Workflows" value="Claude Code, Antigravity, Groq, Ollama" />
            <Row label="Location" value={profile.location} />
            <Row
              label="GitHub"
              value={profile.github.replace("https://", "")}
              href={profile.github}
            />
            <Row
              label="LinkedIn"
              value="vikrant-ahiwale-7917a7268"
              href={profile.linkedin}
            />
          </dl>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 sm:mt-36 border-t border-white/[0.08] pt-12 sm:pt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab"
              width={48}
              height={48}
              className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-white">
              © {new Date().getFullYear()} {profile.firm}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">{profile.tagline}</p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-normal">
          Engineered for Performance, Speed &amp; Maximum Client Conversion.
        </p>
      </footer>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[0.05] pb-4">
      <dt className="text-sm sm:text-base text-slate-400 font-medium">{label}</dt>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base sm:text-lg font-semibold text-cyan-300 transition-colors hover:text-white hover:underline"
        >
          {value}
        </a>
      ) : (
        <dd className="text-base sm:text-lg font-bold text-white">{value}</dd>
      )}
    </div>
  );
}



