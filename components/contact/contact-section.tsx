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
        py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            rounded-[36px]
            border
            border-white/10
            bg-black/30
            p-6
            backdrop-blur-xl
            lg:p-10
          "
        >
          <div
            className="
              grid
              gap-10
              xl:grid-cols-[520px_1fr]
            "
          >
            {/* Left Side */}
            <div>
              <ContactInfo />
            </div>

            {/* Right Side */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}