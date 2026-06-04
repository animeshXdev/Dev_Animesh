"use client";

import {
  Briefcase,
  Code2,
  Monitor,
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Full Stack Developer (Freelance)",
    period: "2024 - Present",
    type: "Remote",
    badge: "Current",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    description:
      "Building scalable web applications using Laravel, Next.js, MySQL, Redis, and integrating third-party APIs and AI services.",
  },
  {
    icon: Code2,
    title: "Backend Developer",
    period: "2023 - 2024",
    type: "Remote",
    badge: "1 yr",
    color: "text-white",
    bg: "bg-white/5",
    description:
      "Developed and maintained RESTful APIs with Node.js and Express. Worked with MySQL, Redis and third-party integrations.",
  },
  {
    icon: Monitor,
    title: "Web Developer Intern",
    period: "2022 - 2023",
    type: "On-site",
    badge: "1 yr",
    color: "text-green-500",
    bg: "bg-green-500/10",
    description:
      "Built and optimized web applications using Laravel and MySQL. Collaborated with the team to deliver client projects.",
  },
  {
    icon: GitBranch,
    title: "Open Source Contributor",
    period: "2021 - Present",
    type: "Remote",
    badge: "3+ yrs",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    description:
      "Contributing to open source projects, reporting issues, improving documentation and collaborating with developers.",
  },
];

export default function ExperienceTimeline() {
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
        <Briefcase
          size={26}
          className="text-primary"
        />

        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Work Experience
        </h3>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div
          className="
            absolute
            left-[14px]
            top-5
            bottom-5
            w-[2px]
            bg-gradient-to-b
            from-primary
            via-primary/50
            to-primary
          "
        />

        <div className="space-y-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  flex
                  gap-8
                "
              >
                {/* Dot */}
                <div
                  className="
                    relative
                    z-10
                    mt-10
                    h-7
                    w-7
                    rounded-full
                    border-4
                    border-black
                    bg-primary
                    shadow-[0_0_25px_rgba(168,85,247,0.8)]
                  "
                />

                {/* Card */}
                <div
                  className="
                    flex-1
                    rounded-[24px]
                    border
                    border-white/10
                    bg-black/30
                    p-6
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left */}
                    <div className="flex gap-5">
                      <div
                        className={`
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          ${item.bg}
                        `}
                      >
                        <Icon
                          size={38}
                          className={item.color}
                        />
                      </div>

                      <div>
                        <h4
                          className="
                            text-2xl
                            font-semibold
                            text-white
                          "
                        >
                          {item.title}
                        </h4>

                        <div className="mt-2 flex flex-wrap items-center gap-4">
                          <span className="font-medium text-primary">
                            {item.period}
                          </span>

                          <span className="flex items-center gap-2 text-zinc-400">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            {item.type}
                          </span>
                        </div>

                        <p
                          className="
                            mt-4
                            max-w-2xl
                            leading-8
                            text-zinc-400
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Badge */}
                    <div
                      className="
                        rounded-xl
                        border
                        border-primary/20
                        bg-primary/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        whitespace-nowrap
                      "
                    >
                      {item.badge}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}