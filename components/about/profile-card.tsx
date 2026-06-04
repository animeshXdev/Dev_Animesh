"use client";

import Image from "next/image";
import { Zap, CheckCircle2, Code2 } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="relative">
      {/* Purple Glow */}
      <div
        className="
          absolute
          inset-0
          bg-primary/20
          blur-[100px]
          rounded-full
        "
      />

      {/* Main Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
        "
      >
        {/* Grid Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-20
            [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            [background-size:30px_30px]
          "
        />

        {/* Purple Circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[340px]
            w-[340px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-primary/30
            shadow-[0_0_120px_rgba(168,85,247,0.4)]
          "
        />

        {/* Profile Image */}
        <div className="relative h-[500px]">
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Available Badge */}
      <div
        className="
          absolute
          left-[-20px]
          top-8
          rounded-2xl
          border
          border-white/10
          bg-black/80
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-white">
            Available for
          </span>
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          Freelance
        </p>
      </div>

      {/* Fast Learner */}
      <div
        className="
          absolute
          bottom-12
          left-[-20px]
          rounded-2xl
          border
          border-white/10
          bg-black/80
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Zap
            size={20}
            className="text-yellow-400"
          />

          <div>
            <h4 className="text-sm font-semibold text-white">
              Fast Learner
            </h4>

            <p className="text-xs text-zinc-400">
              Always Exploring
            </p>
          </div>
        </div>
      </div>

      {/* Clean Code */}
      <div
        className="
          absolute
          right-[-30px]
          top-1/2
          rounded-2xl
          border
          border-white/10
          bg-black/80
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Code2
            size={22}
            className="text-primary"
          />

          <div>
            <h4 className="text-sm font-semibold text-white">
              Clean Code
            </h4>

            <p className="text-xs text-zinc-400">
              Scalable Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div
        className="
          absolute
          right-4
          bottom-4
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-primary/20
          bg-primary/10
          px-3
          py-2
        "
      >
        <CheckCircle2
          size={16}
          className="text-primary"
        />

        <span className="text-xs text-white">
          Verified Developer
        </span>
      </div>
    </div>
  );
}