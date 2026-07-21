const stats = [
  { label: "Projects", value: "50+" },
  { label: "Clients", value: "50+" },
  { label: "Years", value: "5+" },
  { label: "Services", value: "8" },
  { label: "Satisfaction", value: "100%" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-accent">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
