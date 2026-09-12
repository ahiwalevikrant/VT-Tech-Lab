"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#roadmap", label: "AI Blueprint" },
  { href: "#work", label: "Client Apps" },
  { href: "#systems", label: "AI Systems" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Consultation" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <nav className="mx-auto flex max-w-content items-center justify-between rounded-full border border-white/[0.08] bg-[#0A0D1A]/80 px-4 sm:px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        {/* Brand Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/VT-tech-lab-icon.png"
              alt="VT Tech Lab"
              width={36}
              height={36}
              className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                VT Tech Lab
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available
              </span>
            </div>
            <span className="hidden sm:block text-[10px] font-mono text-slate-400">
              AI-Centric Development &bull; Software Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden gap-2 font-sans text-sm font-semibold text-slate-300 lg:flex items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 transition-all duration-200 hover:text-white hover:bg-white/[0.08]"
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
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            WhatsApp
          </a>
          <a
            href="#contact"
            className="btn-primary rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-wide"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs"
            aria-label="WhatsApp"
          >
            💬
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mt-2 mx-auto max-w-content rounded-2xl border border-white/[0.08] bg-[#0A0D1A]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          <ul className="space-y-1.5 font-sans text-base font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.08] pt-5">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-bold text-emerald-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp (+91 9325307637)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold"
            >
              Start AI Project / Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



