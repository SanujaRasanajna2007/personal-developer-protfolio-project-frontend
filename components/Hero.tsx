"use client";

import Link from "next/link";
import { ArrowDown, Mail, FileCode2 } from "lucide-react";

export default function Hero() {
  const codeLines = [
    { num: 1, text: "const developer = {", indent: 0, color: "text-[#4cd7f6]" },
    {
      num: 2,
      text: "name: 'P.P Sanuja Rasanjana Patirana',",
      indent: 2,
      color: "text-[#38bdf8]",
    },
    {
      num: 3,
      text: "role: 'Full-Stack Software Engineer',",
      indent: 2,
      color: "text-[#38bdf8]",
    },
    {
      num: 4,
      text: "education: 'BSc (Hons) in Software Engineering',",
      indent: 2,
      color: "text-[#38bdf8]",
    },
    { num: 5, text: "passions: [", indent: 2, color: "text-[#dfe2ee]" },
    {
      num: 6,
      text: "'Distributed Systems',",
      indent: 4,
      color: "text-[#a855f7]",
    },
    {
      num: 7,
      text: "'UI/UX Engineering',",
      indent: 4,
      color: "text-[#a855f7]",
    },
    {
      num: 8,
      text: "'Algorithms & Data Structures'",
      indent: 4,
      color: "text-[#a855f7]",
    },
    { num: 9, text: "],", indent: 2, color: "text-[#dfe2ee]" },
    {
      num: 10,
      text: "status: 'Ready to Build'",
      indent: 2,
      color: "text-[#38bdf8]",
    },
    { num: 11, text: "};", indent: 0, color: "text-[#4cd7f6]" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-16 max-w-300 mx-auto px-4 md:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-low border border-white/10 text-xs font-mono text-[#bcc9cd]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]" />
            </span>
            Available for Work
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm text-[#bcc9cd]">Hi, I'm</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#dfe2ee]">
              P.P Sanuja <span className="text-[#4cd7f6]">Rasanjana</span>{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4cd7f6] via-[#a855f7] to-[#c084fc]">
                Patirana
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] to-[#4cd7f6] pt-1">
              Junior Web Developer
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#bcc9cd] max-w-xl leading-relaxed">
            Passionate about building scalable web architectures, algorithmic
            systems, and performant user-centric digital experiences. Bridging
            robust backend logic with slick modern frontend engineering.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#0a0e16] font-bold text-sm h-11 px-6 rounded-xl shadow-[0_0_20px_rgba(76,215,246,0.25)] transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="bg-surface-low hover:bg-surface-high text-[#dfe2ee] border border-white/10 font-semibold text-sm h-11 px-6 rounded-xl transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#bcc9cd]" />
              Contact Me
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6">
            <div className="bg-surface-low/90 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#dfe2ee]">
                3+
              </span>
              <span className="font-sans text-xs text-[#bcc9cd] mt-1 font-medium">
                Years Coding
              </span>
            </div>

            <div className="bg-surface-low/90 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#dfe2ee]">
                15+
              </span>
              <span className="font-sans text-xs text-[#bcc9cd] mt-1 font-medium">
                Repositories
              </span>
            </div>

            <div className="bg-surface-low/90 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#4cd7f6]">
                Top 5%
              </span>
              <span className="font-sans text-xs text-[#bcc9cd] mt-1 font-medium">
                Academic Standing
              </span>
            </div>

            <div className="bg-surface-low/90 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-[#4cd7f6] leading-tight">
                Full-
                <br />
                Stack
              </div>
              <span className="font-sans text-xs text-[#bcc9cd] mt-1 font-medium">
                Systems Focus
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="bg-[#141822] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            <div className="bg-surface-container px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-[#bcc9cd] text-xs font-mono">
                <FileCode2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                developer.ts
              </div>
              <div className="w-12" />
            </div>

            <div className="p-4 sm:p-5 space-y-1.5 bg-surface/90 overflow-x-auto">
              {codeLines.map((line) => (
                <div key={line.num} className="flex items-start">
                  <span className="w-7 select-none text-right pr-4 text-[#4b5563] text-xs">
                    {line.num}
                  </span>
                  <pre
                    className={`${line.color} font-mono`}
                    style={{ paddingLeft: `${line.indent * 0.5}rem` }}
                  >
                    {line.text}
                  </pre>
                </div>
              ))}

              <div className="flex items-center pt-3 text-[#dfe2ee]">
                <span className="w-7 select-none text-right pr-4 text-[#4b5563] text-xs">
                  &gt;
                </span>
                <span className="text-[#4cd7f6] font-semibold">
                  developer.execute()
                </span>
                <span className="w-2 h-4 bg-[#4cd7f6] ml-1.5 inline-block animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
