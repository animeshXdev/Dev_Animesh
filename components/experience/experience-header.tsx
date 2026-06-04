"use client";

import { Trophy } from "lucide-react";

export default function ExperienceHeader() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_650px] lg:items-center">
      {/* Left */}
      <div>
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.15em]
            text-primary
          "
        >
          My Experience
        </span>

        <h2
          className="
            mt-4
            text-5xl
            font-bold
            leading-tight
            text-white
            lg:text-7xl
          "
        >
          My Journey &
          <span className="text-primary">
            {" "}Experience
          </span>
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Over the years, I've worked on diverse projects,
          collaborated with amazing teams and continuously
          improved my skills to deliver high-quality
          solutions.
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
        <div className="grid gap-6 lg:grid-cols-[1fr_120px]">
          <div className="flex gap-5">
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-primary/10
                shadow-[0_0_40px_rgba(168,85,247,0.35)]
              "
            >
              <Trophy
                size={38}
                className="text-primary"
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
                Always growing, always building.
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-zinc-400
                "
              >
                I believe in continuous learning and taking
                on challenges that push me to become better.
              </p>
            </div>
          </div>

          <div
            className="
              flex
              flex-col
              justify-center
              border-l
              border-white/10
              pl-6
            "
          >
            <h3
              className="
                text-5xl
                font-bold
                text-primary
              "
            >
              3+
            </h3>

            <p className="mt-2 text-zinc-400">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}