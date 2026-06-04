"use client";

import { Server } from "lucide-react";

import {
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiOpenai,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const technologies = [
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    name: "REST API",
    icon: TbApi,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    name: "OpenAI API",
    icon: SiOpenai,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
];

export default function TechnologiesGrid() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.02]
        p-6
        backdrop-blur-xl
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Server
          size={24}
          className="text-primary"
        />

        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          What I've Worked With
        </h3>
      </div>

      {/* Technologies */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-white/[0.03]
              "
            >
              <div
                className={`
                  mb-4
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  ${tech.bg}
                `}
              >
                <Icon
                  size={34}
                  className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              <span
                className="
                  text-center
                  text-sm
                  font-medium
                  text-zinc-300
                "
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}