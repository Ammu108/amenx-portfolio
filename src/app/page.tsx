import { Suspense } from "react";
import GithubCalenderSkeletons from "../components/github-calender-skeletons";
import AboutSection from "../components/home/about-section";
import LetsBuildFuture from "../components/home/contact";
import CopyrightFooter from "../components/home/footer";
import GithubSection from "../components/home/github-section";
import HeroSection from "../components/home/hero-section";
import LiveExperience from "../components/home/live-experience";
import Navbar from "../components/home/navbar";
import FeaturedProjects from "../components/home/projects";
import CoreProficiencies from "../components/home/skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col gap-12 lg:gap-32">
        <HeroSection />
        <Suspense fallback={<GithubCalenderSkeletons />}>
          <GithubSection />
        </Suspense>
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
