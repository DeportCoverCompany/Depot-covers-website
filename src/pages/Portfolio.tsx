import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";
import FeaturedProject from "@/components/Portfolio/FeaturedProject";
import ClientLogos from "@/components/Portfolio/ClientLogos";
import PortfolioCta from "@/components/Portfolio/PortfolioCta";
import SEO from "@/components/SEO";

const sinageImage = "/project/sinage.webp";
const thermalMugImage = "/project/thermalbrand.webp";
const bagImage = "/project/bags.webp";
const capImage = "/project/cap.webp";
const coporateImage = "/project/marketing/mk1.webp";
const coporateImage2 = "/project/marketing/mk2.webp";

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
    img_url: "/project/portfolio/staff-uniforms.webp",
  },
  {
    title: "Exhibition Banner System",
    category: "Signage",
    img_url: "/project/portfolio/exhibition-banner.webp",
  },
  {
    title: "Promotional Gift Sets",
    category: "Promotional Items",
    img_url: "/project/portfolio/promotional-gifts.webp",
  },
  {
    title: "Vehicle Wrap Branding",
    category: "Signage",
    img_url: "/project/portfolio/vehicle-wrap.webp",
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
    img_url: "/project/portfolio/stationery-set.webp",
  },
  {
    title: "Corporate Stationery Printing",
    category: "Promotional Items",
    img_url: bagImage,
  },
  {
    title: "School Uniform Branding",
    category: "Apparel Branding",
    img_url: "/project/portfolio/school-uniforms.webp",
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
      <SEO
        title="Our Branding & Printing Portfolio | DCC Kenya"
        description="See signage, vehicle branding, uniforms, brochures and exhibition projects delivered by Depot Covers Company across Kenya."
        path="/portfolio"
      />
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
