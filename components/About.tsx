"use client";

import Link from "next/link";
import { Layout, Server, Code2 } from "lucide-react";

export default function About() {
  const profileDetails = [
    { label: "Location", value: "Sri Lanka (Open to Remote)" },
    { label: "Education", value: "Diploma & HNDSE (NIBM)" },
    { label: "Role Focus", value: "Junior Web Developer" },
    {
      label: "GitHub",
      value: "@SanujaDev",
      isLink: true,
      href: "https://github.com/SanujaRasanajna2007",
    },
  ];

  const focusCards = [
    {
      icon: Layout,
      title: "Frontend Engineering",
      description:
        "Building responsive, accessible, and intuitive user interfaces using React, Next.js App Router, TypeScript, and Tailwind CSS. High focus on clean code, modern UX principles, and cross-device performance.",
    },
    {
      icon: Server,
      title: "Backend & Database Systems",
      description:
        "Developing scalable RESTful APIs with Python (Flask/FastAPI) and Node.js, combined with relational schema design using PostgreSQL and Supabase for reliable server-side data handling.",
    },
    {
      icon: Code2,
      title: "Clean Architecture & Tooling",
      description:
        "Utilizing industry-standard version control (Git/GitHub), containerization with Docker, structured software algorithms, and modular design principles to build maintainable applications.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-8 space-y-4 font-sans text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
          <p>
            I am a Junior Web Developer with a strong academic foundation in
            Software Engineering from the National Institute of Business
            Management (NIBM). I specialize in designing and delivering
            responsive, full-stack web platforms that combine sleek interactive
            user interfaces with maintainable backend codebases.
          </p>
          <p>
            Whether developing web applications for freelance clients,
            collaborating with software development teams, or building personal
            projects, my objective is to solve practical business problems
            through modern web standards, efficient code, and intuitive visual
            design.
          </p>
        </div>

        <div className="lg:col-span-4 w-full">
          <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="font-mono text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase">
              QUICK PROFILE
            </h3>
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {profileDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                >
                  <span className="text-[#8e9ca0] font-medium">
                    {item.label}
                  </span>
                  {item.isLink ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4cd7f6] hover:underline font-semibold"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <span className="text-[#dfe2ee] font-semibold text-right">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-surface-low/80 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6] mb-5 group-hover:border-[#4cd7f6]/40 transition-colors">
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="font-heading text-lg font-bold text-[#dfe2ee] mb-2.5">
                {card.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
