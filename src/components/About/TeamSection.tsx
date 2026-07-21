import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "George Kenyatta",
    role: "Creative Director",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
  },
  {
    name: "Robbinson kamau",
    role: "Production Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Hezron Irungu",
    role: "Client Relations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faith",
  },
  {
    name: "Breamy George",
    role: "Lead Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            The People Behind Your Brand
          </h2>
          <p className="text-muted-foreground">
            Our dedicated team of professionals brings decades of combined
            experience in design, printing, and brand strategy.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-border hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative mb-6 mx-auto w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-primary mb-1">
                  {member.name}
                </h4>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
