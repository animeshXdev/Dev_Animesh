"use client";

import {
  Crown,
  Layers3,
  Clock3,
  Briefcase,
  Flame,
} from "lucide-react";

const stats = [
  {
    icon: Layers3,
    value: "8+",
    label: "Technologies",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock3,
    value: "3+",
    label: "Years Experience",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    value: "20+",
    label: "Projects Built",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Flame,
    value: "100%",
    label: "Commitment",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function SkillsStats() {
  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
      "
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Left Side */}
        <div
          className="
            flex
            items-center
            gap-5
            p-6
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
            "
          >
            <Crown
              size={30}
              className="text-primary"
            />
          </div>

          <div>
            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Full Stack. Problem Solver.
              Performance Focused.
            </h3>

            <p
              className="
                mt-2
                text-zinc-400
              "
            >
              Building solutions that make an impact.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            p-6
            lg:grid-cols-4
          "
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    ${item.bg}
                  `}
                >
                  <Icon
                    size={22}
                    className={item.color}
                  />
                </div>

                <div>
                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-zinc-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}