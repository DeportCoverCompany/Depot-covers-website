export default function StatsBar() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "8", label: "Services Offered" },
  ];

  return (
    <section className="bg-primary py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 flex justify-around pointer-events-none">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-300 mb-2 transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </p>
              <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
