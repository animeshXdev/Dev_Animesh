"use client";

export default function ContactMap() {
  return (
    <div
      className="
        relative
        h-full
        max-h-[310px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
      "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766647.00925373!2d60.97298248919853!3d19.725638672638784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1780592483493!5m2!1sen!2sin"
        className="h-full min-h-[500px] w-full"
        loading="lazy"
      />

      
    </div>
  );
}