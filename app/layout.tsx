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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden bg-white text-slate-900 dark:bg-[#070913] dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
