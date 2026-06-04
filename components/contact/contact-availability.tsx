"use client";

import { Download } from "lucide-react";

export default function ContactAvailability() {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.02]
        p-6
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-green-500
              shadow-[0_0_20px_rgba(34,197,94,0.9)]
            "
          />

          <div>
            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Available for freelance projects
            </h4>

            <p
              className="
                mt-1
                text-zinc-400
              "
            >
              Let's create something impactful together.
            </p>
          </div>
        </div>

        {/* Right */}
        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-primary/20
            bg-primary/10
            px-6
            py-3
            text-primary
            transition-all
            duration-300
            hover:bg-primary/20
          "
        >
          <Download size={18} />

          Download Resume
        </button>
      </div>
    </div>
  );
}