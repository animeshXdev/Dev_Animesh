"use client";

import ExperienceHeader from "./experience-header";
import ExperienceTimeline from "./experience-timeline";
import TechnologiesGrid from "./technologies-grid";
import MilestonesCard from "./milestones-card";
import ExperienceStats from "./experience-stats";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-24
      "
    >
      {/* Glow */}
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
        {/* Main Container */}
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
          <ExperienceHeader />

          {/* Content */}
          <div
            className="
              mt-12
              grid
              gap-8
              lg:grid-cols-[1.2fr_0.8fr]
            "
          >
            {/* Left */}
            <ExperienceTimeline />

            {/* Right */}
            <div className="space-y-8">
              <TechnologiesGrid />
              <MilestonesCard />
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8">
            <ExperienceStats />
          </div>
        </div>
      </div>
    </section>
  );
}