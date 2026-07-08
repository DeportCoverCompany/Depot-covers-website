import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Index/HeroSection";
import StatsBar from "@/components/Index/StatsBar";
import AboutPreview from "@/components/Index/AboutPreview";
import ServicesOverview from "@/components/Index/ServicesOverview";
import WhyChooseUs from "@/components/Index/WhyChooseUs";
import ProcessPreview from "@/components/Index/ProcessPreview";
import PortfolioPreview from "@/components/Index/PortfolioPreview";
import CtaBanner from "@/components/Index/CtaBanner";
import { Helmet } from "react-helmet-async";

export default function Index() {
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
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsBar />
          <AboutPreview />
          <ServicesOverview />
          <WhyChooseUs />
          <ProcessPreview />
          <PortfolioPreview />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}
