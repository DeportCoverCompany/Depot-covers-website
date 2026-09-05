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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${index === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden bg-neutral-100 ${
                  index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                }`}
              >
                {/* Blurred Background */}
                <img
                  src={project.img_url}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-60 transition-transform duration-700 group-hover:scale-125"
                />

                {/* Soft background */}
                <div className="absolute inset-0 bg-white/10" />

                {/* Main Image */}
                <div className="relative flex h-full w-full items-center justify-center p-1 sm:p-8 lg:p-1">
                  <img
                    src={project.img_url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                {/* Hover interaction */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.04]" />

                {/* View button */}
                <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
                    <ArrowUpRight size={19} className="text-neutral-900" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {project.description}
                    </p>
                  )}
                </div>

                <span className="mt-1 shrink-0 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
