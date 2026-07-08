import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import ServiceCard from "@/components/Services/ServiceCard";
import ProcessSection from "@/components/Services/ProcessSection";
import TestimonialsSection from "@/components/Services/TestimonialsSection";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import ServicesCta from "@/components/Services/ServicesCta";
import { Helmet } from "react-helmet-async";

const services = [
  {
    name: "Paper Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b04dbf4a53_876efd85adb92f06.png",
    category: "Printing",
    description:
      "High-quality prints for business cards, flyers, brochures, letterheads, and all marketing materials.",
    features: [
      "Full-color CMYK printing",
      "Various paper stocks and finishes",
      "Fast turnaround",
    ],
  },
  {
    name: "Screen Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_33bde062a4_fbf029b988ad09a0.png",
    category: "Printing",
    description:
      "Durable and vibrant printing for T-shirts, uniforms, bags, and branded merchandise.",
    features: [
      "Long-lasting ink durability",
      "Bulk order discounts",
      "Pantone color matching",
    ],
  },
  {
    name: "Large Format Printing",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_128212a7f6_43cab9ccfb8b9362.png",
    category: "Printing",
    description:
      "Eye-catching banners, posters, and large-scale prints for events, trade shows, and outdoor branding.",
    features: [
      "UV-resistant inks",
      "Multiple substrate options",
      "High-resolution output",
    ],
  },
  {
    name: "Signages",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_21c9a50827_a888ade31e8c7a8d.png",
    category: "Signage",
    description:
      "Custom signage solutions including shop fronts, wayfinding, vehicle branding, and illuminated signs.",
    features: [
      "Indoor & outdoor options",
      "Custom fabrication",
      "Professional installation",
    ],
  },
  {
    name: "Embroidery",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_df4a5d33d1_924369c7bb3716cf.png",
    category: "Apparel",
    description:
      "Professional embroidery for uniforms, corporate apparel, caps, bags, and all branded clothing.",
    features: [
      "Clean, detailed stitching",
      "Compatible with all fabrics",
      "Minimum order flexibility",
    ],
  },
  {
    name: "Promotional Items",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5fd57e119d_a5c33321cbe78048.png",
    category: "Promotional",
    description:
      "Custom branded promotional products including pens, mugs, keychains, notebooks, and corporate gifts.",
    features: [
      "Wide product catalog",
      "Logo personalization",
      "Bulk pricing available",
    ],
  },
  {
    name: "Advertisement Solutions",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8acb1ee80e_451f870413360ec1.png",
    category: "Promotional",
    description:
      "Creative advertising materials including billboards, vehicle wraps, pull-up banners, and marketing collateral.",
    features: [
      "Creative design support",
      "Strategic material selection",
      "End-to-end execution",
    ],
  },
  {
    name: "Branding",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d270dad96b_435a8add050d4489.png",
    category: "Branding",
    description:
      "Complete brand identity and visual solutions including logo design, brand guidelines, stationery, and packaging.",
    features: [
      "Brand strategy included",
      "Comprehensive brand book",
      "Multi-touchpoint consistency",
    ],
  },
];

const categories = [
  "All",
  "Printing",
  "Signage",
  "Apparel",
  "Promotional",
  "Branding",
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
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                      i === 0
                        ? "bg-accent border-accent text-white shadow-md"
                        : "bg-white border-border text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
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
