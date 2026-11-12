import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="gradient-hero py-16 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <nav className="flex justify-center items-center space-x-2 text-white/60 text-sm mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-orange-300 font-medium">Contact</span>
        </nav>

        <Badge variant="outline" className="border-accent text-orange-300 px-4 py-1.5 rounded-full mb-6 bg-accent/5 uppercase tracking-wider font-semibold">
          Get In Touch
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          Get In Touch With <span className="text-orange-300 italic">Us</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Empowering Your Brand, Driving Your Success. We're here to help you bring your visual ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Clock, text: "24-Hour Response" },
            { icon: ShieldCheck, text: "Free Consultation" },
            { icon: CheckCircle2, text: "No Obligation Quote" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10">
              <item.icon className="w-5 h-5 text-orange-300" />
              <span className="font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}