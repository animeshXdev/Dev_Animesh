import HeroContent from "./hero-content";
import DashboardPreview from "./dashboard-preview";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        py-16
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          right-0
          -translate-y-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/15
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[45%_55%]
          "
        >
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}