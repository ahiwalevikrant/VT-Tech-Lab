import Image from "next/image";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
      <SectionHeading index="05" title="Start an AI Project / Hire VT Tech Lab" />
      
      <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Direct Pitch & Action Buttons */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 sm:px-4 py-1 sm:py-1.5 font-sans text-[11px] sm:text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Accepting New AI Projects, Business Consulting & Builds
          </div>

          <h3 className="mt-3.5 sm:mt-5 text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Your Next Intelligent Product.
          </h3>

          <p className="mt-3 sm:mt-4 max-w-[56ch] text-xs sm:text-base leading-relaxed text-slate-300">
            Need an actionable business AI roadmap, custom MCP agent integration, or production-grade Next.js web platform? We provide transparent fixed-milestone pricing, rapid sprint delivery, and hands-on &apos;learning by doing&apos; execution.
          </p>

          {/* Direct Vibrant Actions */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 sm:px-6 py-3 sm:py-3.5 font-sans text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:brightness-110 text-center"
            >
              <span>💬 Chat on WhatsApp</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href={`mailto:${profile.email}?subject=AI%20Project%20Inquiry%20-%20VT%20Tech%20Lab`}
              className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 font-sans text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-105 hover:brightness-110 text-center"
            >
              <span>✉ {profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/30 px-5 sm:px-6 py-3 sm:py-3.5 font-sans text-xs sm:text-sm font-semibold text-purple-300 backdrop-blur-md transition-all hover:border-purple-400 hover:bg-purple-900/40 hover:text-white text-center"
            >
              <span>📞 {profile.phone}</span>
            </a>
          </div>

          <div className="mt-4 sm:mt-6 flex items-center gap-2 font-sans text-xs text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>⚡ Direct founder response time: <strong className="text-cyan-300">Under 4 hours</strong>.</span>
          </div>
        </div>

        {/* Right Column: Studio Dossier Card */}
        <div className="glass-card p-5 sm:p-7 md:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs sm:text-sm font-bold text-cyan-400">STUDIO DOSSIER</span>
            </div>
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 sm:px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-cyan-300">
              VERIFIED AI & WEB STUDIO
            </span>
          </div>

          <dl className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
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
      <footer className="mt-12 sm:mt-16 md:mt-24 border-t border-white/10 pt-6 sm:pt-10 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab"
              width={48}
              height={48}
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]"
            />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white">
              © {new Date().getFullYear()} {profile.firm}
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] text-cyan-400 font-semibold">{profile.tagline}</p>
          </div>
        </div>

        <p className="font-sans text-[11px] sm:text-xs text-slate-400">
          Engineered for Performance, Scalability & Maximum Client Conversion.
        </p>
      </footer>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-2.5">
      <dt className="text-xs font-semibold text-slate-400">{label}</dt>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-cyan-300 transition-colors hover:text-white"
        >
          {value}
        </a>
      ) : (
        <dd className="text-xs font-bold text-white">{value}</dd>
      )}
    </div>
  );
}



