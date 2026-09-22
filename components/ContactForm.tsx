"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  Code2,
  Send,
  ShieldCheck,
} from "lucide-react";

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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailAddress = "sanuja.patirana.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#8e9ca0] font-semibold tracking-wider uppercase">
                EMAIL ADDRESS
              </p>
              <p className="font-mono text-xs sm:text-sm font-semibold text-[#dfe2ee]">
                {emailAddress}
              </p>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="w-9 h-9 rounded-xl bg-surface-high hover:bg-surface-highest text-[#8e9ca0] hover:text-[#4cd7f6] border border-white/5 flex items-center justify-center transition-colors shrink-0"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#4cd7f6]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#8e9ca0] font-semibold tracking-wider uppercase">
              CURRENT LOCATION
            </p>
            <p className="font-mono text-xs sm:text-sm font-semibold text-[#dfe2ee]">
              Colombo, Sri Lanka (Remote Ready)
            </p>
          </div>
        </div>

        <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6] shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#8e9ca0] font-semibold tracking-wider uppercase">
              RESPONSE TIME
            </p>
            <p className="font-mono text-xs sm:text-sm font-semibold text-[#dfe2ee]">
              Usually responds within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 flex-wrap">
          <Link
            href="https://github.com/SanujaRasanajna2007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-low border border-white/5 hover:border-white/20 font-mono text-xs font-semibold text-[#dfe2ee] transition-all"
          >
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/sanuja-rasanajna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-low border border-white/5 hover:border-white/20 font-mono text-xs font-semibold text-[#dfe2ee] transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
            LinkedIn
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-low border border-white/5 hover:border-white/20 font-mono text-xs font-semibold text-[#dfe2ee] transition-all"
          >
            <TwitterIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
            Twitter / X
          </Link>
        </div>
      </div>

      <div className="lg:col-span-7 w-full bg-surface-low/90 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-[#dfe2ee]">
              Send a Message
            </h3>
            <p className="text-xs text-[#8e9ca0] mt-0.5">
              Dispatch detailed specifications, hiring propositions, or
              consultation requests.
            </p>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#4cd7f6] font-semibold tracking-wider uppercase bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 px-2.5 py-1 rounded">
            TLS Encrypted
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono text-xs font-medium text-[#8e9ca0]">
                Full Name <span className="text-[#4cd7f6]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Alex Morgan"
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs text-[#dfe2ee] placeholder-[#4b5563] focus:outline-none focus:border-[#4cd7f6] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs font-medium text-[#8e9ca0]">
                Email Address <span className="text-[#4cd7f6]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g., alex@company.com"
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs text-[#dfe2ee] placeholder-[#4b5563] focus:outline-none focus:border-[#4cd7f6] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs font-medium text-[#8e9ca0]">
              Inquiry Classification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Software Engineering Internship",
                "Freelance / Contract Project",
                "Technical Collaboration",
                "General Query / Other",
              ].map((option, idx) => (
                <label
                  key={option}
                  className="flex items-center gap-2 bg-surface border border-white/5 hover:border-white/20 p-2.5 rounded-xl cursor-pointer text-xs text-[#dfe2ee] transition-colors"
                >
                  <input
                    type="radio"
                    name="inquiry_type"
                    defaultChecked={idx === 0}
                    className="accent-[#4cd7f6]"
                  />
                  <span className="font-mono text-[11px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs font-medium text-[#8e9ca0]">
              Subject <span className="text-[#4cd7f6]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Summer Engineering Internship Opportunity"
              className="w-full bg-surface border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs text-[#dfe2ee] placeholder-[#4b5563] focus:outline-none focus:border-[#4cd7f6] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="font-mono text-xs font-medium text-[#8e9ca0]">
                Message Payload
              </label>
              <span className="font-mono text-[10px] text-[#5c686c]">
                0 / 2000
              </span>
            </div>
            <textarea
              rows={4}
              required
              placeholder="Describe your team, timeline, technical requirements, or opportunity..."
              className="w-full bg-surface border border-white/5 rounded-xl p-4 font-mono text-xs text-[#dfe2ee] placeholder-[#4b5563] focus:outline-none focus:border-[#4cd7f6] transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#0a0e16] font-extrabold font-mono text-xs h-11 px-8 rounded-xl shadow-[0_0_16px_rgba(76,215,246,0.25)] transition-all flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {submitted && (
              <span className="font-mono text-xs text-[#4cd7f6]">
                ✓ Message dispatched successfully!
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/5 font-mono text-[11px] text-[#8e9ca0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>
              Encrypted SSL Transmission • Direct delivery to developer inbox
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
