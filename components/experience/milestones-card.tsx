"use client";

import {
  CheckCircle2,
  Star,
  Flag,
} from "lucide-react";

const milestones = [
  {
    text: "Delivered 8+ production projects for clients worldwide.",
    highlight: "8+",
  },
  {
    text: "Integrated AI features to automate and enhance applications.",
    highlight: "AI",
  },
  {
    text: "Built APIs handling 10K+ daily active users.",
    highlight: "10K+",
  },
  {
    text: "Contributed to 5+ open source projects.",
    highlight: "5+",
  },
];

export default function MilestonesCard() {
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
        <Flag
          size={24}
          className="text-primary"
        />

        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Milestones
        </h3>
      </div>

      {/* List */}
      <div className="space-y-6">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-4
            "
          >
            <CheckCircle2
              size={22}
              className="
                mt-1
                shrink-0
                text-zinc-300
              "
            />

            <p
              className="
                text-lg
                leading-8
                text-zinc-300
              "
            >
              {item.text.split(item.highlight)[0]}

              <span
                className="
                  font-semibold
                  text-primary
                "
              >
                {item.highlight}
              </span>

              {
                item.text.split(item.highlight)[1]
              }
            </p>
          </div>
        ))}

        {/* Last Special Item */}
        <div
          className="
            flex
            items-start
            gap-4
          "
        >
          <Star
            size={22}
            className="
              mt-1
              shrink-0
              text-primary
            "
          />

          <p
            className="
              text-lg
              leading-8
              text-zinc-300
            "
          >
            Continuously learning and adopting
            new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}