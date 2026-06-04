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
    badge: "1 Yr",
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
    badge: "1 Yr",
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
    badge: "3+ Yrs",
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
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.02]
        p-4
        backdrop-blur-xl
        md:p-6
        lg:rounded-[32px]
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Briefcase
          size={24}
          className="text-primary"
        />

        <h3
          className="
            text-xl
            font-bold
            text-white
            sm:text-2xl
            lg:text-3xl
          "
        >
          Work Experience
        </h3>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div
          className="
            absolute
            left-[10px]
            top-4
            bottom-4
            w-[2px]
            bg-gradient-to-b
            from-primary
            via-primary/50
            to-primary
            md:left-[14px]
          "
        />

        <div className="space-y-5 md:space-y-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  flex
                  gap-4
                  md:gap-8
                "
              >
                {/* Dot */}
                <div
                  className="
                    relative
                    z-10
                    mt-7
                    h-5
                    w-5
                    rounded-full
                    border-2
                    border-black
                    bg-primary
                    shadow-[0_0_20px_rgba(168,85,247,0.8)]
                    md:mt-10
                    md:h-7
                    md:w-7
                    md:border-4
                  "
                />

                {/* Card */}
                <div
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    p-4
                    md:rounded-[24px]
                    md:p-6
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                    "
                  >
                    {/* Content */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                      "
                    >
                      {/* Icon */}
                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          ${item.bg}

                          sm:h-16
                          sm:w-16
                          lg:h-20
                          lg:w-20
                          lg:rounded-2xl
                        `}
                      >
                        <Icon
                          className={item.color}
                          size={28}
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h4
                          className="
                            text-lg
                            font-semibold
                            text-white
                            sm:text-xl
                            lg:text-2xl
                          "
                        >
                          {item.title}
                        </h4>

                        <div
                          className="
                            mt-2
                            flex
                            flex-wrap
                            items-center
                            gap-3
                          "
                        >
                          <span className="font-medium text-primary">
                            {item.period}
                          </span>

                          <span
                            className="
                              flex
                              items-center
                              gap-2
                              text-sm
                              text-zinc-400
                            "
                          >
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            {item.type}
                          </span>
                        </div>

                        <p
                          className="
                            mt-4
                            text-sm
                            leading-7
                            text-zinc-400
                            md:text-base
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Badge */}
                    <div
                      className="
                        w-fit
                        rounded-xl
                        border
                        border-primary/20
                        bg-primary/10
                        px-3
                        py-2
                        text-xs
                        font-medium
                        whitespace-nowrap
                        text-white

                        md:px-4
                        md:text-sm
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