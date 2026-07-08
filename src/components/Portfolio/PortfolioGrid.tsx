import { ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  category: string;
  img_url: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <section className="bg-muted/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.img_url}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category Badge - Overlay Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-accent hover:bg-accent text-white font-semibold shadow-md">
                  {project.category}
                </Badge>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
