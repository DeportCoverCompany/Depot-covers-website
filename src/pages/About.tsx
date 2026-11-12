import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/About/AboutHero";
import CompanyStory from "@/components/About/CompanyStory";
import StatsBar from "@/components/About/StatsBar";
import MissionVision from "@/components/About/MissionVision";
import CoreValues from "@/components/About/CoreValues";
import TeamSection from "@/components/About/TeamSection";
import TestimonialQuote from "@/components/About/TestimonialQuote";
import AboutCta from "@/components/About/AboutCta";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Depot Covers Company (DCC) | Nairobi"
        description="Meet the team behind DCC — a Nairobi branding and printing company helping businesses stand out with signage, print, uniforms and promotional items."
        path="/about"
      />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AboutHero />
          <CompanyStory />
          <StatsBar />
          <MissionVision />
          <CoreValues />
          <TeamSection />
          <TestimonialQuote />
          <AboutCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
