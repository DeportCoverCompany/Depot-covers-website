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
import SEO from "@/components/SEO";

export default function Index() {
  return (
    <>
      <SEO
        title="Branding & Printing Company in Nairobi, Kenya | DCC"
        description="Depot Covers Company (DCC) delivers branding, signage, large-format printing, vehicle wraps, uniforms and promotional items across Kenya. Get a free quote in 24 hours."
        path="/"
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsBar />
          <ServicesOverview />
          <AboutPreview />
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
