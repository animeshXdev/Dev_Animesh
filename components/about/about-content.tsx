"use client";

import {
  Rocket,
  Target,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Problem Solver",
    description:
      "I love solving real-world problems with clean and scalable solutions.",
  },
  {
    icon: Target,
    title: "Detail Oriented",
    description:
      "Focused on maintainable architecture, performance and quality.",
  },
  {
    icon: Brain,
    title: "Always Learning",
    description:
      "Exploring new technologies and staying updated with modern development.",
  },
];

export default function AboutContent() {
  return (
    <div>
      {/* Section Label */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary" />

        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Me
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          max-w-3xl
          text-4xl
          font-bold
          leading-tight
          text-white
          lg:text-6xl
        "
      >
        I turn ideas into
        <br />
        scalable{" "}
        <span className="text-primary">
          digital solutions.
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-3xl
          text-base
          leading-8
          text-zinc-400
          lg:text-lg
        "
      >
        I'm a Full Stack Developer with a passion for building
        high-performance web applications and API systems.

        I specialize in Laravel, Next.js, MySQL, Redis and
        modern technologies to create products that are fast,
        scalable and maintainable.
      </p>

      {/* Feature Blocks */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-primary/20
                  bg-primary/10
                "
              >
                <Icon
                  size={28}
                  className="text-primary"
                />
              </div>

              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-7
                    text-zinc-400
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}