"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-[#0a0e16] border-t border-white/5 py-10">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-[#dfe2ee]">
                Sanuja<span className="text-[#4cd7f6]">.dev</span>
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-high text-[#4cd7f6] uppercase font-semibold">
                Portfolio
              </span>
            </div>
            <p className="font-sans text-xs text-[#bcc9cd] text-center md:text-left">
              P.P Sanuja Rasanjana Patirana • Junior Web Developer
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="https://github.com/SanujaRasanajna2007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/sanuja-rasanajna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>Twitter</span>
            </Link>
            <a
              href="mailto:sanuja.patirana.dev@gmail.com"
              className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg bg-surface-low text-[#bcc9cd] hover:bg-surface-high hover:text-[#dfe2ee] border border-white/5 transition-all flex items-center justify-center ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#bcc9cd]/80 text-center sm:text-left">
            © 2026 P.P Sanuja Rasanjana Patirana. Built with Next.js & Tailwind
            CSS.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-[#bcc9cd]/60">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
            <span>All systems nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
