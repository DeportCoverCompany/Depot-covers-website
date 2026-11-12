import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background with Orange Gradient */}
      <div className="absolute inset-0 gradient-accent"></div>

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" strokeDasharray="40 20" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none rotate-180">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="110" height="110" stroke="white" strokeWidth="15" strokeDasharray="30 15" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Empowering Your Brand, Driving Your Success
          </h2>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 font-black h-14 px-8 text-lg rounded-xl shadow-xl transition-all hover:-translate-y-1">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/60 hover:bg-white/10 text-white font-black h-14 px-8 text-lg rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}