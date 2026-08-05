import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                className="w-full aspect-[4/5] object-cover"
                src="/project/descImage.jpeg"
                alt="Professional branding team in Kenya discussing a graphic design project in a modern studio"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Overlay Experience Card */}
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-5xl font-black text-white mb-1">5+</p>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider leading-tight">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          {/* Right: Text Side */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Crafting Visual Identities That Speak
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Depot Covers Company (DCC) is a full-service branding and printing
              company based in Kenya, dedicated to delivering high-quality
              visual solutions that elevate brands.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We transform ideas into impactful physical experiences through
              precision printing, creative execution, and professional
              installations. Our commitment to quality ensures your brand stands
              out in a crowded marketplace.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Badge
                variant="secondary"
                className="bg-primary/5 text-primary border-primary/10 px-4 py-2 text-sm font-semibold"
              >
                Est. 2020
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary/5 text-primary border-primary/10 px-4 py-2 text-sm font-semibold"
              >
                Based in Nairobi
              </Badge>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 transition-all group"
            >
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
