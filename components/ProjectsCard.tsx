"use client";

import React from "react";
import Link from "next/link";
import { Code2, ExternalLink, PlayCircle } from "lucide-react";

interface Project {
  id: string;
  category: string;
  subCategory: string;
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  liveUrl: string;
  liveLabel: string;
  isPlayIcon?: boolean;
  previewComponent: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "iot-disaster-system",
      category: "IOT & SENSOR NETWORK",
      subCategory: "Real-time Monitoring",
      title: "IoT-Based Disaster Management System",
      description:
        "Real-time telemetry and early disaster detection system monitoring flood levels, landslides, and seismic anomalies via distributed sensor nodes with automated citizen alerts.",
      tags: [
        "C/C++",
        "ESP32",
        "Next.js",
        "WebSockets",
        "Python",
        "MQTT",
        "Supabase",
      ],
      sourceUrl:
        "https://github.com/SanujaRasanajna2007/IOT-DisasterManagement",
      liveUrl: "https://example.com",
      liveLabel: "Live Platform",
      previewComponent: <IotTelemetryPreview />,
    },
    {
      id: "huffman-compression",
      category: "ALGORITHM-BASED WEB APP",
      subCategory: "Computer Science Showcase",
      title: "Huffman Image Compression",
      description:
        "Interactive visualization and lossless compression engine applying Huffman coding algorithms on raster pixel data. Demonstrates bit-level tree encoding, dictionary serialization, and real-time compression ratios.",
      tags: [
        "React",
        "TypeScript",
        "Canvas API",
        "Algorithms",
        "Data Structures",
      ],
      sourceUrl: "https://github.com/SanujaRasanajna2007/Image-Compressor-Tool",
      liveUrl: "https://example.com",
      liveLabel: "Interactive Visualizer",
      isPlayIcon: true,
      previewComponent: <HuffmanTreePreview />,
    },
    {
      id: "game-hub",
      category: "GAME DISCOVERY & API PLATFORM",
      subCategory: "Gaming & Communities",
      title: "Game-Hub Website",
      description:
        "Comprehensive video game discovery and community platform aggregating multi-platform game catalogs, user ratings, real-time Twitch/RAWG APIs, and backlog tracking.",
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "RAWG API",
        "Supabase",
        "Zustand",
      ],
      sourceUrl: "https://github.com/SanujaRasanajna2007/Game-Hub-Website",
      liveUrl: "https://example.com",
      liveLabel: "Live Demo",
      previewComponent: <GameHubPreview />,
    },
  ];

  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-surface-low/90 border border-white/5 rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-300 hover:border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#38bdf8] font-bold tracking-wider uppercase">
                  {project.category}
                </span>
                <span className="text-[#8e9ca0]">•</span>
                <span className="text-[#8e9ca0] font-medium">
                  {project.subCategory}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#dfe2ee] tracking-tight">
                {project.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface text-[#38bdf8] border border-white/5 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-3">
                <Link
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#dfe2ee] hover:text-[#4cd7f6] transition-colors"
                >
                  <Code2 className="w-4 h-4 text-[#8e9ca0]" />
                  Source Code
                </Link>

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#4cd7f6] hover:text-[#38bdf8] transition-colors"
                >
                  {project.isPlayIcon ? (
                    <PlayCircle className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  {project.liveLabel}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              {project.previewComponent}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function IotTelemetryPreview() {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-4 sm:p-5 font-mono text-xs shadow-inner space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
          <span className="text-[#dfe2ee] font-semibold text-[11px]">
            Station #04 - Kelani Basin
          </span>
        </div>
        <span className="text-[10px] text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded font-semibold">
          CRITICAL LEVEL ALERT
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-[#8e9ca0]">
          <span>Threshold: 6.0m</span>
        </div>
        <div className="relative h-20 w-full pt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60">
            <line
              x1="0"
              y1="20"
              x2="300"
              y2="20"
              stroke="#ef4444"
              strokeDasharray="4 4"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M0,45 C50,45 80,30 120,38 C160,46 200,10 250,15 C270,17 285,10 300,12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            <circle cx="298" cy="12" r="3.5" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
        <div>
          <p className="text-[#8e9ca0] text-[10px]">Water Level</p>
          <p className="text-[#dfe2ee] font-bold">5.82m (+0.4m/hr)</p>
        </div>
        <div>
          <p className="text-[#8e9ca0] text-[10px]">Sensor Nodes</p>
          <p className="text-[#4cd7f6] font-bold">12 Active (99.8% Uptime)</p>
        </div>
      </div>
    </div>
  );
}

function HuffmanTreePreview() {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-4 sm:p-5 font-mono text-xs shadow-inner space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#dfe2ee] font-semibold text-[11px]">
            Tree Serialization Engine
          </span>
        </div>
        <span className="text-[10px] text-[#4cd7f6] font-bold">CR: 44.8%</span>
      </div>

      <div className="h-24 w-full flex items-center justify-center">
        <svg className="w-full h-full max-w-65" viewBox="0 0 200 80">
          <line
            x1="100"
            y1="15"
            x2="60"
            y2="40"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <line
            x1="100"
            y1="15"
            x2="140"
            y2="40"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <line
            x1="60"
            y1="40"
            x2="40"
            y2="65"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <line
            x1="60"
            y1="40"
            x2="80"
            y2="65"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          <circle
            cx="100"
            cy="15"
            r="10"
            fill="#1c2028"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <text
            x="100"
            y="18"
            fill="#dfe2ee"
            fontSize="8"
            textAnchor="middle"
            fontWeight="bold"
          >
            1.0
          </text>

          <circle
            cx="60"
            cy="40"
            r="10"
            fill="#1c2028"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <text x="60" y="43" fill="#dfe2ee" fontSize="8" textAnchor="middle">
            .58
          </text>

          <circle
            cx="140"
            cy="40"
            r="10"
            fill="#1c2028"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <text x="140" y="43" fill="#dfe2ee" fontSize="8" textAnchor="middle">
            .42
          </text>

          <rect x="30" y="58" width="20" height="12" rx="3" fill="#38bdf8" />
          <text
            x="40"
            y="66"
            fill="#0a0e16"
            fontSize="7"
            textAnchor="middle"
            fontWeight="bold"
          >
            #FF
          </text>

          <rect
            x="70"
            y="58"
            width="20"
            height="12"
            rx="3"
            fill="#262a33"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          <text
            x="80"
            y="66"
            fill="#38bdf8"
            fontSize="7"
            textAnchor="middle"
            fontWeight="bold"
          >
            #00
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
        <div>
          <p className="text-[#8e9ca0] text-[10px]">Original: 2.4 MB</p>
        </div>
        <div className="text-right">
          <p className="text-[#4cd7f6] font-bold text-[10px]">
            Compressed: 1.32 MB
          </p>
        </div>
      </div>
    </div>
  );
}

function GameHubPreview() {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-4 sm:p-5 font-mono text-xs shadow-inner space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#dfe2ee] font-semibold text-[11px]">
            Game Index & Trending Activity
          </span>
        </div>
        <span className="text-[10px] text-[#8e9ca0]">Live API Sync</span>
      </div>

      <div className="h-20 w-full pt-1">
        <svg className="w-full h-full" viewBox="0 0 240 50">
          <rect x="20" y="20" width="16" height="30" rx="2" fill="#262a33" />
          <rect
            x="50"
            y="10"
            width="16"
            height="40"
            rx="2"
            fill="#3b82f6"
            opacity="0.6"
          />
          <rect
            x="80"
            y="15"
            width="16"
            height="35"
            rx="2"
            fill="#6366f1"
            opacity="0.7"
          />
          <rect
            x="110"
            y="5"
            width="16"
            height="45"
            rx="2"
            fill="#8b5cf6"
            opacity="0.8"
          />
          <rect x="140" y="25" width="16" height="25" rx="2" fill="#262a33" />
          <rect x="170" y="18" width="16" height="32" rx="2" fill="#262a33" />
          <rect x="200" y="8" width="16" height="42" rx="2" fill="#38bdf8" />

          <path
            d="M28,22 Q60,8 118,12 T208,6"
            fill="none"
            stroke="#4cd7f6"
            strokeWidth="2"
          />
          <circle cx="208" cy="6" r="3" fill="#4cd7f6" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
        <div>
          <p className="text-[#8e9ca0] text-[10px]">Cataloged Titles</p>
          <p className="text-[#dfe2ee] font-bold">500,000+ Games</p>
        </div>
        <div>
          <p className="text-[#8e9ca0] text-[10px]">Community Reviews</p>
          <p className="text-[#4cd7f6] font-bold">98.4% Accuracy</p>
        </div>
      </div>
    </div>
  );
}
