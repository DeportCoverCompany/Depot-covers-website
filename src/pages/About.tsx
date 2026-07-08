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
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          Depot Covers Company (DCC) — Branding & Printing Solutions Kenya
        </title>
        <meta
          name="description"
          content="Depot Covers Company (DCC) — Branding & Printing Solutions Kenya"
        />
      </Helmet>

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
