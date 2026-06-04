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
    value: "baaghimichael786@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 82352 69777",
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
      {/* Badge */}
      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-primary
          sm:text-sm
        "
      >
        Let's Connect
      </span>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-3xl
          font-bold
          leading-tight
          text-white

          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        Let's build something
        <br />
        <span className="text-primary">
          amazing
        </span>{" "}
        together.
      </h2>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-xl
          text-base
          leading-7
          text-zinc-400

          sm:text-lg
          sm:leading-8
        "
      >
        I'm always open to discussing new projects,
        creative ideas and opportunities.
      </p>

      {/* Features */}
      <div
        className="
          mt-8
          grid
          gap-4

          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
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
                p-4
                backdrop-blur-xl

                lg:p-5
              "
            >
              <Icon
                size={22}
                className="text-primary"
              />

              <h4
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-zinc-400
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Contact Cards */}
      <div className="mt-8 space-y-4">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-4
                backdrop-blur-xl
                transition-all
                duration-300

                hover:border-primary/30
                hover:bg-white/[0.03]

                lg:p-5
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-4
                "
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${item.bg}

                    lg:h-14
                    lg:w-14
                  `}
                >
                  <Icon
                    size={22}
                    className={item.color}
                  />
                </div>

                <div className="min-w-0">
                  <h4
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      truncate
                      text-sm
                      text-zinc-400

                      sm:text-base
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={20}
                className="
                  shrink-0
                  text-zinc-500
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}