"use client";

import {
  Zap,
  Shield,
  Target,
  Mail,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "I usually reply within 24 hours",
  },
  {
    icon: Shield,
    title: "Professional",
    description: "Clean code, clear communication",
  },
  {
    icon: Target,
    title: "Focused",
    description: "Turning ideas into real solutions",
  },
];

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "animesh@example.com",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 XXXXX XXXXX",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    value: "Book a 30-min call",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function ContactInfo() {
  return (
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
        Let's Connect
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
        Let's build something
        <br />
        <span className="text-primary">
          amazing
        </span>{" "}
        together.
      </h2>

      <p
        className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        I'm always open to discussing new projects,
        creative ideas and opportunities.
      </p>

      {/* Features */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
              "
            >
              <Icon
                size={24}
                className="text-primary"
              />

              <h4 className="mt-4 font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-sm text-zinc-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Contact Cards */}
      <div className="mt-10 space-y-4">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    ${item.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-zinc-400">
                    {item.value}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={20}
                className="text-zinc-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}