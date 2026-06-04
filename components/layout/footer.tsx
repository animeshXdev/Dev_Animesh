"use client";

import { Code2, ArrowUp, Heart } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  // "Projects",
  "Contact",
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const target =
      sectionId === "home"
        ? document.body
        : document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        py-16
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.4fr_1fr_1fr]
          "
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                "
              >
                <Code2
                  size={24}
                  className="text-primary"
                />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Animesh
                <span className="text-primary">
                  {" "}dev
                </span>
              </h3>
            </div>

            <p
              className="
                mt-6
                max-w-md
                leading-8
                text-zinc-400
              "
            >
              Full Stack Developer focused on building
              scalable applications with Laravel,
              Next.js, MySQL, APIs and AI integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Quick Links
            </h4>

            <div className="space-y-4">
              {quickLinks.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item.toLowerCase()
                    )
                  }
                  className="
                    block
                    text-left
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-primary
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Connect
            </h4>

            <div className="flex gap-4">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    // href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-primary/30
                      hover:bg-primary/10
                      hover:text-primary
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-zinc-400">
                parkourmaniayt@gmail.com
              </p>

              <p className="text-zinc-400">
                India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
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
          <p
            className="
              flex
              flex-wrap
              items-center
              gap-2
              text-zinc-400
            "
          >
            © {new Date().getFullYear()} Animesh.

            <span>Built with</span>

           

            <span>Next.js 16</span>
          </p>

          <button
            onClick={scrollTop}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              px-5
              py-3
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:border-primary/30
              hover:text-primary
            "
          >
            Back To Top

            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}