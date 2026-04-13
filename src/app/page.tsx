import AboutSection from "../components/home/about-section";
import LetsBuildFuture from "../components/home/contact";
import CopyrightFooter from "../components/home/footer";
import HeroSection from "../components/home/hero-section";
import LiveExperience from "../components/home/live-experience";
import Navbar from "../components/home/navbar";
import FeaturedProjects from "../components/home/projects";
import CoreProficiencies from "../components/home/skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col gap-12 md:gap-32">
        <HeroSection />
        <AboutSection />
        <CoreProficiencies />
        <LiveExperience />
        <FeaturedProjects />
        <LetsBuildFuture />
      </div>
      <CopyrightFooter />
    </main>
  );
}
