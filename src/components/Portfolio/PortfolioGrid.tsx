import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  category: string;
  img_url: string;
  description?: string;
  href?: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Our Work
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
              Designed to make
              <br />
              <span className="text-neutral-400">an impression.</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-neutral-500 leading-relaxed">
            Explore a selection of our creative work, products and design
            solutions crafted with attention to detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href || "#"}
              className={`group block ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${
                  index % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.img_url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Category */}
                <div className="absolute top-5 left-5">
                  <Badge className="bg-white text-neutral-900 hover:bg-white border-0 px-3 py-1.5 shadow-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={19} className="text-neutral-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-lg leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                <span className="hidden sm:flex shrink-0 text-xs uppercase tracking-wider text-neutral-400 pt-1">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Like what you see?
            </h3>

            <p className="mt-2 text-neutral-500">
              Discover more of our work and creative solutions.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            Explore our work
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
