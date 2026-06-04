"use client";

const journeyData = [
  {
    year: "2021",
    title: "Started My Journey",
    description:
      "Began learning web development and fell in love with building products.",
  },
  {
    year: "2022",
    title: "First Freelance Project",
    description:
      "Completed my first client project using Laravel and MySQL.",
  },
  {
    year: "2023",
    title: "Explored & Built",
    description:
      "Worked with Next.js, Redis, APIs and started integrating AI features.",
  },
  {
    year: "2024",
    title: "Building Scalable Systems",
    description:
      "Focused on architecture, performance and delivering impactful solutions.",
  },
];

export default function JourneyTimeline() {
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
      <div className="mb-8 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-primary" />

        <h3 className="text-3xl font-bold text-white">
          My Journey
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="
            absolute
            left-[11px]
            top-3
            bottom-3
            w-[2px]
            bg-gradient-to-b
            from-primary
            via-primary/50
            to-primary
          "
        />

        <div className="space-y-10">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-8"
            >
              {/* Dot */}
              <div
                className="
                  relative
                  z-10
                  mt-1
                  h-6
                  w-6
                  rounded-full
                  border-4
                  border-black
                  bg-primary
                  shadow-[0_0_20px_rgba(168,85,247,0.8)]
                "
              />

              {/* Content */}
              <div>
                <h4
                  className="
                    text-xl
                    font-semibold
                    text-primary
                  "
                >
                  {item.year} - {item.title}
                </h4>

                <p
                  className="
                    mt-2
                    max-w-lg
                    leading-7
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Card */}
      <div
        className="
          mt-10
          rounded-2xl
          border
          border-primary/20
          bg-primary/5
          p-5
        "
      >
        <p
          className="
            text-lg
            text-zinc-300
          "
        >
          My goal is simple:
          <span className="ml-2 text-primary font-semibold">
            Build products that make a difference.
          </span>
        </p>
      </div>
    </div>
  );
}