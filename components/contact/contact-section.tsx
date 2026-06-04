"use client";

import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[100px]

          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]

          lg:h-[700px]
          lg:w-[700px]
          lg:blur-[180px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            rounded-[24px]
            border
            border-white/10
            bg-black/30
            p-4
            backdrop-blur-xl

            sm:p-6
            lg:p-10
            lg:rounded-[36px]
          "
        >
          <div
            className="
              grid
              gap-8

              lg:gap-10
              xl:grid-cols-[480px_1fr]
            "
          >
            {/* Left Side */}
            <div className="min-w-0">
              <ContactInfo />
            </div>

            {/* Right Side */}
            <div className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}