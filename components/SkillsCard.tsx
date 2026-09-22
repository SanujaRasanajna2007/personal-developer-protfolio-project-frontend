"use client";

import { Code2, Database } from "lucide-react";

interface Skill {
  name: string;
  level: string;
}

const languagesAndFrameworks: Skill[] = [
  { name: "Next.js", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Python", level: "Proficient" },
  { name: "C++", level: "Academic" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Proficient" },
  { name: "HTML5 / CSS3", level: "Mastery" },
];

const backendAndInfrastructure: Skill[] = [
  { name: "Supabase", level: "Production" },
  { name: "PostgreSQL", level: "Proficient" },
  { name: "Docker", level: "Intermediate" },
  { name: "REST & GraphQL APIs", level: "Advanced" },
  { name: "Git / GitHub CI/CD", level: "Advanced" },
  { name: "Linux / Bash", level: "Proficient" },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6]">
            <Code2 className="w-4 h-4" />
          </div>
          <h3 className="font-heading text-xl font-bold text-[#dfe2ee]">
            Languages & Frameworks
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {languagesAndFrameworks.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-surface/90 border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#38bdf8]">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-surface-container text-[#8e9ca0] border border-white/5">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-low/90 border border-white/5 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-high border border-white/5 flex items-center justify-center text-[#4cd7f6]">
            <Database className="w-4 h-4" />
          </div>
          <h3 className="font-heading text-xl font-bold text-[#dfe2ee]">
            Backend & Infrastructure
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {backendAndInfrastructure.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-surface/90 border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#38bdf8]">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-surface-container text-[#8e9ca0] border border-white/5">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
