import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VT Tech Lab — AI-Centric Engineering & Modern Web Studio",
  description:
    "VT Tech Lab architects and builds production AI systems, custom MCP skills, high-speed open model pipelines (Groq, OpenRouter, Ollama), and modern full-stack web applications.",
  icons: {
    icon: "/VT-tech-lab-transparent.png",
    apple: "/VT-tech-lab-transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased overflow-x-hidden bg-[#070913] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
