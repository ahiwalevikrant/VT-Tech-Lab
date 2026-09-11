import Image from "next/image";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/Skills";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading index="06" title="Start an AI Project / Hire VT Tech Lab" />
      
      <div className="mt-10 sm:mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Direct Pitch & Vibrant Action Buttons */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3.5 sm:px-4 py-1.5 font-sans text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Accepting New AI Projects, Business Consulting & Full-Stack Builds
          </div>

          <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Your Next Intelligent Product.
          </h3>

          <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-slate-300">
            Need an actionable business AI roadmap, custom MCP agent integration, or production-grade Next.js web platform? We provide transparent fixed-milestone pricing, rapid sprint delivery, and hands-on &apos;learning by doing&apos; execution.
          </p>

          {/* Direct Vibrant Actions */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-sans text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:brightness-110"
            >
              <span>💬 Chat on WhatsApp</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href={`mailto:${profile.email}?subject=AI%20Project%20Inquiry%20-%20VT%20Tech%20Lab`}
              className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-105 hover:brightness-110"
            >
              <span>✉ {profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/30 px-6 py-3.5 font-sans text-sm font-semibold text-purple-300 backdrop-blur-md transition-all hover:border-purple-400 hover:bg-purple-900/40 hover:text-white"
            >
              <span>📞 {profile.phone}</span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 font-sans text-xs text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>⚡ Direct founder response time: <strong className="text-cyan-300">Under 4 hours</strong>.</span>
          </div>
        </div>

        {/* Right Column: Studio Dossier Card */}
        <div className="glass-card p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-sm font-bold text-cyan-400">STUDIO DOSSIER</span>
            </div>
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
              VERIFIED AI & WEB STUDIO
            </span>
          </div>

          <dl className="mt-5 space-y-4">
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

      {/* Footer with Bold Standalone Logo */}
      <footer className="mt-24 border-t border-white/10 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab"
              width={48}
              height={48}
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              © {new Date().getFullYear()} {profile.firm}
            </p>
            <p className="font-mono text-[11px] text-cyan-400 font-semibold">{profile.tagline}</p>
          </div>
        </div>

        <p className="font-sans text-xs text-slate-400">
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



