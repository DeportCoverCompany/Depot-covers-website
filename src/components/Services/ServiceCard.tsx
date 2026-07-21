import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceCardProps {
  name: string;
  category: string;
  description: string;
  img_url: string;
  features: string[];
}

export default function ServiceCard({
  name,
  category,
  description,
  img_url,
  features,
}: ServiceCardProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Header */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={img_url}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Feature Bullets */}
        <ul className="space-y-2 mb-4">
          {(showAll ? features : features.slice(0, 6)).map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {features.length > 5 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            {showAll ? (
              <>
                Show less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                +{features.length - 5} more services
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Footer */}
        <div className="mt-auto">
          <Link to="/contact">
            <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-11 group/btn">
              Request a Quote
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
