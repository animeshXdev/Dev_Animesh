import AboutSection from "@/components/about/about-section";
import ContactSection from "@/components/contact/contact-section";
import ExperienceSection from "@/components/experience/experience-section";
import HeroSection from "@/components/hero/hero-section";
import SkillsSection from "@/components/skills/skills-section";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        overflow-x-hidden
        py-20
      "
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}