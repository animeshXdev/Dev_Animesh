"use client";

import {
  Globe,
  ServerCog,
  Database,
  Brain,
  GitBranch,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building full-stack web applications using modern technologies and best practices.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ServerCog,
    title: "API Development",
    description:
      "Designing secure, scalable and high-performance REST APIs with Laravel.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database architecture using MySQL, Redis and caching strategies.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description:
      "Integrating AI APIs and automation workflows into modern applications.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: GitBranch,
    title: "GitHub Automation",
    description:
      "Automating developer workflows, deployments and GitHub integrations.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Optimizing applications for speed, scalability and better user experience.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

export default function ServicesGrid() {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        p-6
        backdrop-blur-xl
      "
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary" />

          <h3 className="text-3xl font-bold text-white">
            What I Do
          </h3>
        </div>

        <p className="mt-4 text-zinc-400">
          I help businesses and individuals build powerful,
          scalable and modern web solutions.
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-5
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-white/[0.03]
              "
            >
              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${service.bg}
                `}
              >
                <Icon
                  size={30}
                  className={service.color}
                />
              </div>

              <h4
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {service.title}
              </h4>

              <p
                className="
                  mt-3
                  leading-7
                  text-zinc-400
                "
              >
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}