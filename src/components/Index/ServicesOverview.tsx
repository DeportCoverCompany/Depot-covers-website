import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Signpost,
  Gift,
  FileText,
  Shirt,
  Presentation,
  Building2,
  Megaphone,
  Scissors,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Signage Branding",
    img_url: "/images/placeholder.jpg",
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
    icon: Signpost,
  },

  {
    name: "Promotional Branding",
    img_url: "/images/placeholder.jpg",
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
    icon: Gift,
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
    icon: FileText,
  },

  {
    name: "Garments Printing",
    img_url: "/images/placeholder.jpg",
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
    icon: Shirt,
  },

  {
    name: "Exhibition & Event Branding",
    img_url: "/images/placeholder.jpg",
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
    icon: Presentation,
  },

  {
    name: "Office & Interior Branding",
    img_url: "/images/placeholder.jpg",
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
    icon: Building2,
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
    icon: Megaphone,
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
    icon: Scissors,
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
              What We Offer
            </span>
            <div className="h-0.5 w-8 bg-accent"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Complete Branding & Printing Solutions
          </h2>

          <p className="text-muted-foreground text-lg">
            From professional signage and corporate printing to promotional
            branding and large-format solutions, we provide end-to-end services
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <Link
                key={i}
                to="/services"
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent relative overflow-hidden"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Accent Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl px-8 group"
          >
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
