"use client";

import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { ArrowRight } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    username: "@animesh",
    href: "https://github.com",
    icon: FaGithub,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    name: "LinkedIn",
    username: "Animesh",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    name: "X (Twitter)",
    username: "@animesh",
    href: "https://x.com",
    icon: FaXTwitter,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    name: "Instagram",
    username: "@animesh",
    href: "https://instagram.com",
    icon: FaInstagram,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

export default function ContactSocials() {
  return (
    <div className="mt-10">
      {/* Header */}
      <h3
        className="
          mb-5
          text-sm
          font-semibold
          uppercase
          tracking-[0.15em]
          text-primary
        "
      >
        Let's Connect Online
      </h3>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
              "
            >
              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  ${social.bg}
                `}
              >
                <Icon
                  size={24}
                  className={social.color}
                />
              </div>

              <h4
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                {social.name}
              </h4>

              <p
                className="
                  mt-1
                  text-sm
                  text-zinc-500
                "
              >
                {social.username}
              </p>
            </Link>
          );
        })}

        {/* View All Card */}
        <Link
          href="#"
          className="
            group
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-primary/30
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-primary/10
            "
          >
            <ArrowRight
              size={24}
              className="
                text-primary
                transition-transform
                group-hover:translate-x-1
              "
            />
          </div>

          <h4
            className="
              mt-4
              font-semibold
              text-white
            "
          >
            View All
          </h4>

          <p
            className="
              mt-1
              text-sm
              text-zinc-500
            "
          >
            Social Links
          </p>
        </Link>
      </div>
    </div>
  );
}