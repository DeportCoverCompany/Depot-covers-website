import { Star, Lightbulb, Shield, Briefcase, Heart, Clock } from "lucide-react";

const values = [
  {
    title: "Quality",
    desc: "We maintain the highest standards in every material and print we produce.",
    icon: Star,
    color: "bg-orange-500",
    textColor: "text-orange-500"
  },
  {
    title: "Creativity",
    desc: "Bringing fresh ideas and innovative designs to every branding project.",
    icon: Lightbulb,
    color: "bg-blue-500",
    textColor: "text-blue-500"
  },
  {
    title: "Reliability",
    desc: "A partner you can trust to deliver consistent results every single time.",
    icon: Shield,
    color: "bg-green-500",
    textColor: "text-green-500"
  },
  {
    title: "Professionalism",
    desc: "Expert execution from initial consultation to final installation.",
    icon: Briefcase,
    color: "bg-purple-500",
    textColor: "text-purple-500"
  },
  {
    title: "Customer Satisfaction",
    desc: "Our clients' success and happiness are the heart of our business.",
    icon: Heart,
    color: "bg-red-500",
    textColor: "text-red-500"
  },
  {
    title: "Timely Delivery",
    desc: "Meeting deadlines without compromising on the quality of work.",
    icon: Clock,
    color: "bg-teal-500",
    textColor: "text-teal-500"
  }
];

export default function CoreValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-accent/10 text-accent-strong text-xs font-bold uppercase tracking-wider mb-4">
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            The Principles That Guide Everything We Do
          </h2>
          <p className="text-muted-foreground">
            Our culture is built on a foundation of excellence and integrity, 
            ensuring we deliver the best possible value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${val.color} flex items-center justify-center mb-6 shadow-lg shadow-${val.textColor}/20 group-hover:scale-110 transition-transform`}>
                <val.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}