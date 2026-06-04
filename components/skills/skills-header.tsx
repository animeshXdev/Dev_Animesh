"use client";

import { Rocket } from "lucide-react";

export default function SkillsHeader() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_450px] lg:items-center">
      {/* Left */}
      <div>
        <div
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/20
            bg-primary/5
            px-5
            py-2
          "
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            What I Use
          </span>
        </div>

        <h2
          className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            text-white
            lg:text-7xl
          "
        >
          Skills &
          <span className="text-primary">
            {" "}Technologies
          </span>
        </h2>

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-zinc-400
          "
        >
          I use modern tools and technologies to build
          fast, scalable and secure web applications.
        </p>
      </div>

      {/* Right Card */}
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
        <div className="flex gap-5">
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
            "
          >
            <Rocket
              size={30}
              className="text-primary"
            />
          </div>

          <div>
            <h3
              className="
                text-xl
                font-semibold
                text-primary
              "
            >
              Always learning, always building.
            </h3>

            <p
              className="
                mt-3
                text-zinc-400
                leading-7
              "
            >
              Exploring new technologies and improving
              every day through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}