"use client";

import {
  Home,
  User,
  Folder,
  Code2,
  Database,
  BarChart3,
  Settings,
} from "lucide-react";

const sidebarIcons = [
  Home,
  User,
  Folder,
  Code2,
  Database,
  BarChart3,
  Settings,
];

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[720px] py-4 mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-primary/15 blur-[100px]" />

      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-primary/20
          bg-black/40
          p-4
          backdrop-blur-2xl
          shadow-[0_0_50px_rgba(168,85,247,0.15)]
        "
      >
        <div className="flex gap-3">
          {/* Sidebar */}
          <div
            className="
              flex
              w-[56px]
              flex-col
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              py-3
            "
          >
            {sidebarIcons.map((Icon, index) => (
              <div
                key={index}
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  transition-all
                  ${
                    index === 0
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "text-zinc-500 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={16} />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            {/* Top Stats */}
            <div className="grid gap-3 md:grid-cols-2">
              {/* API Requests */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-primary/20 p-2">⚡</div>

                  <span className="text-sm font-medium text-zinc-300">
                    API Requests
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  12,340
                </h3>

                <p className="mt-1 text-xs text-green-400">
                  ↑ 18.2% vs yesterday
                </p>

                <div className="mt-4 flex h-16 items-end gap-1">
                  {[12, 18, 15, 28, 22, 35, 30, 42].map((height, i) => (
                    <div
                      key={i}
                      style={{ height }}
                      className="
                        flex-1
                        rounded-full
                        bg-gradient-to-t
                        from-primary/40
                        to-primary
                      "
                    />
                  ))}
                </div>
              </div>

              {/* Active Users */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-blue-500/20 p-2">👤</div>

                  <span className="text-sm font-medium text-zinc-300">
                    Active Users
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  1,240
                </h3>

                <p className="mt-1 text-xs text-green-400">
                  ↑ 12.5% vs last week
                </p>

                <div className="mt-4 flex h-16 items-end gap-1">
                  {[10, 16, 22, 14, 28, 18, 25, 36].map((height, i) => (
                    <div
                      key={i}
                      style={{ height }}
                      className="
                        flex-1
                        rounded-full
                        bg-gradient-to-t
                        from-blue-500/30
                        to-blue-500
                      "
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Cards */}
            <div className="grid gap-3 md:grid-cols-2">
              {/* Github Activity */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white">
                  GitHub Activity
                </h4>

                <div className="mt-2 text-2xl font-bold text-white">
                  47
                </div>

                <p className="mt-1 text-xs text-zinc-400">
                  Commits this week
                </p>

                <div className="mt-4 flex items-end gap-2">
                  {[10, 18, 14, 26, 22, 16, 24].map((height, i) => (
                    <div key={i}>
                      <div
                        style={{ height }}
                        className="w-2 rounded-full bg-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white">
                  System Status
                </h4>

                <p className="mt-1 text-xs text-green-400">
                  All systems operational
                </p>

                <div className="mt-4 space-y-2">
                  {[
                    "API Server",
                    "Database",
                    "Redis Cache",
                    "AI Service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-zinc-300">{item}</span>

                      <span className="text-green-400">Online</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Code Block */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="mb-3 text-sm text-zinc-300">
                Currently building something awesome 🚀
              </p>

              <pre className="overflow-x-auto text-xs leading-5">
                <code className="text-zinc-400">
{`const developer = {
  skills: [
    "Laravel",
    "Next.js",
    "Redis",
    "MySQL",
    "AI"
  ],

  available: true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}