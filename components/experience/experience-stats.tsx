"use client";

import {
  CalendarDays,
  Users,
  Code2,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "3+",
    label: "Years Experience",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    value: "15+",
    label: "Projects Completed",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Code2,
    value: "20K+",
    label: "Lines of Code",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Happy Clients",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function ExperienceStats() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
      "
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`
                flex
                items-center
                gap-5
                p-8
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
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${stat.bg}
                `}
              >
                <Icon
                  size={30}
                  className={stat.color}
                />
              </div>

              <div>
                <h3
                  className="
                    text-5xl
                    font-bold
                    text-white
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2
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
    </div>
  );
}