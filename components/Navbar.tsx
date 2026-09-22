"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Code2, Share2, Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0e16]/80 backdrop-blur-xl border-b border-white/5">
      <div className="h-20 max-w-300 mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-surface-low border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
              <Terminal className="w-4 h-4 text-[#4cd7f6]" />
            </div>
            <span className="font-heading text-lg font-bold text-[#dfe2ee] tracking-tight">
              Sanuja<span className="text-[#4cd7f6]">.dev</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-low border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]" />
            </span>
            <span className="font-mono text-xs text-[#bcc9cd] font-medium">
              Available for hire
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 p-1 bg-surface-low rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-surface-high text-[#4cd7f6] shadow-sm font-semibold"
                    : "text-[#bcc9cd] hover:text-[#dfe2ee] hover:bg-surface-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://github.com/SanujaRasanajna2007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 hidden sm:flex items-center justify-center rounded-lg bg-surface-low text-[#bcc9cd] hover:bg-surface-high hover:text-[#dfe2ee] border border-white/5 transition-all"
          >
            <Code2 className="w-4 h-4" />
          </Link>

          <Link
            href="https://linkedin.com/in/sanuja-rasanajna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 hidden sm:flex items-center justify-center rounded-lg bg-surface-low text-[#bcc9cd] hover:bg-surface-high hover:text-[#dfe2ee] border border-white/5 transition-all"
          >
            <Share2 className="w-4 h-4" />
          </Link>

          <Button
            asChild
            className="hidden sm:inline-flex bg-[#06b6d4] hover:bg-[#22d3ee] text-[#003640] font-semibold text-xs h-9 px-4 rounded-lg shadow-[0_0_16px_rgba(6,182,212,0.25)] transition-all"
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-1.5" />
              Resume
            </a>
          </Button>

          <Avatar className="w-8 h-8 border border-white/20 ml-1">
            <AvatarImage src="/profile.jpg" alt="Sanuja" />
            <AvatarFallback className="bg-surface-high text-xs font-mono text-[#4cd7f6]">
              SP
            </AvatarFallback>
          </Avatar>

          <div className="lg:hidden ml-1">
            <Sheet>
              <SheetTrigger className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-surface-low border border-white/5 text-[#dfe2ee] hover:bg-surface-high transition-colors focus:outline-none">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-surface border-white/10 text-[#dfe2ee]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-heading text-lg text-[#dfe2ee]">
                    Sanuja<span className="text-[#4cd7f6]">.dev</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8 text-center ml-3 mr-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-[#bcc9cd] hover:text-[#4cd7f6] py-2 border-b border-white/5 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-3 pt-4">
                    <a
                      href="/resume.pdf"
                      download
                      className="w-full flex items-center justify-center bg-[#06b6d4] text-[#003640] font-semibold text-xs py-2.5 rounded-lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
