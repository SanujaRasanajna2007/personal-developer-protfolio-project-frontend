import Link from "next/link";
import {
  CheckCircle2,
  Network,
  SquareCode,
  SendHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsSection from "@/components/ProjectsCard";

export const metadata = {
  title: "Projects | Sanuja Patirana",
  description:
    "Production-grade web platforms, algorithmic engines, and systems software built with precision.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-surface pt-24 pb-16 text-[#dfe2ee]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-300 px-6 lg:px-8">
        <div className="pt-4 pb-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full border border-surface-high bg-surface-container px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#4cd7f6]">
              <span className="h-2 w-2 rounded-full bg-[#4cd7f6]" />
              // 02. PORTFOLIO WORK
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-[#dfe2ee] sm:text-5xl lg:text-6xl">
                My Projects
              </h1>
              <p className="mt-3 max-w-2xl text-base text-[#bcc9cd] sm:text-lg">
                Production-grade web platforms, algorithmic engines, and systems
                software built with precision.
              </p>
            </div>

            <div className="flex items-center rounded-xl border border-surface-high bg-surface-low/90 p-2 shadow-lg backdrop-blur-md">
              <div className="flex flex-col px-4 py-1.5">
                <span className="font-mono text-xs text-[#869397]">
                  Indexed
                </span>
                <span className="font-mono text-lg font-bold text-[#4cd7f6]">
                  3 Builds
                </span>
              </div>
              <div className="h-8 w-px bg-surface-high" />
              <div className="flex flex-col px-4 py-1.5">
                <span className="font-mono text-xs text-[#869397]">
                  Core Stack
                </span>
                <span className="font-mono text-lg font-bold text-[#dfe2ee]">
                  Full-Stack / NextJs
                </span>
              </div>
              <div className="h-8 w-px bg-surface-high" />
              <div className="flex flex-col px-4 py-1.5">
                <span className="font-mono text-xs text-[#869397]">Status</span>
                <span className="flex items-center gap-1.5 font-mono text-lg font-bold text-[#4cd7f6]">
                  <CheckCircle2 className="h-4 w-4 text-[#4cd7f6]" />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <ProjectsSection />
        </div>

        <section className="pt-8 pb-4">
          <div className="flex flex-col gap-6 rounded-2xl border border-surface-high bg-surface-low/90 p-6 shadow-xl backdrop-blur-md sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-surface-high bg-surface-container text-[#4cd7f6]">
                <Network className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#dfe2ee] sm:text-xl">
                  Looking for bespoke architecture or technical contributions?
                </h3>
                <p className="text-sm text-[#bcc9cd]">
                  All source repositories include Docker compose files,
                  automated unit suites, and reproducible build scripts.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                asChild
                variant="outline"
                className="w-full border-surface-high bg-surface-container text-[#dfe2ee] hover:bg-surface-high hover:text-white sm:w-auto"
              >
                <Link
                  href="https://github.com/SanujaRasanajna2007?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-mono text-xs"
                >
                  <SquareCode className="h-4 w-4 text-[#4cd7f6]" />
                  <span>Explore All Repos</span>
                </Link>
              </Button>

              <Button
                asChild
                className="w-full bg-[#06b6d4] font-semibold text-surface hover:bg-[#2fd9f4] sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 font-mono text-xs"
                >
                  <SendHorizontal className="h-3.5 w-3.5" />
                  <span>Initiate Contact</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
