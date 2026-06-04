"use client";

import { ArrowRight } from "lucide-react";

const skills = [
    "Laravel",
    "Next.js",
    "Redis",
    "MySQL",
    "Node.js",
    "GitHub API",
    "AI / OpenAI",
];

const avatars = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
];

export default function HeroContent() {
    return (
        <div className="max-w-[540px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
                <span>👋</span>
                <span>Hi, I'm Animesh</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl xl:text-7xl">
                I build scalable
                <br />
                web apps that
                <br />
                <span className="text-primary">don't break</span> at scale.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-base leading-relaxed text-zinc-400 lg:text-lg">
                Full-stack developer specialized in Laravel,
                Next.js, APIs, Databases, and AI Integrations.
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-2
              text-xs
              font-medium
              text-zinc-200
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-primary/10
            "
                    >
                        {skill}
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
                <button
                    className="
            group
            flex
            h-12
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-600
            to-violet-600
            px-6
            text-sm
            font-semibold
            text-white
            shadow-[0_0_30px_rgba(168,85,247,0.35)]
            transition-all
            duration-300
            hover:scale-[1.02]
          "
                >
                    View Projects

                    <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>

                <button
                    className="
            h-12
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-6
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-primary/30
            hover:bg-primary/10
          "
                >
                    Hire Me
                </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10">
                <div
                    className="
      inline-flex
      items-center
      gap-5
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      px-5
      py-4
      backdrop-blur-xl
    "
                >



                    {/* Avatars */}
                    <div className="flex -space-x-3">
                        {avatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Client ${index + 1}`}
                                className="
            h-11
            w-11
            rounded-full
            border-2
            border-black
            object-cover
            shadow-lg
          "
                            />
                        ))}

                        <div
                            className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border-2
          border-black
          bg-primary
          text-xs
          font-bold
          text-white
        "
                        >
                            +15
                        </div>
                    </div>

                    <div className="h-8 w-px bg-white/10" />

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-yellow-400">
                                ★★★★★
                            </span>

                            <span className="font-semibold text-white">
                                5.0
                            </span>
                        </div>

                        <p className="text-sm text-zinc-400">
                            Trusted by 15+ clients worldwide
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}