"use client";

import {
  Mail,
  User,
  Tag,
  MessageSquare,
  Send,
  Download,
} from "lucide-react";
import ContactMap from "./contact-map";

export default function ContactForm() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-primary/20
        bg-white/[0.02]
        p-6
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      {/* Decorative Globe */}
      <div
        className="
          absolute
          right-10
          top-5
          hidden
          h-[250px]
          w-[250px]
          rounded-full
          border
          border-primary/10
          opacity-20
          lg:block
        "
      />

      <div className="relative">
        {/* Header */}
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
            Send Me A Message
          </span>

          <h3
            className="
              mt-4
              text-4xl
              font-bold
              text-white
            "
          >
            I'd love to hear from you!
          </h3>

          <p
            className="
              mt-4
              text-zinc-400
            "
          >
            Fill out the form and I'll get back to
            you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-5">
          {/* Name + Email */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="relative">
              <User
                size={18}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-zinc-500
                "
              />

              <input
                type="text"
                placeholder="Your Name"
                className="
                  h-16
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  pl-14
                  pr-4
                  text-white
                  outline-none
                  transition-all
                  focus:border-primary/40
                "
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-zinc-500
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-16
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  pl-14
                  pr-4
                  text-white
                  outline-none
                  transition-all
                  focus:border-primary/40
                "
              />
            </div>
          </div>

          {/* Subject */}
          <div className="relative">
            <Tag
              size={18}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                pl-14
                pr-4
                text-white
                outline-none
                transition-all
                focus:border-primary/40
              "
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              size={18}
              className="
                absolute
                left-5
                top-6
                text-zinc-500
              "
            />

            <textarea
              rows={8}
              placeholder="Your Message"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                pl-14
                pr-4
                pt-5
                text-white
                outline-none
                resize-none
                transition-all
                focus:border-primary/40
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              group
              flex
              h-16
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-fuchsia-600
              to-violet-600
              text-lg
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(168,85,247,0.4)]
              transition-all
              duration-300
              hover:scale-[1.01]
            "
          >
            <Send
              size={18}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />

            Send Message
          </button>
        </form>

        {/* Bottom Bar */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                h-3
                w-3
                rounded-full
                bg-green-500
                shadow-[0_0_20px_rgba(34,197,94,0.8)]
              "
            />

            <div>
              <h4 className="font-semibold text-white">
                Available for freelance projects
              </h4>

              <p className="text-zinc-400">
                Let's create something impactful together.
              </p>
            </div>
          </div>

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
              hover:bg-primary/20
            "
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
        <div className="mt-8">

                    <ContactMap />
        </div>

      </div>
    </div>
  );
}