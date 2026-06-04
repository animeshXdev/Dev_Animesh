"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Code2,
  GitBranch,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  // { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("home");

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveSection("home");
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = navLinks
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-100px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className="
          fixed
          py-2
          top-0
          left-0
          right-0
          z-50
          border-b
          border-white/10
          bg-black
          backdrop-blur-md
        "
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                <Code2 size={22} />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white">
                  Animesh
                </span>

                <span className="text-xl font-semibold text-primary">
                  dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className={`
                    relative
                    text-[16px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <span
                      className="
                        absolute
                        left-1/2
                        top-8
                        h-2
                        w-2
                        -translate-x-1/2
                        rounded-full
                        bg-primary
                      "
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* <button
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                "
              >
                <GitBranch size={20} />
              </button> */}

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
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
                  shadow-[0_0_25px_rgba(168,85,247,0.4)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Let's Talk

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-white
                lg:hidden
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-300
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-[70]
          h-screen
          w-[300px]
          border-r
          border-white/10
          bg-black
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Sidebar Header */}
        <div
          className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
            >
              <Code2 size={20} />
            </div>

            <div>
              <span className="font-bold text-white">
                Animesh
              </span>

              <span className="ml-1 text-primary">
                dev
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-zinc-400
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col p-5">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              className={`
                rounded-xl
                px-4
                py-4
                text-left
                transition-all
                duration-300
                ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-zinc-400 hover:bg-primary/10 hover:text-white"
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="absolute bottom-6 left-5 right-5">
          <button
            onClick={() =>
              scrollToSection("contact")
            }
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-fuchsia-600
              to-violet-600
              py-3
              font-semibold
              text-white
            "
          >
            Let's Talk
            <ArrowRight size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}