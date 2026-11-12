import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-primary p-8 md:p-12 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Target size={120} />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-3xl font-extrabold">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                To provide high-quality, innovative, and affordable branding solutions 
                that help our clients stand out and grow their brands effectively.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-accent p-8 md:p-12 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Eye size={120} />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold">Our Vision</h3>
              <p className="text-white text-lg leading-relaxed max-w-md">
                To be a trusted leader in branding, printing, and visual 
                communication solutions in Kenya.
              </p>
            </div>
          </div>
        </div>

        {/* Banner Strip */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-primary/95"></div>
          <div className="absolute inset-0 opacity-20">
             <div className="grid grid-cols-4 h-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-white/10 h-full"></div>
                ))}
             </div>
          </div>
          <div className="relative z-10 py-10 px-8 text-center">
            <p className="text-2xl md:text-4xl font-extrabold text-white italic tracking-tight">
              "We don't just print — We bring <span className="text-orange-300 underline decoration-orange-300/30 underline-offset-8">brands to life</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}