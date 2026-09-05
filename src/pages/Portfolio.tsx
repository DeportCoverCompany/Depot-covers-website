import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";
import FeaturedProject from "@/components/Portfolio/FeaturedProject";
import ClientLogos from "@/components/Portfolio/ClientLogos";
import PortfolioCta from "@/components/Portfolio/PortfolioCta";
import { Helmet } from "react-helmet-async";

const sinageImage = "/project/sinage.jpeg";
const thermalMugImage = "/project/thermalbrand.jpeg";
const bagImage = "/project/bags.jpeg";
const capImage = "/project/cap.jpeg";
const coporateImage = "/project/marketing/mk1.jpeg";
const coporateImage2 = "/project/marketing/mk2.jpeg";

const projects = [
  {
    title: "Car Wash Signage",
    category: "Signage",
    img_url: sinageImage,
  },
  {
    title: "Corporate Brochure Printing",
    category: "Printing",
    img_url: coporateImage,
  },
  {
    title: "Branded Staff Uniforms",
    category: "Apparel Branding",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_476bb5574a_e9cc351d0fcdc7b2.png",
  },
  {
    title: "Exhibition Banner System",
    category: "Signage",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_491969c19f_d42f0185dffbe36c.png",
  },
  {
    title: "Promotional Gift Sets",
    category: "Promotional Items",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8476589e9d_f97e00f488b27045.png",
  },
  {
    title: "Vehicle Wrap Branding",
    category: "Signage",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_91294e4bdc_3f52dc587c4ec326.png",
  },
  {
    title: "Business Card Collection",
    category: "Printing",
    img_url: coporateImage2,
  },
  {
    title: "Custom Branded Caps",
    category: "Apparel Branding",
    img_url: capImage,
  },
  {
    title: "Thermal Mug Branding",
    category: "Promotional Branding",
    img_url: thermalMugImage,
  },
  {
    title: "Corporate Stationery Set",
    category: "Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_dd9c9655cf_d05dcf4a9010e2db.png",
  },
  {
    title: "Corporate Stationery Printing",
    category: "Promotional Items",
    img_url: bagImage,
  },
  {
    title: "School Uniform Branding",
    category: "Apparel Branding",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5b4b23f3fc_4ad0374552c22aa3.png",
  },
];

const categories = [
  "All",
  "Signage",
  "Printing",
  "Apparel Branding",
  "Promotional Items",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

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
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />

        <main className="flex-grow">
          {/* Section 1: Hero */}
          <PortfolioHero />

          {/* Section 3: Portfolio Grid */}
          <PortfolioGrid projects={filteredProjects} />

          {/* Section 4: Featured Project */}
          <FeaturedProject />

          {/* Section 6: Client Logos */}
          <ClientLogos />

          {/* Section 7: CTA */}
          <PortfolioCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
