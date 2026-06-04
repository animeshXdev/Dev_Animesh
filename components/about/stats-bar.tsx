"use client";

import {
  FolderOpen,
  Users,
  Clock3,
  Code2,
} from "lucide-react";

const stats = [
  {
    icon: FolderOpen,
    value: "8+",
    label: "Projects Completed",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    value: "15+",
    label: "Happy Clients",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock3,
    value: "3+",
    label: "Years Experience",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Code2,
    value: "100K+",
    label: "Lines of Code",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function StatsBar() {
  return (
    <div
      className="
        mt-10
        grid
        gap-4
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        p-4
        backdrop-blur-xl
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`
              flex
              items-center
              gap-4
              px-2
              ${
                index !== stats.length - 1
                  ? "xl:border-r xl:border-white/10"
                  : ""
              }
            `}
          >
            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                ${stat.bg}
              `}
            >
              <Icon
                size={26}
                className={stat.color}
              />
            </div>

            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  text-sm
                  text-zinc-400
                "
              >
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}