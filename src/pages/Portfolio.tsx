import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";
import FeaturedProject from "@/components/Portfolio/FeaturedProject";
import CategoryShowcase from "@/components/Portfolio/CategoryShowcase";
import ClientLogos from "@/components/Portfolio/ClientLogos";
import PortfolioCta from "@/components/Portfolio/PortfolioCta";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "Retail Store Signage",
    category: "Signage",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6abef455a8_54b77d72d2ba8907.png",
  },
  {
    title: "Corporate Brochure Printing",
    category: "Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_921408bda6_ddedacd7be9e9f63.png",
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
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f383433e5b_10bd50b08fa9973b.png",
  },
  {
    title: "Custom Branded Caps",
    category: "Apparel Branding",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_cbf2a3f536_30f8fb5500f7e7fa.png",
  },
  {
    title: "Billboard Advertisement",
    category: "Signage",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9303101ff5_f1b59f2bcfe98d47.png",
  },
  {
    title: "Corporate Stationery Set",
    category: "Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_dd9c9655cf_d05dcf4a9010e2db.png",
  },
  {
    title: "Branded Tote Bags",
    category: "Promotional Items",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6034f204eb_805c3f1c9c2081d8.png",
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

          {/* Section 5: Categories Showcase */}
          <CategoryShowcase />

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
