import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  GraduationCap,
  Building2,
  Mail,
  Sliders,
  Zap,
  Layout,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SkillsSection from "@/components/SkillsCard";

export const metadata = {
  title: "About | Sanuja Patirana - Junior Web Developer",
  description:
    "Learn about Sanuja Patirana, a Junior Web Developer specializing in modern full-stack web development, responsive interfaces, and clean architectures.",
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-surface pt-24 pb-16 text-[#dfe2ee]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-300 px-6 lg:px-8">
        <div className="pt-4 pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded bg-surface-container px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#4cd7f6]">
              // 01. ABOUT & IDENTITY
            </span>
            <span className="h-px w-12 bg-[#3d494c]" />
            <span className="font-mono text-xs text-[#bcc9cd]/70">
              DEVELOPER_PROFILE_v1.0
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-[#dfe2ee] sm:text-5xl lg:text-6xl">
                Junior Web Developer &{" "}
                <span className="bg-linear-to-r from-[#4cd7f6] via-[#2fd9f4] to-[#c0c1ff] bg-clip-text text-transparent">
                  Software Engineer
                </span>
              </h1>
              <p className="mt-4 text-lg text-[#bcc9cd]">
                Establishing a professional online presence to introduce my
                skills, projects, and educational foundation to potential
                employers, clients, and developer colleagues.
              </p>
            </div>

            <div className="hidden flex-col items-end text-right font-mono text-xs text-[#bcc9cd]/80 lg:flex">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#4cd7f6]" />
                LOCATION: SRI LANKA
              </span>
              <span className="mt-1 text-[#869397]">
                STATUS: AVAILABLE FOR HIRE
              </span>
            </div>
          </div>
        </div>

        <section className="py-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <div className="overflow-hidden rounded-xl bg-surface-low border border-surface-high shadow-xl">
                <div className="flex items-center justify-between bg-surface-container px-4 py-2 font-mono text-xs text-[#bcc9cd]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#4cd7f6]/80" />
                    <span>PORTFOLIO_IDENTITY</span>
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase text-[#869397]">
                    NIBM
                  </span>
                </div>

                <div className="relative aspect-square w-full overflow-hidden bg-[#0a0e16]">
                  <Image
                    src="/profile.jpg"
                    alt="P.P Sanuja Rasanjana Patirana"
                    fill
                    className="object-cover grayscale-15 contrast-105 transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0e16] via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="flex items-center gap-1.5 rounded bg-[#0a0e16]/90 px-2.5 py-1 font-mono text-xs text-[#4cd7f6] backdrop-blur-md shadow-md">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Software Engineering
                    </span>
                    <span className="rounded bg-[#0a0e16]/90 px-2 py-1 font-mono text-xs text-[#bcc9cd] backdrop-blur-md shadow-md">
                      LK
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-5 bg-surface-low">
                  <div>
                    <h3 className="text-xl font-bold text-[#dfe2ee]">
                      Sanuja Patirana
                    </h3>
                    <p className="font-mono text-xs text-[#4cd7f6] mt-0.5">
                      Junior Web Developer
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-1 font-mono text-xs text-[#bcc9cd]">
                    <div className="flex items-center justify-between rounded bg-surface-container px-3 py-1.5">
                      <span className="text-[#869397]">Role Target:</span>
                      <span className="font-medium text-[#dfe2ee]">
                        Web & Full-Stack Developer
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-surface-container px-3 py-1.5">
                      <span className="text-[#869397]">Education:</span>
                      <span className="font-medium text-[#dfe2ee]">
                        DSE & HNDSE (NIBM)
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-surface-container px-3 py-1.5">
                      <span className="text-[#869397]">Availability:</span>
                      <span className="font-medium text-[#2fd9f4]">
                        Open to Internships & Projects
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#3d494c] bg-surface-high text-[#dfe2ee] hover:bg-[#353942] hover:text-white"
                    >
                      <Link
                        href="/#contact"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Mail className="h-4 w-4 text-[#4cd7f6]" />
                        <span>Contact Me</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#3d494c] bg-surface-high text-[#dfe2ee] hover:bg-[#353942] hover:text-white"
                    >
                      <Link
                        href="https://github.com/SanujaRasanajna2007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <GithubIcon className="h-4 w-4 text-[#c0c1ff]" />
                        <span>GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-surface-high bg-surface-low p-5 shadow-md">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#bcc9cd]">
                  <span>Development Standards</span>
                  <span className="text-[#4cd7f6]">RATING: 100%</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <div className="mb-1 flex justify-between font-mono text-xs text-[#bcc9cd]">
                      <span>Responsive UI & UX Design</span>
                      <span className="text-[#dfe2ee]">95%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-highest">
                      <div
                        className="h-full rounded-full bg-[#4cd7f6]"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between font-mono text-xs text-[#bcc9cd]">
                      <span>Modern Frontend Standards (React/Next)</span>
                      <span className="text-[#dfe2ee]">90%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-highest">
                      <div
                        className="h-full rounded-full bg-[#2fd9f4]"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between font-mono text-xs text-[#bcc9cd]">
                      <span>Backend APIs & Database Integration</span>
                      <span className="text-[#dfe2ee]">85%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-highest">
                      <div
                        className="h-full rounded-full bg-[#c0c1ff]"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-8">
              <div className="relative overflow-hidden rounded-xl border border-surface-high bg-surface-low p-6 sm:p-8 shadow-lg">
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#06b6d4]/5 blur-3xl" />

                <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[#4cd7f6]">
                  <Terminal className="h-4 w-4" />
                  <span>developer.profile(introduction)</span>
                </div>

                <div className="space-y-4 text-base leading-relaxed text-[#dfe2ee]">
                  <p>
                    Hello! I&apos;m{" "}
                    <strong className="font-semibold text-[#4cd7f6]">
                      P.P Sanuja Rasanjana Patirana
                    </strong>
                    , a dedicated junior web developer preparing to launch my
                    professional career in web engineering and software
                    development.
                  </p>
                  <p className="text-[#bcc9cd]">
                    Through my studies at the National Institute of Business
                    Management (NIBM), I have cultivated a solid foundation in
                    both frontend UI creation and backend API design. I
                    specialize in crafting clean, accessible, and responsive
                    websites using modern technologies like Next.js, React,
                    TypeScript, Tailwind CSS, Python, and SQL databases.
                  </p>
                  <p className="text-[#bcc9cd]">
                    Whether developing client solutions, collaborating with
                    engineering teams, or building personal projects, my goal is
                    always the same: to produce maintainable, high-performing
                    code delivered through an intuitive user experience.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 rounded-lg bg-surface-container p-4 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 font-mono text-xs text-[#4cd7f6]">
                      <Sliders className="h-3.5 w-3.5" />
                      01 / ADAPTABILITY
                    </span>
                    <span className="text-base font-bold text-[#dfe2ee]">
                      Modern Tech Stack
                    </span>
                    <p className="text-xs text-[#bcc9cd]">
                      Proficient in contemporary web frameworks and modern
                      development pipelines.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 font-mono text-xs text-[#2fd9f4]">
                      <Zap className="h-3.5 w-3.5" />
                      02 / PERFORMANCE
                    </span>
                    <span className="text-base font-bold text-[#dfe2ee]">
                      Clean Code
                    </span>
                    <p className="text-xs text-[#bcc9cd]">
                      Writing structured, well-documented, and performant code
                      base.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 font-mono text-xs text-[#c0c1ff]">
                      <Layout className="h-3.5 w-3.5" />
                      03 / UI/UX FOCUS
                    </span>
                    <span className="text-base font-bold text-[#dfe2ee]">
                      Responsive Interfaces
                    </span>
                    <p className="text-xs text-[#bcc9cd]">
                      Building seamless experiences across desktop, tablet, and
                      mobile displays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-xl border border-surface-high bg-surface-low p-6 shadow-lg sm:p-8">
                <div className="flex items-center justify-between border-b border-surface-high pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6]">
                      // ACADEMIC BACKGROUND
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-[#dfe2ee]">
                      Education & Qualifications
                    </h2>
                  </div>
                  <span className="rounded bg-surface-container px-3 py-1 font-mono text-xs text-[#bcc9cd]">
                    NIBM Sri Lanka
                  </span>
                </div>

                <div className="relative space-y-6 pl-6 before:absolute before:bottom-2 before:left-2 before:top-3 before:w-0.5 before:bg-surface-highest">
                  <div className="group relative">
                    <span className="absolute -left-6.75 top-1.5 h-3.5 w-3.5 rounded-full bg-[#06b6d4] ring-4 ring-surface-low transition-transform group-hover:scale-125" />
                    <div className="rounded-lg bg-surface-container p-5 shadow-sm transition-colors hover:bg-surface-high">
                      <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-bold text-[#dfe2ee]">
                          Higher National Diploma in Software Engineering
                          (HNDSE)
                        </h3>
                        <Badge
                          variant="secondary"
                          className="self-start bg-[#0a0e16] font-mono text-xs text-[#4cd7f6] border-surface-high sm:self-auto"
                        >
                          Advanced Qualification
                        </Badge>
                      </div>

                      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#bcc9cd]">
                        <Building2 className="h-4 w-4 text-[#2fd9f4]" />
                        <span>
                          National Institute of Business Management (NIBM)
                        </span>
                      </div>

                      <p className="mb-4 text-sm text-[#bcc9cd]">
                        Comprehensive study of advanced web architectures,
                        enterprise application development, database management,
                        and cloud application deployment.
                      </p>

                      <div>
                        <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#869397]">
                          KEY MODULES COVERED:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "Web Application Frameworks",
                            "Database Architecture & SQL",
                            "Object-Oriented Analysis & Design",
                            "Enterprise Software Development",
                          ].map((module) => (
                            <span
                              key={module}
                              className="rounded bg-[#0a0e16] px-2.5 py-1 font-mono text-xs text-[#dfe2ee]"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <span className="absolute -left-6.75 top-1.5 h-3.5 w-3.5 rounded-full bg-[#c0c1ff] ring-4 ring-surface-low transition-transform group-hover:scale-125" />
                    <div className="rounded-lg bg-surface-container p-5 shadow-sm transition-colors hover:bg-surface-high">
                      <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-bold text-[#dfe2ee]">
                          Diploma in Software Engineering (DSE)
                        </h3>
                        <Badge
                          variant="secondary"
                          className="self-start bg-[#0a0e16] font-mono text-xs text-[#c0c1ff] border-surface-high sm:self-auto"
                        >
                          Completed
                        </Badge>
                      </div>

                      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#bcc9cd]">
                        <Building2 className="h-4 w-4 text-[#c0c1ff]" />
                        <span>
                          National Institute of Business Management (NIBM)
                        </span>
                      </div>

                      <p className="mb-4 text-sm text-[#bcc9cd]">
                        Foundational curriculum focused on fundamental
                        programming logic, web basics (HTML/CSS/JS),
                        object-oriented programming, and software engineering
                        principles.
                      </p>

                      <div>
                        <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-[#869397]">
                          KEY MODULES COVERED:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "Programming Logic & Algorithms",
                            "Web Development Fundamentals",
                            "Object-Oriented Programming",
                            "Software Lifecycle & Requirements",
                          ].map((module) => (
                            <span
                              key={module}
                              className="rounded bg-[#0a0e16] px-2.5 py-1 font-mono text-xs text-[#dfe2ee]"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <SkillsSection />
        </section>
      </div>
    </main>
  );
}
