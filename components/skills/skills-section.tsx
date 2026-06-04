"use client";

import {
  Server,
  Monitor,
  Database,
  Network,
  Brain,
  Terminal,
  Shield,
  Cloud,
} from "lucide-react";

import SkillsHeader from "./skills-header";
import SkillCard from "./skill-card";
import SkillsStats from "./skills-stats";

const skillCategories = [
  {
    title: "Backend",
    description:
      "Building robust and scalable server-side applications.",
    icon: Server,
    color: "text-orange-500",
    bg: "bg-orange-500/15",
    skills: [
      { name: "Laravel", value: 95 },
      { name: "Node.js", value: 85 },
      { name: "REST APIs", value: 90 },
    ],
  },

  {
    title: "Frontend",
    description:
      "Creating fast, responsive and engaging user interfaces.",
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-500/15",
    skills: [
      { name: "Next.js", value: 95 },
      { name: "React", value: 90 },
      { name: "Tailwind CSS", value: 90 },
    ],
  },

  {
    title: "Database",
    description:
      "Designing efficient and optimized data structures.",
    icon: Database,
    color: "text-green-500",
    bg: "bg-green-500/15",
    skills: [
      { name: "MySQL", value: 90 },
      { name: "Redis", value: 85 },
      { name: "Query Optimization", value: 88 },
    ],
  },

  {
    title: "Integrations",
    description:
      "Connecting services and building powerful integrations.",
    icon: Network,
    color: "text-orange-400",
    bg: "bg-orange-400/15",
    skills: [
      { name: "GitHub API", value: 90 },
      { name: "REST APIs", value: 90 },
      { name: "AI APIs", value: 85 },
    ],
  },

  {
    title: "AI & Tools",
    description:
      "Integrating AI capabilities into modern applications.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-500/15",
    skills: [
      { name: "OpenAI API", value: 85 },
      { name: "AI Integrations", value: 80 },
      { name: "Prompt Engineering", value: 75 },
    ],
  },

  {
    title: "Dev Tools",
    description:
      "Tools that improve development speed and code quality.",
    icon: Terminal,
    color: "text-yellow-500",
    bg: "bg-yellow-500/15",
    skills: [
      { name: "Git & GitHub", value: 95 },
      { name: "Docker", value: 80 },
      { name: "Postman", value: 90 },
    ],
  },

  {
    title: "Best Practices",
    description:
      "Writing clean, secure and maintainable code.",
    icon: Shield,
    color: "text-pink-500",
    bg: "bg-pink-500/15",
    skills: [
      { name: "Clean Code", value: 90 },
      { name: "Security", value: 85 },
      { name: "Performance", value: 90 },
    ],
  },

  {
    title: "Deployment",
    description:
      "Deploying applications seamlessly and reliably.",
    icon: Cloud,
    color: "text-cyan-500",
    bg: "bg-cyan-500/15",
    skills: [
      { name: "Vercel", value: 90 },
      { name: "Linux / Nginx", value: 85 },
      { name: "CI / CD", value: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        py-24
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            rounded-[36px]
            border
            border-white/10
            bg-black/30
            p-6
            backdrop-blur-xl
            lg:p-10
          "
        >
          {/* Header */}
          <SkillsHeader />

          {/* Cards */}
          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                color={category.color}
                bg={category.bg}
                skills={category.skills}
              />
            ))}
          </div>

          {/* Bottom Stats */}
          <SkillsStats />
        </div>
      </div>
    </section>
  );
}