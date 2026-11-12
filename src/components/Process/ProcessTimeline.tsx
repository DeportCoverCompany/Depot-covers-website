import { Clock, PenTool, Settings, CheckCircle, ArrowRight } from "lucide-react";

const milestones = [
  {
    label: "Day 1",
    title: "Initial Consultation",
    time: "1-2 days",
    icon: Clock
  },
  {
    label: "Day 2-3",
    title: "Design & Approval",
    time: "2-5 days",
    icon: PenTool
  },
  {
    label: "Day 4-10",
    title: "Production",
    time: "3-7 days",
    icon: Settings
  },
  {
    label: "Day 11+",
    title: "Delivery",
    time: "1-2 days",
    icon: CheckCircle
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Typical Project Timeline</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            While every project is unique, here is a general expectation for our standard workflow turnaround.
          </p>
        </div>

        <div className="relative">
          {/* Scrollable container for mobile */}
          <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div className="flex min-w-[800px] lg:min-w-0 justify-between items-start relative">
              
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0 hidden lg:block" />

              {milestones.map((milestone, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center w-1/4">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-accent/50 flex items-center justify-center backdrop-blur-sm shadow-xl group hover:border-accent transition-colors">
                      <milestone.icon className="w-6 h-6 text-orange-300 group-hover:scale-110 transition-transform" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-1/2 -right-1/2 w-full h-px bg-accent/30 hidden lg:block" />
                    )}
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-2">
                    {milestone.label}
                  </span>
                  <h3 className="text-lg font-bold mb-1 px-4">{milestone.title}</h3>
                  <p className="text-sm text-white/50">{milestone.time}</p>

                  {index < milestones.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-orange-300/30 absolute top-1/2 -right-2 transform -translate-y-1/2 lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}