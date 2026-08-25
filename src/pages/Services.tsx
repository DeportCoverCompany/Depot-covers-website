import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import ServiceCard from "@/components/Services/ServiceCard";
import ProcessSection from "@/components/Services/ProcessSection";
import TestimonialsSection from "@/components/Services/TestimonialsSection";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import ServicesCta from "@/components/Services/ServicesCta";
import { Helmet } from "react-helmet-async";

const sinage = "/project/services/sinage.jpeg";
const promotional = "/project/services/promotional.jpeg";
const gaments = "/project/services/garments.jpeg";
const events = "/project/services/events.jpeg";
const office = "/project/services/office.jpeg";

const services = [
  {
    name: "Signage Branding",
    img_url: sinage,
    category: "Signage",
    description:
      "Professional signage solutions designed to increase brand visibility and create a lasting impression across indoor and outdoor environments.",
    features: [
      "Lightbox Signs",
      "3D Letter Signs",
      "LED Signs",
      "Directional Signs",
      "Safety Signs",
      "Reflective Signs",
    ],
  },

  {
    name: "Promotional Branding",
    img_url: promotional,
    category: "Promotional",
    description:
      "Custom branded merchandise that strengthens brand recognition and keeps your business visible through everyday promotional products.",
    features: [
      "Pens & Keyholders",
      "Overalls",
      "Mugs & Flasks",
      "Caps & Tote Bags",
      "Diaries & Notebooks",
      "Name Badges",
      "Rubber Stamps",
    ],
  },

  {
    name: "Corporate Stationery Printing",
    img_url: "/images/placeholder.jpg",
    category: "Printing",
    description:
      "High-quality business stationery that reinforces your corporate identity and ensures consistency across all communications.",
    features: [
      "Letterheads",
      "Business Cards",
      "Envelopes",
      "Invoice Books",
      "Receipt Books",
      "Brochures",
      "Calendars",
      "Labels & Stickers",
    ],
  },

  {
    name: "Garments Printing",
    img_url: gaments,
    category: "Apparel",
    description:
      "Professional garment branding services for uniforms, corporate wear, promotional clothing, events, and marketing campaigns.",
    features: [
      "T-Shirts",
      "Polo Shirts",
      "Corporate Shirts",
      "Hoodies",
      "Aprons",
      "Overalls",
      "Dust Coats",
      "Drawstring Bags",
      "Towels",
    ],
  },

  {
    name: "Exhibition & Event Branding",
    img_url: events,
    category: "Branding",
    description:
      "Complete exhibition branding solutions that help businesses attract attention and create memorable event experiences.",
    features: [
      "Exhibition Stands",
      "Pop-Up Displays",
      "Roll-Up Banners",
      "X-Banners",
      "Teardrop Flags",
      "Reflective Signs",
    ],
  },

  {
    name: "Office & Interior Branding",
    img_url: office,
    category: "Branding",
    description:
      "Transform workspaces into visually engaging environments that reflect your company's identity while enhancing customer experience.",
    features: [
      "Wall Graphics",
      "Reception Branding",
      "Frosted Glass Branding",
      "Window Graphics",
      "Office Wayfinding",
      "Car Stickers",
    ],
  },

  {
    name: "Outdoor Branding",
    img_url: "/images/placeholder.jpg",
    category: "Signage",
    description:
      "Large-format branding solutions built to maximize visibility and deliver high-impact advertising for businesses.",
    features: [
      "Lightbox Signs",
      "Billboards",
      "Banners",
      "Backlit Banners",
      "Construction Site Branding",
      "Building Wraps",
    ],
  },

  {
    name: "CNC & Laser Branding",
    img_url: "/images/placeholder.jpg",
    category: "Branding",
    description:
      "Precision CNC routing and laser cutting services for premium branded signage, displays, and custom fabricated products.",
    features: [
      "Acrylic Signs",
      "Metal Name Plates",
      "Wooden Plaques",
      "3D Letter Signage",
      "Directional Signs",
      "Custom Stencils",
      "Display Stands",
      "Key Holders",
    ],
  },
];

export default function Services() {
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
          <ServicesHero />

          {/* SECTION 2: Intro & Category Tabs */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  We provide complete branding and printing solutions tailored
                  to help businesses stand out and grow.
                </p>
              </div>

              {/* Filter Pills (Visual only) */}
            </div>
          </section>

          {/* SECTION 3: Services Grid */}
          <section className="bg-secondary/30 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: Process Mini */}
          <ProcessSection />

          {/* SECTION 5: Why Choose Us */}
          <WhyChooseUs />

          {/* SECTION 6: Bottom CTA */}
          <ServicesCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
