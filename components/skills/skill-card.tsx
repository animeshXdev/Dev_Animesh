"use client";

import { LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  value: number;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  skills: SkillItem[];
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
  color,
  bg,
  skills,
}: SkillCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/20
        hover:-translate-y-1
      "
    >
      {/* Glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
          ${bg}
        `}
      />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              ${bg}
            `}
          >
            <Icon
              size={32}
              className={color}
            />
          </div>

          <div>
            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-zinc-400
              "
            >
              {description}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 space-y-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between">
                <span
                  className="
                    text-base
                    text-zinc-300
                  "
                >
                  {skill.name}
                </span>

                <span
                  className="
                    text-base
                    font-medium
                    text-zinc-300
                  "
                >
                  {skill.value}%
                </span>
              </div>

              <div
                className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-white/5
                "
              >
                <div
                  className={`h-full rounded-full ${bg}`}
                  style={{
                    width: `${skill.value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Icon */}
      <Icon
        size={90}
        className={`
          absolute
          right-4
          top-4
          opacity-[0.04]
          ${color}
        `}
      />
    </div>
  );
}