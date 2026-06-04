"use client";

import ProfileCard from "./profile-card";
import AboutContent from "./about-content";
import StatsBar from "./stats-bar";
import JourneyTimeline from "./journey-timeline";
import ServicesGrid from "./services-grid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-40
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[480px_1fr]
          "
        >
          {/* Left */}
          <ProfileCard />

          {/* Right */}
          <div>
            <AboutContent />
            <StatsBar />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-12
            grid
            gap-8
            lg:grid-cols-[420px_1fr]
          "
        >
          {/* Journey */}
          <JourneyTimeline />

          {/* Services */}
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}