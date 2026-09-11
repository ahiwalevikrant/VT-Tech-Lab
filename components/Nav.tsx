"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/content";

const links = [
  { href: "#services", label: "Services & AI Actions" },
  { href: "#work", label: "Client Apps" },
  { href: "#solutions", label: "AI Systems & MCP" },
  { href: "#skills", label: "AI Stack" },
  { href: "#experience", label: "Track Record" },
  { href: "#contact", label: "Consultation" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050811]/90 backdrop-blur-xl transition-all">
      <nav className="mx-auto flex max-w-content items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        {/* Bold Standalone Big Logo (Unboxed & Tightly Cropped) */}
        <a href="#top" className="group flex items-center gap-3 sm:gap-3.5">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab Logo"
              width={48}
              height={48}
              className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.7)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                VT TECH LAB
              </span>
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] animate-pulse"></span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-cyan-400">
              AI-CENTRIC DEV &bull; SOFTWARE ENGINEERING
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden gap-7 font-sans text-sm font-semibold text-slate-300 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-all duration-200 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3.5 py-2 text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            WhatsApp
          </a>
          <a
            href="#contact"
            className="glow-btn inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center h-9 w-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            aria-label="WhatsApp"
          >
            💬
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#050811]/98 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          <ul className="space-y-4 font-sans text-base font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-200 transition-colors hover:text-cyan-400 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 py-3 text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp Direct (+91 9325307637)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="glow-btn flex w-full items-center justify-center rounded-full py-3 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              🚀 Start Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



